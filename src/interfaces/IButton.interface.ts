import { ComponentProps, ReactNode } from "react";

import { IStyleableComponentProps } from "./IStyles.interface";

export type IButtonProps = ComponentProps<"button"> & IStyleableComponentProps;
