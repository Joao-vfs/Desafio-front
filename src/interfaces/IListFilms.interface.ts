import { IFilmsProps } from "./IFilms.interface";

export interface IListFilmsProps {
  list: IFilmsProps[];
  handleCartAction: (
    films: IFilmsProps,
    action: "add" | "remove" | "reset"
  ) => void;
}
