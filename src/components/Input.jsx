import React, { forwardRef } from "react";

const Input = forwardRef(({ type = "text", placeholder, value, onChange, className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
});

export default Input;
