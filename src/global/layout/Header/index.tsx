"use client";

import React from "react";

import useMobile from "@/global/isMobile/isMobile";

import HeaderLayout from "./Header.layout";

import { UseSearch } from "@/hooks/useSearch";
import { useCart } from "@/hooks/useCart";

export function Header() {
  const { moviesInCart } = useCart();

  const {
    handleIconClick,
    handleKeyUp,
    handleInputChange,
    inputRef,
    isExpanded,
    resultSearch,
    search,
  } = UseSearch();

  return (
    <HeaderLayout
      isMobile={useMobile()}
      itemsCart={moviesInCart.length}
      handleIconClick={handleIconClick}
      handleKeyUp={handleKeyUp}
      handleInputChange={handleInputChange}
      inputRef={inputRef}
      isExpanded={isExpanded}
      resultSearch={resultSearch}
      search={search}
    />
  );
}
