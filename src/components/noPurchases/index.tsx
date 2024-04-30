"use client";

import { useRouter } from "next/navigation";

import useMobile from "@/global/isMobile/isMobile";

import { useFilm } from "@/hooks/useHooks";

import NoPurchasesComponent from "./noPurchases.component";

export default function NoPurchases() {
  const { isLoading } = useFilm();
  const { push } = useRouter();

  return (
    <NoPurchasesComponent
      isMobile={useMobile()}
      handleBackHome={() => push("/")}
      isLoading={isLoading}
    />
  );
}
