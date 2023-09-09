import React from 'react';

type widthType = Record<number, string>;
const width: widthType = {
  1: 'w-[16%]',
  2: 'w-[32%]',
  3: 'w-[48%]',
  4: 'w-[64%]',
  5: 'w-[80%]',
  6: 'w-[100%]',
};
const ProgressBar = (props: { completed: number }) => {
  return (
    <div className="h-3 w-96 bg-slate-200 rounded-lg mt-2 mb-16 ">
      <div
        className={`h-full bg-amber-300 rounded-lg ${
          width[props.completed]
        } transition-all duration-1000 ease-out delay-75`}
      ></div>
    </div>
  );
};

export default ProgressBar;
