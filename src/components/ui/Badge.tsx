import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const badgeVariants = cva("inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors", {
  variants: {
    variant: {
      default: "border-primary/35 bg-primary/10 text-primary",
      cream: "border-[#0F0E0C]/10 bg-[#0F0E0C]/8 text-[#0F0E0C]",
      dark: "border-white/10 bg-white/8 text-[#F5F0E8]"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, className }))} {...props} />;
}
