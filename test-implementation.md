# Today's Choice 전체 코드

현재 테스트와 카카오톡 공유 기능을 포함한 전체 코드입니다.

## index.html

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
  <meta name="description" content="연애, 인간관계, 일상 속 고민까지. 오늘의 초이스에서 재미있는 심리테스트를 만나보세요.">
  <title>Today's choice | 오늘, 당신의 초이스는?</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <script src="script.js" defer></script>
</head>
<body>
  <svg class="svg-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>
    <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="7.3"/><path d="m16 16 5 5"/></symbol>
    <symbol id="icon-heart" viewBox="0 0 24 24"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/></symbol>
    <symbol id="icon-chat" viewBox="0 0 24 24"><path d="M21 11.5a9 9 0 0 1-9 8.5 10 10 0 0 1-4-.8L3 21l1.7-4.7A8 8 0 0 1 3 11.5a9 9 0 0 1 18 0Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></symbol>
    <symbol id="icon-ring" viewBox="0 0 24 24"><circle cx="12" cy="14" r="7.5"/><path d="m9 3 3 3 3-3-1-2h-4l-1 2Z"/></symbol>
    <symbol id="icon-people" viewBox="0 0 24 24"><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3"/></symbol>
    <symbol id="icon-flame" viewBox="0 0 24 24"><path d="M12 3c0 4-5 6-5 11a5 5 0 0 0 10 0c0-3-2-5-3-7 0 3-1 4-2 5 0-4 2-6 0-9Z"/></symbol>
    <symbol id="icon-moon" viewBox="0 0 24 24"><path d="M21 14A9.5 9.5 0 0 1 10 3a9.5 9.5 0 1 0 11 11Z"/></symbol>
    <symbol id="icon-leaf" viewBox="0 0 24 24"><path d="M12 22V11M12 15C5 16 2 11 3 7c6-1 9 3 9 8Zm0-5c0-6 4-9 9-8 1 6-3 10-9 8Z"/></symbol>
    <symbol id="icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></symbol>
  </svg>
  <a class="skip-link" href="#main">본문 바로가기</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="#home" aria-label="오늘의 초이스 홈">Today's choice</a>
      <nav class="main-nav" aria-label="주 메뉴">
        <a class="nav-link is-active" href="#home" aria-current="page">홈</a>
        <a class="nav-link" href="#new-tests">오늘의 테스트</a>
        <a class="nav-link" href="#popular">전체 테스트</a>
        <a class="nav-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
      <button class="icon-button search-toggle" type="button" aria-label="테스트 검색" aria-haspopup="dialog"><svg class="icon"><use href="#icon-search"/></svg></button>
    </div>
  </header>
  <main id="main">
    <section class="hero" id="home" aria-labelledby="hero-title">
      <div class="container hero-inner">
        <div class="hero-copy">
          <h1 id="hero-title">오늘, 당신의 <span>초이스</span>는?</h1>
          <p>연애, 인간관계, 일상 속 고민까지 재미있는 심리테스트로 알아보세요.</p>
          <button class="primary-button" id="random-test-button" type="button">랜덤 테스트 시작하기 <svg class="icon"><use href="#icon-arrow"/></svg></button>
        </div>
      </div>
    </section>
    <section class="container test-section new-section" id="new-tests" aria-labelledby="new-title">
      <div class="section-heading"><h2 id="new-title">오늘의 테스트</h2><a class="view-all" href="#popular">전체보기 <svg class="icon"><use href="#icon-arrow"/></svg></a></div>
      <div class="card-grid">
      </div>
    </section>
    <section class="container test-section category-section" id="popular" aria-labelledby="category-title">
      <span id="category-tests" aria-hidden="true"></span>
      <div class="section-heading"><h2 id="category-title">전체 테스트</h2></div>
      <div class="category-filters" role="group" aria-label="테스트 카테고리">
        <button class="category-button" type="button" data-filter="all" aria-pressed="true" aria-controls="category-grid">전체</button>
        <button class="category-button" type="button" data-filter="love" aria-pressed="false" aria-controls="category-grid">연애·결혼</button>
        <button class="category-button" type="button" data-filter="relationship" aria-pressed="false" aria-controls="category-grid">친구·인간관계·사회생활</button>
        <button class="category-button" type="button" data-filter="personality" aria-pressed="false" aria-controls="category-grid">성격</button>
        <button class="category-button" type="button" data-filter="fun" aria-pressed="false" aria-controls="category-grid">재미</button>
      </div>
      <p id="filter-status" class="visually-hidden" role="status">전체 테스트를 표시하고 있어요.</p>
      <div class="card-grid" id="category-grid">
        <a class="test-card" href="social-adaptation-test.html" data-test="30" data-category="relationship"><span class="icon-tile"><svg class="icon"><use href="#icon-people"/></svg></span><h3>나는 사회생활에서 얼마나 적응이 빠른 편일까?</h3><p>새로운 사람, 새로운 환경에 나는 얼마나 빨리 녹아드는 타입일까?</p><div class="card-bottom"><span class="circle-arrow"><svg class="icon"><use href="#icon-arrow"/></svg></span></div></a>
        <a class="test-card" href="difficult-people-test.html" data-test="29" data-category="relationship"><span class="icon-tile"><svg class="icon"><use href="#icon-chat"/></svg></span><h3>나는 싫은 사람과도 잘 지낼 수 있을까?</h3><p>감정은 감정이고 사회생활은 사회생활일까?</p><div class="card-bottom"><span class="circle-arrow"><svg class="icon"><use href="#icon-arrow"/></svg></span></div></a>
        <a class="test-card" href="million-followers-test.html" data-test="28" data-category="fun"><span class="icon-tile"><svg class="icon"><use href="#icon-people"/></svg></span><h3>나는 하루아침에 100만 팔로워가 생기면 어떻게 변할까?</h3><p>갑자기 모두가 나를 보기 시작한다면, 나는 어떤 사람이 될까?</p><div class="card-bottom"><span class="circle-arrow"><svg class="icon"><use href="#icon-arrow"/></svg></span></div></a>
        <a class="test-card" href="affection-test.html" data-test="27" data-category="relationship"><span class="icon-tile"><svg class="icon"><use href="#icon-heart"/></svg></span><h3>나는 인간관계에서 정이 많은 편일까?</h3><p>한번 내 사람이 되면 얼마나 오래 챙기는 타입일까?</p><div class="card-bottom"><span class="circle-arrow"><svg class="icon"><use href="#icon-arrow"/></svg></span></div></a>
        <a class="test-card" href="friend-dependence-test.html" data-test="26" data-category="relationship"><span class="icon-tile"><svg class="icon"><use href="#icon-chat"/></svg></span><h3>나는 친구에게 얼마나 의존하는 편일까?</h3><p>힘들 때도, 심심할 때도 나는 친구를 얼마나 찾는 편일까?</p><div class="card-bottom"><span class="circle-arrow"><svg class="icon"><use href="#icon-arrow"/></svg></span></div></a>
        <a class="test-card" href="friend-boundaries-test.html" data-test="25" data-category="relationship"><span class="icon-tile"><svg class="icon"><use href="#icon-people"/></svg></span><h3>나는 친한 친구에게도 선을 두는 편일까?</h3><p>아무리 친해도 지켜야 할 선이 있다고 생각하는 편일까?</p><div class="card-bottom"><span class="circle-arrow"><svg class="icon"><use href="#icon-arrow"/></svg></span></div></a>
        <a class="test-card" href="relationship-control-test.html" data-test="24" data-category="love"><span class="icon-tile"><svg class="icon"><use href="#icon-chat"/></svg></span><h3>나는 연애할 때 상대를 얼마나 통제하려는 편일까?</h3><p>걱정과 관심일까, 아니면 상대를 내 기준에 맞추려는 걸까?</p><div class="card-bottom"><span class="circle-arrow"><svg class="icon"><use href="#icon-arrow"/></svg></span></div></a>
        <a class="test-card" href="relationship-energy-test.html" data-test="23" data-category="love"><span class="icon-tile"><svg class="icon"><use href="#icon-heart"/></svg></span><h3>나는 연애할 때 감정소모가 큰 편일까?</h3><p>연애 하나로 하루 기분이 얼마나 흔들리는지 알아보세요.</p><div class="card-bottom"><span class="circle-arrow"><svg class="icon"><use href="#icon-arrow"/></svg></span></div></a>
        <a class="test-card" href="marriage-values-test.html" data-test="22" data-category="love"><span class="icon-tile"><svg class="icon"><use href="#icon-ring"/></svg></span><h3>나는 사랑만으로 결혼할 수 있을까?</h3><p>결혼에서 사랑과 현실, 나는 어디에 더 가까울까?</p><div class="card-bottom"><span class="circle-arrow"><svg class="icon"><use href="#icon-arrow"/></svg></span></div></a>
        <a class="test-card" href="lying-test.html" data-test="21" data-category="fun"><span class="icon-tile"><svg class="icon"><use href="#icon-people"/></svg></span><h3>나는 거짓말을 얼마나 잘하는 편일까?</h3><p>거짓말을 하면 바로 티 나는 타입일까, 끝까지 자연스럽게 숨기는 타입일까?</p><div class="card-bottom"><span class="circle-arrow"><svg class="icon"><use href="#icon-arrow"/></svg></span></div></a>
        <a class="test-card" href="secret-test.html" data-test="20" data-category="fun"><span class="icon-tile"><svg class="icon"><use href="#icon-chat"/></svg></span><h3>나는 비밀을 들으면 얼마나 오래 참을 수 있을까?</h3><p>입이 무거운 편일까, 말하고 싶어서 근질근질한 편일까?</p><div class="card-bottom"><span class="circle-arrow"><svg class="icon"><use href="#icon-arrow"/></svg></span></div></a>
        <a class="test-card" href="game-character-test.html" data-test="19" data-category="fun"><span class="icon-tile"><svg class="icon"><use href="#icon-flame"/></svg></span><h3>내가 게임 속 캐릭터라면 능력치는 어디에 몰려 있을까?</h3><p>게임 캐릭터가 된다면 나는 어떤 스탯에 몰빵된 타입일까?</p><div class="card-bottom"><span class="circle-arrow"><svg class="icon"><use href="#icon-arrow"/></svg></span></div></a>
        <a class="test-card" href="mental-strength-test.html" data-test="18" data-category="personality"><span class="icon-tile"><svg class="icon"><use href="#icon-leaf"/></svg></span><h3>내 멘탈은 얼마나 단단한 편일까?</h3><p>스트레스나 실패 앞에서 나는 얼마나 쉽게 흔들리는 사람일까?</p><div class="card-bottom"><span class="circle-arrow"><svg class="icon"><use href="#icon-arrow"/></svg></span></div></a>
        <a class="test-card" href="social-mask-test.html" data-test="17" data-category="personality"><span class="icon-tile"><svg class="icon"><use href="#icon-moon"/></svg></span><h3>내 사회생활 가면은 얼마나 두꺼울까?</h3><p>밖에서의 나와 혼자 있을 때의 나는 얼마나 다를까?</p><div class="card-bottom"><span class="circle-arrow"><svg class="icon"><use href="#icon-arrow"/></svg></span></div></a>
        <a class="test-card" href="social-awareness-test.html" data-test="16" data-category="relationship"><span class="icon-tile"><svg class="icon"><use href="#icon-chat"/></svg></span><h3>나는 인간관계에서 눈치를 얼마나 보는 편일까?</h3><p>다른 사람의 말투, 표정, 분위기를 얼마나 신경 쓰는지 알아보세요.</p><div class="card-bottom"><span class="circle-arrow"><svg class="icon"><use href="#icon-arrow"/></svg></span></div></a>
        <a class="test-card" href="cutoff-test.html" data-test="15" data-category="relationship"><span class="icon-tile"><svg class="icon"><use href="#icon-people"/></svg></span><h3>나는 사람을 얼마나 빨리 손절하는 편일까?</h3><p>인간관계에서 나는 참는 편일까, 빠르게 정리하는 편일까?</p><div class="card-bottom"><span class="circle-arrow"><svg class="icon"><use href="#icon-arrow"/></svg></span></div></a>
        <p class="category-empty" id="category-empty" hidden>아직 이 카테고리에 등록된 테스트가 없어요.</p>
        <a class="test-card" href="jealousy-test.html" data-test="8" data-category="love"><span class="icon-tile"><svg class="icon filled-heart"><use href="#icon-heart"/></svg></span><h3>내 질투심은 정상 범위일까?</h3><p>연애할 때 나는 얼마나 질투하는 편인지 알아보세요.</p><div class="card-bottom"><span class="circle-arrow"><svg class="icon"><use href="#icon-arrow"/></svg></span></div></a>
      </div>
      <nav class="test-pagination" id="test-pagination" aria-label="테스트 목록 페이지" hidden></nav>
    </section>
  </main>
  <footer class="site-footer" id="about">
    <div class="container footer-inner">
      <a class="instagram-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        <span>@choice_zip_</span>
      </a>
    </div>
  </footer>
  <dialog id="search-dialog" class="modal" aria-labelledby="search-title"><div class="modal-heading"><h2 id="search-title">어떤 테스트를 찾으세요?</h2><button class="icon-button" type="button" data-close aria-label="검색 닫기"><svg class="icon"><use href="#icon-close"/></svg></button></div><label class="search-field"><svg class="icon"><use href="#icon-search"/></svg><input id="search-input" type="search" placeholder="연애, 인간관계, 사회생활…" aria-label="테스트 검색어" autocomplete="off"></label><p id="search-count" class="search-count" aria-live="polite"></p><div id="search-results" class="search-results"></div></dialog>
