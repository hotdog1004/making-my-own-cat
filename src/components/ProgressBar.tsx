import React from 'react';

const ProgressBar = (props: { totalNumber: number; currentNumber: number }) => {
  const getCompleted = (totalNumber: number, currentNumber: number) => {
    return 100 * (currentNumber / totalNumber);
  };
  return (
    <div className="mt-14 flex flex-col items-center justify-center">
      <span className="text-lg font-semibold">
        {props.currentNumber}/{props.totalNumber}
      </span>
      <div className="h-3 w-96 bg-white rounded-lg mt-2">
        <div
          style={{
            width: `${getCompleted(props.totalNumber, props.currentNumber)}%`,
          }}
          className="h-full bg-amber-300 rounded-lg transition-all duration-1000 ease-out delay-75"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
