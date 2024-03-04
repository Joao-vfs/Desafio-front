import { useTheme } from "styled-components";
import * as S from "./Cards.styles";

import Text from "@/global/Typography/Text/Text";

import { CartIcon } from "@/icons/cart.icon";

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
      <S.Teste>
        <Text
          fontSize={theme.fontSize.nano}
          fontWeight={theme.fontWeight.bold}
          color={theme.colors.quaternary}
          lineHeight={"16.34px"}
        >
          {films.title}
        </Text>
        <Text
          fontSize={theme.fontSize.md}
          fontWeight={theme.fontWeight.bold}
          color={theme.colors.dark}
          lineHeight={"21.79px"}
        >
          R$ {formatPrice(films.price)}
        </Text>
      </S.Teste>
      <Button
        display={"flex"}
        alignItems={"center"}
        justifyContent={films.quantity > 0 ? "space-evenly" : "center"}
        gap={films.quantity > 0 ? "0" : theme.gaps.lg}
        height={"40px"}
        width={"287px"}
        padding={theme.paddings.xxs}
        backGround={
          films.quantity > 0 ? theme.colors.success : theme.colors.tertiary
        }
        borderRadius={theme.borderRadius.small}
        border={"none"}
        onClick={onClick}
      >
        <S.ItemAdd>
          <CartIcon />
          <Text
            fontSize={theme.fontSize.nano}
            fontWeight={theme.fontWeight.normal}
            color={theme.colors.primary}
            lineHeight={"16.34px"}
          >
            {films.quantity}
          </Text>
        </S.ItemAdd>
        <Text
          fontSize={theme.fontSize.nano}
          fontWeight={theme.fontWeight.bold}
          color={theme.colors.primary}
          lineHeight={"16.34px"}
          pointer
        >
          {films.quantity > 0 ? "ITEM ADICIONADO" : "ADICIONAR AO CARRINHO"}
        </Text>
      </Button>
    </S.ContainerCard>
  );
}
