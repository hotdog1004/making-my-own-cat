import React, { Fragment, useState } from 'react';
import contents from '../../pages/contents/questions';
import RadioGroup from 'components/RadioGroup';
import Button from 'components/Button';
import { FunnelProp } from 'pages/QuizFunnel';
const Socks = ({ onNext }: FunnelProp) => {
  const [selectedValue, setSelectedValue] = useState(contents[1].answers[0].id);
  return (
    <>
      <RadioGroup
        question={contents[1]}
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

export default Socks;
