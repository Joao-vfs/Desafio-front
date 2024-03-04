import { IFilmsProps } from "./IFilms.interface";

export interface ISelectedComponentProps {
  isLoading: boolean;
  selectedFilms: IFilmsProps[];
  handleCartAction: (
    film: IFilmsProps,
    action: "add" | "remove" | "reset"
  ) => void;
  removeAllFromCart: () => void;
}

export interface ISelectedFilmsProps extends ISelectedComponentProps {
  isMobile: boolean;
}
