"use client";

import useMobile from "@/global/isMobile/isMobile";

import PurchaseResultComponent from "./PurchaseResult.component";

import { useRouter } from "next/navigation";

export function PurchaseResult({ havePurchase }: { havePurchase?: boolean }) {
  const { push } = useRouter();
  const handleBackHome = () => push("/");

  return (
    <PurchaseResultComponent
      handleBackHome={handleBackHome}
      isMobile={useMobile()}
      havePurchase={havePurchase}
    />
  );
}
