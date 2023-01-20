import * as React from "react";
import { SVGProps } from "react";
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#F2921D"
      d="M10 .25A9.75 9.75 0 1 0 19.75 10 9.769 9.769 0 0 0 10 .25Zm4.64 8.044-5.493 5.25a.76.76 0 0 1-.525.206.721.721 0 0 1-.516-.206L5.36 10.919A.75.75 0 1 1 6.391 9.83l2.23 2.128 4.988-4.753a.75.75 0 0 1 1.032 1.088Z"
    />
  </svg>
);
export default SvgCheck;
