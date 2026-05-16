import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type TextRevealProps = {
  lines: string[];
  className?: string;
};

export function TextReveal({ lines, className }: TextRevealProps) {
  return (
    <span className={cn("block overflow-hidden", className)}>
      {lines.map((line, index) => (
        <span key={line} className="block overflow-hidden pb-2">
          <motion.span
            className="block"
            initial={{ x: index % 2 === 0 ? "-102%" : "102%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.58 + index * 0.24 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
