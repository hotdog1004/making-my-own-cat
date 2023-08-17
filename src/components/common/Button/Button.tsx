import React from 'react';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
}
const Button = ({ onClick, children, disabled }: ButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
