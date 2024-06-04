import { CSSProperties } from "styled-components";

export interface IStyleableComponentProps extends CSSProperties {
  children?: React.ReactNode;
}

export type ICSSPropertiesKeys = keyof CSSProperties;

export type IStyledProps = Partial<
  Record<ICSSPropertiesKeys, string | number | undefined>
>;
