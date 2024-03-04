import { useRouter } from "next/navigation";

import * as S from "./Header.styles";

import Text from "@/global/Typography/Text/Text";

import { BagIcon } from "@/icons/bag.icon";

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
      <Text
        onClick={() => push("/")}
        fontSize={theme.fontSize.lg}
        fontWeight={theme.fontWeight.bold}
        color={theme.colors.primary}
        lineHeight={"27.24px"}
        pointer
      >
        We Movies
      </Text>
      <S.ContentHeader>
        <S.ShoppingCartInfo>
          {!isMobile && (
            <Text
              fontSize={theme.fontSize.md}
              fontWeight={theme.fontWeight.semiBold}
              color={theme.colors.primary}
              lineHeight={"19.07px"}
            >
              Meu Carrinho
            </Text>
          )}

          <Text
            fontSize={theme.fontSize.md}
            fontWeight={theme.fontWeight.semiBold}
            color={theme.colors.secundary}
            lineHeight={"19.07px"}
          >
            {itemsCart} itens
          </Text>
        </S.ShoppingCartInfo>
        <BagIcon onClick={() => push("/cart")} />
      </S.ContentHeader>
    </S.Header>
  );
}
