import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md text-sm font-semibold transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#C8A96E] text-[#0F0E0C] font-semibold shadow-[0_18px_42px_rgba(200,169,110,.24)] hover:bg-[#A88540] hover:shadow-[0_24px_60px_rgba(200,169,110,.24)]",
        secondary:
          "border-[1.5px] border-[rgba(200,169,110,0.5)] bg-transparent text-[#C8A96E] backdrop-blur hover:border-[#C8A96E] hover:bg-[rgba(200,169,110,0.08)]",
        ghost: "bg-transparent text-[#C8A96E] hover:bg-[rgba(200,169,110,0.08)] hover:text-[#C8A96E]",
        outline: "border border-[#C8A96E] bg-transparent text-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#0F0E0C] [.cream-section_&]:border-[#0F0E0C] [.cream-section_&]:text-[#0F0E0C] [.cream-section_&]:hover:bg-[#0F0E0C] [.cream-section_&]:hover:text-[#F5F0E8]",
        dark: "bg-[#0F0E0C] !text-[#F5F0E8] hover:bg-[#1C1A16] hover:!text-[#F5F0E8]"
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-5",
        lg: "h-12 px-7 text-base",
        icon: "h-11 w-11"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
  }
);

Button.displayName = "Button";

export { buttonVariants };
