import colors from "tailwindcss/colors";

// Tailwind CSS works by scanning all of your HTML, JavaScript components,
// and any other template files for class names, then generating all of
// the corresponding CSS for those styles.
// In order for Tailwind to generate all of the CSS you need, it needs to
// know about every single file in your project that contains any Tailwind
// class names. Classes dynamically formed by concatenation will not be
// generated because they are incomplete, broken strings.
// Therefore, any class depending on a specific enum value needs to be
// defined as complete string values in the object.
// source: https://tailwindcss.com/docs/content-configuration#dynamic-class-names

export type Color = keyof typeof colors;

export enum AppColor {
  PRIMARY = "orange",
  BLACK = "black",
}

interface ColorClassGroup {
  background: string;
  border: string;
  fill: string;
  text: string;
}

export const COLOR_CLASS_GROUPS: Record<AppColor, ColorClassGroup> = {
  [AppColor.PRIMARY]: {
    background: "bg-orange-500",
    border: "border-orange-500",
    fill: "fill-orange-500",
    text: "text-orange-500",
  },
  [AppColor.BLACK]: {
    background: "bg-black-500",
    border: "border-black-500",
    fill: "fill-black-500",
    text: "text-black-500",
  },
};

// Text Sizes
export enum Size {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
  XL2 = "2xl",
}

export const FONT_SIZE_CLASSES = {
  [Size.XS]: "text-xs",
  [Size.SM]: "text-sm",
  [Size.MD]: "text-base",
  [Size.LG]: "text-lg",
  [Size.XL]: "text-xl",
  [Size.XL2]: "text-2xl",
};
