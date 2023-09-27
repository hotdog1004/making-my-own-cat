import Button from 'components/Button';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import specialCat from '../assets/special_cat_3.png';
const ErrorPage = () => {
  const movePage = useNavigate();

  return (
    <MainLayout>
      <div className="flex flex-col items-center	justify-center h-full">
        <p className="text-xl font-semibold my-4">
          저런! 잘못된 주소로 접근하셨어요!
        </p>
        <img
          className="w-1/2 rounded-lg"
          src={specialCat}
          alt="고양이이미지"
        ></img>
        <p className="my-4">들어오신 김에 저희집 고양이 좀 보고가세요 😜😜😜</p>
      </div>

      <div className="flex absolute w-full max-w-sm bottom-0">
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
    </MainLayout>
  );
};

export default ErrorPage;
