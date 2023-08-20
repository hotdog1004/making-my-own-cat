interface QuestionType {
  question: string;
  answers: string[];
}

const questions: QuestionType[] = [
  {
    question: '색깔을 골라주세요',
    answers: ['답변1', '답변2', '답변3', '답변4'],
  },
  {
    question: '양말 모양을 골라주세요',
    answers: ['답변1', '답변2', '답변3', '답변4'],
  },
  {
    question: '코 색깔을 골라주세요',
    answers: ['답변1', '답변2'],
  },
  {
    question: '젤리를 골라주세요',
    answers: ['답변1', '답변2', '답변3'],
  },
  {
    question: '보석을 골라주세요',
    answers: ['답변1', '답변2', '답변3', '답변4'],
  },
];

export default questions;
