import React from "react";
import { IBoxProps } from "@/interfaces/IBox.inteface";
import { Container } from "./Box.styles";
import { processStyleProps } from "@/utils/utils";

const Box = ({ children, ...props }: Readonly<IBoxProps>) => {
  const styledBox = processStyleProps(props);

  return <Container {...styledBox}>{children}</Container>;
};

export default Box;
