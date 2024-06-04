import { useTheme } from "styled-components";
import * as S from "./Cards.styles";

import Typography from "@/global/Typography/Typography";

import { CartIcon } from "@/icons";

import { formatPrice } from "@/utils/utils";

import { ICardProps } from "@/interfaces/ICard.interface";

import { Button } from "..";

export default function CardsComponent({
  onClick,
  films,
}: Readonly<ICardProps>) {
  const theme = useTheme();
  return (
    <S.ContainerCard>
      <S.ImageFilm src={films.image} alt={films.title} />
      <S.ContentCard>
        <Typography
          font-size={theme.fontSize.nano}
          font-weight={theme.fontWeight.bold}
          color={theme.colors.quaternary}
          line-height={"16.34px"}
        >
          {films.title}
        </Typography>
        <Typography
          font-size={theme.fontSize.md}
          font-weight={theme.fontWeight.bold}
          color={theme.colors.dark}
          line-height={"21.79px"}
        >
          R$ {formatPrice(films.price)}
        </Typography>
      </S.ContentCard>
      <Button
        display={"flex"}
        align-items={"center"}
        justify-content={"center"}
        gap={films.quantity > 0 ? "25px" : theme.gaps.lg}
        height={"40px"}
        width={"287px"}
        padding={theme.paddings.xxs}
        background={
          films.quantity > 0 ? theme.colors.success : theme.colors.tertiary
        }
        border-radius={theme.border.radius.small}
        border={"none"}
        onClick={onClick}
      >
        <S.ItemAdd>
          <CartIcon />
          <Typography
            font-size={theme.fontSize.nano}
            font-weight={theme.fontWeight.normal}
            color={theme.colors.primary}
            line-height={"16.34px"}
          >
            {films.quantity}
          </Typography>
        </S.ItemAdd>
        <Typography
          font-size={theme.fontSize.nano}
          font-weight={theme.fontWeight.bold}
          color={theme.colors.primary}
          line-height={"16.34px"}
          cursor="pointer"
        >
          {films.quantity > 0 ? "ITEM ADICIONADO" : "ADICIONAR AO CARRINHO"}
        </Typography>
      </Button>
    </S.ContainerCard>
  );
}
