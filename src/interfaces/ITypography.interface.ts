import { HTMLAttributes, ReactNode } from "react";

import { IStyleableComponentProps } from "./IStyles.interface";

export type ITypographyProps = HTMLAttributes<HTMLParagraphElement> &
  IStyleableComponentProps & {
    children: ReactNode;
  };
