"use client";

import ListMoviesComponent from "./ListMovies.component";

import { IListMoviesProps } from "@/interfaces/IListMovies.interface";

export function ListMovies({ ...props }: Readonly<IListMoviesProps>) {
  return <ListMoviesComponent {...props} />;
}
