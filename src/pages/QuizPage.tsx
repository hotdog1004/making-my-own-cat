import ProgressBar from 'components/ProgressBar';
import React, { Fragment, useState } from 'react';
import questionList from './contents/questionList';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
const QuizPage = () => {
  const [resultMap, setResultMap] = useState<Map<string, number>>(
    new Map<string, number>(),
  );

  const handleAnswerClick = (answerType: string) => {
    setResultMap((prevResultMap) => {
      const newResultMap = new Map(prevResultMap);
      if (resultMap.has(answerType))
        newResultMap.set(answerType, (newResultMap.get(answerType) || 0) + 1);
      else newResultMap.set(answerType, 1);
      return newResultMap;
    });
  };
  const movePage = useNavigate();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [completed, setCompleted] = useState(1);
  const onClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    answerType: string,
  ) => {
    handleAnswerClick(answerType);
    if (questionNumber === questionList.length - 1) loadingProcess();
    setQuestionNumber(questionNumber + 1);
    setCompleted(completed + 1);
  };

  const loadingProcess = () => {
    console.log('마지막 map 체크 >  ', resultMap);
    setTimeout(function () {
      movePage('/result');
    }, 3000);
  };
  if (questionNumber < questionList.length) {
    return (
      <>
        <div className="mb-32 pb-12">
          <ProgressBar completed={completed} />
          <div className="whitespace-pre-wrap flex text-xl mx-2 my-20 justify-center font-semibold text-center">
            {questionList[questionNumber].content}
          </div>
          <div className="flex flex-wrap justify-center w-full">
            {questionList[questionNumber].answers.map((answer, index) => (
              <Fragment key={index}>
                <Button onClick={(e) => onClick(e, answer.value)}>
                  {answer.content}
                </Button>
              </Fragment>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="mb-32 pb-12">
          <h1>당신과 맞는 고양이를 찾고 있어요...</h1>
        </div>
      </>
    );
  }
};

export default QuizPage;
