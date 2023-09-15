import ProgressBar from 'components/ProgressBar';
import React, { useState } from 'react';
import questionList from './contents/questionList';
import Button from 'components/Button';
const QuizPage = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [completed, setCompleted] = useState(1);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    setQuestionNumber(questionNumber + 1);
    setCompleted(completed + 1);
  };
  return (
    <>
      <div className="mb-32 pb-12">
        <ProgressBar completed={completed} />
        <div className="flex text-xl mx-2 my-20 justify-center font-semibold">
          {questionList[questionNumber].content}
        </div>
        <div className="flex flex-wrap justify-center w-full">
          {questionList[questionNumber].answers.map((answer, index) => (
            <>
              <Button onClick={(e) => onClick(e)}>{answer.content}</Button>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuizPage;
