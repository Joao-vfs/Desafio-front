import styled from "styled-components";

import { IStyledProps } from "@/interfaces/IStyles.interface";

export const ButtonCustom = styled.button<IStyledProps>`
  ${(props) => Object.entries(props).map(([key, value]) => `${key}: ${value};`)}
  &:active {
    transform: scale(0.9);
  }
`;
