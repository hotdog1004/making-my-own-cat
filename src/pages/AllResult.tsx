import React from 'react';
import MainLayout from 'layouts/MainLayout';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import resultList from './contents/resultList';
import specialCat from '../assets/special_cat_3.png';

const AllResult = () => {
  const movePage = useNavigate();

  return (
    <MainLayout>
      <div className="flex flex-col items-center mb-5">
        <p className="text-xl my-4 mb-1">😺😺😺</p>
        <p className="text-xl font-semibold">전체 유형 보기</p>
      </div>
      <div className="flex flex-col items-center mb-10">
        {resultList.map((result, index) => (
          <div
            key={index}
            className="flex items-center border-solid border-slate-900 border-2 rounded-lg w-[95%] h-full min-h-48 pr-1 m-4"
          >
            <div className="w-32 h-24 overflow-hidden my-4">
              <img
                className="w-full h-full object-contain rounded-lg"
                src={specialCat}
                alt="고양이이미지"
              ></img>
            </div>
            <div className="ml-1">
              <p className="text-sm font-semibold whitespace-pre-line">
                {result.subtitle}
              </p>
              <p className="text-lg font-semibold">
                <p className="inline bg-gradient-to-b from-transparent from-30% to-amber-300 to-70%">
                  {result.title}
                </p>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <Button
          onClick={() => {
            movePage('/');
          }}
          type="yellow"
        >
          테스트 다시 하기
        </Button>
      </div>
    </MainLayout>
  );
};

export default AllResult;
