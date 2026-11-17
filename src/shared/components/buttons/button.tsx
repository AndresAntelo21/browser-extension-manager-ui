import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};

export default function Button({
  active = false,
  children,
  className = "",
  disabled = false,
  type = "button",
  ...props
}: ButtonProps) {
  const activeClasses =
    "border-transparent bg-red-700 text-neutral-0 dark:bg-red-500 dark:text-neutral-800 disabled:bg-red-500 dark:disabled:bg-red-500";
  const inactiveClasses =
    "border-border-card bg-neutral-0 text-neutral-900 shadow-sm dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-0 disabled:bg-neutral-100 disabled:text-neutral-600 disabled:shadow-none dark:disabled:border-neutral-600 dark:disabled:bg-neutral-700 dark:disabled:text-neutral-0";

  return (
    <button
      {...props}
      type={type}
      aria-pressed={active}
      disabled={disabled}
      className={`inline-flex h-11 items-center justify-center rounded-full border px-5 text-preset-5 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 disabled:cursor-not-allowed ${active ? activeClasses : inactiveClasses} ${className}`}
    >
      {children}
    </button>
  );
}
