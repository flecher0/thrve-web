import { Bars3Icon } from "@heroicons/react/24/solid";
import useProps from "@/app/hooks/useProps";
import { AppColor, Size, getCombinedClassName } from "..";
import { COLOR_CLASS_GROUPS } from "..";

// Height for each size is set to match the line height
// of each font size. See FONT_SIZE_CLASSES for details
const ICON_SIZE_CLASSES: Record<Size, string> = {
  [Size.XS]: "h-4",
  // height: 1rem; /* 16px */
  [Size.SM]: "h-5",
  // height: 1.25rem; /* 20px */
  [Size.MD]: "h-6",
  // height: 1.5rem; /* 24px */
  [Size.LG]: "h-7",
  // height: 1.75rem; /* 28px */
  [Size.XL]: "h-7",
  // height: 1.75rem; /* 28px */
  [Size.XL2]: "h-8",
  // height: 2rem; /* 32px */
};

export enum IconType {
  HAMBURGER = "hamburger",
}
export interface IconProps {
  color?: AppColor;
  size?: Size;
  type?: IconType;
}

export default function Icon({
  color = AppColor.PRIMARY,
  size = Size.MD,
  type = IconType.HAMBURGER,
  ...otherProps
}: IconProps) {
  const { className } = useProps(otherProps);
  switch (type) {
    case IconType.HAMBURGER:
    default:
      return (
        <Bars3Icon
          className={getCombinedClassName(
            ICON_SIZE_CLASSES[size],
            COLOR_CLASS_GROUPS[color].fill,
            className,
          )}
        />
      );
  }
}
