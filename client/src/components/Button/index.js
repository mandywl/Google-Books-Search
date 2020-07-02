import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button({ size, type = "default", className, children, onClick }) {
  return (
    <div className="text-right">
      <button
        onClick={onClick}
        className={[`btn ${size}`, `btn-${type}`, className].join(" ")}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
