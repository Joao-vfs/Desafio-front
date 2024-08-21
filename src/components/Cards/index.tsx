"use client";

import React from "react";

import { ICardProps } from "@/interfaces/ICard.interface";

import CardsComponent from "./Cards.component";

export function Cards({ ...props }: Readonly<ICardProps>) {
  return <CardsComponent {...props} />;
}
