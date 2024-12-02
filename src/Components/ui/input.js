import React from "react";

export function Input({ type = "text", placeholder, className, ...props }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${className}`}
            {...props}
        />
    );
}