</body>
</html>
```

## style.css

```css
:root{--pink:#ff5c7a;--pink-light:#fff1f4;--text:#111;--muted:#6b6b6b;--border:#eee;--width:1360px}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:110px}
body{margin:0;background:#fff;color:var(--text);font-family:"Pretendard",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-weight:400;word-break:keep-all;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
button,input{font:inherit}
button,a,input{-webkit-tap-highlight-color:transparent}
button{cursor:pointer}
button{color:inherit}
button:focus-visible,a:focus-visible,input:focus-visible{outline:3px solid var(--pink);outline-offset:5px}
button:disabled{cursor:default}
.svg-definitions{position:absolute;width:0;height:0;overflow:hidden}
.icon{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0}
.filled-heart{fill:currentColor;stroke-width:1}
.container{width:calc(100% - 80px);max-width:var(--width);margin-inline:auto}
.skip-link{position:fixed;top:12px;left:12px;z-index:10;padding:12px 20px;background:#111;color:#fff;border-radius:8px;transform:translateY(-160%)}
.skip-link:focus{transform:translateY(0)}
.site-header{background:#fff;border-bottom:1px solid var(--border)}
.header-inner{display:flex;align-items:center;min-height:94px;gap:46px}
.logo{font-size:27px;font-weight:800;letter-spacing:-1.2px;white-space:nowrap}
.main-nav{display:flex;align-items:stretch;align-self:stretch;gap:38px;margin-left:auto}
.nav-link{position:relative;display:flex;align-items:center;padding:0 8px;color:var(--text);font-size:17px;font-weight:650;letter-spacing:-.3px}
.nav-link:hover{color:#111}
.nav-link.is-active{color:var(--pink);font-weight:650}
.nav-link.is-active::after{content:"";position:absolute;bottom:0;left:0;right:0;height:2px;background:var(--pink)}
.icon-button{display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;padding:0;border:0;border-radius:50%;background:transparent;color:#555}
.icon-button:hover{background:#f7f7f7}
.header-inner>.search-toggle{color:var(--text)}
.header-inner>.search-toggle .icon{stroke-width:2}
.hero{background:#f4f4f6}
.hero-inner{display:flex;align-items:center;min-height:500px;padding:64px clamp(24px,4vw,64px)}
.hero-copy{width:100%;max-width:100%}
.hero-copy h1{margin:0 0 24px;font-size:clamp(42px,4.5vw,64px);line-height:1.24;letter-spacing:-3.5px;font-weight:800}
.hero-copy h1 span{color:var(--pink)}
.hero-copy>p{margin:0 0 32px;color:var(--muted);font-size:20px;font-weight:500;line-height:1.7;letter-spacing:-.6px}
.primary-button{display:inline-flex;align-items:center;justify-content:center;gap:24px;min-height:66px;padding:18px 32px;background:#111;border:1px solid #111;border-radius:18px;color:#fff;font-size:18px;font-weight:650;transition:background .18s,transform .18s}
.primary-button:hover{background:#292929;transform:translateY(-2px)}
.icon-tile{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:58px;height:58px;border-radius:20px;background:var(--pink-light);color:var(--pink)}
.icon-tile .icon{width:27px;height:27px}
.test-section{padding-top:60px;scroll-margin-top:24px}
.section-heading{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:24px}
.section-heading h2{margin:0;font-size:27px;line-height:1.4;font-weight:700;letter-spacing:-1px}
.view-all{display:inline-flex;align-items:center;gap:10px;padding:8px 0;background:none;border:0;color:#666;font-size:14px;white-space:nowrap}
.view-all .icon{width:19px;height:19px}
.view-all:hover{color:var(--pink)}
.card-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}
#category-grid{align-content:start;align-items:start}
.test-card{display:flex;flex-direction:column;align-items:flex-start;min-height:276px;padding:24px;border:1px solid var(--border);border-radius:18px;background:#fff;transition:transform .2s,border-color .2s,box-shadow .2s}
.test-card:hover{transform:translateY(-3px);border-color:#ddd;box-shadow:0 4px 14px rgb(17 17 17 / 3%)}
.test-card[hidden]{display:none}
.test-card h3{margin:17px 0 9px;font-size:21px;font-weight:700;line-height:1.45;letter-spacing:-.8px}
.test-card>p{margin:0 0 18px;color:var(--muted);font-size:15px;font-weight:500;line-height:1.6;letter-spacing:-.4px}
.card-bottom{display:flex;align-items:center;justify-content:flex-end;width:100%;gap:8px;margin-top:auto;padding-top:8px}
.circle-arrow{display:flex;align-items:center;justify-content:center;width:44px;height:44px;flex-shrink:0;border-radius:50%;background:#f7f7f8;color:#777;transition:background .2s,color .2s}
.circle-arrow .icon{width:21px;height:21px}
.test-card:hover .circle-arrow{background:var(--pink-light);color:var(--pink)}
.new-section{padding-top:58px}
.new-section .test-card{min-height:246px}
.category-filters{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:24px}
.category-empty{grid-column:1 / -1;display:flex;align-items:center;justify-content:center;margin:0;padding:32px 24px;border:1px solid var(--border);border-radius:18px;color:var(--muted);font-size:16px;line-height:1.7;text-align:center}
.category-empty[hidden]{display:none}
.test-pagination{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:8px;margin-top:28px}
.test-pagination[hidden]{display:none}
.page-button{min-width:40px;min-height:40px;padding:8px 12px;border:1px solid var(--border);border-radius:12px;background:#fff;font-size:14px}
.page-button:hover:not(:disabled),.page-button[aria-current="page"]{border-color:var(--pink);background:var(--pink-light);color:var(--pink)}
.page-button:disabled{color:#aaa}
.category-button{padding:10px 20px;border:1px solid var(--border);border-radius:999px;background:#fff;color:var(--muted);font-size:15px;font-weight:500;line-height:1.4;white-space:nowrap;transition:background .18s,border-color .18s,color .18s}
.category-button:hover{border-color:#ddd;background:#fafafa}
.category-button[aria-pressed="true"]{border-color:var(--pink);background:var(--pink-light);color:var(--pink)}
.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
.site-footer{margin-top:64px;border-top:1px solid var(--border);padding:22px 0;background:#fff}
.footer-inner{display:flex;align-items:center;justify-content:center;gap:32px}
.instagram-link{display:inline-flex;align-items:center;gap:9px;color:var(--muted);font-size:14px;white-space:nowrap}
.instagram-link .icon{width:20px;height:20px}
.instagram-link:hover{color:var(--text)}
.modal{width:calc(100% - 40px);max-width:560px;max-height:85vh;padding:28px;border:1px solid var(--border);border-radius:22px;background:#fff;color:var(--text);box-shadow:0 18px 60px rgb(0 0 0 / 12%)}
.modal::backdrop{background:rgb(17 17 17 / 30%)}
#search-dialog{height:718px;max-height:calc(100dvh - 40px);overflow:hidden}
#search-dialog[open]{display:flex;flex-direction:column}
#search-dialog .modal-heading,#search-dialog .search-field,#search-dialog .search-count{flex-shrink:0}
#search-dialog .search-results{flex:1;min-height:0;max-height:none;align-content:start;overflow-y:auto;scrollbar-width:none}
#search-dialog .search-results::-webkit-scrollbar{display:none}
body:has(dialog[open]){overflow:hidden}
.modal-heading{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:20px}
.modal h2{font-size:23px;line-height:1.45;letter-spacing:-.7px;margin:0}
.modal-heading .icon-button{flex-shrink:0}
.search-field{display:flex;align-items:center;gap:12px;padding:14px 16px;border:1px solid var(--border);border-radius:12px;color:var(--muted)}
.search-field:focus-within{border-color:var(--pink)}
.search-field input{width:100%;min-width:0;padding:0;border:0;background:transparent;outline:none;font-size:16px;color:var(--text)}
.search-field input:focus-visible{outline:none}
.search-count{font-size:13px;color:var(--muted)}
.search-results{display:grid;gap:8px;max-height:45vh;overflow-y:auto;padding:0}
.search-result{display:flex;align-items:center;justify-content:space-between;gap:16px;text-align:left;padding:15px;border:1px solid var(--border);border-radius:12px;background:#fff;font-size:15px;line-height:1.5}
.search-result:hover{background:var(--pink-light)}
.search-result .icon{width:18px;height:18px;color:var(--pink)}
.empty-results{padding:24px 0;text-align:center;color:var(--muted);font-size:14px}
.eyebrow{color:var(--pink);font-size:13px;font-weight:400}
.detail-description{color:var(--muted);font-weight:500;line-height:1.7}
.detail-note{padding:16px;border-radius:12px;background:#fafafa;color:var(--muted);font-size:14px;line-height:1.7}
.modal-confirm{min-height:48px;margin-top:8px;padding:12px 24px;font-size:15px;border-radius:12px}
@media(max-width:1100px){.container{width:calc(100% - 64px)}.header-inner{gap:28px}.main-nav{gap:24px}.hero-inner{min-height:460px;padding:56px 32px}.hero-copy h1{font-size:52px;letter-spacing:-2.8px}.hero-copy>p{font-size:18px}.card-grid{gap:20px}.test-card{padding:23px}.test-card h3{font-size:20px}.circle-arrow{width:40px;height:40px}}
@media(max-width:800px){.container{width:calc(100% - 40px)}.header-inner{gap:16px;min-height:80px}.logo{font-size:22px}.main-nav{gap:12px}.nav-link{font-size:15px;padding:0 4px}.hero-inner{min-height:430px;padding:48px 24px}.hero-copy h1{font-size:42px;letter-spacing:-2px}.hero-copy>p{font-size:16px}.primary-button{padding:16px 20px;min-height:58px;font-size:15px;gap:16px}.card-grid{gap:14px}.test-card{padding:18px;min-height:264px}.test-card h3{font-size:18px}.test-card>p{font-size:13px}.circle-arrow{width:30px;height:30px}.section-heading h2{font-size:24px}.footer-inner{gap:24px}}
@media(max-width:640px){html{scroll-padding-top:24px}.container{width:calc(100% - 40px)}.header-inner{flex-wrap:wrap;justify-content:space-between;gap:0;padding-top:14px;min-height:auto}.logo{font-size:23px}.header-inner>.search-toggle{margin-left:auto}.main-nav{order:3;justify-content:space-between;width:100%;margin:8px 0 0;gap:4px}.nav-link{justify-content:center;min-height:46px;font-size:clamp(12px,3.5vw,15px);padding:0 4px;white-space:nowrap}.hero-inner{min-height:auto;padding:44px 8px}.hero-copy h1{font-size:clamp(22px,5.5vw,35px);letter-spacing:-1.2px;margin-bottom:20px}.hero-copy>p{font-size:16px;margin-bottom:26px}.primary-button{min-height:58px;padding:16px 24px;font-size:16px;gap:24px}.test-section{padding-top:40px}.section-heading{margin-bottom:20px;gap:12px}.section-heading h2{font-size:22px;letter-spacing:-.8px}.view-all{font-size:12px;gap:6px}.card-grid{grid-template-columns:1fr;gap:16px}.test-card,.new-section .test-card{min-height:230px;padding:22px}.test-card h3{font-size:21px}.test-card>p{font-size:15px;margin-bottom:18px}.icon-tile{width:52px;height:52px;border-radius:17px}.circle-arrow{width:42px;height:42px}.new-section{padding-top:40px}.site-footer{margin-top:44px;padding:20px 0}.footer-inner{flex-direction:column;align-items:center;gap:12px}.modal{padding:22px}.modal h2{font-size:21px}}
@media(max-width:640px){
  .test-section,.new-section{padding-top:32px}
  .section-heading{margin-bottom:16px}
  .card-grid{gap:12px}
  .test-card,.new-section .test-card{display:grid;grid-template-columns:44px minmax(0,1fr) 28px;column-gap:12px;row-gap:6px;align-items:start;min-height:0;padding:18px}
  .test-card .icon-tile{grid-column:1;grid-row:1 / 3;width:44px;height:44px;border-radius:14px}
  .test-card .icon-tile .icon{width:24px;height:24px}
  .test-card h3{grid-column:2;grid-row:1;margin:0;font-size:17px;line-height:1.5;letter-spacing:-.5px}
  .test-card>p{grid-column:2;grid-row:2;margin:0;font-size:13px;line-height:1.6}
  .test-card .card-bottom{grid-column:3;grid-row:1 / 3;align-self:center;width:auto;margin:0;padding:0}
  .test-card .circle-arrow{width:28px;height:28px}
  .test-card .circle-arrow .icon{width:17px;height:17px}
  .category-filters{gap:8px;margin-bottom:16px}
  .category-button{padding:9px 14px;font-size:14px}
}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{transition:none!important}}
```

## script.js

```javascript
"use strict";

const KAKAO_JAVASCRIPT_KEY = '7a0729ebdecc02b3f4ce5e892c53248a';

function initializeKakao() {
  if (!window.Kakao) return false;
  if (!Kakao.isInitialized()) {
    Kakao.init(KAKAO_JAVASCRIPT_KEY);
  }
  return Kakao.isInitialized();
}

// The main page does not load the SDK; sharing is available on result pages.
try {
  initializeKakao();
} catch (error) {
  console.error("카카오 SDK 초기화 실패", error);
}

const kakaoShareButton = document.querySelector("#kakao-share-button");
if (kakaoShareButton) {
  const shareStatus = document.querySelector("#kakao-share-status");
  const showShareError = (message) => {
    shareStatus.textContent = message;
    shareStatus.hidden = false;
  };

  kakaoShareButton.addEventListener("click", () => {
    shareStatus.hidden = true;
    shareStatus.textContent = "";
    try {
      if (!/^https?:$/.test(location.protocol)) {
        showShareError("localhost 개발 서버에서 접속한 뒤 공유해 주세요.");
        return;
      }
      if (!initializeKakao()) {
        showShareError("카카오 공유 기능을 불러오지 못했어요. 인터넷 연결을 확인한 뒤 새로고침해 주세요.");
        return;
      }
      // Preserve the current directory for both root and subdirectory hosting.
      const testUrl = new URL(location.pathname, location.origin).href;
      const request = Kakao.Share.sendDefault({
        objectType: "text",
        text: `${testData.title}\n${testData.shareDescription || testData.description}`,
        link: {
          mobileWebUrl: testUrl,
          webUrl: testUrl,
        },
        buttonTitle: "나도 테스트 해보기",
      });
      // SDK errors can occur immediately or through a rejected promise.
      Promise.resolve(request).catch((error) => {
        console.error("카카오톡 공유 요청 실패", error);
        showShareError("공유 요청을 완료하지 못했어요. 잠시 후 다시 시도해 주세요.");
      });
    } catch (error) {
      console.error("카카오톡 공유 요청 실패", error);
      showShareError("공유 요청을 완료하지 못했어요. 잠시 후 다시 시도해 주세요.");
    }
  });
}

// The complete category list supplies search, random launch and today's picks.
const cards = Array.from(document.querySelectorAll("#category-grid .test-card"));
const tests = Array.from(new Map(cards.map((card) => [Number(card.dataset.test), {
  id: Number(card.dataset.test),
  title: card.querySelector("h3").innerHTML.replace(/<br\s*\/?>/gi, " ").replace(/\s+/g, " ").trim(),
  description: card.querySelector("p").textContent,
  url: card.getAttribute("href"),
}])).values());
// Detail pages can supply their test to the same header search.
if (!tests.length && typeof testData !== "undefined") {
  tests.push({ id: testData.id, title: testData.title, description: testData.description, url: testData.url });
}
const searchDialog = document.querySelector("#search-dialog");
const searchInput = document.querySelector("#search-input");
const searchResults = document.querySelector("#search-results");
const searchCount = document.querySelector("#search-count");

const todayGrid = document.querySelector("#new-tests .card-grid");
if (todayGrid && cards.length) {
  const shuffledCards = [...cards];
  for (let index = shuffledCards.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledCards[index], shuffledCards[randomIndex]] = [shuffledCards[randomIndex], shuffledCards[index]];
  }
  const picks = shuffledCards.slice(0, 3);
  const selectionKey = "todayChoice.todayTests";
  const signature = () => picks.map((card) => card.dataset.test).sort().join(",");
  try {
    // Avoid repeating the same trio on the next visit in this browser tab.
    if (shuffledCards.length > 3 && sessionStorage.getItem(selectionKey) === signature()) {
      picks[2] = shuffledCards[3];
    }
    sessionStorage.setItem(selectionKey, signature());
  } catch {
    // Random selection still works when browser storage is unavailable.
  }
  todayGrid.replaceChildren(...picks.map((card) => card.cloneNode(true)));
}

const randomTestButton = document.querySelector("#random-test-button");
if (randomTestButton) {
  randomTestButton.addEventListener("click", () => {
    const availableTests = tests.filter((test) => test.url);
    if (!availableTests.length) return;
    const test = availableTests[Math.floor(Math.random() * availableTests.length)];
    window.location.href = test.url;
  });
}

function openTest(index) {
  const test = tests.find((item) => item.id === index);
  if (!test) return;
  if (test.url) {
    window.location.href = test.url;
    return;
  }
}

function renderSearch() {
  const query = searchInput.value.trim().toLocaleLowerCase("ko").replace(/\s+/g, "");
  searchResults.replaceChildren();
  let count = 0;
  tests.forEach((test, index) => {
    const searchable = `${test.title} ${test.description}`.toLocaleLowerCase("ko").replace(/\s+/g, "");
    if (!searchable.includes(query)) return;
    count += 1;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "search-result";
    const title = document.createElement("span");
    title.textContent = test.title;
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.classList.add("icon");
    icon.setAttribute("aria-hidden", "true");
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", "#icon-arrow");
    icon.append(use);
    button.append(title, icon);
    button.addEventListener("click", () => openTest(test.id));
    searchResults.append(button);
  });
  searchCount.textContent = `테스트 ${count}개`;
  if (count === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-results";
    empty.textContent = "검색 결과가 없어요. 다른 단어로 찾아보세요.";
    searchResults.append(empty);
  }
}

document.querySelectorAll(".search-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    searchInput.value = "";
    renderSearch();
    searchDialog.showModal();
    searchInput.focus();
  });
});
searchInput.addEventListener("input", renderSearch);

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog").close());
});
document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) {
      dialog.close();
    }
  });
});

const categoryButtons = Array.from(document.querySelectorAll(".category-button"));
const categoryCards = Array.from(document.querySelectorAll("#category-grid .test-card"));
const categoryGrid = document.querySelector("#category-grid");
const categoryEmpty = document.querySelector("#category-empty");
const testPagination = document.querySelector("#test-pagination");
const mobileTestLayout = window.matchMedia("(max-width: 640px)");
let selectedCategory = "all";
let currentTestPage = 1;

function renderCategoryTests() {
  const testsPerPage = mobileTestLayout.matches ? 5 : 9;
  const filteredCards = categoryCards.filter((card) => selectedCategory === "all" || card.dataset.category === selectedCategory);
  const pageCount = Math.ceil(filteredCards.length / testsPerPage);
  currentTestPage = Math.max(1, Math.min(currentTestPage, pageCount || 1));
  const offset = (currentTestPage - 1) * testsPerPage;
  const pageCards = new Set(filteredCards.slice(offset, offset + testsPerPage));
  categoryCards.forEach((card) => { card.hidden = !pageCards.has(card); });
  categoryEmpty.hidden = filteredCards.length > 0;
  const categoryLabel = categoryButtons.find((button) => button.dataset.filter === selectedCategory).textContent;
  document.querySelector("#filter-status").textContent = filteredCards.length
    ? `${categoryLabel} 테스트 ${filteredCards.length}개 중 ${offset + 1}~${offset + pageCards.size}개를 표시하고 있어요. ${currentTestPage}페이지.`
    : `${categoryLabel} 카테고리에 등록된 테스트가 없어요.`;

  testPagination.replaceChildren();
  testPagination.hidden = pageCount <= 1;
  if (pageCount <= 1) return;
  function addPageButton(label, page, disabled = false, active = false) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "page-button";
    button.textContent = label;
    button.disabled = disabled;
    button.setAttribute("aria-controls", "category-grid");
    if (active) button.setAttribute("aria-current", "page");
    button.addEventListener("click", () => {
      categoryGrid.style.minHeight = `${categoryGrid.getBoundingClientRect().height}px`;
      currentTestPage = page;
      renderCategoryTests();
      testPagination.querySelector('[aria-current="page"]').focus({ preventScroll: true });
    });
    testPagination.append(button);
  }
  addPageButton("이전", currentTestPage - 1, currentTestPage === 1);
  for (let page = 1; page <= pageCount; page += 1) {
    addPageButton(String(page), page, false, page === currentTestPage);
  }
  addPageButton("다음", currentTestPage + 1, currentTestPage === pageCount);
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Keep the list's space so filtering cannot pull the page bottom upward.
    categoryGrid.style.minHeight = `${categoryGrid.getBoundingClientRect().height}px`;
    selectedCategory = button.dataset.filter;
    currentTestPage = 1;
    categoryButtons.forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    renderCategoryTests();
  });
});
if (categoryGrid) renderCategoryTests();
mobileTestLayout.addEventListener("change", () => {
  if (!categoryGrid) return;
  currentTestPage = 1;
  categoryGrid.style.minHeight = "";
  renderCategoryTests();
});

document.querySelectorAll(".view-all").forEach((link) => {
  link.addEventListener("click", () => {
    const allCategoryButton = categoryButtons.find((button) => button.dataset.filter === "all");
    if (allCategoryButton) allCategoryButton.click();
  });
});

const navLinks = Array.from(document.querySelectorAll(".nav-link"));
function updateNavigation(id) {
  navLinks.forEach((link) => {
    const active = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}
navLinks.forEach((link) => {
  link.addEventListener("click", () => updateNavigation(link.hash.slice(1)));
});
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (visible.length) updateNavigation(visible[0].target.id);
  }, { rootMargin: "-5% 0px -35% 0px", threshold: [0, 0.25, 0.5] });
  document.querySelectorAll("#home, #popular, #new-tests, #about").forEach((section) => observer.observe(section));
}

// Decorative icons are hidden from assistive technology; their labels are nearby.
document.querySelectorAll("svg.icon").forEach((icon) => icon.setAttribute("aria-hidden", "true"));
```

## affection-data.js

```javascript
"use strict";

const testData = {
  id: 27,
  url: "affection-test.html",
  title: "나는 인간관계에서 정이 많은 편일까?",
  description: "한번 내 사람이 되면 얼마나 오래 챙기는 타입일까?",
  category: "친구·인간관계·사회생활",
  shareDescription: "내 인간관계 정 테스트 결과를 확인해보세요.",
  questions: [
    {
      question: "한동안 연락이 없던 오래된 친구가 생각나면?",
      answers: ["그냥 추억으로 남긴다", "가끔 궁금해한다", "먼저 연락해볼까 고민한다", "생각나면 바로 연락하는 편이다"],
    },
    {
      question: "친한 친구가 힘들다고 연락했는데 내가 매우 바쁘다면?",
      answers: ["상황이 어렵다면 다음에 연락한다", "간단하게라도 답한다", "시간을 내서 이야기를 들어준다", "내가 바빠도 어떻게든 챙긴다"],
    },
    {
      question: "친구가 나에게 크게 실수했다면?",
      answers: ["실망하면 관계를 정리할 수도 있다", "사과를 보고 판단한다", "오래된 관계라면 한 번 더 기회를 준다", "웬만한 일은 정 때문에 쉽게 끊지 못한다"],
    },
    {
      question: "예전에 친했던 친구의 생일이 떠오르면?",
      answers: ["특별히 연락하지 않는다", "SNS 정도는 확인한다", "축하 메시지를 보낸다", "지금 안 친해도 꼭 챙기는 편이다"],
    },
    {
      question: "멀어진 친구가 몇 년 만에 다시 연락한다면?",
      answers: ["별로 반갑지 않을 수도 있다", "상황을 봐서 답한다", "반갑게 이야기한다", "금방 예전처럼 대할 것 같다"],
    },
    {
      question: "친한 친구가 어려운 상황이라 도움을 부탁한다면?",
      answers: ["내가 가능한 범위만 돕는다", "조금 번거로워도 도와준다", "내 일정까지 조정해서 돕는다", "어느 정도 손해를 봐도 도와주는 편이다"],
    },
    {
      question: "오래된 친구와 가치관이 많이 달라졌다면?",
      answers: ["안 맞으면 자연스럽게 멀어진다", "적당한 거리만 유지한다", "오래된 인연이니 맞춰보려고 한다", "웬만하면 관계를 계속 유지한다"],
    },
    {
      question: "친구에게 서운한 일이 계속 생긴다면?",
      answers: ["바로 관계를 정리할 수도 있다", "솔직하게 이야기한 뒤 판단한다", "서운해도 쉽게 멀어지지 못한다", "화가 나도 정 때문에 결국 다시 챙긴다"],
    },
    {
      question: "친했던 사람과 관계가 끝난 뒤에는?",
      answers: ["금방 잊는 편이다", "가끔 생각난다", "꽤 오래 생각난다", "시간이 오래 지나도 마음이 남는다"],
    },
    {
      question: "“한번 내 사람은 끝까지 챙긴다”라는 말은 나와?",
      answers: ["별로 안 맞는다", "어느 정도 맞는다", "꽤 잘 맞는다", "거의 나를 설명하는 말이다"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({ text, score: index + 1 })),
  })),
  results: [
    {
      min: 10, max: 16,
      title: "관계가 끝나면 깔끔한 편",
      description: "사람에게 정이 없기보다는 관계의 변화도 자연스럽게 받아들이는 타입. 안 맞거나 멀어진 관계를 억지로 붙잡지는 않는 편이야.",
    },
    {
      min: 17, max: 24,
      title: "적당히 정 많은 편",
      description: "소중한 사람은 챙기지만 관계 때문에 무조건 참고 희생하지는 않는 타입. 정과 현실 사이에서 비교적 균형을 잘 잡는 편이야.",
    },
    {
      min: 25, max: 32,
      title: "정이 꽤 많은 타입",
      description: "한번 친해진 사람을 쉽게 놓지 못하는 편. 오래된 인연을 중요하게 생각하고, 친구가 힘들면 내 일처럼 신경 쓰는 경우가 많아.",
    },
    {
      min: 33, max: 40,
      title: "한번 내 사람은 끝까지 챙기는 타입",
      description: "사람에게 정을 많이 주고 한번 맺은 관계를 오래 가져가는 편이야. 서운하거나 실망해도 그동안 쌓인 정 때문에 쉽게 돌아서지 못하는 타입. 그만큼 따뜻하지만 관계에서 내가 너무 많이 참고 있지는 않은지도 볼 필요가 있어.",
    },
  ],
};
```

## affection-test.html

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
  <meta name="description" content="한번 내 사람이 되면 얼마나 오래 챙기는 타입일까?">
  <title>나는 인간관계에서 정이 많은 편일까? | Today's Choice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="test.css">
  <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.2/kakao.min.js" integrity="sha384-zt/G7/KfaRQ9dT/QIkS0ujMtzouJqzuSJcXVQu50x0rl/+mD1dc70AeOejVbMD9E" crossorigin="anonymous" defer></script>
  <script src="affection-data.js" defer></script>
  <script src="script.js" defer></script>
  <script src="test-runner.js" defer></script>
</head>
<body class="test-page">
  <svg class="svg-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>
    <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="7.3"/><path d="m16 16 5 5"/></symbol>
    <symbol id="icon-heart" viewBox="0 0 24 24"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/></symbol>
    <symbol id="icon-chat" viewBox="0 0 24 24"><path d="M21 11.5a9 9 0 0 1-9 8.5 10 10 0 0 1-4-.8L3 21l1.7-4.7A8 8 0 0 1 3 11.5a9 9 0 0 1 18 0Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></symbol>
    <symbol id="icon-ring" viewBox="0 0 24 24"><circle cx="12" cy="14" r="7.5"/><path d="m9 3 3 3 3-3-1-2h-4l-1 2Z"/></symbol>
    <symbol id="icon-people" viewBox="0 0 24 24"><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3"/></symbol>
    <symbol id="icon-flame" viewBox="0 0 24 24"><path d="M12 3c0 4-5 6-5 11a5 5 0 0 0 10 0c0-3-2-5-3-7 0 3-1 4-2 5 0-4 2-6 0-9Z"/></symbol>
    <symbol id="icon-moon" viewBox="0 0 24 24"><path d="M21 14A9.5 9.5 0 0 1 10 3a9.5 9.5 0 1 0 11 11Z"/></symbol>
    <symbol id="icon-leaf" viewBox="0 0 24 24"><path d="M12 22V11M12 15C5 16 2 11 3 7c6-1 9 3 9 8Zm0-5c0-6 4-9 9-8 1 6-3 10-9 8Z"/></symbol>
    <symbol id="icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></symbol>
  </svg>
  <a class="skip-link" href="#main">본문 바로가기</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="index.html#home" aria-label="오늘의 초이스 홈">Today's choice</a>
      <nav class="main-nav" aria-label="주 메뉴">
        <a class="nav-link" href="index.html#home">홈</a>
        <a class="nav-link" href="index.html#new-tests">오늘의 테스트</a>
        <a class="nav-link" href="index.html#popular">전체 테스트</a>
        <a class="nav-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
      <button class="icon-button search-toggle" type="button" aria-label="테스트 검색" aria-haspopup="dialog"><svg class="icon"><use href="#icon-search"/></svg></button>
    </div>
  </header>
  <main id="main" data-test-runner>
    <section class="test-panel" data-screen="start" aria-labelledby="test-title">
      <p class="test-category" data-role="category"></p>
      <h1 id="test-title" data-role="title" data-focus tabindex="-1"></h1>
      <p class="test-description" data-role="description"></p>
      <p class="test-count" data-role="count"></p>
      <button class="primary-button" type="button" data-role="start">테스트 시작하기</button>
    </section>
    <section class="test-panel" data-screen="question" aria-labelledby="question-title" hidden>
      <div class="question-top">
        <button class="test-back" type="button" data-role="back">← 뒤로가기</button>
        <span class="test-position" data-role="position"></span>
      </div>
      <progress class="test-progress" data-role="progress" value="0" max="10" aria-label="테스트 진행률"></progress>
      <h2 class="question-title" id="question-title" data-role="question" data-focus tabindex="-1"></h2>
      <div class="answer-list" data-role="answers" role="group" aria-labelledby="question-title"></div>
    </section>
    <section class="test-panel test-result" data-screen="result" aria-labelledby="result-title" hidden>
      <p class="result-label">당신의 정 지수는</p>
      <p class="result-score"><span data-role="score"></span><small> / <span data-role="max-score"></span>점</small></p>
      <h2 class="result-title" id="result-title" data-role="result-title" data-focus tabindex="-1"></h2>
      <p class="result-description" data-role="result-description"></p>
      <div class="result-actions">
        <button class="secondary-button" type="button" data-role="restart">다시하기</button>
        <a class="secondary-button" href="index.html#category-tests">다른 테스트 보기</a>
      </div>
      <button class="primary-button kakao-share-button" id="kakao-share-button" type="button">카카오톡으로 공유하기</button>
      <p class="kakao-share-status" id="kakao-share-status" role="status" hidden></p>
      <p class="test-disclaimer">본 테스트는 재미를 위한 콘텐츠이며 전문적인 심리 진단이 아닙니다.</p>
    </section>
    <noscript><p>테스트를 진행하려면 브라우저에서 JavaScript를 활성화해 주세요.</p></noscript>
  </main>
  <footer class="site-footer" id="about">
    <div class="container footer-inner">
      <a class="instagram-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        <span>@choice_zip_</span>
      </a>
    </div>
  </footer>
  <dialog id="search-dialog" class="modal" aria-labelledby="search-title"><div class="modal-heading"><h2 id="search-title">어떤 테스트를 찾으세요?</h2><button class="icon-button" type="button" data-close aria-label="검색 닫기"><svg class="icon"><use href="#icon-close"/></svg></button></div><label class="search-field"><svg class="icon"><use href="#icon-search"/></svg><input id="search-input" type="search" placeholder="친구, 인간관계, 정…" aria-label="테스트 검색어" autocomplete="off"></label><p id="search-count" class="search-count" aria-live="polite"></p><div id="search-results" class="search-results"></div></dialog>
</body>
</html>
```

## cutoff-data.js

```javascript
"use strict";

const testData = {
  id: 15,
  url: "cutoff-test.html",
  title: "나는 사람을 얼마나 빨리 손절하는 편일까?",
  description: "인간관계에서 나는 참는 편일까, 빠르게 정리하는 편일까?",
  category: "친구·인간관계·사회생활",
  shareDescription: "내 인간관계 손절 성향 결과를 확인해보세요.",
  questions: [
    {
      question: "친구가 약속 시간에 30분 넘게 늦었는데 별말이 없다면?",
      answers: ["그럴 수도 있다고 생각한다", "조금 서운하지만 넘어간다", "다음부터는 거리 두고 싶다", "바로 정이 떨어진다"],
    },
    {
      question: "친한 친구가 내 뒷담화를 했다는 걸 알게 된다면?",
      answers: ["이유부터 들어본다", "많이 서운하지만 대화해본다", "예전처럼 지내긴 힘들 것 같다", "바로 관계를 끊는다"],
    },
    {
      question: "친구가 내 연락을 자주 읽고도 답하지 않는다면?",
      answers: ["바쁜가 보다 한다", "반복되면 조금 신경 쓰인다", "나도 먼저 연락하지 않는다", "굳이 계속 친구로 지낼 필요 없다고 생각한다"],
    },
    {
      question: "내가 힘들 때 친구가 별로 관심을 보이지 않는다면?",
      answers: ["원래 그런 성격일 수 있다고 생각한다", "조금 서운하다", "나도 그 친구에게 신경을 덜 쓴다", "그 순간 마음이 멀어진다"],
    },
    {
      question: "친구가 같은 실수를 반복해서 나를 기분 나쁘게 한다면?",
      answers: ["몇 번은 이해한다", "솔직하게 말해본다", "한두 번 더 반복되면 멀어진다", "한 번 크게 실망하면 끝이다"],
    },
    {
      question: "친한 친구가 다른 친구들과 더 가까워진 것 같다면?",
      answers: ["별로 신경 안 쓴다", "조금 섭섭하지만 티내지 않는다", "자연스럽게 나도 거리를 둔다", "나를 덜 중요하게 생각한다고 느껴 정이 떨어진다"],
    },
    {
      question: "친구가 필요할 때만 연락하는 느낌이 든다면?",
      answers: ["그래도 연락 오면 받아준다", "몇 번 지켜본다", "나도 비슷하게 대한다", "바로 연락을 줄인다"],
    },
    {
      question: "친구가 내 고민을 다른 사람에게 말했다면?",
      answers: ["상황에 따라 이해할 수도 있다", "사과하면 다시 믿어본다", "다시는 중요한 얘기를 하지 않는다", "신뢰가 깨졌으니 관계도 끝이라고 생각한다"],
    },
    {
      question: "오래된 친구와 성격이나 가치관이 많이 달라졌다면?",
      answers: ["오래된 관계니까 맞춰간다", "조금씩 거리를 조절한다", "굳이 예전처럼 친하게 지내지 않는다", "안 맞으면 오래된 친구라도 정리한다"],
    },
    {
      question: "인간관계에서 크게 실망한 일이 생기면?",
      answers: ["시간이 지나면 대부분 풀린다", "사과와 행동을 보고 결정한다", "한 번 생긴 거리감은 쉽게 안 없어진다", "한 번 끝이라고 느끼면 다시 돌아가지 않는다"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({ text, score: index + 1 })),
  })),
  results: [
    {
      min: 10, max: 16,
      title: "웬만하면 관계를 지키는 편",
      description: "사람에게 쉽게 정을 끊지 않는 타입. 상대의 상황을 이해하려 하고 웬만한 갈등은 넘기는 편이야. 다만 계속 참기만 하면 혼자 상처가 쌓일 수 있음.",
    },
    {
      min: 17, max: 24,
      title: "충분히 고민하고 정리하는 편",
      description: "한 번의 실수로 바로 관계를 끊지는 않지만 반복되는 문제는 그냥 넘기지 않는 편. 상대에게 기회를 주면서도 내 기준은 지키는 타입.",
    },
    {
      min: 25, max: 32,
      title: "마음이 멀어지는 속도가 빠른 편",
      description: "한번 신뢰가 깨지거나 실망하면 이전처럼 지내기 어려운 편. 겉으로는 괜찮아 보여도 속으로 이미 거리를 두고 있을 가능성이 큼.",
    },
    {
      min: 33, max: 40,
      title: "손절 결정이 빠른 편",
      description: "관계에서 선을 넘었다고 느끼면 미련 없이 정리하는 타입. 인간관계에 쓸 에너지를 아끼는 장점도 있지만, 순간적인 감정으로 좋은 관계까지 놓치지 않는지는 한 번 생각해볼 필요가 있음.",
    },
  ],
};
```

## cutoff-test.html

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
  <meta name="description" content="인간관계에서 나는 참는 편일까, 빠르게 정리하는 편일까?">
  <title>나는 사람을 얼마나 빨리 손절하는 편일까? | Today's Choice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="test.css">
  <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.2/kakao.min.js" integrity="sha384-zt/G7/KfaRQ9dT/QIkS0ujMtzouJqzuSJcXVQu50x0rl/+mD1dc70AeOejVbMD9E" crossorigin="anonymous" defer></script>
  <script src="cutoff-data.js" defer></script>
  <script src="script.js" defer></script>
  <script src="test-runner.js" defer></script>
</head>
<body class="test-page">
  <svg class="svg-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>
    <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="7.3"/><path d="m16 16 5 5"/></symbol>
    <symbol id="icon-heart" viewBox="0 0 24 24"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/></symbol>
    <symbol id="icon-chat" viewBox="0 0 24 24"><path d="M21 11.5a9 9 0 0 1-9 8.5 10 10 0 0 1-4-.8L3 21l1.7-4.7A8 8 0 0 1 3 11.5a9 9 0 0 1 18 0Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></symbol>
    <symbol id="icon-ring" viewBox="0 0 24 24"><circle cx="12" cy="14" r="7.5"/><path d="m9 3 3 3 3-3-1-2h-4l-1 2Z"/></symbol>
    <symbol id="icon-people" viewBox="0 0 24 24"><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3"/></symbol>
    <symbol id="icon-flame" viewBox="0 0 24 24"><path d="M12 3c0 4-5 6-5 11a5 5 0 0 0 10 0c0-3-2-5-3-7 0 3-1 4-2 5 0-4 2-6 0-9Z"/></symbol>
    <symbol id="icon-moon" viewBox="0 0 24 24"><path d="M21 14A9.5 9.5 0 0 1 10 3a9.5 9.5 0 1 0 11 11Z"/></symbol>
    <symbol id="icon-leaf" viewBox="0 0 24 24"><path d="M12 22V11M12 15C5 16 2 11 3 7c6-1 9 3 9 8Zm0-5c0-6 4-9 9-8 1 6-3 10-9 8Z"/></symbol>
    <symbol id="icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></symbol>
  </svg>
  <a class="skip-link" href="#main">본문 바로가기</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="index.html#home" aria-label="오늘의 초이스 홈">Today's choice</a>
      <nav class="main-nav" aria-label="주 메뉴">
        <a class="nav-link" href="index.html#home">홈</a>
        <a class="nav-link" href="index.html#new-tests">오늘의 테스트</a>
        <a class="nav-link" href="index.html#popular">전체 테스트</a>
        <a class="nav-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
      <button class="icon-button search-toggle" type="button" aria-label="테스트 검색" aria-haspopup="dialog"><svg class="icon"><use href="#icon-search"/></svg></button>
    </div>
  </header>
  <main id="main" data-test-runner>
    <section class="test-panel" data-screen="start" aria-labelledby="test-title">
      <p class="test-category" data-role="category"></p>
      <h1 id="test-title" data-role="title" data-focus tabindex="-1"></h1>
      <p class="test-description" data-role="description"></p>
      <p class="test-count" data-role="count"></p>
      <button class="primary-button" type="button" data-role="start">테스트 시작하기</button>
    </section>
    <section class="test-panel" data-screen="question" aria-labelledby="question-title" hidden>
      <div class="question-top">
        <button class="test-back" type="button" data-role="back">← 뒤로가기</button>
        <span class="test-position" data-role="position"></span>
      </div>
      <progress class="test-progress" data-role="progress" value="0" max="10" aria-label="테스트 진행률"></progress>
      <h2 class="question-title" id="question-title" data-role="question" data-focus tabindex="-1"></h2>
      <div class="answer-list" data-role="answers" role="group" aria-labelledby="question-title"></div>
    </section>
    <section class="test-panel test-result" data-screen="result" aria-labelledby="result-title" hidden>
      <p class="result-label">당신의 손절 지수는</p>
      <p class="result-score"><span data-role="score"></span><small> / <span data-role="max-score"></span>점</small></p>
      <h2 class="result-title" id="result-title" data-role="result-title" data-focus tabindex="-1"></h2>
      <p class="result-description" data-role="result-description"></p>
      <div class="result-actions">
        <button class="secondary-button" type="button" data-role="restart">다시하기</button>
        <a class="secondary-button" href="index.html#category-tests">다른 테스트 보기</a>
      </div>
      <button class="primary-button kakao-share-button" id="kakao-share-button" type="button">카카오톡으로 공유하기</button>
      <p class="kakao-share-status" id="kakao-share-status" role="status" hidden></p>
      <p class="test-disclaimer">본 테스트는 재미를 위한 콘텐츠이며 전문적인 심리 진단이 아닙니다.</p>
    </section>
    <noscript><p>테스트를 진행하려면 브라우저에서 JavaScript를 활성화해 주세요.</p></noscript>
  </main>
  <footer class="site-footer" id="about">
    <div class="container footer-inner">
      <a class="instagram-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        <span>@choice_zip_</span>
      </a>
    </div>
  </footer>
  <dialog id="search-dialog" class="modal" aria-labelledby="search-title"><div class="modal-heading"><h2 id="search-title">어떤 테스트를 찾으세요?</h2><button class="icon-button" type="button" data-close aria-label="검색 닫기"><svg class="icon"><use href="#icon-close"/></svg></button></div><label class="search-field"><svg class="icon"><use href="#icon-search"/></svg><input id="search-input" type="search" placeholder="친구, 인간관계, 손절…" aria-label="테스트 검색어" autocomplete="off"></label><p id="search-count" class="search-count" aria-live="polite"></p><div id="search-results" class="search-results"></div></dialog>
</body>
</html>
```

## difficult-people-data.js

```javascript
"use strict";

const testData = {
  id: 29,
  url: "difficult-people-test.html",
  title: "나는 싫은 사람과도 잘 지낼 수 있을까?",
  description: "감정은 감정이고 사회생활은 사회생활일까?",
  category: "친구·인간관계·사회생활",
  shareDescription: "내 싫은 사람 대처 테스트 결과를 확인해보세요.",
  questions: [
    {
      question: "별로 안 좋아하는 사람과 같은 팀이 됐다면?",
      answers: ["필요한 일은 편하게 같이 한다", "조금 불편하지만 티 안 낸다", "필요한 말만 한다", "최대한 엮이지 않으려고 한다"],
    },
    {
      question: "싫은 사람이 먼저 친근하게 말을 걸면?",
      answers: ["자연스럽게 받아준다", "예의상 맞춰준다", "짧게 대답한다", "대화를 빨리 끝내고 싶다"],
    },
    {
      question: "회식이나 모임에서 그 사람 옆자리에 앉게 된다면?",
      answers: ["그냥 앉는다", "조금 불편하지만 괜찮다", "가능하면 자리를 바꾼다", "어떻게든 피한다"],
    },
    {
      question: "싫은 사람에게 부탁을 받아야 한다면?",
      answers: ["필요한 일이면 한다", "업무라면 한다", "최소한만 돕는다", "웬만하면 거절하고 싶다"],
    },
    {
      question: "그 사람이 좋은 성과를 냈다면?",
      answers: ["잘한 건 인정한다", "축하 정도는 해준다", "별로 관심 없다", "솔직히 축하하기 싫다"],
    },
    {
      question: "싫은 사람이 나에게 실수를 사과한다면?",
      answers: ["사과는 사과대로 받아준다", "상황을 보고 받아준다", "쉽게 마음이 풀리진 않는다", "싫은 감정이 더 커서 받아들이기 어렵다"],
    },
    {
      question: "다른 사람들이 그 사람을 좋아한다면?",
      answers: ["사람마다 보는 게 다르다고 생각한다", "조금 신기하지만 신경 안 쓴다", "왜 좋아하는지 이해가 안 된다", "괜히 더 불편해진다"],
    },
    {
      question: "싫은 사람과 장기간 같이 일해야 한다면?",
      answers: ["일만 잘 맞으면 괜찮다", "적응하려고 노력한다", "스트레스를 꽤 받을 것 같다", "계속 같이 있어야 하면 너무 힘들다"],
    },
    {
      question: "그 사람이 나한테 잘해주기 시작하면?",
      answers: ["다시 생각해볼 수 있다", "조금 지켜본다", "그래도 거리 두는 편이다", "싫어진 사람은 잘 안 바뀐다"],
    },
    {
      question: "사회생활에서 싫은 사람을 대하는 나는?",
      answers: ["감정과 일을 분리하는 편이다", "웬만하면 티 안 낸다", "표정이나 말투에 조금 드러난다", "싫으면 숨기기 어렵다"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({ text, score: index + 1 })),
  })),
  results: [
    {
      min: 10, max: 16,
      title: "프로 사회생활형",
      description: "싫은 감정이 있어도 필요한 관계는 무난하게 유지하는 편이야. 감정과 상황을 비교적 잘 분리하고, 상대를 좋아하지 않아도 예의는 지키는 타입.",
    },
    {
      min: 17, max: 24,
      title: "티는 안 내는 편",
      description: "불편한 사람과도 웬만하면 문제없이 지내는 편. 다만 속으로는 어느 정도 거리 두기를 하면서 관계를 관리하는 타입이야.",
    },
    {
      min: 25, max: 32,
      title: "불편함이 꽤 드러나는 편",
      description: "싫은 사람과 계속 맞춰 지내는 걸 꽤 힘들어하는 편이야. 필요한 상황에서는 참지만 오래 함께하면 스트레스가 쌓일 가능성이 큼.",
    },
    {
      min: 33, max: 40,
      title: "싫으면 거리 두는 타입",
      description: "한번 불편하다고 느끼면 굳이 관계를 유지하려 하지 않는 편. 감정을 숨기기보다 가능한 한 접점을 줄이는 쪽을 선택하는 타입이야.",
    },
  ],
};
```

## difficult-people-test.html

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
  <meta name="description" content="감정은 감정이고 사회생활은 사회생활일까?">
  <title>나는 싫은 사람과도 잘 지낼 수 있을까? | Today's Choice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="test.css">
  <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.2/kakao.min.js" integrity="sha384-zt/G7/KfaRQ9dT/QIkS0ujMtzouJqzuSJcXVQu50x0rl/+mD1dc70AeOejVbMD9E" crossorigin="anonymous" defer></script>
  <script src="difficult-people-data.js" defer></script>
  <script src="script.js" defer></script>
  <script src="test-runner.js" defer></script>
</head>
<body class="test-page">
  <svg class="svg-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>
    <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="7.3"/><path d="m16 16 5 5"/></symbol>
    <symbol id="icon-heart" viewBox="0 0 24 24"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/></symbol>
    <symbol id="icon-chat" viewBox="0 0 24 24"><path d="M21 11.5a9 9 0 0 1-9 8.5 10 10 0 0 1-4-.8L3 21l1.7-4.7A8 8 0 0 1 3 11.5a9 9 0 0 1 18 0Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></symbol>
    <symbol id="icon-ring" viewBox="0 0 24 24"><circle cx="12" cy="14" r="7.5"/><path d="m9 3 3 3 3-3-1-2h-4l-1 2Z"/></symbol>
    <symbol id="icon-people" viewBox="0 0 24 24"><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3"/></symbol>
    <symbol id="icon-flame" viewBox="0 0 24 24"><path d="M12 3c0 4-5 6-5 11a5 5 0 0 0 10 0c0-3-2-5-3-7 0 3-1 4-2 5 0-4 2-6 0-9Z"/></symbol>
    <symbol id="icon-moon" viewBox="0 0 24 24"><path d="M21 14A9.5 9.5 0 0 1 10 3a9.5 9.5 0 1 0 11 11Z"/></symbol>
    <symbol id="icon-leaf" viewBox="0 0 24 24"><path d="M12 22V11M12 15C5 16 2 11 3 7c6-1 9 3 9 8Zm0-5c0-6 4-9 9-8 1 6-3 10-9 8Z"/></symbol>
    <symbol id="icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></symbol>
  </svg>
  <a class="skip-link" href="#main">본문 바로가기</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="index.html#home" aria-label="오늘의 초이스 홈">Today's choice</a>
      <nav class="main-nav" aria-label="주 메뉴">
        <a class="nav-link" href="index.html#home">홈</a>
        <a class="nav-link" href="index.html#new-tests">오늘의 테스트</a>
        <a class="nav-link" href="index.html#popular">전체 테스트</a>
        <a class="nav-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
      <button class="icon-button search-toggle" type="button" aria-label="테스트 검색" aria-haspopup="dialog"><svg class="icon"><use href="#icon-search"/></svg></button>
    </div>
  </header>
  <main id="main" data-test-runner>
    <section class="test-panel" data-screen="start" aria-labelledby="test-title">
      <p class="test-category" data-role="category"></p>
      <h1 id="test-title" data-role="title" data-focus tabindex="-1"></h1>
      <p class="test-description" data-role="description"></p>
      <p class="test-count" data-role="count"></p>
      <button class="primary-button" type="button" data-role="start">테스트 시작하기</button>
    </section>
    <section class="test-panel" data-screen="question" aria-labelledby="question-title" hidden>
      <div class="question-top">
        <button class="test-back" type="button" data-role="back">← 뒤로가기</button>
        <span class="test-position" data-role="position"></span>
      </div>
      <progress class="test-progress" data-role="progress" value="0" max="10" aria-label="테스트 진행률"></progress>
      <h2 class="question-title" id="question-title" data-role="question" data-focus tabindex="-1"></h2>
      <div class="answer-list" data-role="answers" role="group" aria-labelledby="question-title"></div>
    </section>
    <section class="test-panel test-result" data-screen="result" aria-labelledby="result-title" hidden>
      <p class="result-label">당신의 불편한 관계 대처 지수는</p>
      <p class="result-score"><span data-role="score"></span><small> / <span data-role="max-score"></span>점</small></p>
      <h2 class="result-title" id="result-title" data-role="result-title" data-focus tabindex="-1"></h2>
      <p class="result-description" data-role="result-description"></p>
      <div class="result-actions">
        <button class="secondary-button" type="button" data-role="restart">다시하기</button>
        <a class="secondary-button" href="index.html#category-tests">다른 테스트 보기</a>
      </div>
      <button class="primary-button kakao-share-button" id="kakao-share-button" type="button">카카오톡으로 공유하기</button>
      <p class="kakao-share-status" id="kakao-share-status" role="status" hidden></p>
      <p class="test-disclaimer">본 테스트는 재미를 위한 콘텐츠이며 전문적인 심리 진단이 아닙니다.</p>
    </section>
    <noscript><p>테스트를 진행하려면 브라우저에서 JavaScript를 활성화해 주세요.</p></noscript>
  </main>
  <footer class="site-footer" id="about">
    <div class="container footer-inner">
      <a class="instagram-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        <span>@choice_zip_</span>
      </a>
    </div>
  </footer>
  <dialog id="search-dialog" class="modal" aria-labelledby="search-title"><div class="modal-heading"><h2 id="search-title">어떤 테스트를 찾으세요?</h2><button class="icon-button" type="button" data-close aria-label="검색 닫기"><svg class="icon"><use href="#icon-close"/></svg></button></div><label class="search-field"><svg class="icon"><use href="#icon-search"/></svg><input id="search-input" type="search" placeholder="사회생활, 관계, 적응…" aria-label="테스트 검색어" autocomplete="off"></label><p id="search-count" class="search-count" aria-live="polite"></p><div id="search-results" class="search-results"></div></dialog>
</body>
</html>
```

## friend-boundaries-data.js

```javascript
"use strict";

const testData = {
  id: 25,
  url: "friend-boundaries-test.html",
  title: "나는 친한 친구에게도 선을 두는 편일까?",
  description: "아무리 친해도 지켜야 할 선이 있다고 생각하는 편일까?",
  category: "친구·인간관계·사회생활",
  shareDescription: "내 친구 사이 경계 테스트 결과를 확인해보세요.",
  questions: [
    {
      question: "친한 친구가 내 물건을 허락 없이 사용했다면?",
      answers: ["별로 신경 안 쓴다", "친하면 그럴 수도 있다고 생각한다", "다음부터는 말하고 쓰라고 한다", "아무리 친해도 허락 없이 쓰는 건 싫다"],
    },
    {
      question: "친구가 내 연애 이야기를 너무 자세히 물어본다면?",
      answers: ["거의 다 말해준다", "웬만한 건 말해준다", "말하고 싶은 것만 말한다", "친해도 연애 이야기는 선을 둔다"],
    },
    {
      question: "친구가 갑자기 “지금 너희 집 갈게”라고 한다면?",
      answers: ["언제든 와도 된다", "친한 친구라면 괜찮다", "미리 말해줬으면 좋겠다", "아무리 친해도 갑작스러운 방문은 싫다"],
    },
    {
      question: "친구가 장난으로 내 휴대폰을 보려고 한다면?",
      answers: ["그냥 보여준다", "조금 불편하지만 크게 신경 안 쓴다", "바로 휴대폰을 가져온다", "절대 보여주고 싶지 않다"],
    },
    {
      question: "친한 친구가 돈을 빌려달라고 하면?",
      answers: ["여유가 있으면 바로 빌려준다", "이유를 듣고 빌려준다", "소액 정도만 가능하다", "친구 사이 돈 거래는 하지 않는다"],
    },
    {
      question: "친구가 내 가족 이야기를 다른 사람에게 했다면?",
      answers: ["크게 상관없다", "내용에 따라 다르다", "왜 말했는지 물어본다", "내 이야기를 허락 없이 말한 게 싫다"],
    },
    {
      question: "친한 친구가 매일 연락하고 자주 만나고 싶어 한다면?",
      answers: ["나도 좋다", "크게 부담스럽지 않다", "가끔은 혼자 있고 싶다", "아무리 친해도 자주 연락하는 건 부담스럽다"],
    },
    {
      question: "친구가 내가 만나는 사람이나 다른 친구 관계에 간섭한다면?",
      answers: ["걱정해서 그런 거라 이해한다", "의견 정도는 들을 수 있다", "조언은 괜찮지만 결정은 내가 한다", "내 인간관계에는 관여하지 않았으면 한다"],
    },
    {
      question: "친구가 개인적인 이야기를 계속 캐묻는다면?",
      answers: ["친한 친구니까 대부분 말한다", "조금 부담돼도 대답한다", "말하고 싶지 않으면 피한다", "선 넘는 질문이라고 느끼면 바로 말한다"],
    },
    {
      question: "“친한 친구라면 서로 숨기는 게 없어야 한다”는 말에 대해?",
      answers: ["거의 동의한다", "어느 정도 동의한다", "친해도 말하지 않는 부분은 있을 수 있다", "친밀함과 사생활은 완전히 별개라고 생각한다"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({ text, score: index + 1 })),
  })),
  results: [
    {
      min: 10, max: 16,
      title: "거의 모든 걸 공유하는 밀착형",
      description: "친해지면 상대와의 경계가 많이 낮아지는 편이야. 개인적인 이야기나 물건, 시간까지 자연스럽게 공유하는 타입. 친구를 가족처럼 느끼는 경우도 많아.",
    },
    {
      min: 17, max: 24,
      title: "편하지만 크게 벽은 없는 편",
      description: "친한 사람에게는 상당히 편하게 대하지만 어느 정도 기본적인 선은 있는 편이야. 대부분은 공유하면서도 꼭 필요한 부분에서는 내 영역을 지키는 타입.",
    },
    {
      min: 25, max: 32,
      title: "친해도 적당한 거리가 필요한 편",
      description: "아무리 친해도 개인적인 영역은 존중해야 한다고 생각하는 편이야. 가까운 관계를 좋아하지만 사생활이나 인간관계까지 완전히 공유할 필요는 없다고 보는 타입.",
    },
    {
      min: 33, max: 40,
      title: "경계가 확실한 타입",
      description: "친한 친구라도 넘지 않았으면 하는 선이 분명한 편이야. 내 시간, 사생활, 물건, 인간관계를 독립적으로 유지하고 싶어 하는 타입. 친하지 않아서가 아니라 편한 관계일수록 서로의 영역을 존중해야 한다고 보는 편이야.",
    },
  ],
};
```

## friend-boundaries-test.html

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
  <meta name="description" content="아무리 친해도 지켜야 할 선이 있다고 생각하는 편일까?">
  <title>나는 친한 친구에게도 선을 두는 편일까? | Today's Choice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="test.css">
  <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.2/kakao.min.js" integrity="sha384-zt/G7/KfaRQ9dT/QIkS0ujMtzouJqzuSJcXVQu50x0rl/+mD1dc70AeOejVbMD9E" crossorigin="anonymous" defer></script>
  <script src="friend-boundaries-data.js" defer></script>
  <script src="script.js" defer></script>
  <script src="test-runner.js" defer></script>
</head>
<body class="test-page">
  <svg class="svg-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>
    <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="7.3"/><path d="m16 16 5 5"/></symbol>
    <symbol id="icon-heart" viewBox="0 0 24 24"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/></symbol>
    <symbol id="icon-chat" viewBox="0 0 24 24"><path d="M21 11.5a9 9 0 0 1-9 8.5 10 10 0 0 1-4-.8L3 21l1.7-4.7A8 8 0 0 1 3 11.5a9 9 0 0 1 18 0Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></symbol>
    <symbol id="icon-ring" viewBox="0 0 24 24"><circle cx="12" cy="14" r="7.5"/><path d="m9 3 3 3 3-3-1-2h-4l-1 2Z"/></symbol>
    <symbol id="icon-people" viewBox="0 0 24 24"><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3"/></symbol>
    <symbol id="icon-flame" viewBox="0 0 24 24"><path d="M12 3c0 4-5 6-5 11a5 5 0 0 0 10 0c0-3-2-5-3-7 0 3-1 4-2 5 0-4 2-6 0-9Z"/></symbol>
    <symbol id="icon-moon" viewBox="0 0 24 24"><path d="M21 14A9.5 9.5 0 0 1 10 3a9.5 9.5 0 1 0 11 11Z"/></symbol>
    <symbol id="icon-leaf" viewBox="0 0 24 24"><path d="M12 22V11M12 15C5 16 2 11 3 7c6-1 9 3 9 8Zm0-5c0-6 4-9 9-8 1 6-3 10-9 8Z"/></symbol>
    <symbol id="icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></symbol>
  </svg>
  <a class="skip-link" href="#main">본문 바로가기</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="index.html#home" aria-label="오늘의 초이스 홈">Today's choice</a>
      <nav class="main-nav" aria-label="주 메뉴">
        <a class="nav-link" href="index.html#home">홈</a>
        <a class="nav-link" href="index.html#new-tests">오늘의 테스트</a>
        <a class="nav-link" href="index.html#popular">전체 테스트</a>
        <a class="nav-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
      <button class="icon-button search-toggle" type="button" aria-label="테스트 검색" aria-haspopup="dialog"><svg class="icon"><use href="#icon-search"/></svg></button>
    </div>
  </header>
  <main id="main" data-test-runner>
    <section class="test-panel" data-screen="start" aria-labelledby="test-title">
      <p class="test-category" data-role="category"></p>
      <h1 id="test-title" data-role="title" data-focus tabindex="-1"></h1>
      <p class="test-description" data-role="description"></p>
      <p class="test-count" data-role="count"></p>
      <button class="primary-button" type="button" data-role="start">테스트 시작하기</button>
    </section>
    <section class="test-panel" data-screen="question" aria-labelledby="question-title" hidden>
      <div class="question-top">
        <button class="test-back" type="button" data-role="back">← 뒤로가기</button>
        <span class="test-position" data-role="position"></span>
      </div>
      <progress class="test-progress" data-role="progress" value="0" max="10" aria-label="테스트 진행률"></progress>
      <h2 class="question-title" id="question-title" data-role="question" data-focus tabindex="-1"></h2>
      <div class="answer-list" data-role="answers" role="group" aria-labelledby="question-title"></div>
    </section>
    <section class="test-panel test-result" data-screen="result" aria-labelledby="result-title" hidden>
      <p class="result-label">당신의 친구 사이 경계 지수는</p>
      <p class="result-score"><span data-role="score"></span><small> / <span data-role="max-score"></span>점</small></p>
      <h2 class="result-title" id="result-title" data-role="result-title" data-focus tabindex="-1"></h2>
      <p class="result-description" data-role="result-description"></p>
      <div class="result-actions">
        <button class="secondary-button" type="button" data-role="restart">다시하기</button>
        <a class="secondary-button" href="index.html#category-tests">다른 테스트 보기</a>
      </div>
      <button class="primary-button kakao-share-button" id="kakao-share-button" type="button">카카오톡으로 공유하기</button>
      <p class="kakao-share-status" id="kakao-share-status" role="status" hidden></p>
      <p class="test-disclaimer">본 테스트는 재미를 위한 콘텐츠이며 전문적인 심리 진단이 아닙니다.</p>
    </section>
    <noscript><p>테스트를 진행하려면 브라우저에서 JavaScript를 활성화해 주세요.</p></noscript>
  </main>
  <footer class="site-footer" id="about">
    <div class="container footer-inner">
      <a class="instagram-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        <span>@choice_zip_</span>
      </a>
    </div>
  </footer>
  <dialog id="search-dialog" class="modal" aria-labelledby="search-title"><div class="modal-heading"><h2 id="search-title">어떤 테스트를 찾으세요?</h2><button class="icon-button" type="button" data-close aria-label="검색 닫기"><svg class="icon"><use href="#icon-close"/></svg></button></div><label class="search-field"><svg class="icon"><use href="#icon-search"/></svg><input id="search-input" type="search" placeholder="친구, 인간관계, 정…" aria-label="테스트 검색어" autocomplete="off"></label><p id="search-count" class="search-count" aria-live="polite"></p><div id="search-results" class="search-results"></div></dialog>
</body>
</html>
```

## friend-dependence-data.js

```javascript
"use strict";

const testData = {
  id: 26,
  url: "friend-dependence-test.html",
  title: "나는 친구에게 얼마나 의존하는 편일까?",
  description: "힘들 때도, 심심할 때도 나는 친구를 얼마나 찾는 편일까?",
  category: "친구·인간관계·사회생활",
  shareDescription: "내 친구 의존도 테스트 결과를 확인해보세요.",
  questions: [
    {
      question: "힘든 일이 생기면 나는?",
      answers: ["혼자 생각하면서 정리한다", "어느 정도 정리한 뒤 친구에게 말한다", "친한 친구에게 바로 연락한다", "누군가에게 말하지 않으면 견디기 힘들다"],
    },
    {
      question: "중요한 결정을 내려야 할 때?",
      answers: ["혼자 결정하는 편이다", "필요하면 친구 의견도 듣는다", "친구 의견을 꽤 중요하게 생각한다", "친구가 어떻게 생각하는지 들어야 결정할 수 있다"],
    },
    {
      question: "주말에 아무 약속이 없다면?",
      answers: ["혼자 쉬어서 좋다", "가끔은 친구를 만나고 싶다", "조금 심심하고 허전하다", "어떻게든 약속을 잡고 싶다"],
    },
    {
      question: "혼자 밥을 먹거나 카페에 가는 것은?",
      answers: ["전혀 불편하지 않다", "상황에 따라 가능하다", "가능하면 친구와 같이 가고 싶다", "혼자 가는 건 상당히 싫다"],
    },
    {
      question: "기분이 안 좋은 날 친구가 바빠 연락이 안 된다면?",
      answers: ["혼자 기분을 정리한다", "조금 아쉽지만 괜찮다", "다른 친구라도 찾아본다", "더 외롭고 힘들어진다"],
    },
    {
      question: "친한 친구와 며칠 동안 연락이 없다면?",
      answers: ["전혀 신경 안 쓴다", "문득 뭐 하나 궁금하다", "조금 서운하다", "관계가 멀어진 것 같아 불안하다"],
    },
    {
      question: "새로운 곳이나 새로운 활동을 시작할 때?",
      answers: ["혼자서도 잘한다", "같이 갈 사람이 있으면 더 좋다", "웬만하면 친구와 같이 시작하고 싶다", "혼자라면 시작하지 않을 가능성이 크다"],
    },
    {
      question: "고민이 생겼을 때 나는?",
      answers: ["혼자 생각해야 답이 나온다", "어느 정도는 혼자 정리한다", "친구와 이야기하면서 생각을 정리한다", "누군가에게 말해야 마음이 풀린다"],
    },
    {
      question: "가장 친한 친구가 연애나 일 때문에 바빠진다면?",
      answers: ["각자 생활이 있으니 괜찮다", "조금 아쉽지만 이해한다", "예전보다 멀어진 느낌이 든다", "서운하고 소외된 기분이 많이 든다"],
    },
    {
      question: "친구가 거의 없어도 나는 잘 지낼 수 있을까?",
      answers: ["충분히 가능하다", "조금 심심하겠지만 가능하다", "꽤 힘들 것 같다", "상상하기 어렵다"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({ text, score: index + 1 })),
  })),
  results: [
    {
      min: 10, max: 16,
      title: "혼자서도 충분한 독립형",
      description: "친구를 좋아하지만 내 감정이나 일상을 친구에게 크게 의존하지 않는 편이야. 혼자 보내는 시간도 편하고 중요한 선택도 스스로 하는 타입.",
    },
    {
      min: 17, max: 24,
      title: "적당히 기대는 균형형",
      description: "혼자서도 잘 지내지만 필요할 때는 친구에게 기대는 편. 독립성과 친밀감 사이의 균형을 비교적 잘 유지하는 타입이야.",
    },
    {
      min: 25, max: 32,
      title: "친구에게 꽤 많이 기대는 편",
      description: "힘든 일이나 고민이 생기면 친구와 공유하는 게 중요하고, 함께 시간을 보내는 데서 에너지를 많이 얻는 편이야. 친구의 연락이나 관심이 줄면 서운함을 느낄 수도 있어.",
    },
    {
      min: 33, max: 40,
      title: "친구 없으면 많이 허전한 밀착형",
      description: "친구가 일상과 감정에서 상당히 큰 비중을 차지하는 타입. 혼자 해결하기보다 누군가와 함께하는 걸 선호하고, 가까운 친구와의 관계 변화에도 민감하게 반응하는 편이야.",
    },
  ],
};
```

## friend-dependence-test.html

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
  <meta name="description" content="힘들 때도, 심심할 때도 나는 친구를 얼마나 찾는 편일까?">
  <title>나는 친구에게 얼마나 의존하는 편일까? | Today's Choice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="test.css">
  <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.2/kakao.min.js" integrity="sha384-zt/G7/KfaRQ9dT/QIkS0ujMtzouJqzuSJcXVQu50x0rl/+mD1dc70AeOejVbMD9E" crossorigin="anonymous" defer></script>
  <script src="friend-dependence-data.js" defer></script>
  <script src="script.js" defer></script>
  <script src="test-runner.js" defer></script>
</head>
<body class="test-page">
  <svg class="svg-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>
    <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="7.3"/><path d="m16 16 5 5"/></symbol>
    <symbol id="icon-heart" viewBox="0 0 24 24"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/></symbol>
    <symbol id="icon-chat" viewBox="0 0 24 24"><path d="M21 11.5a9 9 0 0 1-9 8.5 10 10 0 0 1-4-.8L3 21l1.7-4.7A8 8 0 0 1 3 11.5a9 9 0 0 1 18 0Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></symbol>
    <symbol id="icon-ring" viewBox="0 0 24 24"><circle cx="12" cy="14" r="7.5"/><path d="m9 3 3 3 3-3-1-2h-4l-1 2Z"/></symbol>
    <symbol id="icon-people" viewBox="0 0 24 24"><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3"/></symbol>
    <symbol id="icon-flame" viewBox="0 0 24 24"><path d="M12 3c0 4-5 6-5 11a5 5 0 0 0 10 0c0-3-2-5-3-7 0 3-1 4-2 5 0-4 2-6 0-9Z"/></symbol>
    <symbol id="icon-moon" viewBox="0 0 24 24"><path d="M21 14A9.5 9.5 0 0 1 10 3a9.5 9.5 0 1 0 11 11Z"/></symbol>
    <symbol id="icon-leaf" viewBox="0 0 24 24"><path d="M12 22V11M12 15C5 16 2 11 3 7c6-1 9 3 9 8Zm0-5c0-6 4-9 9-8 1 6-3 10-9 8Z"/></symbol>
    <symbol id="icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></symbol>
  </svg>
  <a class="skip-link" href="#main">본문 바로가기</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="index.html#home" aria-label="오늘의 초이스 홈">Today's choice</a>
      <nav class="main-nav" aria-label="주 메뉴">
        <a class="nav-link" href="index.html#home">홈</a>
        <a class="nav-link" href="index.html#new-tests">오늘의 테스트</a>
        <a class="nav-link" href="index.html#popular">전체 테스트</a>
        <a class="nav-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
      <button class="icon-button search-toggle" type="button" aria-label="테스트 검색" aria-haspopup="dialog"><svg class="icon"><use href="#icon-search"/></svg></button>
    </div>
  </header>
  <main id="main" data-test-runner>
    <section class="test-panel" data-screen="start" aria-labelledby="test-title">
      <p class="test-category" data-role="category"></p>
      <h1 id="test-title" data-role="title" data-focus tabindex="-1"></h1>
      <p class="test-description" data-role="description"></p>
      <p class="test-count" data-role="count"></p>
      <button class="primary-button" type="button" data-role="start">테스트 시작하기</button>
    </section>
    <section class="test-panel" data-screen="question" aria-labelledby="question-title" hidden>
      <div class="question-top">
        <button class="test-back" type="button" data-role="back">← 뒤로가기</button>
        <span class="test-position" data-role="position"></span>
      </div>
      <progress class="test-progress" data-role="progress" value="0" max="10" aria-label="테스트 진행률"></progress>
      <h2 class="question-title" id="question-title" data-role="question" data-focus tabindex="-1"></h2>
      <div class="answer-list" data-role="answers" role="group" aria-labelledby="question-title"></div>
    </section>
    <section class="test-panel test-result" data-screen="result" aria-labelledby="result-title" hidden>
      <p class="result-label">당신의 친구 의존 지수는</p>
      <p class="result-score"><span data-role="score"></span><small> / <span data-role="max-score"></span>점</small></p>
      <h2 class="result-title" id="result-title" data-role="result-title" data-focus tabindex="-1"></h2>
      <p class="result-description" data-role="result-description"></p>
      <div class="result-actions">
        <button class="secondary-button" type="button" data-role="restart">다시하기</button>
        <a class="secondary-button" href="index.html#category-tests">다른 테스트 보기</a>
      </div>
      <button class="primary-button kakao-share-button" id="kakao-share-button" type="button">카카오톡으로 공유하기</button>
      <p class="kakao-share-status" id="kakao-share-status" role="status" hidden></p>
      <p class="test-disclaimer">본 테스트는 재미를 위한 콘텐츠이며 전문적인 심리 진단이 아닙니다.</p>
    </section>
    <noscript><p>테스트를 진행하려면 브라우저에서 JavaScript를 활성화해 주세요.</p></noscript>
  </main>
  <footer class="site-footer" id="about">
    <div class="container footer-inner">
      <a class="instagram-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        <span>@choice_zip_</span>
      </a>
    </div>
  </footer>
  <dialog id="search-dialog" class="modal" aria-labelledby="search-title"><div class="modal-heading"><h2 id="search-title">어떤 테스트를 찾으세요?</h2><button class="icon-button" type="button" data-close aria-label="검색 닫기"><svg class="icon"><use href="#icon-close"/></svg></button></div><label class="search-field"><svg class="icon"><use href="#icon-search"/></svg><input id="search-input" type="search" placeholder="친구, 인간관계, 정…" aria-label="테스트 검색어" autocomplete="off"></label><p id="search-count" class="search-count" aria-live="polite"></p><div id="search-results" class="search-results"></div></dialog>
</body>
</html>
```

## game-character-data.js

```javascript
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
```

## game-character-test.html

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
  <meta name="description" content="게임 캐릭터가 된다면 나는 어떤 스탯에 몰빵된 타입일까?">
  <title>내가 게임 속 캐릭터라면 능력치는 어디에 몰려 있을까? | Today's Choice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="test.css">
  <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.2/kakao.min.js" integrity="sha384-zt/G7/KfaRQ9dT/QIkS0ujMtzouJqzuSJcXVQu50x0rl/+mD1dc70AeOejVbMD9E" crossorigin="anonymous" defer></script>
  <script src="game-character-data.js" defer></script>
  <script src="script.js" defer></script>
  <script src="test-runner.js" defer></script>
</head>
<body class="test-page">
  <svg class="svg-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>
    <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="7.3"/><path d="m16 16 5 5"/></symbol>
    <symbol id="icon-heart" viewBox="0 0 24 24"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/></symbol>
    <symbol id="icon-chat" viewBox="0 0 24 24"><path d="M21 11.5a9 9 0 0 1-9 8.5 10 10 0 0 1-4-.8L3 21l1.7-4.7A8 8 0 0 1 3 11.5a9 9 0 0 1 18 0Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></symbol>
    <symbol id="icon-ring" viewBox="0 0 24 24"><circle cx="12" cy="14" r="7.5"/><path d="m9 3 3 3 3-3-1-2h-4l-1 2Z"/></symbol>
    <symbol id="icon-people" viewBox="0 0 24 24"><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3"/></symbol>
    <symbol id="icon-flame" viewBox="0 0 24 24"><path d="M12 3c0 4-5 6-5 11a5 5 0 0 0 10 0c0-3-2-5-3-7 0 3-1 4-2 5 0-4 2-6 0-9Z"/></symbol>
    <symbol id="icon-moon" viewBox="0 0 24 24"><path d="M21 14A9.5 9.5 0 0 1 10 3a9.5 9.5 0 1 0 11 11Z"/></symbol>
    <symbol id="icon-leaf" viewBox="0 0 24 24"><path d="M12 22V11M12 15C5 16 2 11 3 7c6-1 9 3 9 8Zm0-5c0-6 4-9 9-8 1 6-3 10-9 8Z"/></symbol>
    <symbol id="icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></symbol>
  </svg>
  <a class="skip-link" href="#main">본문 바로가기</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="index.html#home" aria-label="오늘의 초이스 홈">Today's choice</a>
      <nav class="main-nav" aria-label="주 메뉴">
        <a class="nav-link" href="index.html#home">홈</a>
        <a class="nav-link" href="index.html#new-tests">오늘의 테스트</a>
        <a class="nav-link" href="index.html#popular">전체 테스트</a>
        <a class="nav-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
      <button class="icon-button search-toggle" type="button" aria-label="테스트 검색" aria-haspopup="dialog"><svg class="icon"><use href="#icon-search"/></svg></button>
    </div>
  </header>
  <main id="main" data-test-runner>
    <section class="test-panel" data-screen="start" aria-labelledby="test-title">
      <p class="test-category" data-role="category"></p>
      <h1 id="test-title" data-role="title" data-focus tabindex="-1"></h1>
      <p class="test-description" data-role="description"></p>
      <p class="test-count" data-role="count"></p>
      <button class="primary-button" type="button" data-role="start">테스트 시작하기</button>
    </section>
    <section class="test-panel" data-screen="question" aria-labelledby="question-title" hidden>
      <div class="question-top">
        <button class="test-back" type="button" data-role="back">← 뒤로가기</button>
        <span class="test-position" data-role="position"></span>
      </div>
      <progress class="test-progress" data-role="progress" value="0" max="10" aria-label="테스트 진행률"></progress>
      <h2 class="question-title" id="question-title" data-role="question" data-focus tabindex="-1"></h2>
      <div class="answer-list" data-role="answers" role="group" aria-labelledby="question-title"></div>
    </section>
    <section class="test-panel test-result" data-screen="result" aria-labelledby="result-title" hidden>
      <p class="result-label">당신의 게임 캐릭터 능력치는</p>
      <dl class="result-stats" data-role="stats" aria-label="스탯별 점수"></dl>
      <h2 class="result-title" id="result-title" data-role="result-title" data-focus tabindex="-1"></h2>
      <p class="result-description" data-role="result-description"></p>
      <p class="test-disclaimer">동점일 경우, 가장 높은 스탯 중 가장 최근에 선택한 스탯으로 결과를 정해요.</p>
      <div class="result-actions">
        <button class="secondary-button" type="button" data-role="restart">다시하기</button>
        <a class="secondary-button" href="index.html#category-tests">다른 테스트 보기</a>
      </div>
      <button class="primary-button kakao-share-button" id="kakao-share-button" type="button">카카오톡으로 공유하기</button>
      <p class="kakao-share-status" id="kakao-share-status" role="status" hidden></p>
      <p class="test-disclaimer">본 테스트는 재미를 위한 콘텐츠이며 전문적인 심리 진단이 아닙니다.</p>
    </section>
    <noscript><p>테스트를 진행하려면 브라우저에서 JavaScript를 활성화해 주세요.</p></noscript>
  </main>
  <footer class="site-footer" id="about">
    <div class="container footer-inner">
      <a class="instagram-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        <span>@choice_zip_</span>
      </a>
    </div>
  </footer>
  <dialog id="search-dialog" class="modal" aria-labelledby="search-title"><div class="modal-heading"><h2 id="search-title">어떤 테스트를 찾으세요?</h2><button class="icon-button" type="button" data-close aria-label="검색 닫기"><svg class="icon"><use href="#icon-close"/></svg></button></div><label class="search-field"><svg class="icon"><use href="#icon-search"/></svg><input id="search-input" type="search" placeholder="게임, 캐릭터, 능력치…" aria-label="테스트 검색어" autocomplete="off"></label><p id="search-count" class="search-count" aria-live="polite"></p><div id="search-results" class="search-results"></div></dialog>
</body>
</html>
```

## jealousy-data.js

```javascript
"use strict";

const testData = {
  id: 8,
  url: "jealousy-test.html",
  shareDescription: "내 질투 지수 결과를 확인해보세요.",
  title: "내 질투심은 정상 범위일까?",
  description: "연애할 때 나는 얼마나 질투하는 편인지 알아보세요.",
  category: "연애/결혼",
  questions: [
    {
      question: "애인이 이성 친구와 단둘이 밥을 먹는다고 하면?",
      answers: ["별생각 없다", "조금 신경 쓰인다", "솔직히 싫다", "절대 이해 못 한다"],
    },
    {
      question: "애인이 SNS에서 이성의 사진에 좋아요를 자주 누른다면?",
      answers: ["전혀 신경 안 쓴다", "조금 신경 쓰인다", "왜 누르는지 물어본다", "하지 말라고 한다"],
    },
    {
      question: "애인이 전 애인과 아직 SNS 맞팔이라면?",
      answers: ["상관없다", "조금 찝찝하다", "굳이 왜 유지하는지 궁금하다", "끊었으면 좋겠다"],
    },
    {
      question: "애인이 회식 후 이성 동료와 함께 택시를 타고 갔다면?",
      answers: ["상황상 그럴 수 있다", "조금 신경 쓰인다", "누구인지 자세히 물어본다", "굉장히 화날 것 같다"],
    },
    {
      question: "애인이 다른 사람의 외모를 칭찬한다면?",
      answers: ["그냥 칭찬이라고 생각한다", "살짝 기분 나쁘다", "굳이 내 앞에서 해야 하나 싶다", "크게 기분 상한다"],
    },
    {
      question: "애인의 연락이 평소보다 몇 시간 늦는다면?",
      answers: ["바쁜가 보다 한다", "무슨 일 있나 궁금하다", "누구랑 있는지 신경 쓰인다", "계속 연락하거나 확인한다"],
    },
    {
      question: "애인이 이성 친구에게 연애 고민을 상담한다면?",
      answers: ["괜찮다", "조금 애매하다", "웬만하면 하지 않았으면 한다", "절대 싫다"],
    },
    {
      question: "애인의 휴대폰에 모르는 이성 이름이 자주 보인다면?",
      answers: ["먼저 설명할 때까지 기다린다", "누구인지 한번 물어본다", "대화 내용을 확인하고 싶어진다", "몰래라도 확인하고 싶다"],
    },
    {
      question: "애인이 이성 친구들과 여행을 간다고 한다면?",
      answers: ["믿고 보낸다", "신경은 쓰이지만 보내준다", "꽤 불편해서 대화가 필요하다", "가지 않았으면 한다"],
    },
    {
      question: '애인이 "너 질투 좀 심한 것 같아"라고 말한다면?',
      answers: ["그런가 보다 하고 돌아본다", "조금 억울하지만 생각해본다", "상대 행동에도 문제가 있다고 생각한다", "내가 질투하게 만든 상대가 문제라고 생각한다"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({ text, score: index + 1 })),
  })),
  results: [
    {
      min: 10, max: 16,
      title: "질투와는 거리가 먼 편",
      description: "상대를 꽤 믿고 각자의 인간관계를 존중하는 타입이에요. 웬만한 일에는 크게 흔들리지 않는 편이지만, 불편한 상황까지 무조건 참을 필요는 없어요. 싫은 건 솔직하게 표현해도 괜찮아요.",
    },
    {
      min: 17, max: 24,
      title: "적당히 질투하는 편",
      description: "신경 쓰이는 건 있지만 대부분 스스로 조절할 수 있는 편이에요. 관계에 관심은 있으면서도 상대를 지나치게 통제하지 않는 비교적 균형 잡힌 타입이에요.",
    },
    {
      min: 25, max: 32,
      title: "질투가 꽤 많은 편",
      description: "애인의 이성 관계나 연락 변화에 민감하게 반응하는 편이에요. 혼자 상상하다가 기분이 상하는 경우도 있을 수 있어요. 상대를 확인하려 하기보다 서로 불편한 기준을 미리 대화해보는 게 좋아요.",
    },
    {
      min: 33, max: 40,
      title: "질투 과몰입 주의보",
      description: "작은 변화도 쉽게 의심으로 이어질 수 있는 편이에요. 상대를 좋아하는 마음이 큰 만큼 불안도 크게 느끼는 타입이에요. 휴대폰 확인이나 인간관계 통제로 이어지면 서로 피곤해질 수 있으니 주의가 필요해요.",
    },
  ],
};
```

## jealousy-test.html

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
  <meta name="description" content="연애할 때 나는 얼마나 질투하는 편인지 알아보세요. 총 10문항으로 알아보는 나의 질투 지수.">
  <title>내 질투심은 정상 범위일까? | Today's Choice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="test.css">
  <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.2/kakao.min.js" integrity="sha384-zt/G7/KfaRQ9dT/QIkS0ujMtzouJqzuSJcXVQu50x0rl/+mD1dc70AeOejVbMD9E" crossorigin="anonymous" defer></script>
  <script src="jealousy-data.js" defer></script>
  <script src="script.js" defer></script>
  <script src="test-runner.js" defer></script>
</head>
<body class="test-page">
  <svg class="svg-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>
    <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="7.3"/><path d="m16 16 5 5"/></symbol>
    <symbol id="icon-heart" viewBox="0 0 24 24"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/></symbol>
    <symbol id="icon-chat" viewBox="0 0 24 24"><path d="M21 11.5a9 9 0 0 1-9 8.5 10 10 0 0 1-4-.8L3 21l1.7-4.7A8 8 0 0 1 3 11.5a9 9 0 0 1 18 0Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></symbol>
    <symbol id="icon-ring" viewBox="0 0 24 24"><circle cx="12" cy="14" r="7.5"/><path d="m9 3 3 3 3-3-1-2h-4l-1 2Z"/></symbol>
    <symbol id="icon-people" viewBox="0 0 24 24"><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3"/></symbol>
    <symbol id="icon-flame" viewBox="0 0 24 24"><path d="M12 3c0 4-5 6-5 11a5 5 0 0 0 10 0c0-3-2-5-3-7 0 3-1 4-2 5 0-4 2-6 0-9Z"/></symbol>
    <symbol id="icon-moon" viewBox="0 0 24 24"><path d="M21 14A9.5 9.5 0 0 1 10 3a9.5 9.5 0 1 0 11 11Z"/></symbol>
    <symbol id="icon-leaf" viewBox="0 0 24 24"><path d="M12 22V11M12 15C5 16 2 11 3 7c6-1 9 3 9 8Zm0-5c0-6 4-9 9-8 1 6-3 10-9 8Z"/></symbol>
    <symbol id="icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></symbol>
  </svg>
  <a class="skip-link" href="#main">본문 바로가기</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="index.html#home" aria-label="오늘의 초이스 홈">Today's choice</a>
      <nav class="main-nav" aria-label="주 메뉴">
        <a class="nav-link" href="index.html#home">홈</a>
        <a class="nav-link" href="index.html#new-tests">오늘의 테스트</a>
        <a class="nav-link" href="index.html#popular">전체 테스트</a>
        <a class="nav-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
      <button class="icon-button search-toggle" type="button" aria-label="테스트 검색" aria-haspopup="dialog"><svg class="icon"><use href="index.html#icon-search"/></svg></button>
    </div>
  </header>
  <main id="main" data-test-runner>
    <section class="test-panel" data-screen="start" aria-labelledby="test-title">
      <p class="test-category" data-role="category"></p>
      <h1 id="test-title" data-role="title" data-focus tabindex="-1"></h1>
      <p class="test-description" data-role="description"></p>
      <p class="test-count" data-role="count"></p>
      <button class="primary-button" type="button" data-role="start">테스트 시작하기</button>
    </section>
    <section class="test-panel" data-screen="question" aria-labelledby="question-title" hidden>
      <div class="question-top">
        <button class="test-back" type="button" data-role="back">← 뒤로가기</button>
        <span class="test-position" data-role="position"></span>
      </div>
      <progress class="test-progress" data-role="progress" value="0" max="10" aria-label="테스트 진행률"></progress>
      <h2 class="question-title" id="question-title" data-role="question" data-focus tabindex="-1"></h2>
      <div class="answer-list" data-role="answers" role="group" aria-labelledby="question-title"></div>
    </section>
    <section class="test-panel test-result" data-screen="result" aria-labelledby="result-title" hidden>
      <p class="result-label">당신의 질투 지수는</p>
      <p class="result-score"><span data-role="score"></span><small> / <span data-role="max-score"></span>점</small></p>
      <h2 class="result-title" id="result-title" data-role="result-title" data-focus tabindex="-1"></h2>
      <p class="result-description" data-role="result-description"></p>
      <div class="result-actions">
        <button class="secondary-button" type="button" data-role="restart">다시하기</button>
        <a class="secondary-button" href="index.html#category-tests">다른 테스트 보기</a>
      </div>
      <button class="primary-button kakao-share-button" id="kakao-share-button" type="button">카카오톡으로 공유하기</button>
      <p class="kakao-share-status" id="kakao-share-status" role="status" hidden></p>
      <p class="test-disclaimer">본 테스트는 재미를 위한 콘텐츠이며 전문적인 심리 진단이 아닙니다.</p>
    </section>
    <noscript><p>테스트를 진행하려면 브라우저에서 JavaScript를 활성화해 주세요.</p></noscript>
  </main>
  <footer class="site-footer" id="about">
    <div class="container footer-inner">
      <a class="instagram-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        <span>@choice_zip_</span>
      </a>
    </div>
  </footer>
  <dialog id="search-dialog" class="modal" aria-labelledby="search-title"><div class="modal-heading"><h2 id="search-title">어떤 테스트를 찾으세요?</h2><button class="icon-button" type="button" data-close aria-label="검색 닫기"><svg class="icon"><use href="#icon-close"/></svg></button></div><label class="search-field"><svg class="icon"><use href="#icon-search"/></svg><input id="search-input" type="search" placeholder="연애, 질투…" aria-label="테스트 검색어" autocomplete="off"></label><p id="search-count" class="search-count" aria-live="polite"></p><div id="search-results" class="search-results"></div></dialog>
</body>
</html>
```

