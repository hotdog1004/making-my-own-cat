import React from 'react';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: 'grey' | 'yellow' | 'light';
}

type buttonType = {
  [key: string]: string;
};

const types: buttonType = {
  light: 'border-solid border-2 bg-white',
  yellow: 'bg-amber-300 hover:bg-[#EBC448]',
  grey: 'bg-slate-100 hover:bg-slate-200',
};
const Button = ({ onClick, children, disabled = false, type }: ButtonProps) => {
  const buttonType = (type?: string) => {
    return type ? types[type] : types['light'];
  };
  return (
    <button
      type="button"
      className={`whitespace-pre-wrap text-center rounded-lg m-2 cursor-pointer font-bold py-4 px-5 w-full disabled:cursor-default disabled:opacity-50 disabled:bg-slate-300 ${buttonType(
        type,
      )}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
