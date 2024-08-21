import { useRouter } from "next/navigation";

import { useTheme } from "styled-components";

import * as S from "./Header.styles";

import Typography from "@/global/Typography/Typography";
import Box from "@/global/layout/Box/Box.layout";

import { BagIcon, LogoIcon } from "@/icons";

import { IHeaderLayoutProps } from "@/interfaces/IHeader.interface";

import { Search } from "@/components";

export default function HeaderLayout({
  itemsCart,
  isMobile,
  ...props
}: Readonly<IHeaderLayoutProps>) {
  const theme = useTheme();
  const { push } = useRouter();

  const handleGoToCart = () => {
    if (itemsCart === 0) {
      return push("/finalizePurchases?purchase=noHaveItens");
    } else {
      return push("/cart");
    }
  };

  return (
    <S.Header>
      <Box
        display="flex"
        align-items="center"
        justify-content="space-between"
        height="70px"
        padding={isMobile ? "10px 15px" : "10px 50px"}
        margin-bottom="25px"
      >
        <Box
          display="flex"
          align-items="center"
          justify-content="center"
          gap="10px"
          onClick={() => push("/")}
        >
          <LogoIcon />
          {!isMobile && (
            <Typography
              font-size={theme.fontSize.lg}
              font-weight={theme.fontWeight.bold}
              color={theme.colors.dark}
              line-height={"27.24px"}
              cursor="pointer"
            >
              Epic Films
            </Typography>
          )}
        </Box>
        <S.ContentHeader>
          <Search {...props} />
          <S.ShoppingCartInfo>
            {!isMobile && (
              <Typography
                font-size={theme.fontSize.md}
                font-weight={theme.fontWeight.semiBold}
                color={theme.colors.dark}
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
          <BagIcon onClick={handleGoToCart} />
        </S.ContentHeader>
      </Box>
    </S.Header>
  );
}
