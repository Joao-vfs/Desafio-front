"use client";

import { useCart } from "@/hooks/useCart";

import { UseSearch } from "@/hooks/useSearch";

import { ListMovies, PurchaseResult } from "@/components";

interface Params {
  searchParams: { movies: string };
}

export default function SearchPage(searchParams: Params) {
  const { updateMovieFromCart, moviesInCart } = useCart();
  const { movies } = searchParams?.searchParams;
  const { data } = UseSearch(movies);

  return data?.length ? (
    <ListMovies
      list={data}
      moviesInCart={moviesInCart}
      updateMovieFromCart={updateMovieFromCart}
    />
  ) : (
    <PurchaseResult />
  );
}
