import HairYellow from '../../assets/answers/hair_color_yellow.svg';
import HairBlack from '../../assets/answers/hair_color_black.svg';
import HairWhite from '../../assets/answers/hair_color_white.svg';
import HairBrown from '../../assets/answers/hair_color_brown.svg';

interface QuestionType {
  id: string;
  question: string;
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
    question: '색상을 선택하세요',
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
    question: '양말 모양을 선택하세요',
    answers: [
      { id: 'black', img: HairBlack },
      { id: 'white', img: HairWhite },
      { id: 'yellow', img: HairYellow },
    ],
    type: 'radio',
  },
  {
    id: 'noseColor',
    question: '코 색깔을 선택하세요',
    answers: [
      { id: 'black', img: '' },
      { id: 'white', img: '' },
    ],
    type: 'radio',
  },
  {
    id: 'jelly',
    question: '젤리를 선택하세요',
    answers: [
      { id: 'black', img: '' },
      { id: 'white', img: '' },
      { id: 'yellow', img: '' },
    ],
    type: 'radio',
  },
  {
    id: 'jewel',
    question: '보석을 선택하세요',
    answers: [
      { id: 'black', img: '' },
      { id: 'white', img: '' },
      { id: 'yellow', img: '' },
      { id: 'brown', img: '' },
    ],
    type: 'radio',
  },
  {
    id: 'name',
    question: '이름을 입력하세요.',
    answers: [{ id: 'name', img: '' }],
    type: 'input',
  },
];

export default questions;
