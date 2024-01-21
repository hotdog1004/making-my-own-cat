/* eslint-disable no-debugger */
import ProgressBar from 'components/ProgressBar';
import React, { Fragment, useState, useEffect } from 'react';
import questionList from './contents/questionList';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import resultList from './contents/resultList';
import MainLayout from 'layouts/MainLayout';

const QuizPage = () => {
  const [resultMap, setResultMap] = useState<Map<string, number>>(
    new Map<string, number>(),
  );
  useEffect(() => {
    if (questionNumber === questionList.length) {
      loadingProcess();
    }
  }, [resultMap]);
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
  const onClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    answerType: string,
  ) => {
    handleAnswerClick(answerType);

    setQuestionNumber(questionNumber + 1);
  };

  const getResultType = () => {
    let result = '';
    resultMap.forEach((value, key) => {
      if (value >= 2) result += key;
    });
    return result;
  };

  const getResultIdx = () => {
    const sortedResult = getResultType().split('').sort().join('');
    const resultIdx = resultList.findIndex((result) => {
      return result.type.split('').sort().join('') === sortedResult;
    });
    return resultIdx;
  };

  const loadingProcess = () => {
    setTimeout(function () {
      movePage(`/result?type=${getResultIdx()}`);
    }, 3000);
  };
  if (questionNumber < questionList.length) {
    return (
      <MainLayout>
        <div className="flex mt-4 justify-end ">
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => {
              movePage('/');
            }}
          >
            <span className="font-bold text-slate-700 mr-1">처음으로</span>
          </button>
        </div>
        <ProgressBar
          totalNumber={questionList.length}
          currentNumber={questionNumber + 1}
        />
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
      </MainLayout>
    );
  } else {
    return (
      <>
        <div className="flex flex-col items-center	justify-center h-full">
          <p className="text-xl font-semibold">
            당신과 맞는 고양이를 찾고 있어요...
          </p>
        </div>
      </>
    );
  }
};

export default QuizPage;
