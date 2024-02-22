import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import { buttonVariants } from "../shadcn-ui/button";

const SectionHeaderVariants = cva("flex", {
  variants: {
    button: {
      default: "flex-col gap-4",
      withButton:
        "flex-col min-[448px]:flex-row items-center space-y-1  justify-center min-[448px]:justify-between",
    },
  },
  defaultVariants: {
    button: "default",
  },
});

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  title: string;
  description?: string;
  subtitle?: string;
  label?: string;
  href?: string;
  withButton?: boolean;
}

export default function SectionHeader({
  title,
  description,
  subtitle,
  className,
  withButton,
  label,
  href,
  ...props
}: SectionHeaderProps) {
  if (withButton) {
    return (
      <div
        className={
          cn(
            "min-[448px]:justify-between flex flex-col items-center justify-center w-full  space-y-1 min-[448px]:flex-row mb-8", className
          )
        }
      >
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-start">
          {title}
        </h2>
        {label && href && (
        <Link className={buttonVariants({ variant: "link" })} href={`${href}`}>
          {label} &rarr;
        </Link>
      )}
      </div>
    );
  }
  return (
    <div className={cn("flex flex-col gap-4 mb-8", className)} {...props}>
      {subtitle && <span className="font-semibold">{subtitle}</span>}
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-start">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-prose text-center text-lg text-muted-foreground lg:text-start",
            className,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
