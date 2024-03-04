"use client";

import React from "react";

import { ICardProps } from "@/interfaces/ICard.interface";

import CardsComponent from "./Cards.component";

export function Cards({ onClick, films }: Readonly<ICardProps>) {
  return <CardsComponent films={films} onClick={onClick} />;
}
