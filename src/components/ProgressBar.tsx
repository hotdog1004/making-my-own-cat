import React from 'react';

type widthType = Record<number, string>;
const width: widthType = {
  1: 'w-[20%]',
  2: 'w-[40%]',
  3: 'w-[60%]',
  4: 'w-[80%]',
  5: 'w-[100%]',
};
const ProgressBar = (props: { completed: number }) => {
  return (
    <div className="h-4 w-96 bg-slate-200 rounded-lg mb-20">
      <div
        className={`h-full bg-amber-300 rounded-lg ${
          width[props.completed]
        } transition-all duration-1000 ease-out delay-75`}
      ></div>
    </div>
  );
};

export default ProgressBar;
