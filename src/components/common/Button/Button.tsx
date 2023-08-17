import React from 'react';

// --button-font-size: 1.25rem;
// --button-padding: 16px 20px;
// --button-radius: 12px;
// width: 100%;
// margin: 8px 0px 8px 0px;
//   border: none;
//   cursor: pointer;
//   font-family: "Noto Sans KR", sans-serif;
//   font-size: var(--button-font-size, 1rem);
//   padding: var(--button-padding, 12px 16px);
//   border-radius: var(--button-radius, 8px);
//   color: var(--black);
//   background: var(--button-bg-color, var(--main-color));

//   &:active,
//   &:hover,
//   &:focus {
//     background: var(--button-hover-bg-color, #bfa92a);
//   }

//   &:disabled {
//     cursor: default;
//     opacity: 0.5;
//     background: var(--button-bg-color, #4d4d4);
//   }
interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
}
const Button = ({ onClick, children, disabled }: ButtonProps) => {
  return (
    <button
      className="rounded-lg m-2 bg-amber-300 cursor-pointer text-xl py-4 px-5 w-full"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
