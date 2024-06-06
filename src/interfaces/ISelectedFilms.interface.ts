import { UseMutateFunction } from "@tanstack/react-query";
import { IFilmsProps } from "./IFilms.interface";

export interface ISelectedComponentProps {
  selectedFilms: IFilmsProps[];
  handleCartAction: UseMutateFunction<
    void,
    Error,
    {
      film: IFilmsProps;
      action: "add" | "remove" | "reset";
    },
    unknown
  >;
}

export interface ISelectedFilmsProps extends ISelectedComponentProps {
  device: "mobile" | "desktop";
}
