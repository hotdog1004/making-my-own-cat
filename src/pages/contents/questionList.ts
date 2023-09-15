interface Question {
  content: string;
  type: string;
  answers: Answer[];
}

interface Answer {
  content: string;
  score: number;
}

const questionList: Question[] = [
  {
    content: '집사 모임에 처음으로 참여하게 된 나! 나는 어떤 모습일까?',
    type: 'ie',
    answers: [
      {
        content: `우리는 모두 칭구칭긔!!!! 
활발하게 대화한다.`,
        score: 0,
      },
      {
        content: `안녕하세요..초보집사입니다..
(ㅎr...집에 가서 우리 고양이랑 놀고싶다..)`,
        score: 10,
      },
    ],
  },
  {
    content: '동물 병원에 처음 가본 나! 내 반응은?',
    type: 'ie',
    answers: [
      {
        content: `내가 동물병원을 오다니..!
  그동안 궁금했던 거 A-Z까지 다 물어본다!!!!`,
        score: 0,
      },
      {
        content: `이 곳이…동물병원..!! ㅇ0ㅇ
(고양이보다 더 긴장함)`,
        score: 0,
      },
    ],
  },
  {
    content: '고양이가 밤새 뛰어다닐 때 당신은?',
    type: 'jp',
    answers: [
      {
        content: `지금은 자는시간!
너는 놀아라! 나는 잔다! 그냥 잔다.`,
        score: 0,
      },
      {
        content: `좋았어 오늘은 파티다!
안 자고 지칠 때까지 놀아준다.`,
        score: 10,
      },
    ],
  },
  {
    content:
      '갑작스러운 냥줍! 큰일이다. 고양이 물품은 하나도 없는데..당장 쇼핑을 해야하는데 어떻게 할까?',
    type: 'jp',
    answers: [
      {
        content: `필요한 물품들을 리스트업 한 후 
가장 급한 것부터 구매한다`,
        score: 0,
      },
      {
        content: `어차피 나중에 다 사게 될거니까!
인기 상품 위주로 빠르게 구매!!`,
        score: 0,
      },
    ],
  },
  {
    content: '일정을 마치고 늦게 귀가한 당신. 남은 시간 동안 할 일은?',
    type: 'jp',
    answers: [
      {
        content: `집사가 많이 늦었지 미안해ㅜㅠ 
일단 사과부터 하고 밀린 집안일을 시작한다.`,
        score: 0,
      },
      {
        content: `아우 피곤해..오늘은 아무것도 못하겠어!
집안일파업!`,
        score: 0,
      },
    ],
  },
  {
    content: '고양이가 처음으로 꾹꾹이를 해줬다!!!!!! 내 반응은?',
    type: 'tf',
    answers: [
      { content: '이게 말로만 듣던 그 꾹꾹이..?! 왜 하는걸까?', score: 0 },
      {
        content:
          '(눈물을 흘리며)진짜..감동이야…오늘을 우리의 꾹꾹이의 날로 정한다.',
        score: 10,
      },
    ],
  },
  {
    content: '고양이가 놀다가 실수로 나를 할퀴어버렸을 때 내 반응은?',
    type: 'tf',
    answers: [
      { content: '짜식..너 고양이맞구나..? 하고 그냥 넘긴다', score: 0 },
      { content: '야….너 나한테 어떻게 그럴 수 있어……마상', score: 10 },
    ],
  },
  {
    content: '고양이에 대해 아는 것이 없는 당신! 가장 먼저 할 행동은?',
    type: 'sn',
    answers: [
      {
        content:
          '앞으로 어떻게 하면 좋을까..? 걱정하며 고양이에 대한 각종 정보를 긁어모은다.',
        score: 0,
      },
      {
        content:
          '나도 이제..집사가되는거야…n년차 집사가 된 나의 모습과 행복한 고양이의 모습 상상 ing',
        score: 10,
      },
    ],
  },
  {
    content: '어느날 갑자기 내 고양이가 사람이된다면?',
    type: 'sn',
    answers: [
      { content: '그럴 일은 없다.', score: 0 },
      {
        content:
          '같이 여행 갈 수도 있고 대화도 가능하고! 근데 친구들한텐 뭐라고 소개해야하지?!?!?!',
        score: 10,
      },
    ],
  },
];

export default questionList;
