import { api } from "./api";

import {
  IMovieProps,
  IMoviesResponseProps,
} from "@/interfaces/IMovies.interface";

export class MovieServices {
  static async postToCartMovies(newMovie: IMovieProps): Promise<string> {
    try {
      const { data } = await api.post(`/cartMovies.json`, {
        ...newMovie,
        quantity: 1,
      });
      return data.name;
    } catch (error) {
      throw new Error("Failed to add the movie to cart.");
    }
  }

  static async putToCartMovies(
    movieId: string,
    updatedMovie: IMovieProps
  ): Promise<void> {
    try {
      await api.put(`/cartMovies/${movieId}.json`, updatedMovie);
    } catch (error) {
      throw new Error("Failed to update the movie.");
    }
  }

  static async getMovieFromCart(): Promise<IMovieProps[]> {
    try {
      const { data } = await api.get("/cartMovies.json");
      return data;
    } catch (error) {
      throw new Error("Failed to fetch movies.");
    }
  }

  static async deleteMovieCart(movie: string): Promise<void> {
    try {
      await api.delete(`/cartMovies/${movie}.json`);
    } catch (error) {
      throw new Error("Failed to remove the movie to cart.");
    }
  }

  static async deleteAllMoviesFromCart(): Promise<void> {
    try {
      await api.delete(`/cartMovies.json`);
    } catch (error) {
      throw new Error("Failed to remove all movies from cart.");
    }
  }

  static async getMoviePagination(
    page: number,
    pageSize: number
  ): Promise<IMoviesResponseProps> {
    try {
      const { data } = await api.get<IMoviesResponseProps>(`/movies.json`);

      const paginatedMovies = data.data.slice(
        (page - 1) * pageSize,
        page * pageSize
      );
      return { data: paginatedMovies, pagination: data.pagination };
    } catch (error) {
      throw new Error("Failed to fetch movies.");
    }
  }

  static async getMovieSearch(): Promise<{ data: IMovieProps[] }> {
    try {
      const { data } = await api.get(`/movies.json`);

      return data;
    } catch (error) {
      throw new Error("Failed to fetch movies.");
    }
  }
}
