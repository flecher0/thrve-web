import { HTMLAttributes, useMemo } from "react";
import useProps from "@/app/hooks/useProps";
import { AppColor, COLOR_CLASS_GROUPS } from "../utils/color";

export enum ButtonSize {
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
}

interface ButtonProps extends HTMLAttributes<HTMLElement> {
  color?: AppColor;
  size?: ButtonSize;
  dark?: boolean;
  primary?: boolean;
}

export default function Button({
  size = ButtonSize.MEDIUM,
  color = AppColor.PRIMARY,
  dark,
  primary,
  children,
  ...otherProps
}: ButtonProps) {
  const colorClasses = useMemo(
    () =>
      [
        COLOR_CLASS_GROUPS[color].border,
        primary
          ? `${COLOR_CLASS_GROUPS[color].background} ${
              dark ? "text-black" : "text-white"
            }`
          : `bg-transparent ${COLOR_CLASS_GROUPS[color].text}`,
        "hover:opacity-70",
      ].join(" "),
    [color, primary, dark],
  );
  const { className } = useProps(
    otherProps,
    `border ${colorClasses} rounded-md px-3.5 py-2.5 shadow-sm text-${size} transition-all`,
  );

  return (
    <button {...otherProps} className={className}>
      {children}
    </button>
  );
}
