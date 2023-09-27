import React from 'react';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: string;
}

const types = {
  answer: 'border-solid border-2 bg-white',
  move: 'bg-amber-300 hover:bg-[#EBC448]',
};
const Button = ({ onClick, children, disabled, type }: ButtonProps) => {
  const buttonType = (type?: string) => {
    if (type === undefined) return `${types['answer']}`;
    else return `${types['move']}`;
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
