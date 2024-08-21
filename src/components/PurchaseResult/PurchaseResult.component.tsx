import Image from "next/image";

import { useTheme } from "styled-components";

import Box from "@/global/layout/Box/Box.layout";
import Typography from "@/global/Typography/Typography";

import FinalizePurchases from "@/assets/images/sapiens (1).png";
import WithoutItems from "@/assets/images/sapiens (2).png";
import NotFoundMovies from "@/assets/images/sapiens.png";

import { Button } from "@/components";

export default function PurchaseResult({
  handleBackHome,
  isMobile,
  havePurchase,
  isSearchPage,
}: {
  handleBackHome: () => void;
  isMobile: boolean;
  havePurchase?: boolean;
  isSearchPage: boolean;
}) {
  const theme = useTheme();
  const status = havePurchase ? "success" : "noPurchase";
  const message = isMobile ? "mobile" : "desktop";

  const getSizes = {
    success: {
      widthImage: isMobile ? 344 : 444,
    },
    noPurchase: {
      widthImage: isMobile ? 344 : 444,
    },
  }[status];

  const messages = {
    success: {
      mobile: "Compra realizada <br /> com sucesso!",
      desktop: "Compra realizada com sucesso!",
    },
    noPurchase: {
      mobile: "Seu carrinho está vazio!",
      desktop: "Seu carrinho está vazio!",
    },
  };

  const getMessage = messages[status][message];

  const renderedText = (
    <Box display="flex">
      <Typography
        font-size={theme.fontSize.xg}
        font-weight={theme.fontWeight.bold}
        color={theme.colors.primary}
        line-height={isMobile ? "30.24px" : "16.34px"}
        text-align="center"
        dangerouslySetInnerHTML={{ __html: getMessage }}
      />
    </Box>
  );

  const imageSrc = havePurchase ? FinalizePurchases : WithoutItems;

  return isSearchPage ? (
    <Box
      display="flex"
      flex-direction="column"
      align-items="center"
      justify-content="space-around"
      padding={isMobile ? "64px 0" : "64px"}
      gap={"32px"}
      border-radius={theme.border.radius.small}
    >
      <Typography
        font-size={theme.fontSize.xg}
        font-weight={theme.fontWeight.bold}
        color={theme.colors.primary}
        line-height={isMobile ? "30.24px" : "16.34px"}
        text-align="center"
      >
        Não encontramos nada por aqui!
      </Typography>
      <Image src={NotFoundMovies} alt="" width={getSizes.widthImage} />
      <Button
        display="flex"
        align-items="center"
        justify-content="center"
        gap={theme.gaps.lg}
        height="40px"
        width="250px"
        padding={theme.paddings.xxs}
        background={theme.colors.tertiary}
        border-radius={theme.border.radius.small}
        border="none"
        onClick={handleBackHome}
      >
        <Typography
          font-size={theme.fontSize.sm}
          font-weight={theme.fontWeight.bold}
          color={theme.colors.primary}
          line-height="19.07px"
        >
          Voltar
        </Typography>
      </Button>
    </Box>
  ) : (
    <Box
      display="flex"
      flex-direction="column"
      align-items="center"
      justify-content="space-around"
      padding={isMobile ? "64px 0" : "64px"}
      gap={"32px"}
      border-radius={theme.border.radius.small}
    >
      {renderedText}
      <Image src={imageSrc} alt="" width={getSizes.widthImage} />
      {!havePurchase && (
        <Button
          display="flex"
          align-items="center"
          justify-content="center"
          gap={theme.gaps.lg}
          height="40px"
          width="250px"
          padding={theme.paddings.xxs}
          background={theme.colors.tertiary}
          border-radius={theme.border.radius.small}
          border="none"
          onClick={handleBackHome}
        >
          <Typography
            font-size={theme.fontSize.sm}
            font-weight={theme.fontWeight.bold}
            color={theme.colors.primary}
            line-height="19.07px"
          >
            Voltar
          </Typography>
        </Button>
      )}
    </Box>
  );
}
