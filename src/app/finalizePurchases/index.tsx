import Image from "next/image";

import Box from "@/global/layout/Box";
import Text from "@/global/Typography/Text/Text";

import FinalizePurchases from "@/assets/images/Group 34.svg";

import { Button, Loading } from "@/components";
import { useTheme } from "styled-components";

export default function FinalizePurchasesPage({
  handleBackHome,
  isLoading,
  isMobile,
}: {
  handleBackHome: () => void;
  isLoading: boolean;
  isMobile: boolean;
}) {
  const theme = useTheme();
  const renderTextMobile = () => {
    if (isMobile) {
      return (
        <Box display="flex">
          <Text
            fontSize={theme.fontSize.lg}
            fontWeight={theme.fontWeight.bold}
            color={theme.colors.dark}
            lineHeight={"30.24px"}
            textAlign="center"
          >
            Compra realizada <br /> com sucesso!
          </Text>
        </Box>
      );
    } else {
      return (
        <Text
          fontSize={theme.fontSize.lg}
          fontWeight={theme.fontWeight.bold}
          color={theme.colors.dark}
          lineHeight={"16.34px"}
        >
          Compra realizada com sucesso!
        </Text>
      );
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <Box
      backGround={theme.colors.primary}
      display="flex"
      flexDirection
      alignItems="center"
      justifyContent="space-between"
      minWidth={isMobile ? "343px" : "960px"}
      minHeight={isMobile ? "574px" : "532px"}
      padding={isMobile ? "64px 0" : "64px"}
      gap={"32px"}
      borderRadius={theme.borderRadius.small}
    >
      {renderTextMobile()}
      <Image src={FinalizePurchases} alt="" />
      <Button
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={theme.gaps.lg}
        height={"40px"}
        width={"180px"}
        padding={theme.paddings.xxs}
        backGround={theme.colors.tertiary}
        borderRadius={theme.borderRadius.small}
        border={"none"}
        onClick={handleBackHome}
      >
        <Text
          fontSize={theme.fontSize.sm}
          fontWeight={theme.fontWeight.bold}
          color={theme.colors.primary}
          lineHeight={"19.07px"}
        >
          Voltar
        </Text>
      </Button>
    </Box>
  );
}
