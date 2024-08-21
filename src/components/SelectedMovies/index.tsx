"use client";

import { useCart } from "@/hooks/useCart";

import useMobile from "@/global/isMobile/isMobile";

import SelectedMoviesComponent from "./SelectedMovies.component";

export function SelectedMovies() {
  const {
    increment,
    decrement,
    removeMovieFromCart,
    removeAllMoviesFromCart,
    moviesInCart,
  } = useCart();

  const device = useMobile() ? "mobile" : "desktop";

  return (
    <SelectedMoviesComponent
      selectedMovies={moviesInCart}
      device={device}
      removeMovieFromCart={removeMovieFromCart}
      increment={increment}
      decrement={decrement}
      removeAllMoviesFromCart={removeAllMoviesFromCart}
    />
  );
}
