import React from 'react';
import MainLayout from 'layouts/MainLayout';
import Button from 'components/Button';

const Result = () => {
  return (
    <MainLayout>
      <div className="mt-16 text-center">결과페이지다</div>
      <div className="flex absolute w-full max-w-sm bottom-0">
        <Button
          onClick={(e) => {
            console.log('테스트 다시하기');
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
