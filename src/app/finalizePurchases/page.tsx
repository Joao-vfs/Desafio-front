"use client";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

import { useFilm } from "@/hooks/useHooks";

import useMobile from "@/global/isMobile/isMobile";

import FinalizePurchasesPage from ".";

export default function FinalizePurchases() {
  const { isLoading, removeAllFromCart, filmsInCart } = useFilm();
  const { push } = useRouter();

  useEffect(() => {
    if (filmsInCart.length === 0) return push("/");
    if (filmsInCart.length > 0) return removeAllFromCart();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FinalizePurchasesPage
      isMobile={useMobile()}
      isLoading={isLoading}
      handleBackHome={() => push("/")}
    />
  );
}
