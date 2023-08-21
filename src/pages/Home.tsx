import React from 'react';
import MainLayout from 'layouts/MainLayout';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const movePage = useNavigate();
  const onClick = () => {
    movePage('/quiz');
  };
  return (
    <MainLayout>
      <div className="h-5/6">
        <h2>어느날 우연히 냥줍을 하게 된 당신!</h2>
        <h2>나의 고양이는 어떤 고양이일까?</h2>
        <h2>(=◉ᆽ◉=) </h2>
      </div>
      <div className="flex bottom-0">
        <Button onClick={() => onClick()} disabled={false}>
          내 고양이 만나러가기
        </Button>
      </div>
    </MainLayout>
  );
};

export default Home;
