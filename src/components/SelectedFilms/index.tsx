"use client";

import { useFilm } from "@/hooks/useHooks";

import useMobile from "@/global/isMobile/isMobile";

import SelectedFilmsComponent from "./SelectedFilms.component";

export function SelectedFilms() {
  const { allFilms, isLoading, handleCartAction } = useFilm();

  return (
    <SelectedFilmsComponent
      isLoading={isLoading}
      selectedFilms={allFilms.filter((item) => item.cart)}
      handleCartAction={handleCartAction}
      isMobile={useMobile()}
    />
  );
}