## lying-data.js

```javascript
"use strict";

const testData = {
  id: 21,
  url: "lying-test.html",
  title: "나는 거짓말을 얼마나 잘하는 편일까?",
  description: "거짓말을 하면 바로 티 나는 타입일까, 끝까지 자연스럽게 숨기는 타입일까?",
  category: "재미",
  shareDescription: "내 거짓말 테스트 결과를 확인해보세요.",
  questions: [
    {
      question: "거짓말을 할 때 표정 관리는?",
      answers: ["바로 티 난다", "조금 어색해진다", "웬만하면 자연스럽다", "표정 변화 거의 없다"],
    },
    {
      question: "누가 “너 지금 거짓말하지?”라고 하면?",
      answers: ["바로 당황한다", "웃음이 난다", "침착하게 넘긴다", "오히려 상대를 헷갈리게 한다"],
    },
    {
      question: "거짓말한 내용을 나중에 다시 물어보면?",
      answers: ["기억이 꼬인다", "조금 헷갈린다", "대충 맞춰서 말한다", "세부 내용까지 기억해낸다"],
    },
    {
      question: "예상치 못한 추가 질문을 받으면?",
      answers: ["바로 막힌다", "잠깐 생각한다", "자연스럽게 이어간다", "즉석에서 설정까지 만든다"],
    },
    {
      question: "거짓말할 때 눈을 마주치는 건?",
      answers: ["거의 못 한다", "조금 피한다", "평소처럼 본다", "일부러 더 자연스럽게 본다"],
    },
    {
      question: "친구가 내 거짓말을 의심하면?",
      answers: ["바로 인정할 것 같다", "버티다가 들킨다", "끝까지 자연스럽게 설명한다", "상대가 오히려 미안해지게 만든다"],
    },
    {
      question: "사소한 핑계를 댈 때 나는?",
      answers: ["말하면서도 어색하다", "티 안 나게 하려고 노력한다", "꽤 자연스럽다", "아무 생각 없이 술술 나온다"],
    },
    {
      question: "여러 사람 앞에서 같은 거짓말을 해야 한다면?",
      answers: ["긴장해서 말이 꼬인다", "사람마다 조금씩 다르게 말한다", "최대한 같은 내용으로 유지한다", "완전히 일관되게 말할 수 있다"],
    },
    {
      question: "거짓말 후 상대 반응을 보면?",
      answers: ["바로 죄책감 든다", "조금 신경 쓰인다", "별 티 안 내고 넘긴다", "상대가 믿었는지만 확인한다"],
    },
    {
      question: "내가 거짓말을 하면 주변 사람들은?",
      answers: ["거의 바로 눈치챈다", "친한 사람은 눈치챈다", "웬만하면 모른다", "잘 안 들키는 편이다"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({ text, score: index + 1 })),
  })),
  results: [
    {
      min: 10, max: 16,
      title: "거짓말 불가형",
      description: "거짓말을 하면 표정이나 말투에서 티가 나는 편. 숨기려 할수록 오히려 더 어색해질 가능성이 큼.",
    },
    {
      min: 17, max: 24,
      title: "어설픈 연기파",
      description: "간단한 핑계 정도는 가능하지만 질문이 길어지면 흔들리는 타입. 가까운 사람에게는 특히 잘 들키는 편.",
    },
    {
      min: 25, max: 32,
      title: "자연스러운 포커페이스형",
      description: "표정과 말투를 꽤 잘 유지하는 편. 갑작스러운 질문에도 어느 정도 자연스럽게 대응할 수 있음.",
    },
    {
      min: 33, max: 40,
      title: "완벽한 연기파",
      description: "표정 관리, 이야기 유지, 순간 대처까지 상당히 자연스러운 타입. 다만 잘 숨긴다고 해서 거짓말을 자주 하는 게 좋은 건 아님.",
    },
  ],
};
```

