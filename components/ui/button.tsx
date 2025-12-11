import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "[background:var(--button-default-bg)] [color:var(--button-default-text)] hover:[background:var(--button-default-bg-hover)] active:[background:var(--button-default-bg-active)] border-0",
        secondary:
          "bg-transparent [border:1.5px_solid_var(--button-secondary-border)] [color:var(--button-secondary-text)] hover:[background:var(--button-secondary-hover)] active:[background:var(--button-secondary-active)] disabled:opacity-50",
        cancel:
          "bg-transparent [border:1px_solid_var(--button-cancel-border)] [color:var(--button-cancel-text)] hover:[background:var(--button-cancel-hover)] active:[background:var(--button-cancel-active)] focus-visible:ring-[var(--button-cancel-focus)]/50",
        text:
          "bg-transparent border-0 [color:var(--button-text-text)] hover:[background:var(--button-text-hover)] hover:[color:var(--button-text-text-hover)] active:[background:var(--button-text-active)] active:[color:var(--button-text-text-active)] focus-visible:bg-transparent focus-visible:[color:var(--button-text-text)] disabled:bg-transparent disabled:[color:var(--button-text-text)] disabled:opacity-50",
        link:
          "bg-transparent border-0 [color:var(--button-link-text)] underline underline-offset-2 [text-decoration-thickness:1px] hover:[color:var(--button-link-text-hover)] hover:[text-decoration-thickness:1.5px] active:[color:var(--button-link-text-active)] active:[text-decoration-thickness:2px] focus-visible:bg-transparent focus-visible:[color:var(--button-link-text)] focus-visible:[text-decoration-thickness:1px] disabled:no-underline disabled:[color:var(--button-link-text)] disabled:opacity-50",
        icon:
          "[background:var(--button-icon-bg)] [border:1px_solid_var(--button-icon-border)] [color:var(--button-icon-text)] hover:[background:var(--button-icon-hover)] active:[background:var(--button-icon-active)] disabled:opacity-50",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };