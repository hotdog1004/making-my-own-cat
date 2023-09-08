import React, { Fragment, useState } from 'react';
import Radio from './Radio';
import { QuestionType } from 'pages/contents/questions';

interface RadioGroupProps {
  question: QuestionType;
}
const RadioGroup = ({ question }: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState('');
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
              onChange={() => setSelectedValue(answer.id)}
              checked={selectedValue == answer.id}
            />
          </Fragment>
        ))}
      </div>
    </>
  );
};
export default RadioGroup;