## lying-test.html

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
  <meta name="description" content="거짓말을 하면 바로 티 나는 타입일까, 끝까지 자연스럽게 숨기는 타입일까?">
  <title>나는 거짓말을 얼마나 잘하는 편일까? | Today's Choice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="test.css">
  <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.2/kakao.min.js" integrity="sha384-zt/G7/KfaRQ9dT/QIkS0ujMtzouJqzuSJcXVQu50x0rl/+mD1dc70AeOejVbMD9E" crossorigin="anonymous" defer></script>
  <script src="lying-data.js" defer></script>
  <script src="script.js" defer></script>
  <script src="test-runner.js" defer></script>
</head>
<body class="test-page">
  <svg class="svg-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>
    <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="7.3"/><path d="m16 16 5 5"/></symbol>
    <symbol id="icon-heart" viewBox="0 0 24 24"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/></symbol>
    <symbol id="icon-chat" viewBox="0 0 24 24"><path d="M21 11.5a9 9 0 0 1-9 8.5 10 10 0 0 1-4-.8L3 21l1.7-4.7A8 8 0 0 1 3 11.5a9 9 0 0 1 18 0Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></symbol>
    <symbol id="icon-ring" viewBox="0 0 24 24"><circle cx="12" cy="14" r="7.5"/><path d="m9 3 3 3 3-3-1-2h-4l-1 2Z"/></symbol>
    <symbol id="icon-people" viewBox="0 0 24 24"><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3"/></symbol>
    <symbol id="icon-flame" viewBox="0 0 24 24"><path d="M12 3c0 4-5 6-5 11a5 5 0 0 0 10 0c0-3-2-5-3-7 0 3-1 4-2 5 0-4 2-6 0-9Z"/></symbol>
    <symbol id="icon-moon" viewBox="0 0 24 24"><path d="M21 14A9.5 9.5 0 0 1 10 3a9.5 9.5 0 1 0 11 11Z"/></symbol>
    <symbol id="icon-leaf" viewBox="0 0 24 24"><path d="M12 22V11M12 15C5 16 2 11 3 7c6-1 9 3 9 8Zm0-5c0-6 4-9 9-8 1 6-3 10-9 8Z"/></symbol>
    <symbol id="icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></symbol>
  </svg>
  <a class="skip-link" href="#main">본문 바로가기</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="index.html#home" aria-label="오늘의 초이스 홈">Today's choice</a>
      <nav class="main-nav" aria-label="주 메뉴">
        <a class="nav-link" href="index.html#home">홈</a>
        <a class="nav-link" href="index.html#new-tests">오늘의 테스트</a>
        <a class="nav-link" href="index.html#popular">전체 테스트</a>
        <a class="nav-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
      <button class="icon-button search-toggle" type="button" aria-label="테스트 검색" aria-haspopup="dialog"><svg class="icon"><use href="#icon-search"/></svg></button>
    </div>
  </header>
  <main id="main" data-test-runner>
    <section class="test-panel" data-screen="start" aria-labelledby="test-title">
      <p class="test-category" data-role="category"></p>
      <h1 id="test-title" data-role="title" data-focus tabindex="-1"></h1>
      <p class="test-description" data-role="description"></p>
      <p class="test-count" data-role="count"></p>
      <button class="primary-button" type="button" data-role="start">테스트 시작하기</button>
    </section>
    <section class="test-panel" data-screen="question" aria-labelledby="question-title" hidden>
      <div class="question-top">
        <button class="test-back" type="button" data-role="back">← 뒤로가기</button>
        <span class="test-position" data-role="position"></span>
      </div>
      <progress class="test-progress" data-role="progress" value="0" max="10" aria-label="테스트 진행률"></progress>
      <h2 class="question-title" id="question-title" data-role="question" data-focus tabindex="-1"></h2>
      <div class="answer-list" data-role="answers" role="group" aria-labelledby="question-title"></div>
    </section>
    <section class="test-panel test-result" data-screen="result" aria-labelledby="result-title" hidden>
      <p class="result-label">당신의 거짓말 지수는</p>
      <p class="result-score"><span data-role="score"></span><small> / <span data-role="max-score"></span>점</small></p>
      <h2 class="result-title" id="result-title" data-role="result-title" data-focus tabindex="-1"></h2>
      <p class="result-description" data-role="result-description"></p>
      <div class="result-actions">
        <button class="secondary-button" type="button" data-role="restart">다시하기</button>
        <a class="secondary-button" href="index.html#category-tests">다른 테스트 보기</a>
      </div>
      <button class="primary-button kakao-share-button" id="kakao-share-button" type="button">카카오톡으로 공유하기</button>
      <p class="kakao-share-status" id="kakao-share-status" role="status" hidden></p>
      <p class="test-disclaimer">본 테스트는 재미를 위한 콘텐츠이며 전문적인 심리 진단이 아닙니다.</p>
    </section>
    <noscript><p>테스트를 진행하려면 브라우저에서 JavaScript를 활성화해 주세요.</p></noscript>
  </main>
  <footer class="site-footer" id="about">
    <div class="container footer-inner">
      <a class="instagram-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        <span>@choice_zip_</span>
      </a>
    </div>
  </footer>
  <dialog id="search-dialog" class="modal" aria-labelledby="search-title"><div class="modal-heading"><h2 id="search-title">어떤 테스트를 찾으세요?</h2><button class="icon-button" type="button" data-close aria-label="검색 닫기"><svg class="icon"><use href="#icon-close"/></svg></button></div><label class="search-field"><svg class="icon"><use href="#icon-search"/></svg><input id="search-input" type="search" placeholder="거짓말, 연기, 재미…" aria-label="테스트 검색어" autocomplete="off"></label><p id="search-count" class="search-count" aria-live="polite"></p><div id="search-results" class="search-results"></div></dialog>
