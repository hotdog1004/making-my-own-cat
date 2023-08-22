import React, { useState } from 'react';
import contents from './contents/questions';
import Button from 'components/Button';
import ProgressBar from 'components/ProgressBar';
const Quiz = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [completed, setCompleted] = useState(1);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setQuestionNum(questionNum + 1);
    setCompleted(completed + 1);
  };
  return (
    <>
      <div className="mb-16">
        <ProgressBar completed={completed} />
        <div className="text-2xl mx-2 mt-16 mb-32 text-center">
          {contents[questionNum].question}
        </div>
        <div className="grid grid-cols-2 justify-center place-items-center	">
          {contents[questionNum].answers.map((answer, i) => (
            <div
              className="flex items-center relative justify-center border-2 border-solid border-slate-300 m-3 rounded-md w-32 h-24"
              key={i}
            >
              {answer}
            </div>
          ))}
        </div>
      </div>

      <div className="flex">
        <Button onClick={(e) => onClick(e)} disabled={false}>
          선택완료
        </Button>
      </div>
    </>
  );
};

export default Quiz;
