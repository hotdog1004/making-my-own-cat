import React from 'react';
import MainLayout from 'layouts/MainLayout';

const AllResult = () => {
  const results = Array.from({ length: 16 }, () => 0);
  return (
    <MainLayout>
      <div className="flex flex-col items-center mb-5">
        <p className="text-xl my-4 mb-1">😺😺😺</p>
        <p className="text-xl font-semibold"> 전체 유형 보기</p>
      </div>
      <div className="flex flex-col items-center">
        {results.map((result, index) => (
          <div
            key={index}
            className="flex items-center border-solid border-slate-900 border-2 rounded-lg w-96 h-32 pr-1 mt-4"
          >
            <div className="w-32 h-24">😺</div>
            <div className="ml-1">
              <p className="text-sm">
                집사도 좋지만 나만의 자유시간도 중요하다냥!😺
              </p>
              <p className="text-lg">독립적이고 자유로운 고양이</p>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default AllResult;
