import React from 'react';
import MainLayout from 'layouts/MainLayout';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const movePage = useNavigate();
  const onClick = () => {
    movePage('/quiz');
  };
  return (
    <MainLayout>
      <div className="mt-16 text-center">결과페이지다</div>
      <div className="flex absolute w-full max-w-sm bottom-0">
        <Button
          onClick={(e) => {
            onClick();
          }}
          disabled={false}
          color="gray"
        >
          테스트 다시 하기
        </Button>
      </div>
    </MainLayout>
  );
};

export default Result;
