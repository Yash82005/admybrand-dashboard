import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn("px-4 py-2 bg-primary text-white rounded-md", className)}
      {...props}
    />
  );
}