</body>
</html>
```

## marriage-values-data.js

```javascript
"use strict";

const testData = {
  id: 22,
  url: "marriage-values-test.html",
  title: "나는 사랑만으로 결혼할 수 있을까?",
  description: "결혼에서 사랑과 현실, 나는 어디에 더 가까울까?",
  category: "연애/결혼",
  shareDescription: "내 결혼 가치관 테스트 결과를 확인해보세요.",
  questions: [
    {
      question: "정말 사랑하는 사람의 경제 상황이 불안정하다면?",
      answers: ["사랑하면 충분하다", "같이 노력하면 된다고 생각한다", "어느 정도 안정될 때까지 기다린다", "결혼은 어렵다고 생각한다"],
    },
    {
      question: "결혼 상대의 직업은?",
      answers: ["크게 중요하지 않다", "성실하면 된다", "안정성은 어느 정도 본다", "매우 중요하다"],
    },
    {
      question: "상대 집안의 경제 상황이 좋지 않다면?",
      answers: ["우리 둘만 좋으면 된다", "조금 걱정되지만 감당할 수 있다", "결혼 전에 충분히 따져본다", "큰 부담이 된다"],
    },
    {
      question: "결혼 준비 과정에서 돈 문제로 자주 싸운다면?",
      answers: ["사랑으로 충분히 극복할 수 있다", "대화하면서 맞춰본다", "현실적으로 다시 생각해본다", "결혼 자체를 고민한다"],
    },
    {
      question: "사랑하는 사람이 결혼 후 맞벌이를 원하지 않는다면?",
      answers: ["상대 선택을 존중한다", "상황에 따라 가능하다", "현실적으로 부담스럽다", "받아들이기 어렵다"],
    },
    {
      question: "결혼 상대와 소비 습관이 많이 다르다면?",
      answers: ["사랑하면 맞출 수 있다", "서로 조금씩 양보하면 된다", "꽤 중요한 문제라고 생각한다", "결혼을 다시 고민할 수준이다"],
    },
    {
      question: "좋은 집과 안정적인 생활을 위해 결혼을 몇 년 미뤄야 한다면?",
      answers: ["굳이 기다리지 않는다", "조금 기다릴 수 있다", "준비될 때까지 기다린다", "안정이 먼저다"],
    },
    {
      question: "사랑하지만 미래 계획이 완전히 다른 사람이라면?",
      answers: ["사랑을 선택한다", "최대한 맞춰본다", "현실적인 타협점이 필요하다", "미래가 다르면 결혼은 어렵다"],
    },
    {
      question: "결혼에서 가장 중요하다고 느끼는 건?",
      answers: ["사랑", "서로에 대한 믿음", "가치관과 생활 방식", "경제적 안정"],
    },
    {
      question: "“사랑하면 어떻게든 된다”는 말에 대해?",
      answers: ["거의 동의한다", "어느 정도 동의한다", "사랑만으로는 부족하다고 본다", "현실적으로 어렵다고 생각한다"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({ text, score: index + 1 })),
  })),
  results: [
    {
      min: 10, max: 16,
      title: "사랑 우선형",
      description: "사랑하는 마음이 충분하다면 현실적인 어려움도 함께 극복할 수 있다고 믿는 편이야. 결혼에서도 조건보다 사람 자체를 가장 중요하게 보는 타입.",
    },
    {
      min: 17, max: 24,
      title: "사랑과 현실의 균형형",
      description: "사랑이 가장 중요하지만 현실도 완전히 무시하지는 않는 편. 서로 노력할 의지가 있다면 부족한 조건은 충분히 맞춰갈 수 있다고 보는 타입이야.",
    },
    {
      min: 25, max: 32,
      title: "현실도 중요한 편",
      description: "사랑만큼 생활 방식, 경제 상황, 미래 계획도 중요하게 보는 타입. 좋아하는 마음만으로 결혼을 결정하기보다는 실제 함께 살아갈 수 있는지를 꼼꼼하게 생각하는 편이야.",
    },
    {
      min: 33, max: 40,
      title: "현실 우선형",
      description: "결혼은 사랑만으로 유지되는 관계가 아니라고 보는 편. 경제력, 가치관, 생활 안정 등 현실적인 조건이 맞지 않으면 아무리 사랑해도 결혼을 선택하기 어려운 타입이야.",
    },
  ],
};
```

## marriage-values-test.html

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
  <meta name="description" content="결혼에서 사랑과 현실, 나는 어디에 더 가까울까?">
  <title>나는 사랑만으로 결혼할 수 있을까? | Today's Choice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="test.css">
  <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.2/kakao.min.js" integrity="sha384-zt/G7/KfaRQ9dT/QIkS0ujMtzouJqzuSJcXVQu50x0rl/+mD1dc70AeOejVbMD9E" crossorigin="anonymous" defer></script>
  <script src="marriage-values-data.js" defer></script>
  <script src="script.js" defer></script>
  <script src="test-runner.js" defer></script>
</head>
<body class="test-page">
  <svg class="svg-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>
    <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="7.3"/><path d="m16 16 5 5"/></symbol>
    <symbol id="icon-heart" viewBox="0 0 24 24"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/></symbol>
    <symbol id="icon-chat" viewBox="0 0 24 24"><path d="M21 11.5a9 9 0 0 1-9 8.5 10 10 0 0 1-4-.8L3 21l1.7-4.7A8 8 0 0 1 3 11.5a9 9 0 0 1 18 0Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></symbol>
    <symbol id="icon-ring" viewBox="0 0 24 24"><circle cx="12" cy="14" r="7.5"/><path d="m9 3 3 3 3-3-1-2h-4l-1 2Z"/></symbol>
    <symbol id="icon-people" viewBox="0 0 24 24"><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3"/></symbol>
    <symbol id="icon-flame" viewBox="0 0 24 24"><path d="M12 3c0 4-5 6-5 11a5 5 0 0 0 10 0c0-3-2-5-3-7 0 3-1 4-2 5 0-4 2-6 0-9Z"/></symbol>
    <symbol id="icon-moon" viewBox="0 0 24 24"><path d="M21 14A9.5 9.5 0 0 1 10 3a9.5 9.5 0 1 0 11 11Z"/></symbol>
    <symbol id="icon-leaf" viewBox="0 0 24 24"><path d="M12 22V11M12 15C5 16 2 11 3 7c6-1 9 3 9 8Zm0-5c0-6 4-9 9-8 1 6-3 10-9 8Z"/></symbol>
    <symbol id="icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></symbol>
  </svg>
  <a class="skip-link" href="#main">본문 바로가기</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="index.html#home" aria-label="오늘의 초이스 홈">Today's choice</a>
      <nav class="main-nav" aria-label="주 메뉴">
        <a class="nav-link" href="index.html#home">홈</a>
        <a class="nav-link" href="index.html#new-tests">오늘의 테스트</a>
        <a class="nav-link" href="index.html#popular">전체 테스트</a>
        <a class="nav-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
      <button class="icon-button search-toggle" type="button" aria-label="테스트 검색" aria-haspopup="dialog"><svg class="icon"><use href="#icon-search"/></svg></button>
    </div>
  </header>
  <main id="main" data-test-runner>
    <section class="test-panel" data-screen="start" aria-labelledby="test-title">
      <p class="test-category" data-role="category"></p>
      <h1 id="test-title" data-role="title" data-focus tabindex="-1"></h1>
      <p class="test-description" data-role="description"></p>
      <p class="test-count" data-role="count"></p>
      <button class="primary-button" type="button" data-role="start">테스트 시작하기</button>
    </section>
    <section class="test-panel" data-screen="question" aria-labelledby="question-title" hidden>
      <div class="question-top">
        <button class="test-back" type="button" data-role="back">← 뒤로가기</button>
        <span class="test-position" data-role="position"></span>
      </div>
      <progress class="test-progress" data-role="progress" value="0" max="10" aria-label="테스트 진행률"></progress>
      <h2 class="question-title" id="question-title" data-role="question" data-focus tabindex="-1"></h2>
      <div class="answer-list" data-role="answers" role="group" aria-labelledby="question-title"></div>
    </section>
    <section class="test-panel test-result" data-screen="result" aria-labelledby="result-title" hidden>
      <p class="result-label">당신의 결혼 가치관 지수는</p>
      <p class="result-score"><span data-role="score"></span><small> / <span data-role="max-score"></span>점</small></p>
      <h2 class="result-title" id="result-title" data-role="result-title" data-focus tabindex="-1"></h2>
      <p class="result-description" data-role="result-description"></p>
      <div class="result-actions">
        <button class="secondary-button" type="button" data-role="restart">다시하기</button>
        <a class="secondary-button" href="index.html#category-tests">다른 테스트 보기</a>
      </div>
      <button class="primary-button kakao-share-button" id="kakao-share-button" type="button">카카오톡으로 공유하기</button>
      <p class="kakao-share-status" id="kakao-share-status" role="status" hidden></p>
      <p class="test-disclaimer">본 테스트는 재미를 위한 콘텐츠이며 전문적인 심리 진단이 아닙니다.</p>
    </section>
    <noscript><p>테스트를 진행하려면 브라우저에서 JavaScript를 활성화해 주세요.</p></noscript>
  </main>
  <footer class="site-footer" id="about">
    <div class="container footer-inner">
      <a class="instagram-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        <span>@choice_zip_</span>
      </a>
    </div>
  </footer>
  <dialog id="search-dialog" class="modal" aria-labelledby="search-title"><div class="modal-heading"><h2 id="search-title">어떤 테스트를 찾으세요?</h2><button class="icon-button" type="button" data-close aria-label="검색 닫기"><svg class="icon"><use href="#icon-close"/></svg></button></div><label class="search-field"><svg class="icon"><use href="#icon-search"/></svg><input id="search-input" type="search" placeholder="결혼, 사랑, 현실…" aria-label="테스트 검색어" autocomplete="off"></label><p id="search-count" class="search-count" aria-live="polite"></p><div id="search-results" class="search-results"></div></dialog>
</body>
</html>
```

## mental-strength-data.js

```javascript
"use strict";

const testData = {
  id: 18,
  url: "mental-strength-test.html",
  title: "내 멘탈은 얼마나 단단한 편일까?",
  description: "스트레스나 실패 앞에서 나는 얼마나 쉽게 흔들리는 사람일까?",
  category: "성격",
  shareDescription: "내 멘탈 단단함 테스트 결과를 확인해보세요.",
  questions: [
    {
      question: "계획한 일이 갑자기 틀어지면?",
      answers: ["금방 다른 방법을 찾는다", "조금 당황하지만 금방 적응한다", "한동안 기분이 가라앉는다", "하루 종일 영향을 받는다"],
    },
    {
      question: "누군가 내 실수를 지적하면?",
      answers: ["고칠 부분만 받아들인다", "조금 신경 쓰이지만 넘긴다", "계속 생각난다", "자신감이 확 떨어진다"],
    },
    {
      question: "중요한 일에서 실패했을 때?",
      answers: ["다음 방법을 바로 고민한다", "잠깐 속상해하고 다시 시작한다", "꽤 오래 의욕이 떨어진다", "다시 도전하기가 무섭다"],
    },
    {
      question: "주변 사람들이 나를 부정적으로 평가하면?",
      answers: ["사람마다 생각은 다르다고 본다", "조금 신경 쓰인다", "내가 정말 그런 사람인가 고민한다", "그 말이 계속 머릿속에 남는다"],
    },
    {
      question: "스트레스가 심한 일이 생기면?",
      answers: ["해야 할 일을 하나씩 처리한다", "주변 사람에게 털어놓고 정리한다", "아무것도 하기 싫어진다", "작은 일에도 예민하게 반응한다"],
    },
    {
      question: "노력한 만큼 결과가 나오지 않으면?",
      answers: ["경험이라고 생각한다", "아쉽지만 다시 해본다", "허무하고 의욕이 많이 떨어진다", "내가 뭘 해도 안 될 것 같은 생각이 든다"],
    },
    {
      question: "인간관계에서 크게 상처받으면?",
      answers: ["필요한 만큼 거리를 두고 넘어간다", "시간이 지나면 대부분 괜찮아진다", "꽤 오래 생각하고 힘들어한다", "다른 인간관계까지 불안해진다"],
    },
    {
      question: "여러 문제가 한꺼번에 생기면?",
      answers: ["우선순위를 정해서 하나씩 처리한다", "정신없지만 어떻게든 해낸다", "어디서부터 해야 할지 막막해진다", "모든 걸 포기하고 싶어진다"],
    },
    {
      question: "예상하지 못한 변화가 생기면?",
      answers: ["새로운 상황도 나름 재미있다고 느낀다", "적응하는 데 시간이 조금 필요하다", "익숙한 상황으로 돌아가고 싶어진다", "변화 자체가 큰 스트레스다"],
    },
    {
      question: "힘든 일이 지나간 뒤의 나는?",
      answers: ["금방 원래 컨디션으로 돌아온다", "조금 쉬면 괜찮아진다", "한동안 계속 영향을 받는다", "비슷한 상황만 와도 다시 불안해진다"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({ text, score: 4 - index })),
  })),
  results: [
    {
      min: 34, max: 40,
      title: "강철멘탈",
      description: "예상치 못한 문제나 실패가 생겨도 비교적 빠르게 중심을 되찾는 타입. 감정에 휩쓸리기보다 해결할 방법을 찾는 편이고, 한번 힘든 일을 겪어도 회복하는 속도가 빠른 편이야.",
    },
    {
      min: 26, max: 33,
      title: "복구형 멘탈",
      description: "스트레스나 실패에 영향을 받긴 하지만 오래 끌지는 않는 편. 힘들 때는 충분히 힘들어하고, 시간이 지나면 다시 자기 페이스를 찾는 비교적 안정적인 타입이야.",
    },
    {
      min: 18, max: 25,
      title: "유리주의보",
      description: "일이 잘 풀리지 않거나 예상치 못한 문제가 생기면 감정적으로 영향을 많이 받는 편. 특히 실패나 타인의 평가를 오래 생각하는 경우가 있을 수 있어. 다만 멘탈이 약하다기보다 회복하는 데 시간이 필요한 타입에 가까워.",
    },
    {
      min: 10, max: 17,
      title: "초예민 모드",
      description: "스트레스나 실패를 마음속에 오래 가지고 가는 편이야. 한번 흔들리면 다른 일에도 영향을 받을 가능성이 크고, 스스로를 몰아붙이는 경향도 있을 수 있어. 혼자 버티기보다 충분히 쉬고 주변 도움을 받는 것도 필요해.",
    },
  ],
};
```

## mental-strength-test.html

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
  <meta name="description" content="스트레스나 실패 앞에서 나는 얼마나 쉽게 흔들리는 사람일까?">
  <title>내 멘탈은 얼마나 단단한 편일까? | Today's Choice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="test.css">
  <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.2/kakao.min.js" integrity="sha384-zt/G7/KfaRQ9dT/QIkS0ujMtzouJqzuSJcXVQu50x0rl/+mD1dc70AeOejVbMD9E" crossorigin="anonymous" defer></script>
  <script src="mental-strength-data.js" defer></script>
  <script src="script.js" defer></script>
  <script src="test-runner.js" defer></script>
</head>
<body class="test-page">
  <svg class="svg-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>
    <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="7.3"/><path d="m16 16 5 5"/></symbol>
    <symbol id="icon-heart" viewBox="0 0 24 24"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/></symbol>
    <symbol id="icon-chat" viewBox="0 0 24 24"><path d="M21 11.5a9 9 0 0 1-9 8.5 10 10 0 0 1-4-.8L3 21l1.7-4.7A8 8 0 0 1 3 11.5a9 9 0 0 1 18 0Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></symbol>
    <symbol id="icon-ring" viewBox="0 0 24 24"><circle cx="12" cy="14" r="7.5"/><path d="m9 3 3 3 3-3-1-2h-4l-1 2Z"/></symbol>
    <symbol id="icon-people" viewBox="0 0 24 24"><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3"/></symbol>
    <symbol id="icon-flame" viewBox="0 0 24 24"><path d="M12 3c0 4-5 6-5 11a5 5 0 0 0 10 0c0-3-2-5-3-7 0 3-1 4-2 5 0-4 2-6 0-9Z"/></symbol>
    <symbol id="icon-moon" viewBox="0 0 24 24"><path d="M21 14A9.5 9.5 0 0 1 10 3a9.5 9.5 0 1 0 11 11Z"/></symbol>
    <symbol id="icon-leaf" viewBox="0 0 24 24"><path d="M12 22V11M12 15C5 16 2 11 3 7c6-1 9 3 9 8Zm0-5c0-6 4-9 9-8 1 6-3 10-9 8Z"/></symbol>
    <symbol id="icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></symbol>
  </svg>
  <a class="skip-link" href="#main">본문 바로가기</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="index.html#home" aria-label="오늘의 초이스 홈">Today's choice</a>
      <nav class="main-nav" aria-label="주 메뉴">
        <a class="nav-link" href="index.html#home">홈</a>
        <a class="nav-link" href="index.html#new-tests">오늘의 테스트</a>
        <a class="nav-link" href="index.html#popular">전체 테스트</a>
        <a class="nav-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
      <button class="icon-button search-toggle" type="button" aria-label="테스트 검색" aria-haspopup="dialog"><svg class="icon"><use href="#icon-search"/></svg></button>
    </div>
  </header>
  <main id="main" data-test-runner>
    <section class="test-panel" data-screen="start" aria-labelledby="test-title">
      <p class="test-category" data-role="category"></p>
      <h1 id="test-title" data-role="title" data-focus tabindex="-1"></h1>
      <p class="test-description" data-role="description"></p>
      <p class="test-count" data-role="count"></p>
      <button class="primary-button" type="button" data-role="start">테스트 시작하기</button>
    </section>
    <section class="test-panel" data-screen="question" aria-labelledby="question-title" hidden>
      <div class="question-top">
        <button class="test-back" type="button" data-role="back">← 뒤로가기</button>
        <span class="test-position" data-role="position"></span>
      </div>
      <progress class="test-progress" data-role="progress" value="0" max="10" aria-label="테스트 진행률"></progress>
      <h2 class="question-title" id="question-title" data-role="question" data-focus tabindex="-1"></h2>
      <div class="answer-list" data-role="answers" role="group" aria-labelledby="question-title"></div>
    </section>
    <section class="test-panel test-result" data-screen="result" aria-labelledby="result-title" hidden>
      <p class="result-label">당신의 멘탈 단단함 지수는</p>
      <p class="result-score"><span data-role="score"></span><small> / <span data-role="max-score"></span>점</small></p>
      <h2 class="result-title" id="result-title" data-role="result-title" data-focus tabindex="-1"></h2>
      <p class="result-description" data-role="result-description"></p>
      <div class="result-actions">
        <button class="secondary-button" type="button" data-role="restart">다시하기</button>
        <a class="secondary-button" href="index.html#category-tests">다른 테스트 보기</a>
      </div>
      <button class="primary-button kakao-share-button" id="kakao-share-button" type="button">카카오톡으로 공유하기</button>
      <p class="kakao-share-status" id="kakao-share-status" role="status" hidden></p>
      <p class="test-disclaimer">본 테스트는 재미를 위한 콘텐츠이며 전문적인 심리 진단이 아닙니다.</p>
    </section>
    <noscript><p>테스트를 진행하려면 브라우저에서 JavaScript를 활성화해 주세요.</p></noscript>
  </main>
  <footer class="site-footer" id="about">
    <div class="container footer-inner">
      <a class="instagram-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        <span>@choice_zip_</span>
      </a>
    </div>
  </footer>
  <dialog id="search-dialog" class="modal" aria-labelledby="search-title"><div class="modal-heading"><h2 id="search-title">어떤 테스트를 찾으세요?</h2><button class="icon-button" type="button" data-close aria-label="검색 닫기"><svg class="icon"><use href="#icon-close"/></svg></button></div><label class="search-field"><svg class="icon"><use href="#icon-search"/></svg><input id="search-input" type="search" placeholder="성격, 멘탈, 스트레스…" aria-label="테스트 검색어" autocomplete="off"></label><p id="search-count" class="search-count" aria-live="polite"></p><div id="search-results" class="search-results"></div></dialog>
