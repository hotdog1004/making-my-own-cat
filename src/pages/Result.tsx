import React from 'react';
import MainLayout from 'layouts/MainLayout';
import Button from 'components/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import resultList from './contents/resultList';
import KaKaoShareBtn from 'components/KaKaoShareBtn';
import linkCopyBtn from '../assets/button_link_copy.png';
import ErrorPage from './ErrorPage';
import specialCat from '../assets/special_cat_3.png';

const Result = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const result = Number(searchParams.get('type') ?? '-1');
  const movePage = useNavigate();

  const url = `http://localhost:3000/result/type=${result}`;

  const handleCopyClipBoard = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link);
      alert('링크가 복사되었습니다.');
    } catch (e) {
      alert('링크 복사에 실패하였습니다.');
    }
  };

  if (result >= 0 && result < resultList.length) {
    return (
      <MainLayout>
        <div className="mt-16 text-center text-slate-600 font-semibold">
          {resultList[result].subtitle}
        </div>
        <p className="text-2xl font-bold text-center">
          <mark className="inline-block	pb-2 bg-amber-300	leading-[0.5rem]">
            {resultList[result].title}
          </mark>
        </p>
        <div className="flex flex-col items-center	justify-center my-3">
          <img
            className="w-1/2 rounded-lg"
            src={specialCat}
            alt="고양이이미지"
          ></img>
        </div>
        <div className="whitespace-pre-line	my-6">
          {resultList[result].content}
        </div>

        <div className="flex flex-col w-full max-w-sm bottom-0">
          <div className="flex">
            <Button
              onClick={() => {
                movePage('/');
              }}
              disabled={false}
              type="move"
            >
              테스트 다시 하기
            </Button>
          </div>
          <div className="flex justify-center mt-2">
            <KaKaoShareBtn
              subtitle={resultList[result].subtitle}
              title={resultList[result].title}
              image={resultList[result].img}
              resultType={result}
            />
            <button
              type="button"
              className="cursor-pointer rounded-lg px-3"
              onClick={() => {
                handleCopyClipBoard(url);
              }}
            >
              <div className="flex items-center">
                <img
                  className="w-10"
                  src={linkCopyBtn}
                  alt="링크 복사하기 버튼"
                />
                <span className="font-bold px-3 text-slate-600">
                  링크 복사하기
                </span>
              </div>
            </button>
          </div>
        </div>
        <p className="text-sm text-center text-slate-600 my-6">
          Copyright 2023. Gyeol all rights reserved.
        </p>
      </MainLayout>
    );
  } else {
    return <ErrorPage />;
  }
};

export default Result;
