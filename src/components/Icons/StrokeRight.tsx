import * as React from "react";
import { SVGProps } from "react";
const SvgStrokeRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 15 14"
    {...props}
  >
    <path
      strokeLinecap="square"
      strokeWidth={2}
      d="m8.41 2 5.09 5m0 0-5.09 5m5.09-5h-12"
    />
  </svg>
);
export default SvgStrokeRight;