</body>
</html>
```

## million-followers-data.js

```javascript
"use strict";

const testData = {
  id: 28,
  url: "million-followers-test.html",
  title: "나는 하루아침에 100만 팔로워가 생기면 어떻게 변할까?",
  description: "갑자기 모두가 나를 보기 시작한다면, 나는 어떤 사람이 될까?",
  category: "재미",
  shareDescription: "내 100만 팔로워 테스트 결과를 확인해보세요.",
  resultMetric: { label: "유명인 적응도" },
  questions: [
    {
      question: "자고 일어났더니 팔로워가 100만 명이 됐다면 가장 먼저?",
      answers: ["무슨 일인지 확인한다", "친구들에게 바로 자랑한다", "어떤 콘텐츠를 올릴지 고민한다", "광고 단가부터 찾아본다"],
    },
    {
      question: "올린 게시물마다 댓글이 수천 개씩 달린다면?",
      answers: ["필요한 댓글만 본다", "거의 다 읽어본다", "반응 좋은 댓글에 열심히 답한다", "댓글 반응에 따라 다음 콘텐츠를 바꾼다"],
    },
    {
      question: "브랜드에서 처음으로 광고 제안이 들어오면?",
      answers: ["내 취향 아니면 거절한다", "괜찮은 브랜드인지 먼저 본다", "조건 좋으면 한번 해본다", "일단 광고비부터 물어본다"],
    },
    {
      question: "길거리에서 사람들이 알아보기 시작한다면?",
      answers: ["조금 부담스럽다", "신기하고 재밌다", "사진 요청에도 적극적으로 응한다", "은근히 알아봐 주길 기대하게 된다"],
    },
    {
      question: "내 게시물이 예전보다 반응이 안 좋다면?",
      answers: ["그럴 수도 있다고 생각한다", "이유 정도는 확인한다", "반응이 신경 쓰여 계속 확인한다", "조회수가 안 나오면 하루 종일 기분이 안 좋다"],
    },
    {
      question: "친구가 “너 유명해지고 좀 변한 것 같아”라고 한다면?",
      answers: ["어떤 부분인지 진지하게 물어본다", "조금 신경 쓰인다", "유명해졌으니 어느 정도 변하는 건 당연하다고 생각한다", "솔직히 질투하는 건가 싶다"],
    },
    {
      question: "유명 크리에이터들과 어울릴 기회가 생기면?",
      answers: ["굳이 무리해서 친해지지는 않는다", "자연스럽게 친해져 본다", "인맥을 넓히려고 적극적으로 움직인다", "어떻게든 친해져서 같이 콘텐츠를 만들고 싶다"],
    },
    {
      question: "사람들이 내 외모나 성격을 평가하기 시작하면?",
      answers: ["모르는 사람 평가라 크게 신경 안 쓴다", "기분 나쁜 건 조금 신경 쓰인다", "좋은 반응과 나쁜 반응 모두 자주 확인한다", "사람들에게 어떻게 보이는지가 매우 중요해진다"],
    },
    {
      question: "한 달에 큰돈을 벌기 시작한다면?",
      answers: ["지금 생활을 크게 바꾸지 않는다", "갖고 싶었던 것 몇 개 정도 산다", "여행이나 소비가 확 늘어난다", "제대로 셀럽처럼 살아보고 싶다"],
    },
    {
      question: "100만 팔로워를 유지하려면 매일 콘텐츠를 만들어야 한다면?",
      answers: ["힘들면 쉬어도 된다고 생각한다", "적당히 꾸준히 한다", "성장을 위해 꽤 열심히 한다", "절대 놓치기 싫어서 생활 대부분을 콘텐츠에 맞춘다"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({ text, score: index + 1 })),
  })),
  results: [
    {
      min: 10, max: 16,
      title: "유명해져도 그대로인 마이웨이형",
      description: "100만 명이 나를 보고 있어도 내 생활과 기준을 크게 바꾸지 않는 타입. 관심은 반갑지만 유명세 때문에 내가 달라지는 건 별로 원하지 않는 편이야.",
    },
    {
      min: 17, max: 24,
      title: "적당히 즐기는 인기 적응형",
      description: "유명해진 상황을 즐기면서도 어느 정도 선을 지킬 줄 아는 편. 좋은 기회는 활용하지만 SNS 숫자가 내 생활의 전부가 되지는 않는 타입이야.",
    },
    {
      min: 25, max: 32,
      title: "셀럽 본능이 깨어나는 성장형",
      description: "사람들의 관심이 커질수록 더 잘하고 싶어지는 타입. 반응, 조회수, 콘텐츠 성과에도 꽤 민감하고 유명세를 새로운 기회로 적극 활용하는 편이야.",
    },
    {
      min: 33, max: 40,
      title: "100만 팔로워 풀장착 셀럽형",
      description: "100만 팔로워가 생기는 순간 생활 자체가 확 달라질 가능성이 큰 타입. 콘텐츠, 인맥, 광고, 이미지 관리까지 적극적으로 챙기면서 유명세를 제대로 즐길 것 같아. 다만 숫자와 반응에 너무 끌려다닐 가능성도 있음.",
    },
  ],
};
```

## million-followers-test.html

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
  <meta name="description" content="갑자기 모두가 나를 보기 시작한다면, 나는 어떤 사람이 될까?">
  <title>나는 하루아침에 100만 팔로워가 생기면 어떻게 변할까? | Today's Choice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="test.css">
  <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.2/kakao.min.js" integrity="sha384-zt/G7/KfaRQ9dT/QIkS0ujMtzouJqzuSJcXVQu50x0rl/+mD1dc70AeOejVbMD9E" crossorigin="anonymous" defer></script>
  <script src="million-followers-data.js" defer></script>
  <script src="script.js" defer></script>
  <script src="test-runner.js" defer></script>
</head>
<body class="test-page">
  <svg class="svg-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>
    <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="7.3"/><path d="m16 16 5 5"/></symbol>
    <symbol id="icon-heart" viewBox="0 0 24 24"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/></symbol>
    <symbol id="icon-chat" viewBox="0 0 24 24"><path d="M21 11.5a9 9 0 0 1-9 8.5 10 10 0 0 1-4-.8L3 21l1.7-4.7A8 8 0 0 1 3 11.5a9 9 0 0 1 18 0Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></symbol>
    <symbol id="icon-ring" viewBox="0 0 24 24"><circle cx="12" cy="14" r="7.5"/><path d="m9 3 3 3 3-3-1-2h-4l-1 2Z"/></symbol>
    <symbol id="icon-people" viewBox="0 0 24 24"><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3"/></symbol>
    <symbol id="icon-flame" viewBox="0 0 24 24"><path d="M12 3c0 4-5 6-5 11a5 5 0 0 0 10 0c0-3-2-5-3-7 0 3-1 4-2 5 0-4 2-6 0-9Z"/></symbol>
    <symbol id="icon-moon" viewBox="0 0 24 24"><path d="M21 14A9.5 9.5 0 0 1 10 3a9.5 9.5 0 1 0 11 11Z"/></symbol>
    <symbol id="icon-leaf" viewBox="0 0 24 24"><path d="M12 22V11M12 15C5 16 2 11 3 7c6-1 9 3 9 8Zm0-5c0-6 4-9 9-8 1 6-3 10-9 8Z"/></symbol>
    <symbol id="icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></symbol>
  </svg>
  <a class="skip-link" href="#main">본문 바로가기</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="index.html#home" aria-label="오늘의 초이스 홈">Today's choice</a>
      <nav class="main-nav" aria-label="주 메뉴">
        <a class="nav-link" href="index.html#home">홈</a>
        <a class="nav-link" href="index.html#new-tests">오늘의 테스트</a>
        <a class="nav-link" href="index.html#popular">전체 테스트</a>
        <a class="nav-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
      <button class="icon-button search-toggle" type="button" aria-label="테스트 검색" aria-haspopup="dialog"><svg class="icon"><use href="#icon-search"/></svg></button>
    </div>
  </header>
  <main id="main" data-test-runner>
    <section class="test-panel" data-screen="start" aria-labelledby="test-title">
      <p class="test-category" data-role="category"></p>
      <h1 id="test-title" data-role="title" data-focus tabindex="-1"></h1>
      <p class="test-description" data-role="description"></p>
      <p class="test-count" data-role="count"></p>
      <button class="primary-button" type="button" data-role="start">테스트 시작하기</button>
    </section>
    <section class="test-panel" data-screen="question" aria-labelledby="question-title" hidden>
      <div class="question-top">
        <button class="test-back" type="button" data-role="back">← 뒤로가기</button>
        <span class="test-position" data-role="position"></span>
      </div>
      <progress class="test-progress" data-role="progress" value="0" max="10" aria-label="테스트 진행률"></progress>
      <h2 class="question-title" id="question-title" data-role="question" data-focus tabindex="-1"></h2>
      <div class="answer-list" data-role="answers" role="group" aria-labelledby="question-title"></div>
    </section>
    <section class="test-panel test-result" data-screen="result" aria-labelledby="result-title" hidden>
      <p class="result-label">당신의 유명인 변화 지수는</p>
      <p class="result-score"><span data-role="score"></span><small> / <span data-role="max-score"></span>점</small></p>
      <p class="result-metric" data-role="result-metric"></p>
      <h2 class="result-title" id="result-title" data-role="result-title" data-focus tabindex="-1"></h2>
      <p class="result-description" data-role="result-description"></p>
      <div class="result-actions">
        <button class="secondary-button" type="button" data-role="restart">다시하기</button>
        <a class="secondary-button" href="index.html#category-tests">다른 테스트 보기</a>
      </div>
      <button class="primary-button kakao-share-button" id="kakao-share-button" type="button">카카오톡으로 공유하기</button>
      <p class="kakao-share-status" id="kakao-share-status" role="status" hidden></p>
      <p class="test-disclaimer">본 테스트는 재미를 위한 콘텐츠이며 전문적인 심리 진단이 아닙니다.</p>
    </section>
    <noscript><p>테스트를 진행하려면 브라우저에서 JavaScript를 활성화해 주세요.</p></noscript>
  </main>
  <footer class="site-footer" id="about">
    <div class="container footer-inner">
      <a class="instagram-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        <span>@choice_zip_</span>
      </a>
    </div>
  </footer>
  <dialog id="search-dialog" class="modal" aria-labelledby="search-title"><div class="modal-heading"><h2 id="search-title">어떤 테스트를 찾으세요?</h2><button class="icon-button" type="button" data-close aria-label="검색 닫기"><svg class="icon"><use href="#icon-close"/></svg></button></div><label class="search-field"><svg class="icon"><use href="#icon-search"/></svg><input id="search-input" type="search" placeholder="팔로워, 셀럽, 재미…" aria-label="테스트 검색어" autocomplete="off"></label><p id="search-count" class="search-count" aria-live="polite"></p><div id="search-results" class="search-results"></div></dialog>
</body>
</html>
```

## relationship-control-data.js

```javascript
"use strict";

const testData = {
  id: 24,
  url: "relationship-control-test.html",
  title: "나는 연애할 때 상대를 얼마나 통제하려는 편일까?",
  description: "걱정과 관심일까, 아니면 상대를 내 기준에 맞추려는 걸까?",
  category: "연애/결혼",
  shareDescription: "내 연애 통제 성향 테스트 결과를 확인해보세요.",
  questions: [
    {
      question: "애인이 친구들과 늦게까지 술을 마신다면?",
      answers: ["알아서 잘하겠지 싶다", "끝나면 연락 정도는 받고 싶다", "몇 시에 들어갈지 정했으면 좋겠다", "늦게까지 마시는 것 자체가 싫다"],
    },
    {
      question: "애인이 이성 친구와 자주 연락한다면?",
      answers: ["신경 쓰지 않는다", "어떤 친구인지는 궁금하다", "연락 빈도를 줄였으면 한다", "연락하지 않았으면 한다"],
    },
    {
      question: "애인이 내가 싫어하는 스타일의 옷을 입는다면?",
      answers: ["본인 마음이라고 생각한다", "내 취향 정도는 말해본다", "가능하면 다른 걸 입었으면 한다", "입지 말라고 할 것 같다"],
    },
    {
      question: "애인이 주말에 나 말고 친구 약속을 잡으면?",
      answers: ["당연히 괜찮다", "너무 자주만 아니면 괜찮다", "나와의 시간을 먼저 고려했으면 한다", "연애 중이면 나를 우선해야 한다고 생각한다"],
    },
    {
      question: "애인의 SNS 활동이 마음에 들지 않는다면?",
      answers: ["본인 계정이니 신경 안 쓴다", "내 기분은 말해본다", "몇 가지는 하지 말아달라고 한다", "내가 싫다면 안 하는 게 맞다고 생각한다"],
    },
    {
      question: "연락 횟수에 대한 생각은?",
      answers: ["서로 편할 때 하면 된다", "기본적인 연락은 필요하다", "어느 정도 규칙적으로 해야 한다", "연락이 뜸하면 왜 그런지 확인해야 한다"],
    },
    {
      question: "애인이 혼자 여행을 가고 싶다고 한다면?",
      answers: ["재밌게 다녀오라고 한다", "조금 걱정되지만 괜찮다", "굳이 혼자 갈 필요가 있나 싶다", "연애 중에 혼자 여행은 싫다"],
    },
    {
      question: "애인의 인간관계 중 마음에 안 드는 사람이 있다면?",
      answers: ["본인이 판단할 문제다", "조심하라고만 말한다", "가능한 한 만나지 않았으면 한다", "관계를 끊었으면 한다"],
    },
    {
      question: "애인이 내 조언과 다르게 행동하면?",
      answers: ["본인 선택이라고 생각한다", "아쉽지만 존중한다", "왜 내 말을 안 듣는지 답답하다", "연인이라면 어느 정도 맞춰줘야 한다고 생각한다"],
    },
    {
      question: "연애에서 “서로 맞춰간다”는 의미는?",
      answers: ["서로 다른 점을 존중하는 것", "필요한 부분만 조금씩 양보하는 것", "상대가 싫어하는 행동은 웬만하면 안 하는 것", "연인이 원하는 모습에 맞춰주는 것"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({ text, score: index + 1 })),
  })),
  results: [
    {
      min: 10, max: 16,
      title: "자유 존중형",
      description: "연애를 해도 서로의 생활과 선택을 존중하는 편. 상대를 바꾸려고 하기보다 각자의 영역을 인정하는 타입이야.",
    },
    {
      min: 17, max: 24,
      title: "적당한 합의형",
      description: "상대를 통제하려 하지는 않지만 연인 사이에 어느 정도 기준과 배려는 필요하다고 보는 편. 불편한 부분은 대화로 조율하려는 타입이야.",
    },
    {
      min: 25, max: 32,
      title: "간섭이 꽤 많은 편",
      description: "상대의 행동이 관계에 영향을 준다고 생각해서 연락, 인간관계, 생활 방식 등에 관여하는 편이야. 본인은 배려를 원한다고 느껴도 상대에게는 간섭처럼 느껴질 수 있음.",
    },
    {
      min: 33, max: 40,
      title: "내 기준에 맞추길 원하는 편",
      description: "연애하면 서로의 행동에 어느 정도 권한이 생긴다고 생각하는 타입. 상대가 내 기준에서 벗어나면 불편함을 크게 느끼는 편이라, 관심과 통제의 경계를 생각해볼 필요가 있어.",
    },
  ],
};
```

## relationship-control-test.html

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
  <meta name="description" content="걱정과 관심일까, 아니면 상대를 내 기준에 맞추려는 걸까?">
  <title>나는 연애할 때 상대를 얼마나 통제하려는 편일까? | Today's Choice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="test.css">
  <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.2/kakao.min.js" integrity="sha384-zt/G7/KfaRQ9dT/QIkS0ujMtzouJqzuSJcXVQu50x0rl/+mD1dc70AeOejVbMD9E" crossorigin="anonymous" defer></script>
  <script src="relationship-control-data.js" defer></script>
  <script src="script.js" defer></script>
  <script src="test-runner.js" defer></script>
</head>
<body class="test-page">
  <svg class="svg-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>
    <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="7.3"/><path d="m16 16 5 5"/></symbol>
    <symbol id="icon-heart" viewBox="0 0 24 24"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/></symbol>
    <symbol id="icon-chat" viewBox="0 0 24 24"><path d="M21 11.5a9 9 0 0 1-9 8.5 10 10 0 0 1-4-.8L3 21l1.7-4.7A8 8 0 0 1 3 11.5a9 9 0 0 1 18 0Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></symbol>
    <symbol id="icon-ring" viewBox="0 0 24 24"><circle cx="12" cy="14" r="7.5"/><path d="m9 3 3 3 3-3-1-2h-4l-1 2Z"/></symbol>
    <symbol id="icon-people" viewBox="0 0 24 24"><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3"/></symbol>
    <symbol id="icon-flame" viewBox="0 0 24 24"><path d="M12 3c0 4-5 6-5 11a5 5 0 0 0 10 0c0-3-2-5-3-7 0 3-1 4-2 5 0-4 2-6 0-9Z"/></symbol>
    <symbol id="icon-moon" viewBox="0 0 24 24"><path d="M21 14A9.5 9.5 0 0 1 10 3a9.5 9.5 0 1 0 11 11Z"/></symbol>
    <symbol id="icon-leaf" viewBox="0 0 24 24"><path d="M12 22V11M12 15C5 16 2 11 3 7c6-1 9 3 9 8Zm0-5c0-6 4-9 9-8 1 6-3 10-9 8Z"/></symbol>
    <symbol id="icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></symbol>
  </svg>
  <a class="skip-link" href="#main">본문 바로가기</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="index.html#home" aria-label="오늘의 초이스 홈">Today's choice</a>
      <nav class="main-nav" aria-label="주 메뉴">
        <a class="nav-link" href="index.html#home">홈</a>
        <a class="nav-link" href="index.html#new-tests">오늘의 테스트</a>
        <a class="nav-link" href="index.html#popular">전체 테스트</a>
        <a class="nav-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
      <button class="icon-button search-toggle" type="button" aria-label="테스트 검색" aria-haspopup="dialog"><svg class="icon"><use href="#icon-search"/></svg></button>
    </div>
  </header>
  <main id="main" data-test-runner>
    <section class="test-panel" data-screen="start" aria-labelledby="test-title">
      <p class="test-category" data-role="category"></p>
      <h1 id="test-title" data-role="title" data-focus tabindex="-1"></h1>
      <p class="test-description" data-role="description"></p>
      <p class="test-count" data-role="count"></p>
      <button class="primary-button" type="button" data-role="start">테스트 시작하기</button>
    </section>
    <section class="test-panel" data-screen="question" aria-labelledby="question-title" hidden>
      <div class="question-top">
        <button class="test-back" type="button" data-role="back">← 뒤로가기</button>
        <span class="test-position" data-role="position"></span>
      </div>
      <progress class="test-progress" data-role="progress" value="0" max="10" aria-label="테스트 진행률"></progress>
      <h2 class="question-title" id="question-title" data-role="question" data-focus tabindex="-1"></h2>
      <div class="answer-list" data-role="answers" role="group" aria-labelledby="question-title"></div>
    </section>
    <section class="test-panel test-result" data-screen="result" aria-labelledby="result-title" hidden>
      <p class="result-label">당신의 연애 통제 성향 지수는</p>
      <p class="result-score"><span data-role="score"></span><small> / <span data-role="max-score"></span>점</small></p>
      <h2 class="result-title" id="result-title" data-role="result-title" data-focus tabindex="-1"></h2>
      <p class="result-description" data-role="result-description"></p>
      <div class="result-actions">
        <button class="secondary-button" type="button" data-role="restart">다시하기</button>
        <a class="secondary-button" href="index.html#category-tests">다른 테스트 보기</a>
      </div>
      <button class="primary-button kakao-share-button" id="kakao-share-button" type="button">카카오톡으로 공유하기</button>
      <p class="kakao-share-status" id="kakao-share-status" role="status" hidden></p>
      <p class="test-disclaimer">본 테스트는 재미를 위한 콘텐츠이며 전문적인 심리 진단이 아닙니다.</p>
    </section>
    <noscript><p>테스트를 진행하려면 브라우저에서 JavaScript를 활성화해 주세요.</p></noscript>
  </main>
  <footer class="site-footer" id="about">
    <div class="container footer-inner">
      <a class="instagram-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        <span>@choice_zip_</span>
      </a>
    </div>
  </footer>
  <dialog id="search-dialog" class="modal" aria-labelledby="search-title"><div class="modal-heading"><h2 id="search-title">어떤 테스트를 찾으세요?</h2><button class="icon-button" type="button" data-close aria-label="검색 닫기"><svg class="icon"><use href="#icon-close"/></svg></button></div><label class="search-field"><svg class="icon"><use href="#icon-search"/></svg><input id="search-input" type="search" placeholder="연애, 통제, 관심…" aria-label="테스트 검색어" autocomplete="off"></label><p id="search-count" class="search-count" aria-live="polite"></p><div id="search-results" class="search-results"></div></dialog>
</body>
</html>
```

## relationship-energy-data.js

```javascript
"use strict";

const testData = {
  id: 23,
  url: "relationship-energy-test.html",
  title: "나는 연애할 때 감정소모가 큰 편일까?",
  description: "연애 하나로 하루 기분이 얼마나 흔들리는지 알아보세요.",
  category: "연애/결혼",
  shareDescription: "내 연애 감정소모 테스트 결과를 확인해보세요.",
  questions: [
    {
      question: "애인의 답장이 평소보다 늦으면?",
      answers: ["별로 신경 안 쓴다", "조금 궁금하다", "신경 쓰여서 자주 확인한다", "다른 일에 집중하기 힘들다"],
    },
    {
      question: "애인과 다툰 날에는?",
      answers: ["일상생활은 그대로 한다", "조금 기분이 안 좋다", "하루 종일 생각난다", "아무것도 하기 싫어진다"],
    },
    {
      question: "애인의 말투가 조금 달라졌다고 느껴지면?",
      answers: ["별생각 없다", "무슨 일 있나 생각한다", "나 때문인지 계속 신경 쓴다", "마음이 식은 건 아닌지 불안하다"],
    },
    {
      question: "애인이 친구들과 놀러 간 날 나는?",
      answers: ["내 할 일을 한다", "가끔 연락을 확인한다", "누구랑 있는지 신경 쓰인다", "연락이 없으면 계속 불안하다"],
    },
    {
      question: "연애 중 서운한 일이 생기면?",
      answers: ["바로 말하고 금방 푼다", "조금 생각하다 말한다", "혼자 오래 생각한다", "며칠 동안 기분에 영향을 받는다"],
    },
    {
      question: "애인의 사소한 행동 하나가 마음에 걸리면?",
      answers: ["금방 잊는다", "조금 생각한다", "의미를 자꾸 해석한다", "최악의 상황까지 상상한다"],
    },
    {
      question: "연애가 잘 안 풀리는 시기에는?",
      answers: ["다른 생활에는 큰 영향 없다", "기분이 조금 가라앉는다", "일이나 인간관계까지 영향을 받는다", "하루 전체가 연애 문제로 가득 찬다"],
    },
    {
      question: "애인의 기분이 안 좋아 보이면?",
      answers: ["본인이 말할 때까지 기다린다", "한 번 물어본다", "내가 잘못한 게 있나 생각한다", "어떻게든 기분을 풀어줘야 마음이 놓인다"],
    },
    {
      question: "연애에서 확신이 부족하다고 느끼면?",
      answers: ["크게 신경 안 쓴다", "가끔 표현을 원한다", "자주 확인받고 싶다", "확신이 없으면 관계 자체가 불안하다"],
    },
    {
      question: "연애 중인 나를 표현한다면?",
      answers: ["연애와 내 생활이 잘 분리된다", "연애가 꽤 중요한 편이다", "애인 기분에 내 기분도 많이 좌우된다", "연애 상태가 내 하루를 거의 결정한다"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({ text, score: index + 1 })),
  })),
  results: [
    {
      min: 10, max: 16,
      title: "감정소모 거의 없는 편",
      description: "연애를 해도 내 생활과 감정을 비교적 잘 유지하는 타입. 문제가 생겨도 관계 하나 때문에 하루 전체가 크게 흔들리지는 않는 편이야.",
    },
    {
      min: 17, max: 24,
      title: "적당히 신경 쓰는 편",
      description: "연애에 영향을 받기는 하지만 금방 균형을 찾는 편. 좋아하는 만큼 신경은 쓰면서도 내 생활까지 잃지는 않는 타입이야.",
    },
    {
      min: 25, max: 32,
      title: "감정소모가 꽤 큰 편",
      description: "애인의 말투나 행동 변화에 민감하고, 관계가 안 좋으면 다른 일에도 영향을 받는 편이야. 연애에 진심인 만큼 감정 에너지도 많이 쓰는 타입.",
    },
    {
      min: 33, max: 40,
      title: "연애가 하루를 좌우하는 편",
      description: "관계의 작은 변화에도 감정이 크게 흔들릴 수 있는 타입. 애인의 기분이나 연락 상태가 내 하루 컨디션까지 좌우할 가능성이 커.",
    },
  ],
};
```

## relationship-energy-test.html

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
  <meta name="description" content="연애 하나로 하루 기분이 얼마나 흔들리는지 알아보세요.">
  <title>나는 연애할 때 감정소모가 큰 편일까? | Today's Choice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="test.css">
  <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.2/kakao.min.js" integrity="sha384-zt/G7/KfaRQ9dT/QIkS0ujMtzouJqzuSJcXVQu50x0rl/+mD1dc70AeOejVbMD9E" crossorigin="anonymous" defer></script>
  <script src="relationship-energy-data.js" defer></script>
  <script src="script.js" defer></script>
  <script src="test-runner.js" defer></script>
</head>
<body class="test-page">
  <svg class="svg-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>
    <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="7.3"/><path d="m16 16 5 5"/></symbol>
    <symbol id="icon-heart" viewBox="0 0 24 24"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/></symbol>
    <symbol id="icon-chat" viewBox="0 0 24 24"><path d="M21 11.5a9 9 0 0 1-9 8.5 10 10 0 0 1-4-.8L3 21l1.7-4.7A8 8 0 0 1 3 11.5a9 9 0 0 1 18 0Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></symbol>
    <symbol id="icon-ring" viewBox="0 0 24 24"><circle cx="12" cy="14" r="7.5"/><path d="m9 3 3 3 3-3-1-2h-4l-1 2Z"/></symbol>
    <symbol id="icon-people" viewBox="0 0 24 24"><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3"/></symbol>
    <symbol id="icon-flame" viewBox="0 0 24 24"><path d="M12 3c0 4-5 6-5 11a5 5 0 0 0 10 0c0-3-2-5-3-7 0 3-1 4-2 5 0-4 2-6 0-9Z"/></symbol>
    <symbol id="icon-moon" viewBox="0 0 24 24"><path d="M21 14A9.5 9.5 0 0 1 10 3a9.5 9.5 0 1 0 11 11Z"/></symbol>
    <symbol id="icon-leaf" viewBox="0 0 24 24"><path d="M12 22V11M12 15C5 16 2 11 3 7c6-1 9 3 9 8Zm0-5c0-6 4-9 9-8 1 6-3 10-9 8Z"/></symbol>
    <symbol id="icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></symbol>
  </svg>
  <a class="skip-link" href="#main">본문 바로가기</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="index.html#home" aria-label="오늘의 초이스 홈">Today's choice</a>
      <nav class="main-nav" aria-label="주 메뉴">
        <a class="nav-link" href="index.html#home">홈</a>
        <a class="nav-link" href="index.html#new-tests">오늘의 테스트</a>
        <a class="nav-link" href="index.html#popular">전체 테스트</a>
        <a class="nav-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
      <button class="icon-button search-toggle" type="button" aria-label="테스트 검색" aria-haspopup="dialog"><svg class="icon"><use href="#icon-search"/></svg></button>
    </div>
  </header>
  <main id="main" data-test-runner>
    <section class="test-panel" data-screen="start" aria-labelledby="test-title">
      <p class="test-category" data-role="category"></p>
      <h1 id="test-title" data-role="title" data-focus tabindex="-1"></h1>
      <p class="test-description" data-role="description"></p>
      <p class="test-count" data-role="count"></p>
      <button class="primary-button" type="button" data-role="start">테스트 시작하기</button>
    </section>
    <section class="test-panel" data-screen="question" aria-labelledby="question-title" hidden>
      <div class="question-top">
        <button class="test-back" type="button" data-role="back">← 뒤로가기</button>
        <span class="test-position" data-role="position"></span>
      </div>
      <progress class="test-progress" data-role="progress" value="0" max="10" aria-label="테스트 진행률"></progress>
      <h2 class="question-title" id="question-title" data-role="question" data-focus tabindex="-1"></h2>
      <div class="answer-list" data-role="answers" role="group" aria-labelledby="question-title"></div>
    </section>
    <section class="test-panel test-result" data-screen="result" aria-labelledby="result-title" hidden>
      <p class="result-label">당신의 연애 감정소모 지수는</p>
      <p class="result-score"><span data-role="score"></span><small> / <span data-role="max-score"></span>점</small></p>
      <h2 class="result-title" id="result-title" data-role="result-title" data-focus tabindex="-1"></h2>
      <p class="result-description" data-role="result-description"></p>
      <div class="result-actions">
        <button class="secondary-button" type="button" data-role="restart">다시하기</button>
        <a class="secondary-button" href="index.html#category-tests">다른 테스트 보기</a>
      </div>
      <button class="primary-button kakao-share-button" id="kakao-share-button" type="button">카카오톡으로 공유하기</button>
      <p class="kakao-share-status" id="kakao-share-status" role="status" hidden></p>
      <p class="test-disclaimer">본 테스트는 재미를 위한 콘텐츠이며 전문적인 심리 진단이 아닙니다.</p>
    </section>
    <noscript><p>테스트를 진행하려면 브라우저에서 JavaScript를 활성화해 주세요.</p></noscript>
  </main>
  <footer class="site-footer" id="about">
    <div class="container footer-inner">
      <a class="instagram-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        <span>@choice_zip_</span>
      </a>
    </div>
  </footer>
  <dialog id="search-dialog" class="modal" aria-labelledby="search-title"><div class="modal-heading"><h2 id="search-title">어떤 테스트를 찾으세요?</h2><button class="icon-button" type="button" data-close aria-label="검색 닫기"><svg class="icon"><use href="#icon-close"/></svg></button></div><label class="search-field"><svg class="icon"><use href="#icon-search"/></svg><input id="search-input" type="search" placeholder="연애, 감정소모, 기분…" aria-label="테스트 검색어" autocomplete="off"></label><p id="search-count" class="search-count" aria-live="polite"></p><div id="search-results" class="search-results"></div></dialog>
</body>
</html>
```

