import { HTMLAttributes } from "react";
import useProps from "../../hooks/useProps";
import { AppColor, COLOR_CLASS_GROUPS, Size } from "..";

const PADDING_CLASS_GROUPS: Record<Size, string> = {
  [Size.XS]: "px-1 py-0.5",
  [Size.SM]: "px-2 py-1",
  [Size.MD]: "px-3 py-1.5",
  [Size.LG]: "px-4 py-2",
  [Size.XL]: "px-5 py-2.5",
  [Size.XL2]: "px-6 py-3",
};
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color?: AppColor;
  size?: Size;
  dark?: boolean;
  primary?: boolean;
  rounded?: boolean;
}

export default function Button({
  size = Size.MD,
  color = AppColor.PRIMARY,
  dark,
  primary,
  rounded,
  children,
  ...otherProps
}: ButtonProps) {
  const { className } = useProps(
    otherProps,
    getButtonClassName({ size, color, dark, primary, rounded }),
  );
  return (
    <button {...otherProps} className={className}>
      {children}
    </button>
  );
}

export function getButtonClassName({
  size = Size.MD,
  color,
  dark,
  primary,
  rounded,
}: Pick<ButtonProps, "size" | "color" | "dark" | "primary" | "rounded">) {
  return `border ${getColorClasses({ color, dark, primary, rounded })} ${
    PADDING_CLASS_GROUPS[size]
  } shadow-sm text-${size} transition-all`;
}

function getColorClasses({
  color = AppColor.PRIMARY,
  dark,
  primary,
  rounded,
}: Pick<ButtonProps, "color" | "dark" | "primary" | "rounded">) {
  return [
    COLOR_CLASS_GROUPS[color].border,
    primary
      ? `${COLOR_CLASS_GROUPS[color].background} ${
          dark ? "text-black" : "text-white"
        }`
      : `bg-transparent ${COLOR_CLASS_GROUPS[color].text}`,
    rounded ? "rounded-full" : "rounded-md",
    "hover:opacity-70",
  ].join(" ");
}
