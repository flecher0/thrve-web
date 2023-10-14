import { Menu } from "@headlessui/react";
import useProps from "../../hooks/useProps";
import { ButtonProps, getButtonClassName } from "../Button";

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
    <Menu.Button {...otherProps} className={className}>
      {children}
    </Menu.Button>
  );
}
