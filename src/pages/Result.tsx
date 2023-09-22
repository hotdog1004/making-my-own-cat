import React from 'react';
import MainLayout from 'layouts/MainLayout';
import Button from 'components/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import resultList from './contents/resultList';

const Result = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const result = Number(searchParams.get('type') ?? '-1');
  const movePage = useNavigate();
  const onClick = () => {
    movePage('/quiz');
  };

  if (result >= 0 && result <= resultList.length) {
    return (
      <MainLayout>
        <div className="mt-16 text-center">결과페이지다{result}</div>
        <h3>{resultList[result].type}</h3>
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
  } else {
    return (
      <MainLayout>
        <div className="mt-16 text-center">잘못된 결과</div>
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
  }
};

export default Result;
