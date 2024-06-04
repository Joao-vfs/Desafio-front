import { IFilmsProps } from "./IFilms.interface";

export interface ISelectedComponentProps {
  selectedFilms: IFilmsProps[];
  handleCartAction: (
    film: IFilmsProps,
    action: "add" | "remove" | "reset"
  ) => void;
}

export interface ISelectedFilmsProps extends ISelectedComponentProps {
  device: 'mobile' | 'desktop';
}
