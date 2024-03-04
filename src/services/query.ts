import { api } from "./api";

import { IFilmsProps } from "@/interfaces/IFilms.interface";

export const putFilms = async (film: IFilmsProps): Promise<IFilmsProps[]> => {
  try {
    const { data } = await api.put(`/products/${film.id}`, film);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getFilms = async (): Promise<IFilmsProps[]> => {
  try {
    const { data } = await api.get(`/products`);
    return data;
  } catch (error) {
    throw error;
  }
};
