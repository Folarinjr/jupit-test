import * as React from "react";
import { SVGProps } from "react";
const SvgVector = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 36 40"
    {...props}
  >
    <path
      fill="#1C1D93"
      d="M13.022 7.556a2.489 2.489 0 0 0 0 4.977h13.903l-3.218 3.218a2.49 2.49 0 0 0 3.52 3.52l7.466-7.467a2.489 2.489 0 0 0 0-3.52L27.226.819a2.489 2.489 0 1 0-3.52 3.52l3.219 3.218H13.022ZM22.978 32.444a2.489 2.489 0 1 0 0-4.977H9.075l3.218-3.218a2.49 2.49 0 1 0-3.52-3.52l-7.466 7.467a2.489 2.489 0 0 0 0 3.52l7.467 7.466a2.489 2.489 0 0 0 3.519-3.52l-3.218-3.218h13.903Z"
    />
  </svg>
);
export default SvgVector;
