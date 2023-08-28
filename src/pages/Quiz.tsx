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
  const [name, setName] = useState('');
  return (
    <>
      <div className="mb-32 pb-12">
        <ProgressBar completed={completed} />
        <div className="text-2xl mx-2 mt-16 text-center">
          {contents[questionNum].question}
        </div>

        <div className="flex flex-wrap justify-center">
          {contents[questionNum].answers.map((answer, index) => (
            <>
              {contents[questionNum].type === 'check' ? (
                <div
                  className="flex items-center justify-center border-2 border-solid border-slate-300 m-3 rounded-md w-40 h-32"
                  key={index}
                >
                  {answer} 체크
                </div>
              ) : contents[questionNum].type === 'radio' ? (
                <div
                  className="flex items-center justify-center border-2 border-solid border-slate-300 m-3 rounded-md w-40 h-32"
                  key={index}
                >
                  {answer} 라디오
                </div>
              ) : (
                <div>
                  <input type="text" value={name} className="" />
                </div>
              )}
            </>
          ))}
        </div>
      </div>

      <div className="flex absolute w-full max-w-sm bottom-0">
        <Button onClick={(e) => onClick(e)} disabled={false}>
          완료
        </Button>
      </div>
    </>
  );
};

export default Quiz;
