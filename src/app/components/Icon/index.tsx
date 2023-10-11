import { AppColor, Size } from "..";
import Hamburger from "./Hamburger";

export enum IconType {
  HAMBURGER = "hamburger",
}

export interface IconProps {
  color?: AppColor;
  size?: Size;
  type?: IconType;
}

export default function Icon({
  color,
  size,
  type = IconType.HAMBURGER,
  ...otherProps
}: IconProps) {
  switch (type) {
    case IconType.HAMBURGER:
    default:
      return <Hamburger color={color} size={size} {...otherProps} />;
  }
}
