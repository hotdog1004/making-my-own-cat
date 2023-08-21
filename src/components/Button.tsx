import React from 'react';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
}
const Button = ({ onClick, children, disabled }: ButtonProps) => {
  return (
    <button
      className="rounded-lg m-2 bg-amber-300 cursor-pointer font-bold  py-4 px-5 w-full hover:bg-[#EBC448] disabled:cursor-default disabled:opacity-50 disabled:bg-slate-300"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
