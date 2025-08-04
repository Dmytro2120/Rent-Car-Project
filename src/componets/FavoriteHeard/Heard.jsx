import React, { useState } from "react";

export const Heard = ({ onClick, value = false }) => {
  const handleClick = () => {
    const newValue = !value;
    onClick?.(newValue);
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...value}
      >
        <path
          fill={value ? "#ED3F3F" : "#D9D9D9"}
          d="M14.44.1C12.63.1 11.01.98 10 2.33A5.549 5.549 0 0 0 5.56.1C2.49.1 0 2.6 0 5.69 0 6.88.19 7.98.52 9c1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0C13.03 16.99 17.9 14 19.48 9c.33-1.02.52-2.12.52-3.31C20 2.6 17.51.1 14.44.1Z"
        />
      </svg>
    </div>
  );
};
