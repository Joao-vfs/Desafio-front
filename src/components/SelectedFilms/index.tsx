"use client";

import { useFilm } from "@/hooks/useHooks";

import useMobile from "@/global/isMobile/isMobile";

import SelectedFilmsComponent from "./SelectedFilms.component";

export function SelectedFilms() {
  const { isLoading, handleCartAction, filmsInCart } = useFilm();

  return (
    <SelectedFilmsComponent
      isLoading={isLoading}
      selectedFilms={filmsInCart}
      handleCartAction={handleCartAction}
      isMobile={useMobile()}
    />
  );
}
