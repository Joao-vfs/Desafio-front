import * as S from "./SelectedMoviesMobile.styles";

import { useTheme } from "styled-components";

import Box from "@/global/layout/Box/Box.layout";
import Typography from "@/global/Typography/Typography";

import { formatPrice, totalPrice } from "@/utils/utils";

import { TrashIcon } from "@/icons";

import { ISelectedComponentProps } from "@/interfaces/ISelectedMovies.interface";

import { Button, SumQuantity } from "@/components";

export function SelectedMoviesMobile({
  selectedMovies = [],
  removeMovieFromCart,
  increment,
  decrement,
  removeAllMoviesFromCart,
}: Readonly<ISelectedComponentProps>) {
  const theme = useTheme();

  return (
    <Box
      background={theme.colors.primary}
      display="flex"
      flex-direction="column"
      align-items="center"
      justify-content="space-between"
      width="343px"
      height="auto"
      padding="16px"
      border-radius={theme.border.radius.small}
    >
      <Box
        width="100%"
        display="flex"
        flex-direction="column"
        gap={theme.gaps.xg}
      >
        {selectedMovies?.map((moviesPurchase, index) => (
          <S.CartItemContainer key={moviesPurchase?.id}>
            <S.ProductImage src={moviesPurchase?.image} alt="" />
            <S.MovieDetailsContainer>
              <S.MovieInfoContainer>
                <Typography
                  font-size={theme.fontSize.sm}
                  font-weight={theme.fontWeight.bold}
                  color={theme.colors.dark}
                  line-height={"19.07px"}
                >
                  {moviesPurchase?.title}
                </Typography>
                <Typography
                  font-size={theme.fontSize.md}
                  font-weight={theme.fontWeight.bold}
                  color={theme.colors.dark}
                  line-height={"21.79px"}
                >
                  R$ {formatPrice(moviesPurchase?.price)}
                </Typography>
                <S.TrashButton
                  onClick={() =>
                    removeMovieFromCart({ movie: Number(moviesPurchase.id) })
                  }
                >
                  <TrashIcon />
                </S.TrashButton>
              </S.MovieInfoContainer>
              <S.ProductDescriptionContainer>
                <SumQuantity
                  quantity={moviesPurchase?.quantity}
                  increment={() =>
                    increment({
                      key: Number(moviesPurchase.id),
                      movie: moviesPurchase,
                    })
                  }
                  decrement={() =>
                    decrement({
                      key: Number(moviesPurchase.id),
                      movie: moviesPurchase,
                    })
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
                      moviesPurchase?.price * moviesPurchase?.quantity
                    )}
                  </Typography>
                </S.QuantitySubtotalContainer>
              </S.ProductDescriptionContainer>
            </S.MovieDetailsContainer>
          </S.CartItemContainer>
        ))}
      </Box>
      <S.DividerLine>
        <S.MoviesSelectedContainer>
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
              R$ {formatPrice(totalPrice(selectedMovies))}
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
            onClick={() => removeAllMoviesFromCart()}
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
        </S.MoviesSelectedContainer>
      </S.DividerLine>
    </Box>
  );
}
