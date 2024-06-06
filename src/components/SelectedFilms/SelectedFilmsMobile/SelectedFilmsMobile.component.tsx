import { useRouter } from "next/navigation";

import * as S from "./SelectedFilmsMobile.styles";

import { useTheme } from "styled-components";

import Box from "@/global/layout/Box/Box.layout";
import Typography from "@/global/Typography/Typography";

import { formatPrice, totalPrice } from "@/utils/utils";

import { TrashIcon } from "@/icons";

import { ISelectedComponentProps } from "@/interfaces/ISelectedFilms.interface";

import { Button, SumQuantity } from "@/components";

export function SelectedFilmsMobile({
  selectedFilms,
  handleCartAction,
}: Readonly<ISelectedComponentProps>) {
  const theme = useTheme();
  const { push } = useRouter();

  return (
    <Box
      background={theme.colors.primary}
      display="flex"
      flex-direction="column"
      align-items="center"
      justify-content="space-between"
      width="343px"
      min-height="716px"
      max-height="100%"
      padding="16px"
      border-radius={theme.border.radius.small}
    >
      <Box
        width="100%"
        display="flex"
        flex-direction="column"
        gap={theme.gaps.xg}
      >
        {selectedFilms?.map((moviesPurchase) => (
          <S.CartItemContainer key={moviesPurchase.id}>
            <S.ProductImage src={moviesPurchase.image} alt="" />
            <S.FilmDetailsContainer>
              <S.FilmInfoContainer>
                <Typography
                  font-size={theme.fontSize.sm}
                  font-weight={theme.fontWeight.bold}
                  color={theme.colors.dark}
                  line-height={"19.07px"}
                >
                  {moviesPurchase.title}
                </Typography>
                <Typography
                  font-size={theme.fontSize.md}
                  font-weight={theme.fontWeight.bold}
                  color={theme.colors.dark}
                  line-height={"21.79px"}
                >
                  R$ {formatPrice(moviesPurchase.price)}
                </Typography>
                <S.TrashButton
                  onClick={() =>
                    handleCartAction({ film: moviesPurchase, action: "reset" })
                  }
                >
                  <TrashIcon />
                </S.TrashButton>
              </S.FilmInfoContainer>
              <S.ProductDescriptionContainer>
                <SumQuantity
                  quantity={moviesPurchase.quantity}
                  increment={() =>
                    handleCartAction({ film: moviesPurchase, action: "add" })
                  }
                  decrement={() =>
                    handleCartAction({ film: moviesPurchase, action: "remove" })
                  }
                />
                <S.QuantitySubtotalContainer>
                  <Typography
                    font-size={theme.fontSize.sm}
                    font-weight={theme.fontWeight.bold}
                    color={theme.colors.secundary}
                    line-height={"16.34px"}
                  >
                    SUBTOTAL
                  </Typography>
                  <Typography
                    font-size={theme.fontSize.md}
                    font-weight={theme.fontWeight.bold}
                    color={theme.colors.dark}
                    line-height={"21.79px"}
                  >
                    R${" "}
                    {formatPrice(
                      moviesPurchase.price * moviesPurchase.quantity
                    )}
                  </Typography>
                </S.QuantitySubtotalContainer>
              </S.ProductDescriptionContainer>
            </S.FilmDetailsContainer>
          </S.CartItemContainer>
        ))}
      </Box>
      <S.DividerLine>
        <S.FilmSelectedContainer>
          <S.TotalPriceContainer>
            <Typography
              font-size={theme.fontSize.sm}
              font-weight={theme.fontWeight.bold}
              color={theme.colors.secundary}
              line-height={"19.07px"}
            >
              TOTAL
            </Typography>
            <Typography
              font-size={theme.fontSize.xg}
              font-weight={theme.fontWeight.bold}
              color={theme.colors.dark}
              line-height={"31.39px"}
            >
              R$ {formatPrice(totalPrice(selectedFilms))}
            </Typography>
          </S.TotalPriceContainer>
          <Button
            display={"flex"}
            align-items={"center"}
            justify-content={"center"}
            gap={theme.gaps.lg}
            height={"40px"}
            width={"311px"}
            padding={theme.paddings.xxs}
            background={theme.colors.tertiary}
            border-radius={theme.border.radius.small}
            border={"none"}
            onClick={() => push("/finalizePurchases")}
          >
            <Typography
              font-size={theme.fontSize.sm}
              font-weight={theme.fontWeight.bold}
              color={theme.colors.primary}
              line-height={"31.39px"}
              cursor="pointer"
            >
              FINALIZAR PEDIDO
            </Typography>
          </Button>
        </S.FilmSelectedContainer>
      </S.DividerLine>
    </Box>
  );
}
