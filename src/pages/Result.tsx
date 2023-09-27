import React from 'react';
import MainLayout from 'layouts/MainLayout';
import Button from 'components/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import resultList from './contents/resultList';
import KaKaoShareBtn from 'components/KaKaoShareBtn';
import linkCopyBtn from '../assets/button_link_copy.png';
const Result = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const result = Number(searchParams.get('type') ?? '-1');
  const movePage = useNavigate();
  const onClick = () => {
    movePage('/quiz');
  };

  const url = `http://localhost:3000/result/type=${result}`;

  const handleCopyClipBoard = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link);
      alert('링크가 복사되었습니다.');
    } catch (e) {
      alert('링크 복사에 실패하였습니다.');
    }
  };
  if (result >= 0 && result <= resultList.length) {
    return (
      <MainLayout>
        <div className="mt-16 text-center">결과페이지다{result}</div>
        <h3>{resultList[result].type}</h3>

        <div className="flex flex-col absolute w-full max-w-sm bottom-0">
          <div className="flex">
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
              onClick={(e) => {
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
