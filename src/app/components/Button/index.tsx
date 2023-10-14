import { HTMLAttributes } from "react";
import useProps from "../../hooks/useProps";
import {
  AppColor,
  BORDER_SIZES_CLASSES,
  COLOR_CLASS_GROUPS,
  FONT_SIZE_CLASSES,
  Size,
  getCombinedClassName,
} from "..";

const PADDING_CLASS_GROUPS: Record<Size, string> = {
  [Size.XS]: "px-1 py-0.5",
  [Size.SM]: "px-2 py-1",
  [Size.MD]: "px-3 py-1.5",
  [Size.LG]: "px-4 py-2",
  [Size.XL]: "px-5 py-2.5",
  [Size.XL2]: "px-6 py-3",
};

type BorderProp = boolean | number | undefined;

interface ButtonAttributes {
  color?: AppColor;
  size?: Size;
  dark?: boolean;
  primary?: boolean;
  rounded?: boolean;
  border?: BorderProp;
  shadow?: boolean;
  threeD?: boolean;
}
export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    ButtonAttributes {
  // `color` needs to be explicitly specified because `color` of types
  // 'HTMLAttributes<HTMLButtonElement>' and 'ButtonAttributes' are
  // not identical
  color?: AppColor;
}

export default function Button({
  size,
  color,
  dark,
  primary,
  rounded,
  border,
  shadow,
  threeD,
  children,
  ...otherProps
}: ButtonProps) {
  const { className } = useProps(
    otherProps,
    getButtonClassName({
      size,
      color,
      dark,
      primary,
      rounded,
      border,
      shadow,
      threeD,
    }),
  );
  return (
    <button {...otherProps} className={className}>
      {children}
    </button>
  );
}

export function getButtonClassName({
  size = Size.MD,
  color = AppColor.PRIMARY,
  dark,
  primary,
  rounded,
  border = true,
  shadow = true,
  threeD = false,
}: ButtonAttributes) {
  return getCombinedClassName(
    getBorderClass(border),
    getColorClasses({ color, dark, primary, rounded }),
    rounded ? "rounded-full" : "rounded-md",
    PADDING_CLASS_GROUPS[size],
    FONT_SIZE_CLASSES[size],
    "transition-all",
    shadow ? "hover:shadow-md" : "",
    threeD
      ? "hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
      : "active:shadow-none",
  );
}

function getBorderClass(border: BorderProp) {
  if (typeof border === "number") {
    return BORDER_SIZES_CLASSES[border] || `border-[${border}px]`;
  }
  return border ? "border" : "border-0";
}

function getColorClasses({
  color = AppColor.PRIMARY,
  dark,
  primary,
}: Pick<ButtonAttributes, "color" | "dark" | "primary" | "rounded">) {
  return getCombinedClassName(
    COLOR_CLASS_GROUPS[AppColor.TERTIARY].border,
    primary
      ? `${COLOR_CLASS_GROUPS[color].background} ${
          dark ? "text-black" : "text-white"
        }`
      : `bg-transparent ${COLOR_CLASS_GROUPS[color].text}`,
  );
}
