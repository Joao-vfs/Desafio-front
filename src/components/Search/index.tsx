"use client";

import React from "react";

import { ISearchComponentsProps } from "@/interfaces/ISearch.interface";

import { SearchComponent } from "./Search.component";

export function Search({ ...props }: Readonly<ISearchComponentsProps>) {
  return <SearchComponent {...props} />;
}
