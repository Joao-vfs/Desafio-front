import { UseMutateFunction } from "@tanstack/react-query";
import { IMovieProps } from "./IMovies.interface";

export interface IListMoviesProps {
  list?: IMovieProps[];
  moviesInCart: IMovieProps[];
  currentPage?: number;
  totalPage?: number;
  handlePageChange?: (currentPage: number) => void;
  updateMovieFromCart: UseMutateFunction<
    void,
    Error,
    {
      movie: IMovieProps;
    },
    unknown
  >;
}
