import { cn } from "~/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-semibold transition-all duration-200 cursor-pointer border font-sans";

  const variants = {
    primary:
      "bg-[#2E2C2A] text-white border-[#2E2C2A] hover:bg-[#3A3935] hover:border-[#3A3935]",
    secondary:
      "bg-white text-[#2E2C2A] border-transparent hover:bg-[#F9F7F4] hover:border-transparent",
    outline:
      "bg-transparent text-[#2E2C2A] border-[#2E2C2A] hover:bg-[#F0EEE9]",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

