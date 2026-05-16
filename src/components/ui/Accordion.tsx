import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

export function Accordion({ className, ...props }: AccordionPrimitive.AccordionSingleProps) {
  return <AccordionPrimitive.Root className={cn("space-y-3", className)} {...props} />;
}

export function AccordionItem({ className, ...props }: AccordionPrimitive.AccordionItemProps) {
  return <AccordionPrimitive.Item className={cn("rounded-lg border border-primary/16 bg-white/5 px-5", className)} {...props} />;
}

export function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        className={cn("flex w-full items-center justify-between gap-4 py-5 text-left font-medium text-[#F5F0E8] transition-colors hover:text-primary", className)}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-300 data-[state=open]:rotate-180" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({ className, children, ...props }: AccordionPrimitive.AccordionContentProps) {
  return (
    <AccordionPrimitive.Content className="overflow-hidden text-sm text-[#C4C2BA] data-[state=closed]:animate-none data-[state=open]:animate-none" {...props}>
      <div className={cn("pb-5 leading-7", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}
