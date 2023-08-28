interface QuestionType {
  question: string;
  answers: string[];
}

const questions: QuestionType[] = [
  {
    question: '색상을 선택하세요',
    answers: ['답변1', '답변2', '답변3', '답변4'],
  },
  {
    question: '양말 모양을 선택하세요',
    answers: ['답변1', '답변2', '답변3', '답변4'],
  },
  {
    question: '코 색깔을 선택하세요',
    answers: ['답변1', '답변2'],
  },
  {
    question: '젤리를 선택하세요',
    answers: ['답변1', '답변2', '답변3'],
  },
  {
    question: '보석을 선택하세요',
    answers: ['답변1', '답변2', '답변3', '답변4'],
  },
  {
    question: '이름을 입력하세요.',
    answers: [],
  },
];

export default questions;
