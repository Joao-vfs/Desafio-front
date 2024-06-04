"use client";

import ListFilmsComponent from "./ListFilms.component";

import { IListFilmsProps } from "@/interfaces/IListFilms.interface";

export function ListFilms({
  list,
  handleCartAction,
}: Readonly<IListFilmsProps>) {
  return <ListFilmsComponent list={list} handleCartAction={handleCartAction} />;
}
