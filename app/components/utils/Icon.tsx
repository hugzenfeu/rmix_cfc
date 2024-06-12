import { type SVGProps } from "react";
//import spriteHref from "app/components/icons/icon.svg";
import spriteHref from "app/components/icons/icon.svg?url";
import { type IconName } from "app/components/icons/types";

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName;
}) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <use href={`${spriteHref}#${name}`} />
    </svg>
  );
}
