import React from 'react';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  color?: string;
}
const colors = {
  yellow: 'bg-amber-300 hover:bg-[#EBC448]',
  gray: 'bg-gray-200 hover:bg-gray-300',
};
const Button = ({ onClick, children, disabled, color }: ButtonProps) => {
  const buttonColor = () => {
    if (color === undefined) return `${colors['yellow']}`;
    else return `${colors['gray']}`;
  };
  return (
    <button
      className={`rounded-lg m-2 bg-amber-300 cursor-pointer font-bold  py-4 px-5 w-full disabled:cursor-default disabled:opacity-50 disabled:bg-slate-300 ${buttonColor()}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
