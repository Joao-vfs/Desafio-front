import { HTMLAttributes, ReactNode } from "react";

import { IStyleableComponentProps } from "./IStyles.interface";

export type IButtonProps = HTMLAttributes<HTMLButtonElement> &
  IStyleableComponentProps & {
    children: ReactNode;
  };
