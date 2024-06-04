import Image from "next/image";

import { useTheme } from "styled-components";

import Box from "@/global/layout/Box/Box.layout";
import Typography from "@/global/Typography/Typography";

import FinalizePurchases from "@/assets/images/Group 34.svg";
import WithoutItems from "@/assets/images/Group 43.svg";

import { Button } from "@/components";

export default function PurchaseResult({
  handleBackHome,
  isMobile,
  havePurchase = false,
}: {
  handleBackHome: () => void;
  isMobile: boolean;
  havePurchase?: boolean;
}) {
  const theme = useTheme();
  const status = havePurchase ? "success" : "noPurchase";
  const message = isMobile ? "mobile" : "desktop";

  const getSizes = {
    success: {
      height: "532.8px",
      widthImage: 0,
    },
    noPurchase: {
      height: isMobile ? "574px" : "532px",
      widthImage: isMobile ? 344 : 444,
    },
  }[status];

  const messages = {
    success: {
      mobile: "Compra realizada <br /> com sucesso!",
      desktop: "Compra realizada com sucesso!",
    },
    noPurchase: {
      mobile: "Parece que não <br /> há nada por aqui :(",
      desktop: "Parece que não há nada por aqui :(",
    },
  };

  const getMessage = messages[status][message];

  const renderedText = (
    <Box display="flex">
      <Typography
        font-size={theme.fontSize.lg}
        font-weight={theme.fontWeight.bold}
        color={theme.colors.dark}
        line-height={isMobile ? "30.24px" : "16.34px"}
        text-align="center"
      >
        <p dangerouslySetInnerHTML={{ __html: getMessage }} />
      </Typography>
    </Box>
  );

  const imageSrc = havePurchase ? FinalizePurchases : WithoutItems;

  return (
    <Box
      background={theme.colors.primary}
      display="flex"
      flex-direction="column"
      align-items="center"
      justify-content="space-between"
      min-width={isMobile ? "343px" : "960px"}
      min-height={getSizes.height}
      padding={isMobile ? "64px 0" : "64px"}
      gap={"32px"}
      border-radius={theme.border.radius.small}
    >
      {renderedText}
      <Image src={imageSrc} alt="" width={getSizes.widthImage} />
      <Button
        display="flex"
        align-items="center"
        justify-content="center"
        gap={theme.gaps.lg}
        height="40px"
        width="180px"
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
  );
}
