"use strict";

// Add metadata here and a matching <slug>-data.js module to register a test.
const TEST_CATALOG = [
  {
    "id": 40,
    "slug": "stress-change",
    "title": "내가 스트레스 받으면 가장 먼저 변하는 것은?",
    "description": "평소와 달라지는 내 모습은 어디에서 가장 먼저 드러날까?",
    "category": "성격",
    "url": "test.html?id=stress-change",
    "icon": "leaf"
  },
  {
    "id": 39,
    "slug": "hidden-strength",
    "title": "내 성격에서 의외로 강한 부분은?",
    "description": "평소에는 잘 드러나지 않지만, 내가 생각보다 잘하는 건 무엇일까?",
    "category": "성격",
    "url": "test.html?id=hidden-strength",
    "icon": "leaf"
  },
  {
    "id": 38,
    "slug": "workplace-image",
    "title": "회사에서 나는 어떤 이미지로 보일까?",
    "description": "내가 생각하는 나와 동료들이 보는 나는 얼마나 다를까?",
    "category": "친구·인간관계·사회생활",
    "url": "test.html?id=workplace-image",
    "icon": "people"
  },
  {
    "id": 37,
    "slug": "animal-personality",
    "title": "내 성격을 동물로 표현하면?",
    "description": "내 성격과 가장 닮은 동물은 무엇일까?",
    "category": "성격",
    "url": "test.html?id=animal-personality",
    "icon": "leaf"
  },
  {
    "id": 36,
    "slug": "relationship-fatigue",
    "title": "내 인간관계 피로도는 몇 %일까?",
    "description": "사람을 만나고 관계를 유지하는 일이 나에게 얼마나 에너지를 쓰게 할까?",
    "category": "친구·인간관계·사회생활",
    "url": "test.html?id=relationship-fatigue",
    "icon": "people"
  },
  {
    "id": 35,
    "slug": "hidden-romance",
    "title": "내가 숨기고 있는 연애 성향은?",
    "description": "평소에는 잘 드러나지 않는 내 연애 본능은 어떤 모습일까?",
    "category": "연애/결혼",
    "url": "test.html?id=hidden-romance",
    "icon": "heart"
  },
  {
    "id": 34,
    "slug": "married-partner",
    "title": "나는 결혼하면 어떤 배우자일까?",
    "description": "결혼생활 속에서 나는 어떤 모습으로 살아가게 될까?",
    "category": "연애/결혼",
    "url": "test.html?id=married-partner",
    "icon": "ring"
  },
  {
    "id": 33,
    "slug": "compatible-partner",
    "title": "나랑 잘 맞는 연애 상대는?",
    "description": "어떤 사람과 만날 때 가장 편하고 오래 잘 맞을까?",
    "category": "연애/결혼",
    "url": "test.html?id=compatible-partner",
    "icon": "heart"
  },
  {
    "id": 32,
    "slug": "breakup",
    "title": "나는 이별 후 어떤 타입일까?",
    "description": "관계가 끝난 뒤 나는 어떻게 마음을 정리하는 사람일까?",
    "category": "연애/결혼",
    "url": "test.html?id=breakup",
    "icon": "heart"
  },
  {
    "id": 31,
    "slug": "falling-in-love",
    "title": "내가 사랑에 빠지는 순간은?",
    "description": "나는 어떤 순간에 상대에게 마음이 움직이는 사람일까?",
    "category": "연애/결혼",
    "url": "test.html?id=falling-in-love",
    "icon": "heart",
    "filledHeart": true
  },
  {
    "id": 30,
    "slug": "social-adaptation",
    "title": "나는 사회생활에서 얼마나 적응이 빠른 편일까?",
    "description": "새로운 사람, 새로운 환경에 나는 얼마나 빨리 녹아드는 타입일까?",
    "category": "친구·인간관계·사회생활",
    "url": "test.html?id=social-adaptation",
    "icon": "people"
  },
  {
    "id": 29,
    "slug": "difficult-people",
    "title": "나는 싫은 사람과도 잘 지낼 수 있을까?",
    "description": "감정은 감정이고 사회생활은 사회생활일까?",
    "category": "친구·인간관계·사회생활",
    "url": "test.html?id=difficult-people",
    "icon": "chat"
  },
  {
    "id": 28,
    "slug": "million-followers",
    "title": "나는 하루아침에 100만 팔로워가 생기면 어떻게 변할까?",
    "description": "갑자기 모두가 나를 보기 시작한다면, 나는 어떤 사람이 될까?",
    "category": "재미",
    "url": "test.html?id=million-followers",
    "icon": "people"
  },
  {
    "id": 27,
    "slug": "affection",
    "title": "나는 인간관계에서 정이 많은 편일까?",
    "description": "한번 내 사람이 되면 얼마나 오래 챙기는 타입일까?",
    "category": "친구·인간관계·사회생활",
    "url": "test.html?id=affection",
    "icon": "heart"
  },
  {
    "id": 26,
    "slug": "friend-dependence",
    "title": "나는 친구에게 얼마나 의존하는 편일까?",
    "description": "힘들 때도, 심심할 때도 나는 친구를 얼마나 찾는 편일까?",
    "category": "친구·인간관계·사회생활",
    "url": "test.html?id=friend-dependence",
    "icon": "chat"
  },
  {
    "id": 25,
    "slug": "friend-boundaries",
    "title": "나는 친한 친구에게도 선을 두는 편일까?",
    "description": "아무리 친해도 지켜야 할 선이 있다고 생각하는 편일까?",
    "category": "친구·인간관계·사회생활",
    "url": "test.html?id=friend-boundaries",
    "icon": "people"
  },
  {
    "id": 24,
    "slug": "relationship-control",
    "title": "나는 연애할 때 상대를 얼마나 통제하려는 편일까?",
    "description": "걱정과 관심일까, 아니면 상대를 내 기준에 맞추려는 걸까?",
    "category": "연애/결혼",
    "url": "test.html?id=relationship-control",
    "icon": "chat"
  },
  {
    "id": 23,
    "slug": "relationship-energy",
    "title": "나는 연애할 때 감정소모가 큰 편일까?",
    "description": "연애 하나로 하루 기분이 얼마나 흔들리는지 알아보세요.",
    "category": "연애/결혼",
    "url": "test.html?id=relationship-energy",
    "icon": "heart"
  },
  {
    "id": 22,
    "slug": "marriage-values",
    "title": "나는 사랑만으로 결혼할 수 있을까?",
    "description": "결혼에서 사랑과 현실, 나는 어디에 더 가까울까?",
    "category": "연애/결혼",
    "url": "test.html?id=marriage-values",
    "icon": "ring"
  },
  {
    "id": 21,
    "slug": "lying",
    "title": "나는 거짓말을 얼마나 잘하는 편일까?",
    "description": "거짓말을 하면 바로 티 나는 타입일까, 끝까지 자연스럽게 숨기는 타입일까?",
    "category": "성격",
    "url": "test.html?id=lying",
    "icon": "people"
  },
  {
    "id": 20,
    "slug": "secret",
    "title": "나는 비밀을 들으면 얼마나 오래 참을 수 있을까?",
    "description": "입이 무거운 편일까, 말하고 싶어서 근질근질한 편일까?",
    "category": "성격",
    "url": "test.html?id=secret",
    "icon": "chat"
  },
  {
    "id": 19,
    "slug": "game-character",
    "title": "내가 게임 속 캐릭터라면 능력치는 어디에 몰려 있을까?",
    "description": "게임 캐릭터가 된다면 나는 어떤 스탯에 몰빵된 타입일까?",
    "category": "재미",
    "url": "test.html?id=game-character",
    "icon": "flame"
  },
  {
    "id": 18,
    "slug": "mental-strength",
    "title": "내 멘탈은 얼마나 단단한 편일까?",
    "description": "스트레스나 실패 앞에서 나는 얼마나 쉽게 흔들리는 사람일까?",
    "category": "성격",
    "url": "test.html?id=mental-strength",
    "icon": "leaf"
  },
  {
    "id": 17,
    "slug": "social-mask",
    "title": "내 사회생활 가면은 얼마나 두꺼울까?",
    "description": "밖에서의 나와 혼자 있을 때의 나는 얼마나 다를까?",
    "category": "친구·인간관계·사회생활",
    "url": "test.html?id=social-mask",
    "icon": "moon"
  },
  {
    "id": 16,
    "slug": "social-awareness",
    "title": "나는 인간관계에서 눈치를 얼마나 보는 편일까?",
    "description": "다른 사람의 말투, 표정, 분위기를 얼마나 신경 쓰는지 알아보세요.",
    "category": "친구·인간관계·사회생활",
    "url": "test.html?id=social-awareness",
    "icon": "chat"
  },
  {
    "id": 15,
    "slug": "cutoff",
    "title": "나는 사람을 얼마나 빨리 손절하는 편일까?",
    "description": "인간관계에서 나는 참는 편일까, 빠르게 정리하는 편일까?",
    "category": "친구·인간관계·사회생활",
    "url": "test.html?id=cutoff",
    "icon": "people"
  },
  {
    "id": 8,
    "slug": "jealousy",
    "title": "내 질투심은 정상 범위일까?",
    "description": "연애할 때 나는 얼마나 질투하는 편인지 알아보세요.",
    "category": "연애/결혼",
    "url": "test.html?id=jealousy",
    "icon": "heart",
    "filledHeart": true
  }
];
