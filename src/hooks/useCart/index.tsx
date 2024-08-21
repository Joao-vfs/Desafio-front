import { useRouter } from "next/navigation";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { MovieServices } from "@/services/query";

import { IMovieProps } from "@/interfaces/IMovies.interface";
import { toast } from "react-toastify";

export function useCart() {
  const queryClient = useQueryClient();
  const { push } = useRouter();

  const { data: moviesInCart } = useQuery({
    queryKey: ["movieCart"],
    queryFn: MovieServices.getMovieFromCart,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 30,
  });

  const getMovieCartKey = (movieId?: number) => {
    const entries = Object.entries(moviesInCart ?? {});

    const movieInCart = entries.map(([key, value]) => value);

    const key = entries.find(
      ([_, value]) => value.id === movieId?.toString()
    )?.[0];

    return { movieInCart, key };
  };

  const addMovieMutation = useMutation<void, Error, { movie: IMovieProps }>({
    mutationFn: async ({ movie }) => {
      const existingMovie = getMovieCartKey().movieInCart.find(
        (cartMovie: IMovieProps) => cartMovie.id === movie.id
      );

      if (existingMovie) {
        const updatedMovie = {
          ...existingMovie,
          quantity: (existingMovie.quantity || 0) + 1,
        };

        const movieKey = getMovieCartKey(Number(existingMovie.id)).key;
        if (movieKey) {
          await updateMovies.mutateAsync({ movieKey, updatedMovie });
        }
      } else {
        await MovieServices.postToCartMovies(movie);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movieCart"] });

      toast.success("Filme adicionado com sucesso!", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        icon: false,
      });
    },
    onError: () => {
      toast.error("Erro ao adiconar filme!", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        icon: false,
      });
    },
  });

  const updateMovies = useMutation<
    void,
    Error,
    { movieKey: string; updatedMovie: IMovieProps }
  >({
    mutationFn: async ({ movieKey, updatedMovie }) => {
      await MovieServices.putToCartMovies(movieKey, updatedMovie);
    },
  });

  const removeMovieMutation = useMutation<void, Error, { movie: number }>({
    mutationFn: async ({ movie }) => {
      const key = getMovieCartKey(movie).key!;
      if (getMovieCartKey().movieInCart?.length === 1) {
        await MovieServices.deleteMovieCart(key);
        push("/finalizePurchases?purchase=noHaveItens");
      }
      return await MovieServices.deleteMovieCart(key);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movieCart"] });
      toast.error("Filme removido!", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        icon: false,
      });
    },
  });

  const decrementMovieMutation = useMutation<
    void,
    Error,
    { key: number; movie: IMovieProps }
  >({
    mutationFn: async ({ key, movie }) => {
      const movieKey = getMovieCartKey(key).key!;
      const updatedMovie = { ...movie, quantity: movie.quantity - 1 };

      if (movie.quantity === 1) {
        await MovieServices.deleteMovieCart(movieKey);
      } else {
        await MovieServices.putToCartMovies(movieKey, updatedMovie);
      }
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["movieCart"] });
      const updatedCart = getMovieCartKey().movieInCart;
      queryClient.fetchQuery({ queryKey: ["movieCart"] });
      if (updatedCart?.length === 1 && updatedCart[0]?.quantity === 1) {
        push("/finalizePurchases?purchase=noHaveItens");
      }
    },
  });

  const incrementMovieMutation = useMutation<
    void,
    Error,
    { key: number; movie: IMovieProps }
  >({
    mutationFn: async ({ key, movie }) => {
      const movieKey = getMovieCartKey(key).key!;
      const updatedMovie = { ...movie, quantity: movie.quantity + 1 };

      return await MovieServices.putToCartMovies(movieKey, updatedMovie);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movieCart"] });
    },
  });

  const removeAllMoviesFromCartMutation = useMutation<void, Error>({
    mutationFn: async () => {
      await MovieServices.deleteAllMoviesFromCart();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movieCart"] });
      push("/finalizePurchases?purchase=completed");
      toast.success("Compra finalizada!", {
        onClose: () => push("/"),
        position: "top-left",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        icon: false,
      });
    },
  });

  return {
    moviesInCart: getMovieCartKey().movieInCart,
    updateMovieFromCart: addMovieMutation.mutate,
    removeMovieFromCart: removeMovieMutation.mutate,
    increment: incrementMovieMutation.mutate,
    decrement: decrementMovieMutation.mutate,
    removeAllMoviesFromCart: removeAllMoviesFromCartMutation.mutate,
  };
}
