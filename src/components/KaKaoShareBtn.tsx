import React from 'react';
import kakaoBtn from '../assets/button_kakao.svg';
import cat from 'images/cat.png';

interface KakaoBtnProps {
  subtitle: string;
  title: string;
  image: string;
  resultType: number;
}
const KaKaoShareBtn = ({
  subtitle,
  title,
  image,
  resultType,
}: KakaoBtnProps) => {
  const shareKakaoMessage = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: `${subtitle} '${title}'`,
        description:
          '나에게 맞는 고양이를 찾아보자!\n나와 맞는 고양이는 어떤 유형일까?',
        imageUrl: 'https://find-my-cat.netlify.app/images/cat.webp',
        link: {
          webUrl: 'https://find-my-cat.netlify.app',
          mobileWebUrl: 'https://find-my-cat.netlify.app',
        },
      },
      buttons: [
        {
          title: '결과보기',
          link: {
            webUrl: `https://find-my-cat.netlify.app/result?type=${resultType}`,
            mobileWebUrl: `https://find-my-cat.netlify.app/result?type=${resultType}`,
          },
        },
        {
          title: '테스트하기',
          link: {
            webUrl: 'https://find-my-cat.netlify.app',
            mobileWebUrl: 'https://find-my-cat.netlify.app',
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
