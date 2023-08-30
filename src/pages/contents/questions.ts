interface QuestionType {
  id: string;
  question: string;
  answers: string[];
  type: string;
}

const questions: QuestionType[] = [
  {
    id: 'color',
    question: '색상을 선택하세요',
    answers: ['답변1', '답변2', '답변3', '답변4'],
    type: 'check',
  },
  {
    id: 'socks',
    question: '양말 모양을 선택하세요',
    answers: ['답변1', '답변2', '답변3', '답변4'],
    type: 'radio',
  },
  {
    id: 'noseColor',
    question: '코 색깔을 선택하세요',
    answers: ['답변1', '답변2'],
    type: 'radio',
  },
  {
    id: 'jelly',
    question: '젤리를 선택하세요',
    answers: ['답변1', '답변2', '답변3'],
    type: 'radio',
  },
  {
    id: 'jewel',
    question: '보석을 선택하세요',
    answers: ['답변1', '답변2', '답변3', '답변4'],
    type: 'radio',
  },
  {
    id: 'name',
    question: '이름을 입력하세요.',
    answers: ['name'],
    type: 'input',
  },
];

export default questions;
