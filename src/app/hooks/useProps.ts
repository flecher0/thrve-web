import { HTMLAttributes, useMemo } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  [key: string]: unknown;
}

export default function useProps<P = Props>(props: P, defaultClass = "") {
  const { className, style } = (props as unknown as Props) ?? {};
  const updatedProps = useMemo(
    () => ({
      ...props,
      className: defaultClass
        ? `${defaultClass ?? ""} ${(className as string) ?? ""}`
        : (className as string) ?? "",
      style: style ?? {},
    }),
    [props, defaultClass, className, style],
  );
  return updatedProps;
}
