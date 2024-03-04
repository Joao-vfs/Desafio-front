"use client";

import { useFilm } from "@/hooks/useHooks";

import useMobile from "@/global/isMobile/isMobile";

import SelectedFilmsComponent from "./SelectedFilms.component";

import { UseAppSelector } from "@/redux/store";

export function SelectedFilms() {
  const { isLoading, handleCartAction, removeAllFromCart } = useFilm();
  const itemsCart = UseAppSelector(
    (state) => state.WeMoviesSlice.weMovies.filmsSelected
  );

  const teste = itemsCart.filter((i) => i.cart);
  console.log("filmsInCart =>", teste);

  return (
    <SelectedFilmsComponent
      isLoading={isLoading}
      selectedFilms={teste}
      handleCartAction={handleCartAction}
      removeAllFromCart={removeAllFromCart}
      isMobile={useMobile()}
    />
  );
}
