import React from "react";
import { IStyleableComponentProps } from "@/interfaces/IStyles.interface";
import { Container } from "./Box.styles";
import { processStyleProps } from "@/utils/utils";

const Box = ({ children, ...props }: Readonly<IStyleableComponentProps>) => {
  const styledBox = processStyleProps(props);

  return <Container {...styledBox}>{children}</Container>;
};

export default Box;
