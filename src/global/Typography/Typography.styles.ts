import styled from "styled-components";

import { IStyledProps } from "@/interfaces/IStyles.interface";

export const Typography = styled.p<IStyledProps>`
  ${(props) => Object.entries(props).map(([key, value]) => `${key}: ${value};`)}
`;
