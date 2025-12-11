import * as React from "react";

import { cn } from "./utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Base styles - Boxed design with fixed 40px height
        "flex w-full min-w-0 items-center justify-center",
        "h-[var(--input-height)] px-3",
        "rounded-[var(--input-radius)]",
        "border-[1px]",
        "font-family-[Noto_Sans] text-[var(--text-body-sm)] font-[var(--font-weight-normal)]",
        "transition-all duration-200",
        "outline-none",
        
        // Default state - visible box with surface fill + neutral outline
        "[background:var(--input-default-bg)]",
        "[border-color:var(--input-default-border)]",
        "[color:var(--input-default-text)]",
        
        // Placeholder
        "placeholder:[color:var(--input-placeholder)]",
        
        // Hover state - primary outline
        "hover:[border-color:var(--input-hover-border)]",
        
        // Focus state (Typing) - primary outline strong
        "focus:[border-color:var(--input-focus-border)]",
        "focus:ring-0",
        
        // Filled state - neutral outline (default already handles this)
        "data-[filled=true]:[background:var(--input-filled-bg)]",
        "data-[filled=true]:[border-color:var(--input-filled-border)]",
        
        // Filled Hover state - primary outline
        "data-[filled=true]:hover:[border-color:var(--input-filled-hover-border)]",
        
        // Disabled state - neutral surface + disabled opacity
        "disabled:[background:var(--input-disabled-bg)]",
        "disabled:[border-color:var(--input-disabled-border)]",
        "disabled:[color:var(--input-disabled-text)]",
        "disabled:opacity-[var(--input-disabled-opacity)]",
        "disabled:cursor-not-allowed",
        "disabled:pointer-events-none",
        
        // Error state - error outline
        "aria-invalid:[border-color:var(--input-error-border)]",
        "aria-invalid:focus:[border-color:var(--input-error-border)]",
        
        // Selection
        "selection:bg-primary selection:text-primary-foreground",
        
        // File input styling
        "file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        
        className,
      )}
      {...props}
    />
  );
}

export { Input };