"use client";

import React from "react";

import { UseAppSelector } from "@/redux/store";

import useMobile from "@/global/isMobile/isMobile";

import HeaderLayout from "./Header.layout";

export function Header() {
  const filmsSelected = UseAppSelector(
    (state) => state.WeMoviesSlice.weMovies.filmsSelected
  );

  const itemsCart = filmsSelected?.filter((i) => i.cart).length ?? 0;

  return <HeaderLayout isMobile={useMobile()} itemsCart={itemsCart} />;
}
