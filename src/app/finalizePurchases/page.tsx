"use client";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

import { useFilms } from "@/hooks/useFilms";

import { PurchaseResult } from "@/components/PurchaseResult";

export default function FinalizePurchases() {
  const { removeAllFromCart, filmsInCart } = useFilms();
  const { push } = useRouter();

  useEffect(() => {
    if (filmsInCart.length === 0) return push("/");
    if (filmsInCart.length > 0) {
      removeAllFromCart();
      push("/finalizePurchases");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <PurchaseResult havePurchase />;
}
