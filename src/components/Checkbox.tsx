import React from 'react';
interface CheckboxProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  checked: boolean;
  img: string;
}
const Checkbox = ({ id, checked, onChange, img }: CheckboxProps) => {
  return (
    <div
      className={`${
        checked ? 'border-slate-950' : 'border-slate-300'
      } flex items-center justify-center border-2 border-solid  m-3 rounded-md w-40 h-32`}
    >
      <input
        id={id}
        checked={checked}
        onChange={onChange}
        type="checkbox"
        className="hidden"
      />
      <label htmlFor={id} className="cursor-pointer checked:bg-gray-950">
        <img src={img} className="w-32 h-32" />
      </label>
    </div>
  );
};

export default Checkbox;
