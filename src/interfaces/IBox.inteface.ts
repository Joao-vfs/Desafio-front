import { ComponentProps, ReactNode } from "react";

import { IStyleableComponentProps } from "./IStyles.interface";

export type IBoxProps = ComponentProps<"div"> & IStyleableComponentProps;
