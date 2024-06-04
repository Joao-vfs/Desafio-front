"use-client";

import { useCallback, useEffect, useState } from "react";

import { FilmsService } from "@/services/query";

import { UseAppDispatch, UseAppSelector } from "@/redux/store";
import { handleFilmsSelected } from "@/redux/slices/WeMovies/weMovies.slices";

import { IFilmsProps } from "@/interfaces/IFilms.interface";

export function useFilms() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const allFilms = UseAppSelector(
    (state) => state.WeMoviesSlice.weMovies.filmsSelected
  );
  const dispatch = UseAppDispatch();

  const fetchListFilms = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      if (allFilms.length === 0) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }
      const res = await FilmsService.getFilms();
      dispatch(handleFilmsSelected(res));
    } catch (error) {
      setError("Failed to fetch films");
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, allFilms.length]);

  const handleCartAction = useCallback(
    async (film: IFilmsProps, action: "add" | "remove" | "reset") => {
      try {
        setError(null);
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

        await FilmsService.putFilm(updatedFilm);
        fetchListFilms();
      } catch (error) {
        setError("Failed to update film");
      }
    },
    [fetchListFilms]
  );

  const filmsInCart = allFilms.filter((i) => i.cart);

  const removeAllFromCart = useCallback(async () => {
    try {
      setError(null);
      const promises = filmsInCart.map((item) =>
        FilmsService.putFilm({ ...item, cart: false, quantity: 0 })
      );
      await Promise.all(promises);
      fetchListFilms();
    } catch (error) {
      setError("Failed to remove all films from cart");
    }
  }, [filmsInCart, fetchListFilms]);

  useEffect(() => {
    fetchListFilms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    error,
    isLoading,
    allFilms,
    filmsInCart,
    handleCartAction,
    removeAllFromCart,
  };
}
