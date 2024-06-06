import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { FilmsService } from "@/services/query";

import { UseAppDispatch, UseAppSelector } from "@/redux/store";
import { handleFilmsSelected } from "@/redux/slices/WeMovies/weMovies.slices";

import { IFilmsProps } from "@/interfaces/IFilms.interface";
import { useEffect } from "react";

export function useFilms() {
  const dispatch = UseAppDispatch();
  const queryClient = useQueryClient();

  const allFilms = UseAppSelector(
    (state) => state.WeMoviesSlice.weMovies.filmsSelected
  );

  const { data, isLoading, error } = useQuery({
    queryKey: ["films"],
    queryFn: FilmsService.getFilms,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 30,
  });

  useEffect(() => {
    if (data) {
      dispatch(handleFilmsSelected(data));
    }
  }, [data, dispatch]);

  const updateFilmMutation = useMutation({
    mutationFn: FilmsService.putFilm,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["films"] });
    },
  });

  const cartActionMutation = useMutation<
    void,
    Error,
    { film: IFilmsProps; action: "add" | "remove" | "reset" }
  >({
    mutationFn: async ({ film, action }) => {
      const { cart, quantity, ...prev } = film;

      const updatedFilm = {
        add: {
          cart: true,
          quantity: quantity + 1,
          ...prev,
        },
        remove: {
          cart: quantity === 1 ? false : true,
          quantity: quantity === 1 ? 0 : quantity - 1,
          ...prev,
        },
        reset: {
          cart: false,
          quantity: 0,
          ...prev,
        },
      }[action];

      await updateFilmMutation.mutateAsync(updatedFilm);
    },
  });

  const filmsInCart = allFilms?.filter((i) => i.cart);

  const removeMutation = useMutation({
    mutationFn: async () => {
      const promises = filmsInCart?.map((item) =>
        updateFilmMutation.mutateAsync({ ...item, cart: false, quantity: 0 })
      );
      await Promise.all(promises);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["films"] });
    },
  });

  return {
    error,
    isLoading,
    allFilms,
    filmsInCart,
    handleCartAction: cartActionMutation.mutate,
    removeAllFromCart: removeMutation.mutate,
  };
}
