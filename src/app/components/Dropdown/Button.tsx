import { Menu } from "@headlessui/react";
import useProps from "../../hooks/useProps";
import { AppColor, Size } from "..";
import { ButtonProps, getButtonClassName } from "../Button";

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
    <Menu.Button {...otherProps} className={className}>
      {children}
    </Menu.Button>
  );
}
