"use client";

import { ISumQuantityProps } from "@/interfaces/ISumQuantity.interface";

import SumQuantityComponent from "./SumQuantity.component";

export function SumQuantity({
  quantity,
  increment,
  decrement,
}: Readonly<ISumQuantityProps>) {
  return (
    <SumQuantityComponent
      quantity={quantity}
      decrement={decrement}
      increment={increment}
    />
  );
}
