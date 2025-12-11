import * as React from "react";
import { cn } from "./utils";

interface InputWithIconProps extends React.ComponentProps<"input"> {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  error?: boolean;
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
  ({ className, leadingIcon, trailingIcon, error, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);

    // Determine icon color based on state
    const getIconColor = (isTrailing: boolean = false) => {
      if (props.disabled) return "var(--input-icon-disabled)";
      if (error && isTrailing) return "var(--input-icon-error)";
      if (error) return "var(--input-icon-default)";
      if (isFocused) return "var(--input-icon-focus)";
      if (isHovered) return "var(--input-icon-hover)";
      return "var(--input-icon-default)";
    };

    return (
      <div
        className={cn(
          "relative flex items-center w-full",
          "h-[var(--input-height)]",
          "rounded-[var(--input-radius)]",
          "border-[1px]",
          "transition-all duration-200",
          
          // Default state
          "[background:var(--input-default-bg)]",
          "[border-color:var(--input-default-border)]",
          
          // Hover state
          "hover:[border-color:var(--input-hover-border)]",
          
          // Focus-within state (when input is focused)
          "focus-within:[border-color:var(--input-focus-border)]",
          
          // Disabled state
          props.disabled && [
            "[background:var(--input-disabled-bg)]",
            "[border-color:var(--input-disabled-border)]",
            "opacity-[var(--input-disabled-opacity)]",
            "cursor-not-allowed",
          ],
          
          // Error state
          error && [
            "[border-color:var(--input-error-border)]",
            "focus-within:[border-color:var(--input-error-border)]",
          ],
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Leading Icon */}
        {leadingIcon && (
          <div 
            className="absolute left-3 flex items-center justify-center pointer-events-none"
            style={{ color: getIconColor(false) }}
          >
            {leadingIcon}
          </div>
        )}

        {/* Input Field */}
        <input
          ref={ref}
          className={cn(
            "flex-1 h-full bg-transparent border-0 outline-none",
            "font-family-[Noto_Sans] text-[var(--text-body-sm)] font-[var(--font-weight-normal)]",
            "[color:var(--input-default-text)]",
            "placeholder:[color:var(--input-placeholder)]",
            "disabled:[color:var(--input-disabled-text)]",
            "selection:bg-primary selection:text-primary-foreground",
            
            // Adjust padding based on icons
            leadingIcon ? "pl-10" : "pl-3",
            trailingIcon ? "pr-10" : "pr-3",
            
            className,
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-invalid={error}
          {...props}
        />

        {/* Trailing Icon */}
        {trailingIcon && (
          <div 
            className="absolute right-3 flex items-center justify-center"
            style={{ color: getIconColor(true) }}
          >
            {trailingIcon}
          </div>
        )}
      </div>
    );
  }
);

InputWithIcon.displayName = "InputWithIcon";

export { InputWithIcon };