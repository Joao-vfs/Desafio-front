"use client";

import { useCart } from "@/hooks/useCart";

import { UseSearch } from "@/hooks/useSearch";

import { ListMovies, PurchaseResult } from "@/components";

interface Params {
  searchParams: { movies: string };
}

export default function SearchPage(searchParams: Params) {
  const { updateMovieFromCart, moviesInCart } = useCart();
  const { data } = UseSearch();

  const list = data?.data?.filter((movie) => {
    const searchValue = searchParams?.searchParams?.movies?.toLowerCase() ?? "";
    return movie.title?.toLowerCase().includes(searchValue);
  });

  return list?.length ? (
    <ListMovies
      list={list}
      moviesInCart={moviesInCart}
      updateMovieFromCart={updateMovieFromCart}
    />
  ) : (
    <PurchaseResult />
  );
}
