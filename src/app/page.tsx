"use client";

import { useFilms } from "@/hooks/useFilms";

import { ListFilms } from "@/components";

export default function HomePage() {
  const { handleCartAction, allFilms, ...props } = useFilms();

  return (
    <ListFilms handleCartAction={handleCartAction} list={allFilms} {...props} />
  );
}
