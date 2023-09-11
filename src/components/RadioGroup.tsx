import React, { Fragment, useState } from 'react';
import Radio from './Radio';
import { QuestionType } from 'pages/contents/questions';

interface RadioGroupProps {
  question: QuestionType;
  onChange: (checkedValue: string) => void;
}
const RadioGroup = ({ question, onChange }: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState('');
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.id);
    onChange(e.target.id);
  };
  return (
    <>
      <div className="text-2xl mx-2 mt-16 text-center">{question.content}</div>
      <div className="flex flex-wrap justify-center w-full">
        {question.answers.map((answer) => (
          <Fragment key={answer.id}>
            <Radio
              id={answer.id}
              img={answer.img}
              name={question.id}
              onChange={(e) => changeHandler(e)}
              checked={selectedValue == answer.id}
            />
          </Fragment>
        ))}
      </div>
    </>
  );
};
export default RadioGroup;
