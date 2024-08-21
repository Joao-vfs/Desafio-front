"use client";

import { Fragment } from "react";

import { useRouter } from "next/navigation";

import { useMovies } from "@/hooks/useMovies";
import { useCart } from "@/hooks/useCart";

import { ListMovies } from "@/components";

export default function HomePage() {
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
