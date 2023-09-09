import React from 'react';
import Button from 'components/Button';
import RadioGroup from 'components/RadioGroup';
import contents from '../../pages/contents/questions';
import { FunnelProp } from 'pages/QuizFunnel';

const Jelly = ({ onNext }: FunnelProp) => {
  return (
    <>
      <RadioGroup question={contents[3]} />
      <div className="flex absolute w-full max-w-sm bottom-0">
        <Button onClick={(e) => onNext(e)} disabled={false}>
          완료
        </Button>
      </div>
    </>
  );
};

export default Jelly;
