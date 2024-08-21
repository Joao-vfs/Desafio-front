import {
  ICSSPropertiesKeys,
  IStyleableComponentProps,
  IStyledProps,
} from "@/interfaces/IStyles.interface";

import { IMovieProps } from "@/interfaces/IMovies.interface";

export const formatPrice = (price: number): string => {
  const priceFixed = price?.toFixed(2);

  const priceNumber = parseFloat(priceFixed);

  const priceFormatted = priceNumber.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return priceFormatted;
};

export const totalPrice = (movie: IMovieProps[]) => {
  let total = 0;

  movie?.forEach((totalPrice) => {
    total += totalPrice?.price * totalPrice?.quantity;
  });

  return total;
};

export const processStyleProps = (
  props: Readonly<IStyleableComponentProps>
): IStyledProps => {
  const styled: IStyledProps = {};

  const addUnit = (value: number | string, unit: string = "px"): string => {
    if (typeof value === "number" && isNaN(value)) {
      return `${value}${unit}`;
    }
    return value as string;
  };

  Object.keys(props).forEach((key) => {
    const cssKey = key as ICSSPropertiesKeys;
    const value = props[cssKey];

    if (
      value != null &&
      (typeof value === "number" || typeof value === "string")
    ) {
      styled[cssKey] = addUnit(value);
    } else {
      styled[cssKey] = value;
    }
  });

  return styled;
};
