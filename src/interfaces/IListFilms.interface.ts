import { IFilmsProps } from "./IFilms.interface";

export interface IListFilmsProps {
  list: IFilmsProps[];
  isLoading: boolean;
  handleCartAction: (
    films: IFilmsProps,
    action: "add" | "remove" | "reset"
  ) => void;
}
