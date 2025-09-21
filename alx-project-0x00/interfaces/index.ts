export interface PillProps {
  title: string;
}
export interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full";
  styles?: string; // 👈 add this so you can pass custom Tailwind styles
}
