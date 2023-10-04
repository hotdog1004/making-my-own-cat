import React, { useEffect } from 'react';
import MainLayout from 'layouts/MainLayout';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

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
        <h2>어느날 우연히 냥줍을 하게 된 당신!</h2>
        <h2>나와 어울리는 고양이는 어떤 고양이일까?</h2>
        <h2>(=◉ᆽ◉=) </h2>
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
