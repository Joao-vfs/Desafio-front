import { IFilmsProps } from "@/interfaces/IFilms.interface";

export const formatPrice = (price: number): string => {
  const priceFixed = price?.toFixed(2);

  const priceNumber = parseFloat(priceFixed);

  const priceFormatted = priceNumber.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return priceFormatted;
};

export const totalPrice = (films: IFilmsProps[]) => {
  let total = 0;

  films?.forEach((totalPrice) => {
    total += totalPrice.price * totalPrice.quantity;
  });

  return total;
};
