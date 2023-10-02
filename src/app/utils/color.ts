import colors from "tailwindcss/colors";

export type Color = keyof typeof colors;

export enum AppColor {
  PRIMARY = "orange",
}

interface ColorClassGroup {
  background: string;
  border: string;
  text: string;
}

// Tailwind CSS works by scanning all of your HTML, JavaScript components,
// and any other template files for class names, then generating all of
// the corresponding CSS for those styles.
// In order for Tailwind to generate all of the CSS you need, it needs to
// know about every single file in your project that contains any Tailwind
// class names. Classes dynamically formed by concatenation will not be
// generated because they are incomplete, broken strings.
// source: https://tailwindcss.com/docs/content-configuration#dynamic-class-names
export const COLOR_CLASS_GROUPS: Record<AppColor, ColorClassGroup> = {
  [AppColor.PRIMARY]: {
    background: "bg-orange-500",
    border: "border-orange-500",
    text: "text-orange-500",
  },
};
