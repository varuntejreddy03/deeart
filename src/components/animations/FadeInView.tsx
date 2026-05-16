import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/utils/cn";

type FadeInViewProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function FadeInView({ children, className, delay = 0, ...props }: FadeInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: "easeOut", delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
