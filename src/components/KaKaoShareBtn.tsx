import React from 'react';
import kakaoBtn from '../assets/button_kakao.svg';

interface KakaoBtnProps {
  title: string;
  image: string;
  resultType: number;
}
const KaKaoShareBtn = ({ title, image, resultType }: KakaoBtnProps) => {
  const shareKakaoMessage = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '제목제목',
        description: '설명~~~',
        imageUrl: '',
        link: {
          webUrl: 'http://localhost:3000/',
          mobileWebUrl: 'http://localhost:3000/',
        },
      },
      buttons: [
        {
          title: '결과보기',
          link: {
            webUrl: `http://localhost:3000/result/?type=${resultType}`,
            mobileWebUrl: `http://localhost:3000/result/?type=${resultType}`,
          },
        },
        {
          title: '테스트하기',
          link: {
            webUrl: 'http://localhost:3000/',
            mobileWebUrl: 'http://localhost:3000/',
          },
        },
      ],
    });
  };
  return (
    <button
      type="button"
      className="cursor-pointer rounded-lg px-3"
      onClick={shareKakaoMessage}
    >
      <div className="flex items-center">
        <img className="w-10" src={kakaoBtn} alt="카카오링크 보내기 버튼" />
        <span className="font-bold px-3 text-slate-600">공유하기</span>
      </div>
    </button>
  );
};

export default KaKaoShareBtn;
