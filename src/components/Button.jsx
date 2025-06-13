import React from "react";

export default function Button({ children, onClick, variant }) {
  const base = " bg-zinc-800 text-zinc-50 rounded-[5px] shadow-sm";

  const variants = {
    primary: "button" + base,
    small: "py-1 px-2.5 text-[12px]" + base,
  };
  return (
    <button onClick={onClick} className={variants[variant]}>
      {children}
    </button>
  );
}
