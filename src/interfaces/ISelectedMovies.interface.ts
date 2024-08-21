import { UseMutateFunction } from "@tanstack/react-query";
import { IMovieProps } from "./IMovies.interface";

export interface ISelectedComponentProps {
  selectedMovies?: IMovieProps[];
  increment: UseMutateFunction<
    void,
    Error,
    {
      key: number;
      movie: IMovieProps;
    },
    unknown
  >;
  decrement: UseMutateFunction<
    void,
    Error,
    {
      key: number;
      movie: IMovieProps;
    },
    unknown
  >;
  removeMovieFromCart: UseMutateFunction<
    void,
    Error,
    {
      movie: number;
    },
    unknown
  >;
  removeAllMoviesFromCart: UseMutateFunction<void, Error, void, unknown>;
}

export interface ISelectedMoviesProps extends ISelectedComponentProps {
  device: "mobile" | "desktop";
}
