import useProps from "@/app/hooks/useProps";
import { COLOR_CLASS_GROUPS, FONT_SIZE_CLASSES } from "..";
import { IconProps } from ".";

export default function Hamburger({ color, size, ...otherProps }: IconProps) {
  const { className } = useProps(otherProps);

  return (
    <i
      {...otherProps}
      className={(color ? [COLOR_CLASS_GROUPS[color].fill] : [])
        .concat(size ? FONT_SIZE_CLASSES[size] : [])
        .concat(className ? className : [])
        .join(" ")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        height="1em"
        width="1em"
        zoomAndPan="magnify"
        viewBox="0 0 375 374.999991"
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
      >
        <defs>
          <clipPath id="10c01f94e8">
            <path
              d="M 0 273 L 375 273 L 375 320.796875 L 0 320.796875 Z M 0 273"
              clipRule="nonzero"
            />
          </clipPath>
          <clipPath id="f707cc47fe">
            <path
              d="M 0 54.546875 L 375 54.546875 L 375 102 L 0 102 Z M 0 54.546875"
              clipRule="nonzero"
            />
          </clipPath>
        </defs>
        <path
          fill="inherit"
          d="M 352.058594 164.179688 L 23.289062 164.179688 C 10.320312 164.179688 -0.195312 174.695312 -0.195312 187.671875 C -0.195312 200.644531 10.320312 211.164062 23.289062 211.164062 L 352.058594 211.164062 C 365.03125 211.164062 375.542969 200.644531 375.542969 187.671875 C 375.542969 174.695312 365.03125 164.179688 352.058594 164.179688 Z M 352.058594 164.179688"
          fillOpacity="1"
          fillRule="nonzero"
        />
        <g clipPath="url(#10c01f94e8)">
          <path
            fill="inherit"
            d="M 352.058594 273.808594 L 23.289062 273.808594 C 10.320312 273.808594 -0.195312 284.328125 -0.195312 297.304688 C -0.195312 310.277344 10.320312 320.796875 23.289062 320.796875 L 352.058594 320.796875 C 365.03125 320.796875 375.542969 310.277344 375.542969 297.304688 C 375.542969 284.328125 365.03125 273.808594 352.058594 273.808594 Z M 352.058594 273.808594"
            fillOpacity="1"
            fillRule="nonzero"
          />
        </g>
        <g clipPath="url(#f707cc47fe)">
          <path
            fill="inherit"
            d="M 23.289062 101.53125 L 352.058594 101.53125 C 365.03125 101.53125 375.542969 91.015625 375.542969 78.039062 C 375.542969 65.0625 365.03125 54.546875 352.058594 54.546875 L 23.289062 54.546875 C 10.320312 54.546875 -0.195312 65.0625 -0.195312 78.039062 C -0.195312 91.015625 10.320312 101.53125 23.289062 101.53125 Z M 23.289062 101.53125"
            fillOpacity="1"
            fillRule="nonzero"
          />
        </g>
      </svg>
    </i>
  );
}
