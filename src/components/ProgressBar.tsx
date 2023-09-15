import React from 'react';

type widthType = Record<number, string>;
const width: widthType = {
  1: 'w-[11%]',
  2: 'w-[22%]',
  3: 'w-[33%]',
  4: 'w-[44%]',
  5: 'w-[55%]',
  6: 'w-[66%]',
  7: 'w-[77%]',
  8: 'w-[88%]',
  9: 'w-[100%]',
};
const ProgressBar = (props: { completed: number }) => {
  return (
    <div className="h-3 w-96 bg-slate-200 rounded-lg mt-14 mb-16 ">
      <div
        className={`h-full bg-amber-300 rounded-lg ${
          width[props.completed]
        } transition-all duration-1000 ease-out delay-75`}
      ></div>
    </div>
  );
};

export default ProgressBar;
