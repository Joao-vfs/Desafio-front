import { handleApiError } from "./error";
import { api } from "./api";

import { IFilmsProps } from "@/interfaces/IFilms.interface";

export class FilmsService {
  static async putFilm(film: IFilmsProps): Promise<IFilmsProps> {
    try {
      const { data } = await api.put<IFilmsProps>(`/films/${film.id}`, film);
      return data;
    } catch (error) {
      handleApiError(error);
      throw new Error("Failed to update the film.");
    }
  }

  static async getFilms(): Promise<IFilmsProps[]> {
    try {
      const { data } = await api.get<IFilmsProps[]>("/films");
      return data;
    } catch (error) {
      handleApiError(error);
      throw new Error("Failed to fetch films.");
    }
  }
}
