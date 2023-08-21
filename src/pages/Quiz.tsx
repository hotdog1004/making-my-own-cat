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
      <div>
        <ProgressBar completed={completed} />
        <h1>{contents[questionNum].question} </h1>
        {contents[questionNum].answers.map((answer, i) => (
          <h2 key={i}>{answer}</h2>
        ))}
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
