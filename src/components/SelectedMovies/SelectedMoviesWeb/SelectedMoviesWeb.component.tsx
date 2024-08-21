import { useTheme } from "styled-components";

import * as S from "./SelectedMoviesWeb.styles";

import Box from "@/global/layout/Box/Box.layout";
import Typography from "@/global/Typography/Typography";

import { formatPrice, totalPrice } from "@/utils/utils";

import { TrashIcon } from "@/icons";

import { ISelectedComponentProps } from "@/interfaces/ISelectedMovies.interface";

import { Button, SumQuantity } from "@/components";

export function SelectedMoviesWeb({
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
      align-items="flex-start"
      justify-content="space-between"
      width={"960px"}
      min-height="245px"
      max-height="100%"
      padding="24px"
      border-radius={theme.border.radius.small}
    >
      <S.TitleContainer>
        <Typography
          font-size={theme.fontSize.sm}
          font-weight={theme.fontWeight.bold}
          color={theme.colors.secundary}
          line-height={"19.07px"}
        >
          PRODUTO
        </Typography>
        <S.QuantitySubtotalContainer>
          <Typography
            font-size={theme.fontSize.sm}
            font-weight={theme.fontWeight.bold}
            color={theme.colors.secundary}
            line-height={"19.07px"}
          >
            QTD
          </Typography>
          <Typography
            font-size={theme.fontSize.sm}
            font-weight={theme.fontWeight.bold}
            color={theme.colors.secundary}
            line-height={"19.07px"}
          >
            SUBTOTAL
          </Typography>
        </S.QuantitySubtotalContainer>
      </S.TitleContainer>
      {selectedMovies?.map((moviesPurchase, index) => (
        <S.CartItemContainer key={moviesPurchase?.id}>
          <S.ProductInfoContainer>
            <S.ProductImage src={moviesPurchase?.image} alt="" />
            <S.ProductDescriptionContainer>
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
            </S.ProductDescriptionContainer>
          </S.ProductInfoContainer>
          <S.IconsContainer>
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
            <S.SubtotalContainer>
              <Typography
                font-size={theme.fontSize.md}
                font-weight={theme.fontWeight.bold}
                color={theme.colors.dark}
                line-height={"31.39px"}
              >
                R${" "}
                {formatPrice(moviesPurchase?.price * moviesPurchase?.quantity)}
              </Typography>
            </S.SubtotalContainer>
          </S.IconsContainer>
          <S.TrashButton
            onClick={() =>
              removeMovieFromCart({ movie: Number(moviesPurchase.id) })
            }
          >
            <TrashIcon />
          </S.TrashButton>
        </S.CartItemContainer>
      ))}
      <S.DividerLine />
      <S.MoviesSelectedContainer>
        <Button
          display={"flex"}
          align-items={"center"}
          justify-content={"center"}
          gap={theme.gaps.lg}
          height={"40px"}
          width={"235px"}
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
      </S.MoviesSelectedContainer>
    </Box>
  );
}
