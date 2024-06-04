import React from "react";
import * as S from "./Typography.styles";

import { ITypographyProps } from "@/interfaces/ITypography.interface";

import { processStyleProps } from "@/utils/utils";

const Typography = ({ children, ...props }: Readonly<ITypographyProps>) => {
  const styledTypography = processStyleProps(props);

  return <S.Typography {...styledTypography}>{children}</S.Typography>;
};

export default Typography;
