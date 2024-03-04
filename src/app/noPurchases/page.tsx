"use client";

import { useRouter } from "next/navigation";

import useMobile from "@/global/isMobile/isMobile";

import { useFilm } from "@/hooks/useHooks";

import CartPage from ".";

export default function Cart() {
  const { isLoading } = useFilm();
  const { push } = useRouter();

  return (
    <CartPage
      isMobile={useMobile()}
      handleBackHome={() => push("/")}
      isLoading={isLoading}
    />
  );
}
