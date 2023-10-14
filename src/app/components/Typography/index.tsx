import { HTMLAttributes } from "react";
import { AppColor, Size } from "..";
import Title from "./Title";

export interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  color?: AppColor;
  size?: Size;
  bold?: boolean;
}

export { Title };
