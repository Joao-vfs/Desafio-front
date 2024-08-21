import { useTheme } from "styled-components";

import * as S from "./Cards.styles";

import Typography from "@/global/Typography/Typography";

import { formatPrice } from "@/utils/utils";

import { ICardProps } from "@/interfaces/ICard.interface";

import Image from "next/image";
import Box from "@/global/layout/Box/Box.layout";
import { ArrowIcon } from "@/icons";

export default function CardsComponent({
  onClick,
  movie,
  addedMovie,
}: Readonly<ICardProps>) {
  return (
    <S.CardContainer>
      <S.ImagePlaceholder>
        <Image src={movie.image} alt={movie.title} width={250} height={140} />
      </S.ImagePlaceholder>
      <div>
        <S.CardTitle>{movie.title}</S.CardTitle>
        <S.CardText>{movie.description}</S.CardText>
        <S.CardTitle> R$ {formatPrice(movie.price)}</S.CardTitle>
      </div>
      <S.PlayButton addedMovie={addedMovie > 0} onClick={onClick}>
        {addedMovie > 0 ? (
          <Box
            height=" 50px"
            width=" 50px"
            color="#fff"
            background-color=" #0a0a0a"
            box-shadow=" 0 4px 10px rgba(0, 0, 0, 0.3)"
            border-radius=" 50%"
            padding=" 0.75rem"
            display="flex"
            align-items="center"
            justify-content="center"
          >
            {addedMovie}
          </Box>
        ) : (
          <S.PlayIcon>
            <ArrowIcon />
          </S.PlayIcon>
        )}
        <S.ButtonText>
          {addedMovie > 0
            ? addedMovie === 1
              ? `Item adicionado`
              : `Itens adicionados`
            : "Adicionar ao Carrinho"}
        </S.ButtonText>
      </S.PlayButton>
    </S.CardContainer>
  );
}
