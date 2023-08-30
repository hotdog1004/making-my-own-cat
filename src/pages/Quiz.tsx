import React, { Fragment, useState } from 'react';
import contents from './contents/questions';
import Button from 'components/Button';
import ProgressBar from 'components/ProgressBar';
import Checkbox from 'components/Checkbox';
const Quiz = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [completed, setCompleted] = useState(1);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setQuestionNum(questionNum + 1);
    setCompleted(completed + 1);
  };
  const [name, setName] = useState('');
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const changeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('체크박스 change');
    console.log(e.target.id);
  };
  return (
    <>
      <div className="mb-32 pb-12">
        <ProgressBar completed={completed} />
        <div className="text-2xl mx-2 mt-16 text-center">
          {contents[questionNum].question}
        </div>
        <div className="flex flex-wrap justify-center w-full">
          {contents[questionNum].answers.map((answer, index) => (
            <Fragment key={index}>
              {contents[questionNum].type === 'check' ? (
                <Checkbox
                  id={answer}
                  checked={true}
                  img="test"
                  onChange={(e) => changeCheck(e)}
                />
              ) : contents[questionNum].type === 'radio' ? (
                <div className="flex items-center justify-center border-2 border-solid border-slate-300 m-3 rounded-md w-40 h-32">
                  {answer} 라디오
                </div>
              ) : (
                <div className="flex">
                  <input
                    type="text"
                    value={name}
                    onChange={changeInput}
                    className="w-full border-solid border-2  rounded border-gray-400 p-3 m-2"
                  />
                </div>
              )}
            </Fragment>
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