## secret-data.js

```javascript
"use strict";

const testData = {
  id: 20,
  url: "secret-test.html",
  title: "나는 비밀을 들으면 얼마나 오래 참을 수 있을까?",
  description: "입이 무거운 편일까, 말하고 싶어서 근질근질한 편일까?",
  category: "재미",
  shareDescription: "내 비밀 유지 테스트 결과를 확인해보세요.",
  questions: [
    {
      question: "친구가 “절대 아무한테도 말하지 마”라며 연애 사실을 알려줬다면?",
      answers: ["끝까지 비밀로 한다", "정말 친한 사람에게도 말하지 않는다", "입이 근질거리지만 참는다", "상황 봐서 한 명쯤은 말할 것 같다"],
    },
    {
      question: "다른 친구가 그 비밀을 눈치채고 계속 캐묻는다면?",
      answers: ["끝까지 모르는 척한다", "말을 돌린다", "거의 들킬 뻔한다", "결국 말할 수도 있다"],
    },
    {
      question: "너무 충격적인 비밀을 들었다면?",
      answers: ["충격적이어도 말하지 않는다", "혼자 정리한다", "누군가에게 말하고 싶어진다", "꼭 한 명에게는 말해야 속이 편하다"],
    },
    {
      question: "술자리에서 비밀과 관련된 이야기가 나오면?",
      answers: ["아무 말도 안 한다", "자연스럽게 다른 이야기로 넘긴다", "표정 관리가 조금 어렵다", "나도 모르게 힌트를 줄 것 같다"],
    },
    {
      question: "비밀 주인이 나와 싸웠다면?",
      answers: ["싸워도 비밀은 지킨다", "화나도 말하지 않는다", "순간적으로 말하고 싶은 생각이 든다", "너무 화나면 말할 수도 있다"],
    },
    {
      question: "비밀을 알고 있는 사람이 나뿐이라면?",
      answers: ["더 철저히 지킨다", "부담스럽지만 지킨다", "괜히 신경 쓰인다", "혼자 알고 있기가 너무 답답하다"],
    },
    {
      question: "누군가가 “나한테만 말해”라고 한다면?",
      answers: ["절대 안 말한다", "고민은 되지만 안 말한다", "정말 믿는 사람이면 흔들린다", "결국 말할 가능성이 높다"],
    },
    {
      question: "비밀이 이미 다른 사람들에게 퍼진 걸 알게 되면?",
      answers: ["그래도 나는 말하지 않는다", "이제는 조금 덜 조심한다", "이미 퍼졌으니 말해도 되나 싶다", "사실상 비밀이 아니라고 생각한다"],
    },
    {
      question: "친구가 비밀 이야기를 너무 자주 한다면?",
      answers: ["그래도 계속 지킨다", "가끔 부담스럽다", "웬만하면 듣고 싶지 않다", "결국 하나쯤은 새어나갈 것 같다"],
    },
    {
      question: "나는 원래 비밀을 들으면?",
      answers: ["들은 사실 자체를 잊는 편이다", "기억하지만 잘 안 말한다", "자꾸 누군가에게 말하고 싶다", "이야기하고 싶어서 참기 힘들다"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({ text, score: index + 1 })),
  })),
  results: [
    {
      min: 10, max: 16,
      title: "철통 보안형",
      description: "비밀을 맡겨도 되는 타입. 감정이 상하거나 상황이 바뀌어도 남의 이야기를 쉽게 꺼내지 않는 편이야.",
    },
    {
      min: 17, max: 24,
      title: "믿고 맡길 수 있는 편",
      description: "웬만한 비밀은 잘 지키는 편. 다만 너무 충격적이거나 부담스러운 이야기는 혼자 가지고 있기 힘들 수 있어.",
    },
    {
      min: 25, max: 32,
      title: "입이 조금 근질근질한 편",
      description: "비밀을 지키려고는 하지만 누군가에게 말하고 싶은 유혹도 꽤 큰 편. 특히 분위기 타면 힌트를 흘릴 가능성이 있음.",
    },
    {
      min: 33, max: 40,
      title: "비밀 유지 주의보",
      description: "비밀을 혼자 들고 있기 힘든 타입. 악의는 없어도 “이 정도는 괜찮겠지” 하다가 퍼뜨릴 수 있으니 조심해야 함.",
    },
  ],
};
```

## secret-test.html

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
  <meta name="description" content="입이 무거운 편일까, 말하고 싶어서 근질근질한 편일까?">
  <title>나는 비밀을 들으면 얼마나 오래 참을 수 있을까? | Today's Choice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="test.css">
  <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.2/kakao.min.js" integrity="sha384-zt/G7/KfaRQ9dT/QIkS0ujMtzouJqzuSJcXVQu50x0rl/+mD1dc70AeOejVbMD9E" crossorigin="anonymous" defer></script>
  <script src="secret-data.js" defer></script>
  <script src="script.js" defer></script>
  <script src="test-runner.js" defer></script>
</head>
<body class="test-page">
  <svg class="svg-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>
    <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="7.3"/><path d="m16 16 5 5"/></symbol>
    <symbol id="icon-heart" viewBox="0 0 24 24"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/></symbol>
    <symbol id="icon-chat" viewBox="0 0 24 24"><path d="M21 11.5a9 9 0 0 1-9 8.5 10 10 0 0 1-4-.8L3 21l1.7-4.7A8 8 0 0 1 3 11.5a9 9 0 0 1 18 0Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></symbol>
    <symbol id="icon-ring" viewBox="0 0 24 24"><circle cx="12" cy="14" r="7.5"/><path d="m9 3 3 3 3-3-1-2h-4l-1 2Z"/></symbol>
    <symbol id="icon-people" viewBox="0 0 24 24"><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3"/></symbol>
    <symbol id="icon-flame" viewBox="0 0 24 24"><path d="M12 3c0 4-5 6-5 11a5 5 0 0 0 10 0c0-3-2-5-3-7 0 3-1 4-2 5 0-4 2-6 0-9Z"/></symbol>
    <symbol id="icon-moon" viewBox="0 0 24 24"><path d="M21 14A9.5 9.5 0 0 1 10 3a9.5 9.5 0 1 0 11 11Z"/></symbol>
    <symbol id="icon-leaf" viewBox="0 0 24 24"><path d="M12 22V11M12 15C5 16 2 11 3 7c6-1 9 3 9 8Zm0-5c0-6 4-9 9-8 1 6-3 10-9 8Z"/></symbol>
    <symbol id="icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></symbol>
  </svg>
  <a class="skip-link" href="#main">본문 바로가기</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="index.html#home" aria-label="오늘의 초이스 홈">Today's choice</a>
      <nav class="main-nav" aria-label="주 메뉴">
        <a class="nav-link" href="index.html#home">홈</a>
        <a class="nav-link" href="index.html#new-tests">오늘의 테스트</a>
        <a class="nav-link" href="index.html#popular">전체 테스트</a>
        <a class="nav-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
      <button class="icon-button search-toggle" type="button" aria-label="테스트 검색" aria-haspopup="dialog"><svg class="icon"><use href="#icon-search"/></svg></button>
    </div>
  </header>
  <main id="main" data-test-runner>
    <section class="test-panel" data-screen="start" aria-labelledby="test-title">
      <p class="test-category" data-role="category"></p>
      <h1 id="test-title" data-role="title" data-focus tabindex="-1"></h1>
      <p class="test-description" data-role="description"></p>
      <p class="test-count" data-role="count"></p>
      <button class="primary-button" type="button" data-role="start">테스트 시작하기</button>
    </section>
    <section class="test-panel" data-screen="question" aria-labelledby="question-title" hidden>
      <div class="question-top">
        <button class="test-back" type="button" data-role="back">← 뒤로가기</button>
        <span class="test-position" data-role="position"></span>
      </div>
      <progress class="test-progress" data-role="progress" value="0" max="10" aria-label="테스트 진행률"></progress>
      <h2 class="question-title" id="question-title" data-role="question" data-focus tabindex="-1"></h2>
      <div class="answer-list" data-role="answers" role="group" aria-labelledby="question-title"></div>
    </section>
    <section class="test-panel test-result" data-screen="result" aria-labelledby="result-title" hidden>
      <p class="result-label">당신의 비밀 유지 성향은</p>
      <p class="result-score"><span data-role="score"></span><small> / <span data-role="max-score"></span>점</small></p>
      <h2 class="result-title" id="result-title" data-role="result-title" data-focus tabindex="-1"></h2>
      <p class="result-description" data-role="result-description"></p>
      <div class="result-actions">
        <button class="secondary-button" type="button" data-role="restart">다시하기</button>
        <a class="secondary-button" href="index.html#category-tests">다른 테스트 보기</a>
      </div>
      <button class="primary-button kakao-share-button" id="kakao-share-button" type="button">카카오톡으로 공유하기</button>
      <p class="kakao-share-status" id="kakao-share-status" role="status" hidden></p>
      <p class="test-disclaimer">본 테스트는 재미를 위한 콘텐츠이며 전문적인 심리 진단이 아닙니다.</p>
    </section>
    <noscript><p>테스트를 진행하려면 브라우저에서 JavaScript를 활성화해 주세요.</p></noscript>
  </main>
  <footer class="site-footer" id="about">
    <div class="container footer-inner">
      <a class="instagram-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        <span>@choice_zip_</span>
      </a>
    </div>
  </footer>
  <dialog id="search-dialog" class="modal" aria-labelledby="search-title"><div class="modal-heading"><h2 id="search-title">어떤 테스트를 찾으세요?</h2><button class="icon-button" type="button" data-close aria-label="검색 닫기"><svg class="icon"><use href="#icon-close"/></svg></button></div><label class="search-field"><svg class="icon"><use href="#icon-search"/></svg><input id="search-input" type="search" placeholder="비밀, 친구, 재미…" aria-label="테스트 검색어" autocomplete="off"></label><p id="search-count" class="search-count" aria-live="polite"></p><div id="search-results" class="search-results"></div></dialog>
</body>
</html>
```

## social-adaptation-data.js

```javascript
"use strict";

const testData = {
  id: 30,
  url: "social-adaptation-test.html",
  title: "나는 사회생활에서 얼마나 적응이 빠른 편일까?",
  description: "새로운 사람, 새로운 환경에 나는 얼마나 빨리 녹아드는 타입일까?",
  category: "친구·인간관계·사회생활",
  shareDescription: "내 사회생활 적응 테스트 결과를 확인해보세요.",
  questions: [
    {
      question: "새로운 회사나 학교에 처음 가면?",
      answers: ["먼저 주변을 파악하고 금방 적응한다", "조금 긴장하지만 빠르게 익숙해진다", "며칠은 어색하다", "한동안 적응하기 힘들다"],
    },
    {
      question: "처음 보는 사람들과 함께 점심을 먹게 된다면?",
      answers: ["자연스럽게 대화한다", "분위기를 보며 대화에 참여한다", "먼저 말을 걸어주면 편하다", "많이 어색하고 부담스럽다"],
    },
    {
      question: "새로운 업무를 맡았을 때 나는?",
      answers: ["일단 해보면서 익힌다", "설명을 듣고 금방 따라간다", "익숙해질 때까지 시간이 필요하다", "변화 자체가 스트레스다"],
    },
    {
      question: "내가 모르는 규칙이나 분위기가 있는 곳에 가면?",
      answers: ["빠르게 눈치채고 맞춘다", "주변을 보면서 조금씩 맞춘다", "누가 알려줘야 편하다", "그런 상황 자체가 부담스럽다"],
    },
    {
      question: "새로운 팀에 들어갔을 때?",
      answers: ["먼저 말을 걸어보는 편이다", "자연스럽게 친해질 기회를 기다린다", "친한 사람이 생길 때까지 조용한 편이다", "한동안 혼자 있는 게 편하다"],
    },
    {
      question: "갑자기 일정이나 방식이 바뀐다면?",
      answers: ["바로 새로운 방식에 맞춘다", "잠깐 당황하지만 금방 적응한다", "꽤 신경 쓰인다", "원래 방식이 바뀌는 게 매우 싫다"],
    },
    {
      question: "낯선 자리에서 질문을 받아야 한다면?",
      answers: ["자연스럽게 대답한다", "조금 긴장하지만 괜찮다", "머릿속이 잠깐 하얘진다", "가능한 한 피하고 싶다"],
    },
    {
      question: "새로운 사람들과 단체 채팅방에 들어가면?",
      answers: ["먼저 인사하고 대화에도 참여한다", "인사하고 분위기를 본다", "주로 읽기만 한다", "필요할 때만 말한다"],
    },
    {
      question: "새로운 환경에서 실수를 했다면?",
      answers: ["금방 고치고 넘어간다", "조금 민망하지만 금방 회복한다", "계속 신경 쓰인다", "이후 행동까지 위축되는 편이다"],
    },
    {
      question: "환경이 완전히 바뀌었을 때 나는?",
      answers: ["오히려 새로운 게 재밌다", "시간이 조금 지나면 괜찮아진다", "익숙해지는 데 꽤 오래 걸린다", "익숙한 환경을 떠나는 게 매우 힘들다"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({ text, score: 4 - index })),
  })),
  results: [
    {
      min: 34, max: 40,
      title: "어디서든 금방 녹아드는 적응형",
      description: "새로운 사람이나 환경에 대한 부담이 적고, 상황을 빠르게 파악해서 자연스럽게 맞춰가는 편이야. 변화가 생겨도 비교적 금방 자기 페이스를 찾는 타입.",
    },
    {
      min: 26, max: 33,
      title: "조금만 지나면 금방 적응하는 편",
      description: "처음에는 약간 어색하거나 긴장해도 시간이 지나면 자연스럽게 적응하는 편이야. 완전히 낯선 상황에서도 큰 스트레스 없이 익숙해질 수 있는 타입.",
    },
    {
      min: 18, max: 25,
      title: "적응에 시간이 필요한 편",
      description: "새로운 사람이나 환경에 익숙해지기까지 시간이 조금 필요한 타입. 처음에는 조용하지만 익숙해지고 나면 편하게 지내는 경우가 많아.",
    },
    {
      min: 10, max: 17,
      title: "익숙한 환경이 편한 타입",
      description: "낯선 사람이나 갑작스러운 변화에서 스트레스를 크게 느끼는 편이야. 빠르게 적응하기보다는 충분히 관찰하고 익숙해진 뒤 편해지는 타입.",
    },
  ],
};
```

## social-adaptation-test.html

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
  <meta name="description" content="새로운 사람, 새로운 환경에 나는 얼마나 빨리 녹아드는 타입일까?">
  <title>나는 사회생활에서 얼마나 적응이 빠른 편일까? | Today's Choice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="test.css">
  <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.2/kakao.min.js" integrity="sha384-zt/G7/KfaRQ9dT/QIkS0ujMtzouJqzuSJcXVQu50x0rl/+mD1dc70AeOejVbMD9E" crossorigin="anonymous" defer></script>
  <script src="social-adaptation-data.js" defer></script>
  <script src="script.js" defer></script>
  <script src="test-runner.js" defer></script>
</head>
<body class="test-page">
  <svg class="svg-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>
    <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="7.3"/><path d="m16 16 5 5"/></symbol>
    <symbol id="icon-heart" viewBox="0 0 24 24"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/></symbol>
    <symbol id="icon-chat" viewBox="0 0 24 24"><path d="M21 11.5a9 9 0 0 1-9 8.5 10 10 0 0 1-4-.8L3 21l1.7-4.7A8 8 0 0 1 3 11.5a9 9 0 0 1 18 0Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></symbol>
    <symbol id="icon-ring" viewBox="0 0 24 24"><circle cx="12" cy="14" r="7.5"/><path d="m9 3 3 3 3-3-1-2h-4l-1 2Z"/></symbol>
    <symbol id="icon-people" viewBox="0 0 24 24"><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3"/></symbol>
    <symbol id="icon-flame" viewBox="0 0 24 24"><path d="M12 3c0 4-5 6-5 11a5 5 0 0 0 10 0c0-3-2-5-3-7 0 3-1 4-2 5 0-4 2-6 0-9Z"/></symbol>
    <symbol id="icon-moon" viewBox="0 0 24 24"><path d="M21 14A9.5 9.5 0 0 1 10 3a9.5 9.5 0 1 0 11 11Z"/></symbol>
    <symbol id="icon-leaf" viewBox="0 0 24 24"><path d="M12 22V11M12 15C5 16 2 11 3 7c6-1 9 3 9 8Zm0-5c0-6 4-9 9-8 1 6-3 10-9 8Z"/></symbol>
    <symbol id="icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></symbol>
  </svg>
  <a class="skip-link" href="#main">본문 바로가기</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="index.html#home" aria-label="오늘의 초이스 홈">Today's choice</a>
      <nav class="main-nav" aria-label="주 메뉴">
        <a class="nav-link" href="index.html#home">홈</a>
        <a class="nav-link" href="index.html#new-tests">오늘의 테스트</a>
        <a class="nav-link" href="index.html#popular">전체 테스트</a>
        <a class="nav-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
      <button class="icon-button search-toggle" type="button" aria-label="테스트 검색" aria-haspopup="dialog"><svg class="icon"><use href="#icon-search"/></svg></button>
    </div>
  </header>
  <main id="main" data-test-runner>
    <section class="test-panel" data-screen="start" aria-labelledby="test-title">
      <p class="test-category" data-role="category"></p>
      <h1 id="test-title" data-role="title" data-focus tabindex="-1"></h1>
      <p class="test-description" data-role="description"></p>
      <p class="test-count" data-role="count"></p>
      <button class="primary-button" type="button" data-role="start">테스트 시작하기</button>
    </section>
    <section class="test-panel" data-screen="question" aria-labelledby="question-title" hidden>
      <div class="question-top">
        <button class="test-back" type="button" data-role="back">← 뒤로가기</button>
        <span class="test-position" data-role="position"></span>
      </div>
      <progress class="test-progress" data-role="progress" value="0" max="10" aria-label="테스트 진행률"></progress>
      <h2 class="question-title" id="question-title" data-role="question" data-focus tabindex="-1"></h2>
      <div class="answer-list" data-role="answers" role="group" aria-labelledby="question-title"></div>
    </section>
    <section class="test-panel test-result" data-screen="result" aria-labelledby="result-title" hidden>
      <p class="result-label">당신의 사회생활 적응 지수는</p>
      <p class="result-score"><span data-role="score"></span><small> / <span data-role="max-score"></span>점</small></p>
      <h2 class="result-title" id="result-title" data-role="result-title" data-focus tabindex="-1"></h2>
      <p class="result-description" data-role="result-description"></p>
      <div class="result-actions">
        <button class="secondary-button" type="button" data-role="restart">다시하기</button>
        <a class="secondary-button" href="index.html#category-tests">다른 테스트 보기</a>
      </div>
      <button class="primary-button kakao-share-button" id="kakao-share-button" type="button">카카오톡으로 공유하기</button>
      <p class="kakao-share-status" id="kakao-share-status" role="status" hidden></p>
      <p class="test-disclaimer">본 테스트는 재미를 위한 콘텐츠이며 전문적인 심리 진단이 아닙니다.</p>
    </section>
    <noscript><p>테스트를 진행하려면 브라우저에서 JavaScript를 활성화해 주세요.</p></noscript>
  </main>
  <footer class="site-footer" id="about">
    <div class="container footer-inner">
      <a class="instagram-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        <span>@choice_zip_</span>
      </a>
    </div>
  </footer>
  <dialog id="search-dialog" class="modal" aria-labelledby="search-title"><div class="modal-heading"><h2 id="search-title">어떤 테스트를 찾으세요?</h2><button class="icon-button" type="button" data-close aria-label="검색 닫기"><svg class="icon"><use href="#icon-close"/></svg></button></div><label class="search-field"><svg class="icon"><use href="#icon-search"/></svg><input id="search-input" type="search" placeholder="사회생활, 관계, 적응…" aria-label="테스트 검색어" autocomplete="off"></label><p id="search-count" class="search-count" aria-live="polite"></p><div id="search-results" class="search-results"></div></dialog>
</body>
</html>
```

## social-awareness-data.js

