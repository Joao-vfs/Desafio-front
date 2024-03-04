import { useRouter } from "next/navigation";

import * as S from "./SelectedFilmsMobile.styles";

import { useTheme } from "styled-components";

import Box from "@/global/layout/Box";
import Text from "@/global/Typography/Text/Text";

import { formatPrice, totalPrice } from "@/utils/utils";

import { TrashIcon } from "@/icons/trash.icon";

import { ISelectedComponentProps } from "@/interfaces/ISelectedFilms.interface";

import { Button, Loading, SumQuantity } from "@/components";

export function SelectedFilmsMobile({
  isLoading,
  selectedFilms,
  handleCartAction,
}: Readonly<ISelectedComponentProps>) {
  const theme = useTheme();
  const { push } = useRouter();

  return isLoading ? (
    <Loading />
  ) : (
    <Box
      backGround={theme.colors.primary}
      display="flex"
      flexDirection
      alignItems="center"
      justifyContent="space-between"
      width="343px"
      minHeight="716px"
      maxHeight="100%"
      padding="16px"
      borderRadius={theme.borderRadius.small}
    >
      {selectedFilms?.map((moviesPurchase) => (
        <S.CartItemContainer key={moviesPurchase.id}>
          <S.ProductImage src={moviesPurchase.image} alt="" />
          <S.FilmDetailsContainer>
            <S.FilmInfoContainer>
              <Text
                fontSize={theme.fontSize.sm}
                fontWeight={theme.fontWeight.bold}
                color={theme.colors.dark}
                lineHeight={"19.07px"}
              >
                {moviesPurchase.title}
              </Text>
              <Text
                fontSize={theme.fontSize.md}
                fontWeight={theme.fontWeight.bold}
                color={theme.colors.dark}
                lineHeight={"21.79px"}
              >
                R$ {formatPrice(moviesPurchase.price)}
              </Text>
              <S.TrashButton
                onClick={() => handleCartAction(moviesPurchase, "reset")}
              >
                <TrashIcon />
              </S.TrashButton>
            </S.FilmInfoContainer>
            <S.ProductDescriptionContainer>
              <SumQuantity
                quantity={moviesPurchase.quantity}
                increment={() => handleCartAction(moviesPurchase, "add")}
                decrement={() => handleCartAction(moviesPurchase, "remove")}
              />
              <S.QuantitySubtotalContainer>
                <Text
                  fontSize={theme.fontSize.sm}
                  fontWeight={theme.fontWeight.bold}
                  color={theme.colors.secundary}
                  lineHeight={"16.34px"}
                >
                  SUBTOTAL
                </Text>
                <Text
                  fontSize={theme.fontSize.md}
                  fontWeight={theme.fontWeight.bold}
                  color={theme.colors.dark}
                  lineHeight={"21.79px"}
                >
                  R${" "}
                  {formatPrice(moviesPurchase.price * moviesPurchase.quantity)}
                </Text>
              </S.QuantitySubtotalContainer>
            </S.ProductDescriptionContainer>
          </S.FilmDetailsContainer>
        </S.CartItemContainer>
      ))}
      <S.DividerLine>
        <S.FilmSelectedContainer>
          <S.TotalPriceContainer>
            <Text
              fontSize={theme.fontSize.sm}
              fontWeight={theme.fontWeight.bold}
              color={theme.colors.secundary}
              lineHeight={"19.07px"}
            >
              TOTAL
            </Text>
            <Text
              fontSize={theme.fontSize.xg}
              fontWeight={theme.fontWeight.bold}
              color={theme.colors.dark}
              lineHeight={"31.39px"}
            >
              R$ {formatPrice(totalPrice(selectedFilms))}
            </Text>
          </S.TotalPriceContainer>
          <Button
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={theme.gaps.lg}
            height={"40px"}
            width={"311px"}
            padding={theme.paddings.xxs}
            backGround={theme.colors.tertiary}
            borderRadius={theme.borderRadius.small}
            border={"none"}
            onClick={() => push("/finalizePurchases")}
          >
            <Text
              fontSize={theme.fontSize.sm}
              fontWeight={theme.fontWeight.bold}
              color={theme.colors.primary}
              lineHeight={"31.39px"}
              pointer
            >
              FINALIZAR PEDIDO
            </Text>
          </Button>
        </S.FilmSelectedContainer>
      </S.DividerLine>
    </Box>
  );
}
