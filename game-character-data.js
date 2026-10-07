"use strict";

const testData = {
  id: 19,
  url: "game-character-test.html",
  title: "내가 게임 속 캐릭터라면 능력치는 어디에 몰려 있을까?",
  description: "게임 캐릭터가 된다면 나는 어떤 스탯에 몰빵된 타입일까?",
  category: "재미",
  answerGuide: "각 답변은 해당 스탯에 1점씩 더해져요",
  shareDescription: "내 게임 캐릭터 능력치 결과를 확인해보세요.",
  stats: [
    { id: "attack", title: "공격력" },
    { id: "intelligence", title: "지능" },
    { id: "charm", title: "매력" },
    { id: "survival", title: "생존력" },
  ],
  questions: [
    {
      question: "새로운 일을 시작할 때 나는?",
      answers: ["일단 부딪혀본다", "계획부터 세운다", "주변 사람들과 같이 한다", "최대한 편한 방법부터 찾는다"],
    },
    {
      question: "문제가 생겼을 때 가장 먼저 하는 행동은?",
      answers: ["바로 해결하려 든다", "원인을 분석한다", "도움을 요청한다", "상황이 지나가길 기다린다"],
    },
    {
      question: "친구들이 나를 찾는 이유는?",
      answers: ["행동력이 필요할 때", "해결책이 필요할 때", "위로나 분위기 전환이 필요할 때", "같이 편하게 놀고 싶을 때"],
    },
    {
      question: "게임을 한다면 가장 끌리는 역할은?",
      answers: ["앞에서 싸우는 전사", "전략 짜는 마법사", "팀을 살리는 서포터", "혼자 자유롭게 움직이는 도적"],
    },
    {
      question: "중요한 선택을 해야 할 때 나는?",
      answers: ["감으로 결정한다", "장단점을 비교한다", "주변 의견을 듣는다", "내가 편한 쪽을 고른다"],
    },
    {
      question: "체력이 많이 필요한 일정이 잡히면?",
      answers: ["오히려 재밌다", "일정 배분부터 한다", "같이 갈 사람이 있으면 괜찮다", "벌써 피곤하다"],
    },
    {
      question: "예상치 못한 일이 생기면?",
      answers: ["즉석에서 해결한다", "잠깐 생각한 뒤 대응한다", "주변과 상의한다", "최대한 피해 간다"],
    },
    {
      question: "경쟁 상황에서 나는?",
      answers: ["지는 걸 싫어해서 더 열심히 한다", "이길 방법부터 찾는다", "분위기 망치지 않는 게 더 중요하다", "굳이 경쟁까지 하고 싶진 않다"],
    },
    {
      question: "내 장점 하나를 고른다면?",
      answers: ["추진력", "판단력", "공감력", "적응력"],
    },
    {
      question: "게임 캐릭터가 된다면 가장 갖고 싶은 능력은?",
      answers: ["압도적인 공격력", "모든 상황을 읽는 지능", "사람을 끌어당기는 매력", "절대 지치지 않는 생존력"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({
      text,
      stat: ["attack", "intelligence", "charm", "survival"][index],
      score: 1,
    })),
  })),
  results: [
    {
      stat: "attack",
      title: "공격력 몰빵형",
      description: "행동력, 추진력, 승부욕이 높은 타입. 생각보다 행동이 빠르고 앞장서는 편. 단점: 너무 빨리 달리다 실수할 수 있음.",
    },
    {
      stat: "intelligence",
      title: "지능 몰빵형",
      description: "분석력, 판단력, 계획력이 높은 타입. 감보다 논리를 믿고 상황을 잘 읽는 편. 단점: 생각이 많아 시작이 늦을 수 있음.",
    },
    {
      stat: "charm",
      title: "매력 몰빵형",
      description: "공감력, 친화력, 분위기 메이킹 능력이 높은 타입. 혼자 잘하기보다 사람 사이에서 강한 캐릭터. 단점: 남 눈치를 많이 볼 수 있음.",
    },
    {
      stat: "survival",
      title: "생존력 몰빵형",
      description: "적응력, 버티는 힘, 상황 대처력이 높은 타입. 튀진 않아도 끝까지 살아남는 스타일. 단점: 편한 쪽으로만 가려는 경향이 있을 수 있음.",
    },
  ],
};
