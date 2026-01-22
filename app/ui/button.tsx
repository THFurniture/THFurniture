import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "~/lib/utils";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  showArrow?: boolean;
  children?: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  showArrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-[0.1em] uppercase transition-all duration-300 cursor-pointer overflow-hidden relative group rounded-full";

  const variants = {
    primary:
      "bg-[#2E2C2A] text-white border border-[#2E2C2A] hover:bg-neutral-800",
    secondary:
      "bg-white text-[#2E2C2A] border border-transparent shadow-sm hover:shadow-md",
    outline:
      "bg-transparent text-[#2E2C2A] border border-[#2E2C2A] hover:bg-[#2E2C2A] hover:text-white",
    ghost:
      "bg-transparent text-[#2E2C2A] border-transparent hover:bg-black/5",
  };

  const sizes = {
    sm: "px-5 py-2 text-[10px]",
    md: "px-8 py-3.5 text-xs",
    lg: "px-10 py-4 text-sm",
    xl: "px-12 py-5 text-base",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && (
          <motion.svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
          >
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        )}
      </span>

      {/* Premium Hover Effect Background */}
      <div className="absolute inset-0 z-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
}

