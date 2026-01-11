import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "text";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[#FF5A30] hover:bg-[#E54D26] text-white rounded-full shadow-lg hover:shadow-xl",
    outline: "border-2 border-slate-300 hover:border-slate-400 text-slate-900 rounded-full bg-transparent hover:bg-slate-50",
    ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md",
    text: "text-slate-600 hover:text-slate-900",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
