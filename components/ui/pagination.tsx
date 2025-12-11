import * as React from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { cn } from "./utils";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center", className)}
      style={{ gap: "var(--pagination-spacing)" }}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
  size?: "default" | "sm" | "lg";
} & React.ComponentProps<"a">;

function PaginationLink({
  className,
  isActive,
  size = "default",
  ...props
}: PaginationLinkProps) {
  const sizeStyles = {
    sm: { width: "32px", height: "32px", fontSize: "12px" },
    default: { width: "40px", height: "40px", fontSize: "var(--text-body-md)" },
    lg: { width: "48px", height: "48px", fontSize: "16px" },
  };

  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        "inline-flex items-center justify-center transition-colors cursor-pointer",
        "hover:no-underline",
        className,
      )}
      style={{
        backgroundColor: isActive 
          ? "var(--pagination-active-bg)" 
          : "var(--pagination-default-bg)",
        color: isActive 
          ? "var(--pagination-active-text)" 
          : "var(--pagination-default-text)",
        border: isActive 
          ? "none" 
          : "1px solid var(--pagination-default-border)",
        borderRadius: "var(--pagination-radius)",
        fontWeight: isActive 
          ? "var(--font-weight-bold)" 
          : "var(--font-weight-normal)",
        ...sizeStyles[size],
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = "var(--pagination-hover-bg)";
          e.currentTarget.style.color = "var(--pagination-hover-text)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = "var(--pagination-default-bg)";
          e.currentTarget.style.color = "var(--pagination-default-text)";
        }
      }}
      {...props}
    />
  );
}

type PaginationButtonProps = {
  disabled?: boolean;
  size?: "default" | "sm" | "lg";
} & React.ComponentProps<"a">;

function PaginationPrevious({
  className,
  disabled,
  size = "default",
  ...props
}: PaginationButtonProps) {
  const sizeStyles = {
    sm: { width: "32px", height: "32px", iconSize: 14 },
    default: { width: "40px", height: "40px", iconSize: 16 },
    lg: { width: "48px", height: "48px", iconSize: 18 },
  };

  return (
    <a
      aria-label="Go to previous page"
      data-slot="pagination-previous"
      className={cn(
        "inline-flex items-center justify-center transition-colors",
        disabled && "pointer-events-none cursor-not-allowed",
        className,
      )}
      style={{
        backgroundColor: disabled 
          ? "var(--neutral-100)" 
          : "var(--neutral-100)",
        color: disabled 
          ? "var(--neutral-400)" 
          : "var(--neutral-500)",
        border: "1px solid var(--neutral-200)",
        borderRadius: "var(--pagination-radius)",
        ...sizeStyles[size],
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = "var(--pagination-hover-bg)";
          e.currentTarget.style.color = "var(--pagination-hover-text)";
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = "var(--neutral-100)";
          e.currentTarget.style.color = "var(--neutral-500)";
        }
      }}
      {...props}
    >
      <ChevronLeft style={{ width: sizeStyles[size].iconSize, height: sizeStyles[size].iconSize }} />
    </a>
  );
}

function PaginationNext({
  className,
  disabled,
  size = "default",
  ...props
}: PaginationButtonProps) {
  const sizeStyles = {
    sm: { width: "32px", height: "32px", iconSize: 14 },
    default: { width: "40px", height: "40px", iconSize: 16 },
    lg: { width: "48px", height: "48px", iconSize: 18 },
  };

  return (
    <a
      aria-label="Go to next page"
      data-slot="pagination-next"
      className={cn(
        "inline-flex items-center justify-center transition-colors",
        disabled && "pointer-events-none cursor-not-allowed",
        className,
      )}
      style={{
        backgroundColor: disabled 
          ? "var(--neutral-100)" 
          : "var(--neutral-100)",
        color: disabled 
          ? "var(--neutral-400)" 
          : "var(--neutral-500)",
        border: "1px solid var(--neutral-200)",
        borderRadius: "var(--pagination-radius)",
        ...sizeStyles[size],
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = "var(--pagination-hover-bg)";
          e.currentTarget.style.color = "var(--pagination-hover-text)";
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = "var(--neutral-100)";
          e.currentTarget.style.color = "var(--neutral-500)";
        }
      }}
      {...props}
    >
      <ChevronRight style={{ width: sizeStyles[size].iconSize, height: sizeStyles[size].iconSize }} />
    </a>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex items-center justify-center", className)}
      style={{
        color: "var(--pagination-default-text)",
        fontSize: "var(--text-body-md)",
        width: "40px",
        height: "40px",
      }}
      {...props}
    >
      ...
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
