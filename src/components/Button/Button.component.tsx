import * as S from "./Button.styles";

import { IButtonProps } from "@/interfaces/IButton.interface";

import { processStyleProps } from "@/utils/utils";

export default function ButtonComponent({
  children,
  ...props
}: Readonly<IButtonProps>) {
  const styledButton = processStyleProps(props);

  return <S.ButtonCustom {...styledButton}>{children}</S.ButtonCustom>;
}
