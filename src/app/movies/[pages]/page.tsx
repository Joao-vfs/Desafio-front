"use client";

import { useCart } from "@/hooks/useCart";
import { useMovies } from "@/hooks/useMovies";

import { ListMovies } from "@/components";

export default function MoviesPage() {
  const { allMovies, currentPage, totalPage, handlePageChange } = useMovies();
  const { updateMovieFromCart, moviesInCart } = useCart();

  return (
    <ListMovies
      list={allMovies}
      moviesInCart={moviesInCart}
      currentPage={currentPage}
      totalPage={totalPage ?? 0}
      handlePageChange={handlePageChange}
      updateMovieFromCart={updateMovieFromCart}
    />
  );
}