```javascript
"use strict";

const testData = {
  id: 16,
  url: "social-awareness-test.html",
  title: "나는 인간관계에서 눈치를 얼마나 보는 편일까?",
  description: "다른 사람의 말투, 표정, 분위기를 얼마나 신경 쓰는지 알아보세요.",
  category: "친구·인간관계·사회생활",
  shareDescription: "내 인간관계 눈치 성향 결과를 확인해보세요.",
  questions: [
    {
      question: "단톡방에 내가 보낸 메시지만 답이 없으면?",
      answers: ["별생각 안 한다", "조금 신경 쓰인다", "내가 뭔가 잘못 말했나 생각한다", "한참 동안 신경 쓰인다"],
    },
    {
      question: "친구의 말투가 평소보다 짧게 느껴진다면?",
      answers: ["그냥 바쁜가 보다 한다", "조금 이상하다고 느낀다", "내가 기분 나쁘게 한 게 있나 생각한다", "이유를 계속 떠올려본다"],
    },
    {
      question: "여러 명이 있는 자리에서 분위기가 갑자기 조용해지면?",
      answers: ["별생각 없다", "조금 어색하다", "내가 뭔가 잘못했나 싶다", "내가 분위기를 망친 것 같아 불편하다"],
    },
    {
      question: "부탁을 거절해야 하는 상황에서는?",
      answers: ["필요한 경우 편하게 거절한다", "조금 미안하지만 거절한다", "상대가 기분 나쁠까 고민한다", "싫어도 웬만하면 들어준다"],
    },
    {
      question: "누군가 내 의견에 반대하면?",
      answers: ["의견이 다를 수 있다고 생각한다", "조금 신경 쓰인다", "내가 틀린 말을 했나 고민한다", "이후에는 내 의견을 말하기 조심스러워진다"],
    },
    {
      question: "친구가 “괜찮아”라고 했지만 표정이 안 좋아 보이면?",
      answers: ["말 그대로 괜찮다고 생각한다", "조금 신경 쓰인다", "진짜 괜찮은지 다시 물어본다", "내가 원인인지 계속 생각한다"],
    },
    {
      question: "새로운 사람들과 만나는 자리에서는?",
      answers: ["평소처럼 행동한다", "처음에는 조금 조심한다", "상대 반응을 계속 살핀다", "무슨 말을 해야 할지 많이 고민한다"],
    },
    {
      question: "친구에게 서운한 일이 생기면?",
      answers: ["바로 말하는 편이다", "상황을 봐서 말한다", "분위기 깨질까 봐 참는 편이다", "거의 말하지 않고 혼자 삭인다"],
    },
    {
      question: "내가 한 말을 상대가 기분 나쁘게 받아들인 것 같으면?",
      answers: ["오해라면 설명하면 된다고 생각한다", "조금 마음에 걸린다", "바로 해명하거나 사과하고 싶어진다", "집에 가서도 계속 생각난다"],
    },
    {
      question: "여러 사람이 메뉴나 약속 장소를 정할 때 나는?",
      answers: ["내가 원하는 것도 편하게 말한다", "다른 사람 의견을 먼저 듣는다", "웬만하면 다수 의견에 맞춘다", "내 의견 때문에 분위기 깨질까 봐 거의 말하지 않는다"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({ text, score: index + 1 })),
  })),
  results: [
    {
      min: 10, max: 16,
      title: "마이웨이형",
      description: "다른 사람의 반응에 크게 흔들리지 않는 편이야. 필요한 말도 비교적 솔직하게 하고, 상대의 기분까지 전부 내 책임이라고 생각하지 않는 타입.",
    },
    {
      min: 17, max: 24,
      title: "적당한 센스형",
      description: "상대의 감정이나 분위기를 어느 정도 고려하지만 지나치게 끌려다니지는 않는 편. 상황에 맞게 배려하면서도 내 생각을 표현할 줄 아는 타입이야.",
    },
    {
      min: 25, max: 32,
      title: "분위기 감지형",
      description: "상대의 말투나 표정 변화를 빠르게 알아차리고 신경 쓰는 편이야. 배려심이 큰 장점이지만, 상대 반응을 너무 해석하다 보면 내가 지칠 수 있어.",
    },
    {
      min: 33, max: 40,
      title: "인간관계 레이더형",
      description: "다른 사람의 감정과 반응을 굉장히 세밀하게 살피는 타입. 갈등을 피하려고 내 의견이나 감정을 뒤로 미루는 경우가 많을 수 있어. 모두를 편하게 하려다 내가 불편해지지 않는지가 중요해.",
    },
  ],
};
```

## social-awareness-test.html

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
  <meta name="description" content="다른 사람의 말투, 표정, 분위기를 얼마나 신경 쓰는지 알아보세요.">
  <title>나는 인간관계에서 눈치를 얼마나 보는 편일까? | Today's Choice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="test.css">
  <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.2/kakao.min.js" integrity="sha384-zt/G7/KfaRQ9dT/QIkS0ujMtzouJqzuSJcXVQu50x0rl/+mD1dc70AeOejVbMD9E" crossorigin="anonymous" defer></script>
  <script src="social-awareness-data.js" defer></script>
  <script src="script.js" defer></script>
  <script src="test-runner.js" defer></script>
</head>
<body class="test-page">
  <svg class="svg-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>
    <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="7.3"/><path d="m16 16 5 5"/></symbol>
    <symbol id="icon-heart" viewBox="0 0 24 24"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/></symbol>
    <symbol id="icon-chat" viewBox="0 0 24 24"><path d="M21 11.5a9 9 0 0 1-9 8.5 10 10 0 0 1-4-.8L3 21l1.7-4.7A8 8 0 0 1 3 11.5a9 9 0 0 1 18 0Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></symbol>
    <symbol id="icon-ring" viewBox="0 0 24 24"><circle cx="12" cy="14" r="7.5"/><path d="m9 3 3 3 3-3-1-2h-4l-1 2Z"/></symbol>
    <symbol id="icon-people" viewBox="0 0 24 24"><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3"/></symbol>
    <symbol id="icon-flame" viewBox="0 0 24 24"><path d="M12 3c0 4-5 6-5 11a5 5 0 0 0 10 0c0-3-2-5-3-7 0 3-1 4-2 5 0-4 2-6 0-9Z"/></symbol>
    <symbol id="icon-moon" viewBox="0 0 24 24"><path d="M21 14A9.5 9.5 0 0 1 10 3a9.5 9.5 0 1 0 11 11Z"/></symbol>
    <symbol id="icon-leaf" viewBox="0 0 24 24"><path d="M12 22V11M12 15C5 16 2 11 3 7c6-1 9 3 9 8Zm0-5c0-6 4-9 9-8 1 6-3 10-9 8Z"/></symbol>
    <symbol id="icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></symbol>
  </svg>
  <a class="skip-link" href="#main">본문 바로가기</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="index.html#home" aria-label="오늘의 초이스 홈">Today's choice</a>
      <nav class="main-nav" aria-label="주 메뉴">
        <a class="nav-link" href="index.html#home">홈</a>
        <a class="nav-link" href="index.html#new-tests">오늘의 테스트</a>
        <a class="nav-link" href="index.html#popular">전체 테스트</a>
        <a class="nav-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
      <button class="icon-button search-toggle" type="button" aria-label="테스트 검색" aria-haspopup="dialog"><svg class="icon"><use href="#icon-search"/></svg></button>
    </div>
  </header>
  <main id="main" data-test-runner>
    <section class="test-panel" data-screen="start" aria-labelledby="test-title">
      <p class="test-category" data-role="category"></p>
      <h1 id="test-title" data-role="title" data-focus tabindex="-1"></h1>
      <p class="test-description" data-role="description"></p>
      <p class="test-count" data-role="count"></p>
      <button class="primary-button" type="button" data-role="start">테스트 시작하기</button>
    </section>
    <section class="test-panel" data-screen="question" aria-labelledby="question-title" hidden>
      <div class="question-top">
        <button class="test-back" type="button" data-role="back">← 뒤로가기</button>
        <span class="test-position" data-role="position"></span>
      </div>
      <progress class="test-progress" data-role="progress" value="0" max="10" aria-label="테스트 진행률"></progress>
      <h2 class="question-title" id="question-title" data-role="question" data-focus tabindex="-1"></h2>
      <div class="answer-list" data-role="answers" role="group" aria-labelledby="question-title"></div>
    </section>
    <section class="test-panel test-result" data-screen="result" aria-labelledby="result-title" hidden>
      <p class="result-label">당신의 눈치 지수는</p>
      <p class="result-score"><span data-role="score"></span><small> / <span data-role="max-score"></span>점</small></p>
      <h2 class="result-title" id="result-title" data-role="result-title" data-focus tabindex="-1"></h2>
      <p class="result-description" data-role="result-description"></p>
      <div class="result-actions">
        <button class="secondary-button" type="button" data-role="restart">다시하기</button>
        <a class="secondary-button" href="index.html#category-tests">다른 테스트 보기</a>
      </div>
      <button class="primary-button kakao-share-button" id="kakao-share-button" type="button">카카오톡으로 공유하기</button>
      <p class="kakao-share-status" id="kakao-share-status" role="status" hidden></p>
      <p class="test-disclaimer">본 테스트는 재미를 위한 콘텐츠이며 전문적인 심리 진단이 아닙니다.</p>
    </section>
    <noscript><p>테스트를 진행하려면 브라우저에서 JavaScript를 활성화해 주세요.</p></noscript>
  </main>
  <footer class="site-footer" id="about">
    <div class="container footer-inner">
      <a class="instagram-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        <span>@choice_zip_</span>
      </a>
    </div>
  </footer>
  <dialog id="search-dialog" class="modal" aria-labelledby="search-title"><div class="modal-heading"><h2 id="search-title">어떤 테스트를 찾으세요?</h2><button class="icon-button" type="button" data-close aria-label="검색 닫기"><svg class="icon"><use href="#icon-close"/></svg></button></div><label class="search-field"><svg class="icon"><use href="#icon-search"/></svg><input id="search-input" type="search" placeholder="친구, 인간관계, 눈치…" aria-label="테스트 검색어" autocomplete="off"></label><p id="search-count" class="search-count" aria-live="polite"></p><div id="search-results" class="search-results"></div></dialog>
</body>
</html>
```

## social-mask-data.js

```javascript
"use strict";

const testData = {
  id: 17,
  url: "social-mask-test.html",
  title: "내 사회생활 가면은 얼마나 두꺼울까?",
  description: "밖에서의 나와 혼자 있을 때의 나는 얼마나 다를까?",
  category: "성격",
  shareDescription: "내 사회생활 가면 테스트 결과를 확인해보세요.",
  questions: [
    {
      question: "별로 안 웃긴데 주변 사람들이 다 웃고 있다면?",
      answers: ["굳이 안 웃는다", "살짝 미소 정도는 짓는다", "분위기에 맞춰 웃는다", "누구보다 크게 웃어준다"],
    },
    {
      question: "기분이 안 좋은 날에도 회사나 학교에 가면?",
      answers: ["티가 나는 편이다", "평소보다 말수가 줄어든다", "웬만하면 평소처럼 행동한다", "오히려 더 밝게 행동한다"],
    },
    {
      question: "별로 안 친한 사람이 고민 상담을 하면?",
      answers: ["솔직히 부담스럽다", "들어주긴 한다", "꽤 진지하게 공감해준다", "내가 더 신경 써서 챙겨준다"],
    },
    {
      question: "하기 싫은 부탁을 받았을 때?",
      answers: ["싫으면 바로 거절한다", "이유를 설명하고 거절한다", "일단 고민하는 척한다", "웬만하면 웃으면서 들어준다"],
    },
    {
      question: "모임에서 분위기가 어색해지면?",
      answers: ["그냥 가만히 있는다", "누가 풀어주길 기다린다", "내가 먼저 말을 꺼낸다", "어떻게든 분위기를 살리려고 한다"],
    },
    {
      question: "속으로 별로 안 좋아하는 사람을 만나면?",
      answers: ["티가 조금 나는 편이다", "필요한 말만 한다", "평소처럼 예의 있게 대한다", "오히려 더 친절하게 대한다"],
    },
    {
      question: "누군가 내 취향을 별로라고 말하면?",
      answers: ["내 취향인데 뭐 어때 싶다", "조금 기분 나쁘다", "웃고 넘긴다", "맞장구치면서 분위기를 맞춘다"],
    },
    {
      question: "처음 보는 사람들과 있는 자리에서는?",
      answers: ["원래 성격 그대로 행동한다", "조금 조심하는 편이다", "상대에 맞춰 캐릭터를 바꾼다", "분위기 좋은 사람처럼 보이려고 노력한다"],
    },
    {
      question: "하루 종일 사람들을 만나고 집에 돌아오면?",
      answers: ["별로 안 피곤하다", "조금 지친다", "아무 말도 하기 싫을 정도로 피곤하다", "밖에서 쓴 에너지를 집에서 완전히 방전한다"],
    },
    {
      question: "주변 사람들이 보는 나와 실제 나는?",
      answers: ["거의 비슷하다", "약간 다르다", "꽤 다른 편이다", "완전 다른 사람 수준이다"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({ text, score: index + 1 })),
  })),
  results: [
    {
      min: 10, max: 16,
      title: "본캐형",
      description: "밖에서도 비교적 본래 모습 그대로 지내는 편이야. 싫은 건 싫다고 하고, 기분도 어느 정도 드러내는 타입. 사람 때문에 에너지를 과하게 쓰는 편은 아님.",
    },
    {
      min: 17, max: 24,
      title: "반반형",
      description: "상황에 맞게 조절은 하지만 본래 모습까지 숨기지는 않는 편. 예의와 솔직함 사이에서 적당히 균형을 맞추는 타입이야.",
    },
    {
      min: 25, max: 32,
      title: "사회생활 모드형",
      description: "분위기, 상대, 상황에 맞춰 내 모습을 많이 조절하는 편이야. 사회생활은 잘하지만, 집에 오면 유독 지치는 이유가 있을 수 있음.",
    },
    {
      min: 33, max: 40,
      title: "풀가면 장착형",
      description: "밖에서는 거의 별도의 사회생활용 캐릭터를 쓰는 타입. 싫어도 웃고, 피곤해도 밝게 행동하고, 분위기까지 챙기는 편이야. 사람들에게는 편한 사람이지만 정작 본인은 에너지 소모가 큰 편일 수 있음.",
    },
  ],
};
```

## social-mask-test.html

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
  <meta name="description" content="밖에서의 나와 혼자 있을 때의 나는 얼마나 다를까?">
  <title>내 사회생활 가면은 얼마나 두꺼울까? | Today's Choice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="test.css">
  <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.2/kakao.min.js" integrity="sha384-zt/G7/KfaRQ9dT/QIkS0ujMtzouJqzuSJcXVQu50x0rl/+mD1dc70AeOejVbMD9E" crossorigin="anonymous" defer></script>
  <script src="social-mask-data.js" defer></script>
  <script src="script.js" defer></script>
  <script src="test-runner.js" defer></script>
</head>
<body class="test-page">
  <svg class="svg-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>
    <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="7.3"/><path d="m16 16 5 5"/></symbol>
    <symbol id="icon-heart" viewBox="0 0 24 24"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/></symbol>
    <symbol id="icon-chat" viewBox="0 0 24 24"><path d="M21 11.5a9 9 0 0 1-9 8.5 10 10 0 0 1-4-.8L3 21l1.7-4.7A8 8 0 0 1 3 11.5a9 9 0 0 1 18 0Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></symbol>
    <symbol id="icon-ring" viewBox="0 0 24 24"><circle cx="12" cy="14" r="7.5"/><path d="m9 3 3 3 3-3-1-2h-4l-1 2Z"/></symbol>
    <symbol id="icon-people" viewBox="0 0 24 24"><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3"/></symbol>
    <symbol id="icon-flame" viewBox="0 0 24 24"><path d="M12 3c0 4-5 6-5 11a5 5 0 0 0 10 0c0-3-2-5-3-7 0 3-1 4-2 5 0-4 2-6 0-9Z"/></symbol>
    <symbol id="icon-moon" viewBox="0 0 24 24"><path d="M21 14A9.5 9.5 0 0 1 10 3a9.5 9.5 0 1 0 11 11Z"/></symbol>
    <symbol id="icon-leaf" viewBox="0 0 24 24"><path d="M12 22V11M12 15C5 16 2 11 3 7c6-1 9 3 9 8Zm0-5c0-6 4-9 9-8 1 6-3 10-9 8Z"/></symbol>
    <symbol id="icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></symbol>
  </svg>
  <a class="skip-link" href="#main">본문 바로가기</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="index.html#home" aria-label="오늘의 초이스 홈">Today's choice</a>
      <nav class="main-nav" aria-label="주 메뉴">
        <a class="nav-link" href="index.html#home">홈</a>
        <a class="nav-link" href="index.html#new-tests">오늘의 테스트</a>
        <a class="nav-link" href="index.html#popular">전체 테스트</a>
        <a class="nav-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
      <button class="icon-button search-toggle" type="button" aria-label="테스트 검색" aria-haspopup="dialog"><svg class="icon"><use href="#icon-search"/></svg></button>
    </div>
  </header>
  <main id="main" data-test-runner>
    <section class="test-panel" data-screen="start" aria-labelledby="test-title">
      <p class="test-category" data-role="category"></p>
      <h1 id="test-title" data-role="title" data-focus tabindex="-1"></h1>
      <p class="test-description" data-role="description"></p>
      <p class="test-count" data-role="count"></p>
      <button class="primary-button" type="button" data-role="start">테스트 시작하기</button>
    </section>
    <section class="test-panel" data-screen="question" aria-labelledby="question-title" hidden>
      <div class="question-top">
        <button class="test-back" type="button" data-role="back">← 뒤로가기</button>
        <span class="test-position" data-role="position"></span>
      </div>
      <progress class="test-progress" data-role="progress" value="0" max="10" aria-label="테스트 진행률"></progress>
      <h2 class="question-title" id="question-title" data-role="question" data-focus tabindex="-1"></h2>
      <div class="answer-list" data-role="answers" role="group" aria-labelledby="question-title"></div>
    </section>
    <section class="test-panel test-result" data-screen="result" aria-labelledby="result-title" hidden>
      <p class="result-label">당신의 사회생활 가면 지수는</p>
      <p class="result-score"><span data-role="score"></span><small> / <span data-role="max-score"></span>점</small></p>
      <h2 class="result-title" id="result-title" data-role="result-title" data-focus tabindex="-1"></h2>
      <p class="result-description" data-role="result-description"></p>
      <div class="result-actions">
        <button class="secondary-button" type="button" data-role="restart">다시하기</button>
        <a class="secondary-button" href="index.html#category-tests">다른 테스트 보기</a>
      </div>
      <button class="primary-button kakao-share-button" id="kakao-share-button" type="button">카카오톡으로 공유하기</button>
      <p class="kakao-share-status" id="kakao-share-status" role="status" hidden></p>
      <p class="test-disclaimer">본 테스트는 재미를 위한 콘텐츠이며 전문적인 심리 진단이 아닙니다.</p>
    </section>
    <noscript><p>테스트를 진행하려면 브라우저에서 JavaScript를 활성화해 주세요.</p></noscript>
  </main>
  <footer class="site-footer" id="about">
    <div class="container footer-inner">
      <a class="instagram-link" href="https://www.instagram.com/choice_zip_/" target="_blank" rel="noopener noreferrer">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        <span>@choice_zip_</span>
      </a>
    </div>
  </footer>
  <dialog id="search-dialog" class="modal" aria-labelledby="search-title"><div class="modal-heading"><h2 id="search-title">어떤 테스트를 찾으세요?</h2><button class="icon-button" type="button" data-close aria-label="검색 닫기"><svg class="icon"><use href="#icon-close"/></svg></button></div><label class="search-field"><svg class="icon"><use href="#icon-search"/></svg><input id="search-input" type="search" placeholder="성격, 사회생활, 가면…" aria-label="테스트 검색어" autocomplete="off"></label><p id="search-count" class="search-count" aria-live="polite"></p><div id="search-results" class="search-results"></div></dialog>
</body>
</html>
```

## test-runner.js

```javascript
"use strict";

// A different test can reuse this controller by supplying the same data shape.
function createTestRunner(root, data) {
  const screens = Array.from(root.querySelectorAll("[data-screen]"));
  const find = (name) => root.querySelector(`[data-role="${name}"]`);
  let questionIndex = 0;
  let answers = Array(data.questions.length).fill(null);
  let screen = "start";
  const maxScore = data.questions.reduce((sum, question) =>
    sum + Math.max(...question.answers.map((answer) => answer.score)), 0);

  find("category").textContent = data.category;
  find("title").textContent = data.title;
  find("description").textContent = data.description;
  find("count").textContent = `총 ${data.questions.length}문항${data.answerGuide ? ` (${data.answerGuide})` : ""}`;
  find("progress").max = data.questions.length;
  if (!data.stats) {
    find("max-score").textContent = maxScore;
  }

  function showScreen(name, focus = true) {
    screen = name;
    screens.forEach((section) => { section.hidden = section.dataset.screen !== name; });
    if (focus) root.querySelector(`[data-screen="${name}"] [data-focus]`).focus({ preventScroll: true });
  }

  function showQuestion() {
    const question = data.questions[questionIndex];
    find("position").textContent = `${questionIndex + 1} / ${data.questions.length}`;
    find("progress").value = questionIndex + 1;
    find("progress").setAttribute("aria-valuetext", `${data.questions.length}문항 중 ${questionIndex + 1}번째 질문`);
    find("question").textContent = question.question;
    find("answers").replaceChildren();
    question.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer-button";
      button.textContent = answer.text;
      button.setAttribute("aria-pressed", String(answers[questionIndex] === index));
      // Detached buttons cannot advance a newer question on a repeated activation.
      const renderedIndex = questionIndex;
      button.addEventListener("click", () => {
        if (screen !== "question" || questionIndex !== renderedIndex) return;
        answers[questionIndex] = index;
        if (questionIndex < data.questions.length - 1) {
          questionIndex += 1;
          showQuestion();
        } else {
          showResult();
        }
      });
      find("answers").append(button);
    });
    showScreen("question");
  }

  function showResult() {
    if (answers.some((answer) => answer === null)) return;
    let result;
    if (data.stats) {
      const counts = Object.fromEntries(data.stats.map((stat) => [stat.id, 0]));
      const selectedStats = answers.map((answer, index) => data.questions[index].answers[answer].stat);
      selectedStats.forEach((stat) => { counts[stat] += 1; });
      const highest = Math.max(...Object.values(counts));
      // Resolve ties using the most recent answer among the highest stats.
      const winner = [...selectedStats].reverse().find((stat) => counts[stat] === highest);
      result = data.results.find((item) => item.stat === winner);
      find("stats").replaceChildren();
      data.stats.forEach((stat) => {
        const row = document.createElement("div");
        row.className = "stat-row";
        const label = document.createElement("dt");
        label.textContent = stat.title;
        const value = document.createElement("dd");
        value.textContent = `${counts[stat.id]} / ${data.questions.length}`;
        row.append(label, value);
        find("stats").append(row);
      });
    } else {
      const total = answers.reduce((sum, answer, index) => sum + data.questions[index].answers[answer].score, 0);
      result = data.results.find((item) => total >= item.min && total <= item.max);
      find("score").textContent = total;
      if (data.resultMetric) {
        find("result-metric").textContent = `${data.resultMetric.label} ${Math.round(total / maxScore * 100)}%`;
      }
    }
    find("result-title").textContent = result.title;
    find("result-description").textContent = result.description;
    showScreen("result");
  }

  find("start").addEventListener("click", showQuestion);
  find("back").addEventListener("click", () => {
    if (questionIndex === 0) showScreen("start");
    else {
      questionIndex -= 1;
      showQuestion();
    }
  });
  find("restart").addEventListener("click", () => {
    questionIndex = 0;
    answers = Array(data.questions.length).fill(null);
    if (!data.stats) find("score").textContent = "";
    find("result-title").textContent = "";
    find("result-description").textContent = "";
    if (data.stats) find("stats").replaceChildren();
    if (data.resultMetric) find("result-metric").textContent = "";
    showScreen("start");
  });
  showScreen("start", false);
}

createTestRunner(document.querySelector("[data-test-runner]"), testData);
```

## test.css

```css
.test-page{display:flex;flex-direction:column;min-height:100vh}
.test-page main{flex:1;width:calc(100% - 40px);max-width:700px;margin:56px auto 0}
.test-panel{padding:40px;border:1px solid var(--border);border-radius:18px;background:#fff}
.test-panel[hidden]{display:none}
.test-panel [data-focus]:focus{outline:none}
.test-category{display:inline-block;margin:0 0 24px;padding:8px 14px;border:1px solid #ffdce4;border-radius:999px;background:var(--pink-light);color:var(--pink);font-size:14px}
.test-panel h1{margin:0 0 20px;font-size:clamp(27px,4vw,36px);line-height:1.4;letter-spacing:-1px}
.test-description,.result-description{margin:0;color:var(--muted);font-size:17px;line-height:1.85}
.test-count{margin:28px 0;color:var(--muted);font-size:14px}
.test-panel .primary-button{width:100%;min-height:58px;border-radius:16px;transition:none}
.test-panel .primary-button:hover{transform:none}
.question-top{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:18px}
.test-back{padding:8px 0;border:0;background:none;color:var(--muted);font-size:14px}
.test-back:hover{color:var(--pink)}
.test-position{font-size:14px;font-weight:600;font-variant-numeric:tabular-nums}
.test-progress{display:block;width:100%;height:6px;margin:0 0 36px;border:0;border-radius:999px;overflow:hidden;background:#f3f3f3;appearance:none}
.test-progress::-webkit-progress-bar{background:#f3f3f3;border-radius:999px}
.test-progress::-webkit-progress-value{background:var(--pink);border-radius:999px}
.test-progress::-moz-progress-bar{background:var(--pink);border-radius:999px}
.question-title{margin:0 0 28px;font-size:25px;line-height:1.55;letter-spacing:-.7px}
.answer-list{display:grid;gap:12px}
.answer-button{width:100%;min-height:64px;padding:18px 20px;border:1px solid var(--border);border-radius:16px;background:#fff;text-align:left;font-size:16px;line-height:1.65}
.answer-button:hover,.answer-button[aria-pressed="true"]{border-color:var(--pink);background:var(--pink-light)}
.test-result{text-align:center}
.result-label{margin:0;color:var(--muted);font-size:17px}
.result-metric{display:inline-block;margin:0 0 24px;padding:12px 18px;border:1px solid #ffdce4;border-radius:16px;background:var(--pink-light);color:var(--pink);font-size:18px;font-weight:650;line-height:1.5}
.result-stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:24px 0 28px;text-align:left}
.stat-row{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;padding:16px;border:1px solid var(--border);border-radius:16px;font-size:15px}
.stat-row dt{font-weight:600}
.stat-row dd{margin:0;color:var(--pink);font-weight:700;font-variant-numeric:tabular-nums}
.result-score{margin:14px 0 28px;color:var(--pink);font-size:72px;line-height:1.15;font-weight:800;letter-spacing:-2px}
.result-score small{margin-left:6px;font-size:20px;font-weight:500;letter-spacing:0}
.result-title{margin:0 0 20px;font-size:28px;line-height:1.4;letter-spacing:-.8px}
.result-actions{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:32px}
.secondary-button{display:flex;align-items:center;justify-content:center;min-height:58px;padding:16px;border:1px solid var(--border);border-radius:16px;background:#fff;font-size:16px;font-weight:600}
.secondary-button:hover{border-color:var(--pink);background:var(--pink-light)}
.test-disclaimer{margin:28px 0 0;color:var(--muted);font-size:12px;line-height:1.7}
.kakao-share-button{width:100%;margin-top:12px}
.kakao-share-status{margin:12px 0 0;color:var(--muted);font-size:14px;line-height:1.7}
@media(max-width:640px){.test-page main{margin-top:32px}.test-panel{padding:28px 22px}.test-category{margin-bottom:20px}.test-description,.result-description{font-size:16px}.question-title{font-size:22px}.test-progress{margin-bottom:28px}.answer-button{padding:16px;min-height:62px}.result-title{font-size:24px}.result-score{font-size:64px}.result-actions{grid-template-columns:1fr}}
```
