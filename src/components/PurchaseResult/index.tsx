"use client";

import useMobile from "@/global/isMobile/isMobile";

import PurchaseResultComponent from "./PurchaseResult.component";

import { useRouter, useSearchParams } from "next/navigation";

export function PurchaseResult() {
  const { push } = useRouter();
  const handleBackHome = () => push("/");
  const searchParams = useSearchParams();
  const havePurchase = searchParams.get("purchase") === "completed";
  const isSearchPage = searchParams.get("movies") !== null;

  return (
    <PurchaseResultComponent
      handleBackHome={handleBackHome}
      isMobile={useMobile()}
      havePurchase={havePurchase}
      isSearchPage={isSearchPage}
    />
  );
}
