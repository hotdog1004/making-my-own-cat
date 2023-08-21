import React, { useState } from 'react';
import contents from './contents/questions';
import Button from 'components/Button';
const Quiz = () => {
  const [questionNum, setQuestionNum] = useState(0);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setQuestionNum(questionNum + 1);
  };
  return (
    <>
      <div>
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
