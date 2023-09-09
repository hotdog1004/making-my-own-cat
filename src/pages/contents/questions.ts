import HairYellow from '../../assets/answers/hair_color_yellow.svg';
import HairBlack from '../../assets/answers/hair_color_black.svg';
import HairWhite from '../../assets/answers/hair_color_white.svg';
import HairBrown from '../../assets/answers/hair_color_brown.svg';

export interface QuestionType {
  id: string;
  content: string;
  answers: answerType[];
  type: string;
}

interface answerType {
  id: string;
  img: string;
}

const questions: QuestionType[] = [
  {
    id: 'color',
    content: '색상을 선택하세요',
    answers: [
      { id: 'black', img: HairYellow },
      { id: 'white', img: HairBlack },
      { id: 'yellow', img: HairWhite },
      { id: 'brown', img: HairBrown },
    ],
    type: 'check',
  },
  {
    id: 'socks',
    content: '양말 모양을 선택하세요',
    answers: [
      { id: 'black', img: HairBlack },
      { id: 'white', img: HairWhite },
      { id: 'yellow', img: HairYellow },
    ],
    type: 'radio',
  },
  {
    id: 'noseColor',
    content: '코 색깔을 선택하세요',
    answers: [
      { id: 'black', img: HairBlack },
      { id: 'pink', img: HairBrown },
    ],
    type: 'radio',
  },
  {
    id: 'jelly',
    content: '젤리를 선택하세요',
    answers: [
      { id: 'black', img: HairBlack },
      { id: 'white', img: HairWhite },
      { id: 'yellow', img: HairYellow },
    ],
    type: 'radio',
  },
  {
    id: 'jewel',
    content: '보석을 선택하세요',
    answers: [
      { id: 'black', img: HairYellow },
      { id: 'white', img: HairBlack },
      { id: 'yellow', img: HairWhite },
      { id: 'brown', img: HairBrown },
    ],
    type: 'radio',
  },
  {
    id: 'name',
    content: '이름을 입력하세요.',
    answers: [{ id: 'name', img: '' }],
    type: 'input',
  },
];

export default questions;
