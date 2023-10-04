interface Question {
  content: string;
  type: string;
  answers: Answer[];
}

interface Answer {
  content: string;
  value: string;
}

const questionList: Question[] = [
  {
    content: `큰일이다. 고양이 물품은 하나도 없는데..
당장 쇼핑을 해야하는데 어떻게 할까?`,
    type: 'JP',
    answers: [
      {
        content: `어차피 나중에 다 사게 될거니까!
인기 상품 위주로 빠르게 구매!! 💸💸`,
        value: 'P',
      },
      {
        content: `필요한 물품들을 리스트업 한 후 
가장 급한 것부터 구매한다. 📝📝`,
        value: 'J',
      },
    ],
  },
  {
    content: `고양이가 처음으로 꾹꾹이를 해줬다!!!!!! 
나의 반응은?`,
    type: 'TF',
    answers: [
      {
        content: `이게 말로만 듣던 그 꾹꾹이..?! 
근데 왜 하는걸까? 🤔`,
        value: 'T',
      },
      {
        content: `😭😭 진짜..감동이야…
오늘을 우리의 꾹꾹이의 날로 정한다!`,
        value: 'F',
      },
    ],
  },
  {
    content: `고양이에 대해 아는 것이 없는 당신! 
가장 먼저 할 행동은?`,
    type: 'SN',
    answers: [
      {
        content: `앞으로 어떻게 하면 좋을까..? 🤔
걱정하며 고양이에 대한 각종 정보를 긁어모은다.`,
        value: 'S',
      },
      {
        content: `나도 이제 집사!😚😚
n년 후 우리의 행복한 미래를 상상 ing`,
        value: 'N',
      },
    ],
  },
  {
    content: `고양이가 밤새 뛰어다닐 때 
나는 어떻게할까?`,
    type: 'JP',
    answers: [
      {
        content: `지금은 자는시간!
너는 놀아라! 나는 잔다! 그냥 잔다.😴😴`,
        value: 'J',
      },
      {
        content: `좋았어 오늘은 파티다!
안 자고 지칠 때까지 놀아준다.🔥🔥`,
        value: 'P',
      },
    ],
  },
  {
    content: `집사 모임에 처음으로 참여하게 된 나! 
나는 어떤 모습일까?`,
    type: 'IE',
    answers: [
      {
        content: `우리는 모두 칭구칭긔!🤗🤗 
활발하게 대화한다.`,
        value: 'E',
      },
      {
        content: `안녕하세요..초보집사입니다..🙄
(ㅎr...집에 가서 우리 고양이랑 놀고싶다..)`,
        value: 'I',
      },
    ],
  },
  {
    content: `일정을 마치고 늦게 귀가한 당신. 
남은 시간 동안 할 일은?`,
    type: 'JP',
    answers: [
      {
        content: `집사가 많이 늦었지 미안해 😭
일단 사과부터 하고 밀린 집안일을 시작한다.`,
        value: 'J',
      },
      {
        content: `아우 피곤해..오늘은 아무것도 못하겠어!
집안일파업! 🙀`,
        value: 'P',
      },
    ],
  },
  {
    content: `동물 병원에 태어나서 처음 가본 나
나의 반응은?`,
    type: 'IE',
    answers: [
      {
        content: `이 곳이…동물병원..!! 😳😳
(고양이보다 더 긴장함)`,
        value: 'I',
      },
      {
        content: `내가 동물병원을 오다니..!
그동안 궁금했던 거 A-Z까지 다 물어본다!!🧐`,
        value: 'E',
      },
    ],
  },
  {
    content: `출장을 다녀왔더니 고양이가 나를 못알아본다! 
이럴 때 나의 행동은?`,
    type: 'TF',
    answers: [
      {
        content: `나한테 낯선 냄새가 나나보군!😅
적응하면 알아볼테니 시간을 준다.`,
        value: 'T',
      },
      {
        content: `뭐야 너 나 기억 안 나..?
와 진짜 서운하다...😟😟`,
        value: 'F',
      },
    ],
  },
  {
    content: `오늘은 내가 요리사!
고양이를 위한 요리를 한다면 나는?`,
    type: 'SN',
    answers: [
      {
        content: `1g의 오차도 용납 할 수 없음! 🤓
정확히 레시피 그대로 진행한다.`,
        value: 'S',
      },
      {
        content: `고양이 몸에 좋다했으니 이것도 추가..저것도 추가! 
나는 내 육감을 믿는다구!😙😙`,
        value: 'N',
      },
    ],
  },
  {
    content: `집사 인생 첫 고양이 박람회! 
그 곳에서의 내 모습은?`,
    type: 'IE',
    answers: [
      {
        content: `와 사람 진짜 많다…😲
(도착과 동시에 지친 상태)`,
        value: 'E',
      },
      {
        content: `고양이 물건 박람회라니 미쳤다!!! 😆😆  
한 곳도 빠짐없이 전부 둘러본다.`,
        value: 'I',
      },
    ],
  },

  {
    content: `고양이가 놀다가 실수로 나를 할퀴어버렸을 때 
나의 반응은?`,
    type: 'TF',
    answers: [
      {
        content: `야...😭😭 
너 나한테 어떻게 그럴 수 있어...😔`,
        value: 'F',
      },
      {
        content: `짜식..너 고양이맞구나..? 
하고 그냥 넘긴다 🤣`,
        value: 'T',
      },
    ],
  },
  {
    content: `어느날 갑자기
우리 고양이가 사람이 된다면?`,
    type: 'SN',
    answers: [
      {
        content: `같이 여행 갈 수도 있고 대화도 가능하고! 😏😏 
근데 친구들한텐 뭐라고 소개해야하지?!?!?!`,
        value: 'N',
      },
      {
        content: `현실적으로 불가능하니 
고민하지않는다. 😒`,
        value: 'S',
      },
    ],
  },
];

export default questionList;
