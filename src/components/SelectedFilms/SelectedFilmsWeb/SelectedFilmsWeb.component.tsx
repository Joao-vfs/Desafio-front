import { useRouter } from "next/navigation";

import { useTheme } from "styled-components";

import * as S from "./SelectedFilmsWeb.styles";

import Box from "@/global/layout/Box";
import Text from "@/global/Typography/Text/Text";

import { formatPrice, totalPrice } from "@/utils/utils";

import { TrashIcon } from "@/icons/trash.icon";

import { ISelectedComponentProps } from "@/interfaces/ISelectedFilms.interface";

import { Button, Loading, SumQuantity } from "@/components";

export function SelectedFilmsWeb({
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
      alignItems="flex-start"
      justifyContent="space-between"
      width={"960px"}
      minHeight="245px"
      maxHeight="100%"
      padding="24px"
      borderRadius={theme.borderRadius.small}
    >
      <S.TitleContainer>
        <Text
          fontSize={theme.fontSize.sm}
          fontWeight={theme.fontWeight.bold}
          color={theme.colors.secundary}
          lineHeight={"19.07px"}
        >
          PRODUTO
        </Text>
        <S.QuantitySubtotalContainer>
          <Text
            fontSize={theme.fontSize.sm}
            fontWeight={theme.fontWeight.bold}
            color={theme.colors.secundary}
            lineHeight={"19.07px"}
          >
            QTD
          </Text>
          <Text
            fontSize={theme.fontSize.sm}
            fontWeight={theme.fontWeight.bold}
            color={theme.colors.secundary}
            lineHeight={"19.07px"}
          >
            SUBTOTAL
          </Text>
        </S.QuantitySubtotalContainer>
      </S.TitleContainer>
      {selectedFilms?.map((moviesPurchase) => (
        <S.CartItemContainer key={moviesPurchase.id}>
          <S.ProductInfoContainer>
            <S.ProductImage src={moviesPurchase.image} alt="" />
            <S.ProductDescriptionContainer>
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
            </S.ProductDescriptionContainer>
          </S.ProductInfoContainer>
          <S.IconsContainer>
            <SumQuantity
              quantity={moviesPurchase.quantity}
              increment={() => handleCartAction(moviesPurchase, "add")}
              decrement={() => handleCartAction(moviesPurchase, "remove")}
            />
            <S.SubtotalContainer>
              <Text
                fontSize={theme.fontSize.md}
                fontWeight={theme.fontWeight.bold}
                color={theme.colors.dark}
                lineHeight={"31.39px"}
              >
                R$ {formatPrice(moviesPurchase.price * moviesPurchase.quantity)}
              </Text>
            </S.SubtotalContainer>
          </S.IconsContainer>
          <S.TrashButton
            onClick={() => handleCartAction(moviesPurchase, "reset")}
          >
            <TrashIcon />
          </S.TrashButton>
        </S.CartItemContainer>
      ))}
      <S.DividerLine />
      <S.FilmSelectedContainer>
        <Button
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={theme.gaps.lg}
          height={"40px"}
          width={"235px"}
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
      </S.FilmSelectedContainer>
    </Box>
  );
}
