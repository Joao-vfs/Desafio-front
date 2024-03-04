import { IFilmsProps } from "./IFilms.interface";

export interface ICardProps {
  onClick: () => void;
  films: IFilmsProps;
}
