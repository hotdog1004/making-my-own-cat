import React, { useEffect } from 'react';
import MainLayout from 'layouts/MainLayout';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import cat from '../assets/cat.png';
import bubble from '../assets/bubble.png';
const Home = () => {
  const movePage = useNavigate();
  const onClick = () => {
    movePage('/quiz');
  };

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO);
    }
  }, [window.Kakao]);
  return (
    <MainLayout>
      <div className="flex flex-col items-center	justify-center h-full">
        <img className="w-9/12" src={bubble} alt="말풍선이미지"></img>
        <img className="w-1/2" src={cat} alt="고양이이미지"></img>
      </div>
      <div className="flex absolute w-full max-w-sm bottom-0 pb-8">
        <Button onClick={() => onClick()} disabled={false} type="move">
          내 고양이 만나러가기
        </Button>
      </div>
    </MainLayout>
  );
};

export default Home;
