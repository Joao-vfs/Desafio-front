"use client";

import { useFilm } from "@/hooks/useHooks";

import { ListFilms, Loading } from "@/components";

export default function HomePage() {
  const { handleCartAction, allFilms, isLoading, ...props } = useFilm();

  return isLoading ? (
    <Loading />
  ) : (
    <ListFilms
      handleCartAction={handleCartAction}
      list={allFilms}
      isLoading={isLoading}
      {...props}
    />
  );
}
