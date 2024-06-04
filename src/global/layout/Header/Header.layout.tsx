import { useRouter } from "next/navigation";

import * as S from "./Header.styles";

import Typography from "@/global/Typography/Typography";

import { BagIcon } from "@/icons";

import { IHeaderLayoutProps } from "@/interfaces/IHeader.interface";
import { useTheme } from "styled-components";

export default function HeaderLayout({
  itemsCart,
  isMobile,
}: Readonly<IHeaderLayoutProps>) {
  const theme = useTheme();
  const { push } = useRouter();

  return (
    <S.Header>
      <Typography
        onClick={() => push("/")}
        font-size={theme.fontSize.lg}
        font-weight={theme.fontWeight.bold}
        color={theme.colors.primary}
        line-height={"27.24px"}
        cursor="pointer"
      >
        We Movies
      </Typography>
      <S.ContentHeader>
        <S.ShoppingCartInfo>
          {!isMobile && (
            <Typography
              font-size={theme.fontSize.md}
              font-weight={theme.fontWeight.semiBold}
              color={theme.colors.primary}
              line-height={"19.07px"}
            >
              Meu Carrinho
            </Typography>
          )}

          <Typography
            font-size={theme.fontSize.md}
            font-weight={theme.fontWeight.semiBold}
            color={theme.colors.secundary}
            line-height={"19.07px"}
          >
            {itemsCart} itens
          </Typography>
        </S.ShoppingCartInfo>
        <BagIcon onClick={() => push("/cart")} />
      </S.ContentHeader>
    </S.Header>
  );
}
