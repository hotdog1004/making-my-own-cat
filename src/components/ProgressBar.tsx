import React from 'react';

const ProgressBar = (props: { totalNumber: number; currentNumber: number }) => {
  const getCompleted = (totalNumber: number, currentNumber: number) => {
    return 100 * (currentNumber / totalNumber);
  };
  return (
    <div className="h-3 w-96 bg-white rounded-lg mt-14 mb-16 ">
      <div
        style={{
          width: `${getCompleted(props.totalNumber, props.currentNumber)}%`,
        }}
        className="h-full bg-amber-300 rounded-lg transition-all duration-1000 ease-out delay-75"
      ></div>
    </div>
  );
};

export default ProgressBar;
