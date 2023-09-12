import React, { useState } from 'react';
import Button from 'components/Button';
import RadioGroup from 'components/RadioGroup';
import contents from '../../pages/contents/questions';
import { FunnelProp } from 'pages/QuizFunnel';

const Jewel = ({ onNext }: FunnelProp) => {
  const [selectedValue, setSelectedValue] = useState(contents[4].answers[0].id);
  return (
    <>
      <RadioGroup
        question={contents[4]}
        onChange={(data) => {
          setSelectedValue(data);
        }}
      />
      <div className="flex absolute w-full max-w-sm bottom-0">
        <Button onClick={(e) => onNext(e, selectedValue)} disabled={false}>
          완료
        </Button>
      </div>
    </>
  );
};

export default Jewel;
