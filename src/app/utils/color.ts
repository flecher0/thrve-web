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

export const COLOR_CLASS_GROUPS: Record<AppColor, ColorClassGroup> = {
  [AppColor.PRIMARY]: {
    background: "bg-orange-500",
    border: "border-orange-500",
    text: "text-orange-500",
  },
};
