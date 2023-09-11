import Button from 'components/Button';
import { FunnelProp } from 'pages/QuizFunnel';
import React, { useState } from 'react';

const Name = ({ onNext }: FunnelProp) => {
  const [catName, setCatName] = useState('');
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCatName(e.target.value);
  };
  return (
    <>
      <div className="text-2xl mx-2 mt-16 text-center">이름을 입력하세요.</div>
      <div className="flex flex-wrap justify-center w-full">
        <input
          type="text"
          value={catName}
          onChange={changeInput}
          className="w-full border-solid border-2  rounded border-gray-400 p-3 m-4"
        />
      </div>
      <div className="flex absolute w-full max-w-sm bottom-0">
        <Button onClick={(e) => onNext(e, catName)} disabled={false}>
          내 고양이 만나러가기
        </Button>
      </div>
    </>
  );
};

export default Name;
