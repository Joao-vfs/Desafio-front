"use client";

import React from "react";

import { UseAppSelector } from "@/redux/store";

import useMobile from "@/global/isMobile/isMobile";

import HeaderLayout from "./Header.layout";

export function Header() {
  const itemsCart = UseAppSelector(
    (state) => state.WeMoviesSlice.weMovies.filmsSelected
  );

  return (
    <HeaderLayout
      isMobile={useMobile()}
      itemsCart={itemsCart?.filter((i) => i.cart).length ?? 0}
    />
  );
}
