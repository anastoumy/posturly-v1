import Link from "next/link";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-charcoal text-[var(--color-background)] hover:bg-[var(--color-mint-dark)] hover:text-[var(--color-charcoal)]",
  secondary:
    "bg-[var(--color-mint)] text-[var(--color-charcoal)] hover:bg-[var(--color-mint-dark)]",
  outline:
    "bg-transparent border border-[var(--color-border-strong)] text-[var(--color-ink)] hover:border-[var(--color-ink)]",
  ghost:
    "bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-mint-pale)]",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-[13px] gap-1.5",
  md: "px-6 py-3.5 text-sm gap-2",
  lg: "px-8 py-4.5 text-base gap-2.5",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof BaseProps> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "btn-primary inline-flex items-center justify-center rounded-full font-medium tracking-wide cursor-pointer whitespace-nowrap select-none min-h-[44px]",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}

export function IconButton({
  as: As = "button",
  className,
  children,
  ...rest
}: {
  as?: ElementType;
  className?: string;
  children: React.ReactNode;
} & Record<string, unknown>) {
  return (
    <As
      className={cn(
        "inline-flex items-center justify-center rounded-full min-h-[44px] min-w-[44px] cursor-pointer transition-colors duration-200 hover:bg-[var(--color-mint-pale)]",
        className,
      )}
      {...rest}
    >
      {children}
    </As>
  );
}
