import useProps from "@/app/hooks/useProps";
import {
  AppColor,
  COLOR_CLASS_GROUPS,
  HEADING_SIZE_CLASSES,
  Size,
  getCombinedClassName,
} from "..";
import { TypographyProps } from ".";

export default function Title({
  color = AppColor.SECONDARY,
  size = Size.XL,
  bold,
  children,
  ...otherProps
}: TypographyProps) {
  const { className } = useProps(
    otherProps,
    getCombinedClassName(
      COLOR_CLASS_GROUPS[color].text,
      HEADING_SIZE_CLASSES[size],
      bold ? "font-semibold" : "",
    ),
  );
  switch (size) {
    case Size.LG:
      return (
        <h2 {...otherProps} className={className}>
          {children}
        </h2>
      );
    case Size.MD:
      return (
        <h3 {...otherProps} className={className}>
          {children}
        </h3>
      );
    case Size.SM:
      return (
        <h4 {...otherProps} className={className}>
          {children}
        </h4>
      );
    case Size.XS:
      return (
        <h5 {...otherProps} className={className}>
          {children}
        </h5>
      );
    case Size.XL2:
    case Size.XL:
    default:
      return (
        <h1 {...otherProps} className={className}>
          {children}
        </h1>
      );
  }
}
