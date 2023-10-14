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
  SECONDARY = "neutral",
  TERTIARY = "zinc",
  BLACK = "black",
}

interface ColorPropertyGroup {
  background: string;
  border: string;
  fill: string;
  text: string;
}

interface ColorClassGroup extends ColorPropertyGroup {
  active: ColorPropertyGroup;
  focus: ColorPropertyGroup;
  hover: ColorPropertyGroup;
}

export const COLOR_CLASS_GROUPS: Record<AppColor, ColorClassGroup> = {
  [AppColor.PRIMARY]: {
    background: "bg-orange-500",
    border: "border-orange-500",
    fill: "fill-orange-500",
    text: "text-orange-500",
    active: {
      background: "hover:bg-orange-500",
      border: "hover:border-orange-500",
      fill: "hover:fill-orange-500",
      text: "hover:text-orange-500",
    },
    focus: {
      background: "hover:bg-orange-500",
      border: "hover:border-orange-500",
      fill: "hover:fill-orange-500",
      text: "hover:text-orange-500",
    },
    hover: {
      background: "hover:bg-orange-500",
      border: "hover:border-orange-500",
      fill: "hover:fill-orange-500",
      text: "hover:text-orange-500",
    },
  },
  [AppColor.SECONDARY]: {
    background: "bg-indigo-500",
    border: "border-indigo-500",
    fill: "fill-indigo-500",
    text: "text-indigo-500",
    active: {
      background: "hover:bg-indigo-500",
      border: "hover:border-indigo-500",
      fill: "hover:fill-indigo-500",
      text: "hover:text-indigo-500",
    },
    focus: {
      background: "hover:bg-indigo-500",
      border: "hover:border-indigo-500",
      fill: "hover:fill-indigo-500",
      text: "hover:text-indigo-500",
    },
    hover: {
      background: "hover:bg-indigo-500",
      border: "hover:border-indigo-500",
      fill: "hover:fill-indigo-500",
      text: "hover:text-indigo-500",
    },
  },
  [AppColor.TERTIARY]: {
    background: "bg-zinc-200",
    border: "border-zinc-200",
    fill: "fill-zinc-200",
    text: "text-zinc-200",
    active: {
      background: "hover:bg-zinc-200",
      border: "hover:border-zinc-200",
      fill: "hover:fill-zinc-200",
      text: "hover:text-zinc-200",
    },
    focus: {
      background: "hover:bg-zinc-200",
      border: "hover:border-zinc-200",
      fill: "hover:fill-zinc-200",
      text: "hover:text-zinc-200",
    },
    hover: {
      background: "hover:bg-zinc-200",
      border: "hover:border-zinc-200",
      fill: "hover:fill-zinc-200",
      text: "hover:text-zinc-200",
    },
  },
  [AppColor.BLACK]: {
    background: "bg-black-500",
    border: "border-black-500",
    fill: "fill-black-500",
    text: "text-black-500",
    active: {
      background: "hover:bg-black-500",
      border: "hover:border-black-500",
      fill: "hover:fill-black-500",
      text: "hover:text-black-500",
    },
    focus: {
      background: "hover:bg-black-500",
      border: "hover:border-black-500",
      fill: "hover:fill-black-500",
      text: "hover:text-black-500",
    },
    hover: {
      background: "hover:bg-black-500",
      border: "hover:border-black-500",
      fill: "hover:fill-black-500",
      text: "hover:text-black-500",
    },
  },
};

// Universal Sizes
export enum Size {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
  XL2 = "2xl",
}

// Text Sizes
export const FONT_SIZE_CLASSES: Record<Size, string> = {
  [Size.XS]: "text-xs",
  // font-size: 0.75rem; /* 12px */
  // line-height: 1rem; /* 16px */
  [Size.SM]: "text-sm",
  // font-size: 0.875rem; /* 14px */
  // line-height: 1.25rem; /* 20px */
  [Size.MD]: "text-base",
  // font-size: 1rem; /* 16px */
  // line-height: 1.5rem; /* 24px */
  [Size.LG]: "text-lg",
  // font-size: 1.125rem; /* 18px */
  // line-height: 1.75rem; /* 28px */
  [Size.XL]: "text-xl",
  // font-size: 1.25rem; /* 20px */
  // line-height: 1.75rem; /* 28px */
  [Size.XL2]: "text-2xl",
  // font-size: 1.5rem; /* 24px */
  // line-height: 2rem; /* 32px */
};

export function getCombinedClassName(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// Border Sizes
export const BORDER_SIZES_CLASSES: Record<number, string> = {
  2: "border-2",
  4: "border-4",
  8: "border-8",
};
