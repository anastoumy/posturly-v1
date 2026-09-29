import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function CartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20 8H6" />
      <circle cx="9" cy="21" r="1.4" />
      <circle cx="17" cy="21" r="1.4" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

export function StarIcon({ filled = true, ...props }: IconProps & { filled?: boolean }) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.4}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L12 3.5z"
      />
    </svg>
  );
}

export function MinusIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function TrashIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13" />
    </svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 7h11v9H2zM13 10h4l3 3v3h-7z" />
      <circle cx="6" cy="18.5" r="1.7" />
      <circle cx="16.5" cy="18.5" r="1.7" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 21c9-1 13-6 14-15-9 1-13 6-14 15z" />
      <path d="M5 21c1.5-4.5 4.5-7.5 9-9" />
    </svg>
  );
}

export function AlignIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6h16M4 12h10M4 18h16" />
    </svg>
  );
}

export function FeatherIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 4c-6 0-14 4-14 12 0 2 1 4 4 4 8 0 12-8 12-14 0-1 0-2-2-2z" />
      <path d="M9 15l6-6M6 20l4-4" />
    </svg>
  );
}

export function EyeOffIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 3l18 18" />
      <path d="M10.6 5.1A10.5 10.5 0 0 1 12 5c5 0 9 3.5 10 7-.5 1.5-1.4 3-2.7 4.2M6.1 6.6C4 8 2.4 10.1 2 12c1 3.5 5 7 10 7 1.2 0 2.3-.2 3.4-.5" />
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
    </svg>
  );
}

export function SlidersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6h6M14 6h6M4 12h10M18 12h2M4 18h2M10 18h10" />
      <circle cx="12" cy="6" r="2" />
      <circle cx="16" cy="12" r="2" />
      <circle cx="8" cy="18" r="2" />
    </svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5M3 8l9 5 9-5" opacity="0" />
      <path d="M3 12l9 5 9-5" />
      <path d="M3 17l9 5 9-5" opacity="0" />
    </svg>
  );
}

export function GripIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="8" cy="6" r="1.3" />
      <circle cx="16" cy="6" r="1.3" />
      <circle cx="8" cy="12" r="1.3" />
      <circle cx="16" cy="12" r="1.3" />
      <circle cx="8" cy="18" r="1.3" />
      <circle cx="16" cy="18" r="1.3" />
    </svg>
  );
}

export function WindIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8h11a3 3 0 1 0-3-3M3 14h15a3 3 0 1 1-3 3M3 20h9" />
    </svg>
  );
}

export function TimerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l3 2M10 2h4" />
    </svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
    </svg>
  );
}

export const benefitIconMap: Record<string, (props: IconProps) => React.ReactElement> = {
  align: AlignIcon,
  feather: FeatherIcon,
  "eye-off": EyeOffIcon,
  sliders: SlidersIcon,
  layers: LayersIcon,
  grip: GripIcon,
  wind: WindIcon,
  timer: TimerIcon,
  shield: ShieldCheckIcon,
  briefcase: BriefcaseIcon,
};
