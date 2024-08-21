import { IMovieProps } from "./IMovies.interface";

export interface ICardProps {
  onClick: () => void;
  movie: IMovieProps;
  addedMovie: number;
}
