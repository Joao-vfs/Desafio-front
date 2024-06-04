import { useTheme } from "styled-components";

import * as S from "./SumQuantity.styles";

import Box from "@/global/layout/Box/Box.layout";

import { LessIcon, PlusIcon } from "@/icons";

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
      align-items="center"
      justify-content="flex-start"
      gap={theme.gaps.md}
    >
      <LessIcon onClick={decrement} />
      <S.Input type="text" value={quantity} readOnly />
      <PlusIcon onClick={increment} />
    </Box>
  );
};

export default SumQuantityComponent;
