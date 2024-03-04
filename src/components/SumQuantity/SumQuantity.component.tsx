import { useTheme } from "styled-components";

import * as S from "./SumQuantity.styles";

import Box from "@/global/layout/Box";

import { LessIcon } from "@/icons/less.icon";
import { PlusIcon } from "@/icons/plus.icon";

import { ISumQuantityProps } from "@/interfaces/ISumQuantity.interface";

const SumQuantityComponent = ({
  decrement,
  increment,
  quantity,
}: Readonly<ISumQuantityProps>) => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      gap={theme.gaps.md}
    >
      <S.IcLess onClick={decrement}>
        <LessIcon />
      </S.IcLess>
      <S.Input type="text" value={quantity} readOnly />
      <S.IcPlus onClick={increment}>
        <PlusIcon />
      </S.IcPlus>
    </Box>
  );
};

export default SumQuantityComponent;
