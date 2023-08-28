interface QuestionType {
  question: string;
  answers: string[];
  type: string;
}

const questions: QuestionType[] = [
  {
    question: '색상을 선택하세요',
    answers: ['답변1', '답변2', '답변3', '답변4'],
    type: 'check',
  },
  {
    question: '양말 모양을 선택하세요',
    answers: ['답변1', '답변2', '답변3', '답변4'],
    type: 'radio',
  },
  {
    question: '코 색깔을 선택하세요',
    answers: ['답변1', '답변2'],
    type: 'radio',
  },
  {
    question: '젤리를 선택하세요',
    answers: ['답변1', '답변2', '답변3'],
    type: 'radio',
  },
  {
    question: '보석을 선택하세요',
    answers: ['답변1', '답변2', '답변3', '답변4'],
    type: 'radio',
  },
  {
    question: '이름을 입력하세요.',
    answers: [],
    type: 'input',
  },
];

export default questions;
