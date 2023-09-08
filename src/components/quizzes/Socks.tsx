import React, { Fragment, useState } from 'react';
import contents from '../../pages/contents/questions';
import RadioGroup from 'components/RadioGroup';
import Button from 'components/Button';
import { FunnelProp } from 'pages/QuizFunnel';
const Socks = ({ onNext }: FunnelProp) => {
  return (
    <>
      <RadioGroup question={contents[1]} />
      <div className="flex absolute w-full max-w-sm bottom-0">
        <Button onClick={(e) => onNext(e)} disabled={false}>
          완료
        </Button>
      </div>
    </>
  );
};

export default Socks;
