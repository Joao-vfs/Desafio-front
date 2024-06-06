import { UseMutateFunction } from "@tanstack/react-query";
import { IFilmsProps } from "./IFilms.interface";

export interface IListFilmsProps {
  list: IFilmsProps[];
  handleCartAction: UseMutateFunction<
    void,
    Error,
    { film: IFilmsProps; action: "add" | "remove" | "reset" },
    unknown
  >;
}
