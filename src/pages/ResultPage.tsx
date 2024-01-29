import React from 'react';
import MainLayout from 'layouts/MainLayout';
import Button from 'components/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import resultList from './contents/resultList';
import KaKaoShareBtn from 'components/KaKaoShareBtn';
import linkCopyBtn from '../assets/button_link_copy.png';
import ErrorPage from './ErrorPage';

const ResultPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const result = Number(searchParams.get('type') ?? '-1');
  const movePage = useNavigate();

  const url = `https://find-my-cat.netlify.app/result?type=${result}`;

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
        <div className="text-center">
          <p className="text-2xl font-bold inline bg-gradient-to-b from-transparent from-30% to-amber-300 to-70%">
            {resultList[result].title}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center my-3">
          <img
            className="w-3/4 rounded-lg"
            width={600}
            height={600}
            src={require(`../assets/result/${resultList[result].img}`)}
            alt="고양이이미지"
          />
        </div>
        <div className="whitespace-pre-line	my-6 mx-4">
          {resultList[result].content}
        </div>

        <div className="flex flex-col w-full max-w-sm bottom-0">
          <div className="flex justify-center mt-2 mb-2">
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
          <div className="flex">
            <Button
              onClick={() => {
                movePage('/all');
              }}
              type="grey"
            >
              다른 유형 보러가기
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  } else {
    return <ErrorPage />;
  }
};

export default ResultPage;
