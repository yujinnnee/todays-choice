# Today's Choice 전체 코드

공통 test.html과 테스트 데이터, GA4, 카카오톡 공유 기능을 포함한 전체 코드입니다. 공유 이미지는 assets/share-cover-v3.png입니다. 구조 안내는 test-structure.md를 참고하세요.

## index.html

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <script src="test-catalog.js"></script>
  <script src="analytics.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
  <link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="ko_KR">
  <meta property="og:site_name" content="Today's Choice">
  <meta property="og:title" content="Today's choice | 오늘 당신의 초이스는?">
  <meta property="og:description" content="연애, 인간관계, 일상 속 고민까지. 오늘의 초이스에서 재미있는 심리테스트를 만나보세요.">
  <meta property="og:url" content="https://todayschoice.kr/">
  <meta property="og:image" content="https://todayschoice.kr/assets/share-cover-v3.png">
  <meta property="og:image:width" content="1731">
  <meta property="og:image:height" content="909">
  <meta property="og:image:alt" content="Today's choice">
  <meta property="og:image:type" content="image/png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Today's choice | 오늘 당신의 초이스는?">
  <meta name="twitter:description" content="연애, 인간관계, 일상 속 고민까지. 오늘의 초이스에서 재미있는 심리테스트를 만나보세요.">
  <meta name="twitter:image" content="https://todayschoice.kr/assets/share-cover-v3.png">
  <meta name="twitter:image:alt" content="Today's choice">
  <meta name="description" content="연애, 인간관계, 일상 속 고민까지. 오늘의 초이스에서 재미있는 심리테스트를 만나보세요.">
  <title>Today's choice | 오늘 당신의 초이스는?</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <script src="script.js" defer></script>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2401413706072374"
       crossorigin="anonymous"></script>
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
    <symbol id="icon-star" viewBox="0 0 24 24"><path d="m12 3 2.8 5.7 6.3.9-4.6 4.5 1.1 6.3-5.6-3-5.6 3 1.1-6.3-4.6-4.5 6.3-.9L12 3Z"/></symbol>
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
          <h1 id="hero-title">오늘 당신의 <span>초이스</span>는?</h1>
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
      <div class="card-grid" id="category-grid"></div>
      <p class="category-empty" id="category-empty" hidden>아직 이 카테고리에 등록된 테스트가 없어요.</p>
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

## test.html

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <script src="test-catalog.js"></script>
  <script src="analytics.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
  <link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="ko_KR">
  <meta property="og:site_name" content="Today's Choice">
  <meta property="og:title" content="Today's choice | 심리테스트">
  <meta property="og:description" content="오늘의 초이스에서 재미있는 심리테스트를 만나보세요.">
  <meta property="og:url" content="https://todayschoice.kr/test.html">
  <meta property="og:image" content="https://todayschoice.kr/assets/share-cover-v3.png">
  <meta property="og:image:width" content="1731">
  <meta property="og:image:height" content="909">
  <meta property="og:image:alt" content="Today's choice">
  <meta property="og:image:type" content="image/png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Today's choice | 심리테스트">
  <meta name="twitter:description" content="오늘의 초이스에서 재미있는 심리테스트를 만나보세요.">
  <meta name="twitter:image" content="https://todayschoice.kr/assets/share-cover-v3.png">
  <meta name="twitter:image:alt" content="Today's choice">
  <meta name="description" content="오늘의 초이스에서 재미있는 심리테스트를 만나보세요.">
  <title>Today's choice | 심리테스트</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="test.css">
  <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.2/kakao.min.js" integrity="sha384-zt/G7/KfaRQ9dT/QIkS0ujMtzouJqzuSJcXVQu50x0rl/+mD1dc70AeOejVbMD9E" crossorigin="anonymous" defer></script>
  <script src="script.js" defer></script>
  <script src="test-runner.js" defer></script>
  <script type="module" src="test-loader.js"></script>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2401413706072374"
       crossorigin="anonymous"></script>
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
    <symbol id="icon-star" viewBox="0 0 24 24"><path d="m12 3 2.8 5.7 6.3.9-4.6 4.5 1.1 6.3-5.6-3-5.6 3 1.1-6.3-4.6-4.5 6.3-.9L12 3Z"/></symbol>
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
    <section class="test-panel" data-role="loading" role="status"><p>테스트를 불러오는 중이에요.</p></section>
    <section class="test-panel" data-role="load-error" hidden><h1>테스트를 불러올 수 없어요</h1><p data-role="error-message"></p><a class="secondary-button" href="index.html#category-tests">전체 테스트 보기</a></section>
    <section class="test-panel" data-screen="start" hidden aria-labelledby="test-title">
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
      <div class="result-card" data-role="result-card">
        <p class="test-category" data-role="result-type" hidden></p>
        <p class="result-metric" data-role="result-metric" hidden></p>
        <h2 class="result-title" id="result-title" data-role="result-title" data-focus tabindex="-1"></h2>
        <div class="result-description" data-role="result-description"></div>
      </div>
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
  <dialog id="search-dialog" class="modal" aria-labelledby="search-title"><div class="modal-heading"><h2 id="search-title">어떤 테스트를 찾으세요?</h2><button class="icon-button" type="button" data-close aria-label="검색 닫기"><svg class="icon"><use href="#icon-close"/></svg></button></div><label class="search-field"><svg class="icon"><use href="#icon-search"/></svg><input id="search-input" type="search" placeholder="연애, 인간관계, 사회생활…" aria-label="테스트 검색어" autocomplete="off"></label><p id="search-count" class="search-count" aria-live="polite"></p><div id="search-results" class="search-results"></div></dialog>
</body>
</html>
```

## 404.html

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Today's choice</title>
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
  <meta property="og:title" content="Today's choice">
  <meta property="og:description" content="오늘의 초이스에서 재미있는 심리테스트를 만나보세요.">
  <meta property="og:image" content="https://todayschoice.kr/assets/share-cover-v3.png">
  <script src="/test-catalog.js"></script>
  <script src="/analytics.js"></script>
  <script src="/legacy-redirect.js" defer></script>
  <link rel="stylesheet" href="/style.css">
  <link rel="stylesheet" href="/test.css">
</head>
<body class="test-page">
  <main>
    <section class="test-panel">
      <h1>페이지를 찾을 수 없어요</h1>
      <p>전체 테스트에서 원하는 테스트를 선택해 주세요.</p>
      <a class="secondary-button" href="/index.html#category-tests">전체 테스트 보기</a>
    </section>
  </main>
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
.hero{background:#fff8fa;border-bottom:1px solid #ffe7ee}
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
@media(max-width:640px){.test-pagination{gap:3px;flex-wrap:nowrap}.page-button{min-width:28px;min-height:36px;padding:6px 5px;font-size:13px}}
.category-button{display:inline-flex;align-items:center;justify-content:center;text-align:center;padding:10px 20px;border:1px solid var(--border);border-radius:999px;background:#fff;color:var(--muted);font-size:15px;font-weight:500;line-height:1.4;white-space:nowrap;transition:background .18s,border-color .18s,color .18s}
.category-button:hover{border-color:#ddd;background:#fafafa}
.category-count{position:relative;top:-1px;font-size:.9em;font-weight:650;font-variant-numeric:tabular-nums}
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
.result-metric{display:inline-block;margin:0 0 24px;padding:12px 18px;border:1px solid #ffdce4;border-radius:16px;background:var(--pink-light);color:var(--pink);font-size:18px;font-weight:650;line-height:1.5}
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

.result-description{white-space:pre-line}
.result-metric[hidden],.test-category[hidden]{display:none}
.test-result[data-card="true"]{padding:40px;background:#fff;border-color:#e8e8ec}
.result-card[data-styled="true"]{padding:0;border:0;background:#fff;text-align:center}
.result-card[data-styled="true"]::before{content:"";display:block;width:32px;height:4px;margin:0 auto 28px;border-radius:999px;background:var(--pink)}
.result-card[data-styled="true"] .test-category{margin:0 0 18px;padding:7px 13px;background:var(--pink-light);border:0;font-size:13px;font-weight:600}
.result-card[data-styled="true"] .result-score{margin:0 0 20px;color:var(--text);font-size:56px;letter-spacing:-2px}
.result-card[data-styled="true"] .result-score small{color:var(--muted);font-size:17px}
.result-card[data-styled="true"] .result-metric{margin:0 0 20px;padding:8px 14px;border:0;font-size:15px}
.result-card[data-styled="true"] .result-title{max-width:520px;margin:0 auto 28px;font-size:30px;line-height:1.5;font-weight:750;word-break:keep-all;overflow-wrap:anywhere;text-wrap:balance;text-align:center}
.result-card[data-styled="true"] .result-description{padding:26px 28px;border:1px solid #f0f0f2;border-radius:16px;background:#fafafa;color:#59606b;text-align:left;white-space:normal;word-break:keep-all;overflow-wrap:anywhere;font-size:16px;line-height:1.9}
.result-card[data-styled="true"] .result-description p{margin:0 0 18px}
.result-card[data-styled="true"] .result-description p{white-space:pre-line}
.result-card[data-styled="true"] .result-description p:last-child{margin-bottom:0}
.test-result[data-card="true"] .result-actions{margin-top:24px}
.test-result[data-card="true"] .secondary-button,.test-result[data-card="true"] .kakao-share-button{min-height:54px;border-radius:14px}
.test-result[data-card="true"]>.test-disclaimer{margin-top:22px;color:#858992}
@media(max-width:640px){.test-result[data-card="true"]{padding:28px 20px}.result-card[data-styled="true"]::before{margin-bottom:22px}.result-card[data-styled="true"] .result-title{font-size:25px;margin-bottom:24px}.result-card[data-styled="true"] .result-score{font-size:48px}.result-card[data-styled="true"] .result-description{padding:20px 18px;font-size:15px;line-height:1.9}.test-result[data-card="true"] .result-actions{grid-template-columns:1fr 1fr;gap:10px}.test-result[data-card="true"] .secondary-button{padding:12px 8px;font-size:14px}}
```

## analytics.js

```javascript
"use strict";

// Replace this value with the measurement ID of your GA4 web data stream.
const GA4_MEASUREMENT_ID = "G-JGQJWYPHNL";

window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
window.gtag("js", new Date());

// Keep the placeholder inactive until a real measurement ID is supplied.
if (GA4_MEASUREMENT_ID !== "G-XXXXXXXXXX" && /^G-[A-Z0-9]+$/.test(GA4_MEASUREMENT_ID)) {
  const googleTag = document.createElement("script");
  googleTag.async = true;
  googleTag.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.append(googleTag);
  const selectedId = new URLSearchParams(location.search).get("id");
  const currentTest = typeof TEST_CATALOG !== "undefined" && /\/test\.html$/.test(location.pathname)
    ? TEST_CATALOG.find((test) => test.slug === selectedId || String(test.id) === selectedId)
    : null;
  window.gtag("config", GA4_MEASUREMENT_ID, currentTest
    ? { page_title: `${currentTest.title} | Today's Choice` }
    : {});
}

function trackTestEvent(eventName, data, extra = {}) {
  try {
    window.gtag("event", eventName, {
      test_id: String(data.id),
      test_title: data.title,
      test_category: data.category,
      ...extra,
    });
  } catch (error) {
    // Analytics must never interrupt the test or sharing controls.
  }
}
```

## test-catalog.js

```javascript
"use strict";

// Add metadata here and a matching <slug>-data.js module to register a test.
const TEST_CATALOG = [
  {
    "id": 50,
    "slug": "romance-priorities",
    "title": "내가 연애에서 절대 포기 못 하는 건?",
    "description": "좋아하는 마음만으로는 부족한, 내 연애의 가장 중요한 기준은 무엇일까?",
    "category": "연애·결혼",
    "url": "test.html?id=romance-priorities",
    "icon": "heart"
  },
  {
    "id": 49,
    "slug": "overseas-move",
    "title": "갑자기 해외 이민 기회가 생기면 나는?",
    "description": "익숙한 삶을 떠나 완전히 새로운 나라에서 살 기회가 생긴다면 나는 어떤 선택을 할까?",
    "category": "재미",
    "url": "test.html?id=overseas-move",
    "icon": "star"
  },
  {
    "id": 48,
    "slug": "friend-romance-distance",
    "title": "친구가 연애 때문에 잠수 타면 나는?",
    "description": "친구가 연애를 시작한 뒤 연락이 뜸해지면 나는 어떻게 반응할까?",
    "category": "친구·인간관계·사회생활",
    "url": "test.html?id=friend-romance-distance",
    "icon": "people"
  },
  {
    "id": 47,
    "slug": "long-term-love",
    "title": "나는 장기연애 체질일까?",
    "description": "설렘이 익숙함으로 바뀐 뒤에도 나는 관계를 오래 이어갈 수 있을까?",
    "category": "연애·결혼",
    "url": "test.html?id=long-term-love",
    "icon": "heart"
  },
  {
    "id": 46,
    "slug": "mood-swings",
    "title": "나는 감정 기복이 큰 사람일까?",
    "description": "내 기분은 얼마나 자주, 얼마나 크게 흔들리는 편일까?",
    "category": "성격",
    "url": "test.html?id=mood-swings",
    "icon": "leaf"
  },
  {
    "id": 45,
    "slug": "sociability",
    "title": "내 사회성은 사실 어느 정도일까?",
    "description": "낯선 사람, 모임, 대화 속에서 드러나는 내 진짜 사회성은 몇 %일까?",
    "category": "친구·인간관계·사회생활",
    "url": "test.html?id=sociability",
    "icon": "people"
  },
  {
    "id": 44,
    "slug": "year-off",
    "title": "갑자기 1년 휴가가 생기면 나는?",
    "description": "아무 의무 없이 1년이 주어진다면 나는 어떻게 살아갈까?",
    "category": "재미",
    "url": "test.html?id=year-off",
    "icon": "star"
  },
  {
    "id": 43,
    "slug": "romance-behavior",
    "title": "내가 연애하면 가장 많이 하는 행동은?",
    "description": "좋아하는 사람이 생기면 나는 어떤 행동을 가장 자주 하게 될까?",
    "category": "연애·결혼",
    "url": "test.html?id=romance-behavior",
    "icon": "heart"
  },
  {
    "id": 42,
    "slug": "mental-recovery",
    "title": "내 멘탈 회복 속도는 얼마나 빠를까?",
    "description": "힘든 일이 생긴 뒤 나는 얼마나 빨리 다시 원래의 나로 돌아올까?",
    "category": "성격",
    "url": "test.html?id=mental-recovery",
    "icon": "leaf"
  },
  {
    "id": 41,
    "slug": "variety-character",
    "title": "내 인생이 예능이라면 나는 어떤 캐릭터일까?",
    "description": "사람들 사이에서 나는 어떤 역할로 기억되는 사람일까?",
    "category": "재미",
    "url": "test.html?id=variety-character",
    "icon": "star"
  },
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
    "icon": "heart"
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
    "icon": "heart"
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
    "icon": "people"
  },
  {
    "id": 28,
    "slug": "million-followers",
    "title": "나는 하루아침에 100만 팔로워가 생기면 어떻게 변할까?",
    "description": "갑자기 모두가 나를 보기 시작한다면, 나는 어떤 사람이 될까?",
    "category": "재미",
    "url": "test.html?id=million-followers",
    "icon": "star"
  },
  {
    "id": 27,
    "slug": "affection",
    "title": "나는 인간관계에서 정이 많은 편일까?",
    "description": "한번 내 사람이 되면 얼마나 오래 챙기는 타입일까?",
    "category": "친구·인간관계·사회생활",
    "url": "test.html?id=affection",
    "icon": "people"
  },
  {
    "id": 26,
    "slug": "friend-dependence",
    "title": "나는 친구에게 얼마나 의존하는 편일까?",
    "description": "힘들 때도, 심심할 때도 나는 친구를 얼마나 찾는 편일까?",
    "category": "친구·인간관계·사회생활",
    "url": "test.html?id=friend-dependence",
    "icon": "people"
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
    "icon": "heart"
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
    "icon": "heart"
  },
  {
    "id": 21,
    "slug": "lying",
    "title": "나는 거짓말을 얼마나 잘하는 편일까?",
    "description": "거짓말을 하면 바로 티 나는 타입일까, 끝까지 자연스럽게 숨기는 타입일까?",
    "category": "성격",
    "url": "test.html?id=lying",
    "icon": "leaf"
  },
  {
    "id": 20,
    "slug": "secret",
    "title": "나는 비밀을 들으면 얼마나 오래 참을 수 있을까?",
    "description": "입이 무거운 편일까, 말하고 싶어서 근질근질한 편일까?",
    "category": "성격",
    "url": "test.html?id=secret",
    "icon": "leaf"
  },
  {
    "id": 19,
    "slug": "game-character",
    "title": "내가 게임 속 캐릭터라면 능력치는 어디에 몰려 있을까?",
    "description": "게임 캐릭터가 된다면 나는 어떤 스탯에 몰빵된 타입일까?",
    "category": "재미",
    "url": "test.html?id=game-character",
    "icon": "star"
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
    "icon": "people"
  },
  {
    "id": 16,
    "slug": "social-awareness",
    "title": "나는 인간관계에서 눈치를 얼마나 보는 편일까?",
    "description": "다른 사람의 말투, 표정, 분위기를 얼마나 신경 쓰는지 알아보세요.",
    "category": "친구·인간관계·사회생활",
    "url": "test.html?id=social-awareness",
    "icon": "people"
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
    "icon": "heart"
  }
];
```

## test-loader.js

```javascript
const root = document.querySelector("[data-test-runner]");
const selectedId = new URLSearchParams(location.search).get("id");
const selectedTest = TEST_CATALOG.find((test) => test.slug === selectedId || String(test.id) === selectedId);

async function loadTest() {
  try {
    if (!selectedTest) throw new Error("찾는 테스트가 없어요. 전체 테스트에서 다시 선택해 주세요.");
    // Only import paths from the registered catalog, never a user-supplied path.
    const { default: data } = await import(`./${selectedTest.slug}-data.js`);
    if (data.id !== selectedTest.id || !data.questions?.length || !data.results?.length) {
      throw new Error("테스트 정보를 확인할 수 없어요. 잠시 후 다시 시도해 주세요.");
    }
    window.testData = data;
    document.title = `${data.title} | Today's Choice`;
    createTestRunner(root, data);
    root.querySelector('[data-role="loading"]').hidden = true;
  } catch (error) {
    console.error("테스트 불러오기 실패", error);
    root.querySelector('[data-role="loading"]').hidden = true;
    root.querySelector('[data-role="error-message"]').textContent = selectedTest
      ? "테스트를 불러오지 못했어요. 인터넷 연결을 확인한 뒤 새로고침해 주세요."
      : "찾는 테스트가 없어요. 전체 테스트에서 다시 선택해 주세요.";
    root.querySelector('[data-role="load-error"]').hidden = false;
  }
}

loadTest();
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
  let started = false;
  let completed = false;
  const track = (eventName, extra) => {
    if (typeof trackTestEvent === "function") trackTestEvent(eventName, data, extra);
  };
  const maxScore = data.questions.reduce((sum, question) =>
    sum + Math.max(...question.answers.map((answer) => answer.score)), 0);
  const minScore = data.questions.reduce((sum, question) =>
    sum + Math.min(...question.answers.map((answer) => answer.score)), 0);

  find("category").textContent = data.category;
  find("title").textContent = data.title;
  find("description").textContent = data.description;
  find("count").textContent = `총 ${data.questions.length}문항`;
  find("progress").max = data.questions.length;
  const configure = (name, callback) => {
    const element = find(name);
    if (element) callback(element);
  };
  const resultScreen = root.querySelector('[data-screen="result"]');
  if (resultScreen) resultScreen.dataset.card = "true";
  configure("result-card", (element) => { element.dataset.styled = "true"; });
  configure("result-type", (element) => { element.hidden = !data.showResultType; });
  configure("result-metric", (element) => { element.hidden = !data.resultMetric; });

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
    let resultDetails;
    if (data.stats) {
      const counts = Object.fromEntries(data.stats.map((stat) => [stat.id, 0]));
      const selectedStats = answers.map((answer, index) => data.questions[index].answers[answer].stat);
      selectedStats.forEach((stat) => { counts[stat] += 1; });
      const highest = Math.max(...Object.values(counts));
      // Resolve ties using the most recent answer among the highest stats.
      const winner = [...selectedStats].reverse().find((stat) => counts[stat] === highest);
      result = data.results.find((item) => item.stat === winner);
      const resultType = find("result-type");
      if (resultType) resultType.textContent = data.stats.find((stat) => stat.id === winner).title;
      resultDetails = { result_stat: winner, result_score: highest, max_score: data.questions.length };
    } else {
      const total = answers.reduce((sum, answer, index) => sum + data.questions[index].answers[answer].score, 0);
      const percentage = data.resultMetric?.normalize
        ? Math.round((total - minScore) / (maxScore - minScore) * 100)
        : Math.round(total / maxScore * 100);
      const resultValue = data.resultMetric?.useForResult ? percentage : total;
      result = data.results.find((item) => resultValue >= item.min && resultValue <= item.max);
      resultDetails = { result_score: total, max_score: maxScore };
      if (data.resultMetric) {
        find("result-metric").textContent = `${data.resultMetric.label} ${percentage}%`;
        resultDetails.result_percentage = percentage;
      }
    }
    find("result-title").textContent = result.title;
    const description = find("result-description");
    description.replaceChildren();
    const paragraphs = /\n\s*\n/.test(result.description)
      ? result.description.split(/\n\s*\n/)
      : result.description.split(/(?<=[.!?])\s+/);
    paragraphs.forEach((text) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text.trim().replace(/\.\s*/g, ".\n").trimEnd();
      description.append(paragraph);
    });
    showScreen("result");
    if (!completed) {
      completed = true;
      track("test_complete", { result_title: result.title, question_count: data.questions.length, ...resultDetails });
    }
  }

  find("start").addEventListener("click", () => {
    if (!started) {
      started = true;
      track("test_start", { question_count: data.questions.length });
    }
    showQuestion();
  });
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
    started = false;
    completed = false;
    find("result-title").textContent = "";
    find("result-description").textContent = "";
    if (data.resultMetric) find("result-metric").textContent = "";
    showScreen("start");
  });
  showScreen("start", false);
  track("test_view");
}
```

## legacy-redirect.js

```javascript
"use strict";

// GitHub Pages serves 404.html for old individual test URLs.
const legacyMatch = location.pathname.match(/^\/([a-z0-9-]+)-test\.html$/);
const legacyTest = legacyMatch && TEST_CATALOG.find((test) => test.slug === legacyMatch[1]);
if (legacyTest) {
  const next = new URL(legacyTest.url, location.origin);
  const previousParams = new URLSearchParams(location.search);
  previousParams.delete("id");
  previousParams.forEach((value, key) => next.searchParams.append(key, value));
  next.hash = location.hash;
  location.replace(next.href);
}
```

## script.js

```javascript
"use strict";

const KAKAO_JAVASCRIPT_KEY = '7a0729ebdecc02b3f4ce5e892c53248a';
const SHARE_SITE_URL = "https://todayschoice.kr/";
const SHARE_IMAGE_URL = new URL("assets/share-cover-v3.png", SHARE_SITE_URL).href;

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
    if (typeof trackTestEvent === "function") {
      trackTestEvent("test_share", testData, { method: "kakao" });
    }
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
      const testUrl = new URL(testData.url, SHARE_SITE_URL).href;
      const testLink = { mobileWebUrl: testUrl, webUrl: testUrl };
      const request = Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: testData.title,
          description: testData.description,
          imageUrl: SHARE_IMAGE_URL,
          imageWidth: 1731,
          imageHeight: 909,
          link: testLink,
        },
        buttons: [{ title: "테스트 하러 가기", link: testLink }],
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
const catalogGrid = document.querySelector("#category-grid");
if (catalogGrid && typeof TEST_CATALOG !== "undefined") {
  const categories = { "연애/결혼": "love", "연애·결혼": "love", "재미": "fun", "성격": "personality" };
  const categoryIcons = { love: "heart", relationship: "people", personality: "leaf", fun: "star" };
  const makeIcon = (name) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "icon");
    svg.setAttribute("aria-hidden", "true");
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", `#icon-${name}`);
    svg.append(use);
    return svg;
  };
  catalogGrid.replaceChildren();
  TEST_CATALOG.forEach((test) => {
    const card = document.createElement("a");
    card.className = "test-card";
    card.href = test.url;
    card.dataset.test = test.id;
    card.dataset.category = categories[test.category] || "relationship";
    const tile = document.createElement("span");
    tile.className = "icon-tile";
    tile.append(makeIcon(categoryIcons[card.dataset.category]));
    const title = document.createElement("h3");
    title.textContent = test.title;
    const description = document.createElement("p");
    description.textContent = test.description;
    const bottom = document.createElement("div");
    bottom.className = "card-bottom";
    const arrow = document.createElement("span");
    arrow.className = "circle-arrow";
    arrow.append(makeIcon("arrow"));
    bottom.append(arrow);
    card.append(tile, title, description, bottom);
    catalogGrid.append(card);
  });
}
const cards = Array.from(document.querySelectorAll("#category-grid .test-card"));
const tests = typeof TEST_CATALOG !== "undefined" ? TEST_CATALOG : Array.from(new Map(cards.map((card) => [Number(card.dataset.test), {
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
categoryButtons.forEach((button) => {
  button.dataset.label = button.textContent.trim();
  const count = categoryCards.filter(card => button.dataset.filter === "all" || card.dataset.category === button.dataset.filter).length;
  const countLabel = document.createElement("span");
  countLabel.className = "category-count";
  countLabel.textContent = `(${count})`;
  button.append(countLabel);
  button.setAttribute("aria-label", `${button.dataset.label} 테스트 ${count}개`);
});
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
  const categoryLabel = categoryButtons.find((button) => button.dataset.filter === selectedCategory).dataset.label;
  document.querySelector("#filter-status").textContent = filteredCards.length
    ? `${categoryLabel} 테스트 ${filteredCards.length}개 중 ${offset + 1}~${offset + pageCards.size}개를 표시하고 있어요. ${currentTestPage}페이지.`
    : `${categoryLabel} 카테고리에 등록된 테스트가 없어요.`;

  testPagination.replaceChildren();
  testPagination.hidden = pageCount <= 1;
  if (pageCount <= 1) return;
  function addPageButton(label, page, disabled = false, active = false, symbol = "") {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "page-button";
    button.textContent = symbol || label;
    button.disabled = disabled;
    if (symbol) {
      button.setAttribute("aria-label", label);
      button.title = label;
    }
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
  const visiblePageCount = Math.min(5, pageCount);
  const firstPage = Math.max(1, Math.min(currentTestPage - Math.floor(visiblePageCount / 2), pageCount - visiblePageCount + 1));
  const lastPage = firstPage + visiblePageCount - 1;
  addPageButton("처음", 1, currentTestPage === 1, false, "<<");
  addPageButton("이전", currentTestPage - 1, currentTestPage === 1, false, "<");
  for (let page = firstPage; page <= lastPage; page += 1) {
    addPageButton(String(page), page, false, page === currentTestPage);
  }
  addPageButton("다음", currentTestPage + 1, currentTestPage === pageCount, false, ">");
  addPageButton("맨끝", pageCount, currentTestPage === pageCount, false, ">>");
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
  url: "test.html?id=affection",
  title: "나는 인간관계에서 정이 많은 편일까?",
  description: "한번 내 사람이 되면 얼마나 오래 챙기는 타입일까?",
  category: "친구·인간관계·사회생활",
  resultLabel: "당신의 정 지수는",
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
      description: "사람에게 정이 없기보다는 관계의 변화도 자연스럽게 받아들이는 타입이에요. 안 맞거나 멀어진 관계를 억지로 붙잡지는 않는 편이에요.\n\n함께한 시간이 소중해도 지금의 관계가 편하지 않다면 변화를 받아들이는 편이에요. 예전의 친밀함만으로 연락을 이어가야 한다는 부담이 크지 않아 내 생활을 지킬 수 있어요.\n\n다만 한 번의 어색함 때문에 서로의 마음을 너무 빨리 정리하지는 않는지 돌아보세요. 여전히 아끼는 사람이라면 가벼운 안부나 짧은 대화로 관계를 다시 확인해봐도 좋아요.",
    },
    {
      min: 17, max: 24,
      title: "적당히 정 많은 편",
      description: "소중한 사람은 챙기지만 관계 때문에 무조건 참고 희생하지는 않는 타입이에요. 정과 현실 사이에서 비교적 균형을 잘 잡는 편이에요.\n\n오래된 인연을 소중하게 여기면서도 내가 감당할 수 있는 범위를 생각하는 편이에요. 도와주고 싶은 마음과 내 상황을 함께 고려해 관계를 오래 유지하는 데 강점이 있어요.\n\n친구를 챙기는 방식이 꼭 큰 희생일 필요는 없어요. 작은 안부나 솔직한 대화도 충분히 마음을 전할 수 있으니, 무리하지 않는 선에서 꾸준히 표현해보세요.",
    },
    {
      min: 25, max: 32,
      title: "정이 꽤 많은 타입",
      description: "한번 친해진 사람을 쉽게 놓지 못하는 편이에요. 오래된 인연을 중요하게 생각하고, 친구가 힘들면 내 일처럼 신경 쓰는 경우가 많아요.\n\n예전에 함께한 기억이 지금의 관계에도 큰 의미를 주는 편이에요. 연락이 뜸해져도 상대가 필요로 하면 다시 손을 내밀고, 작은 변화에도 마음을 쓰기 쉬워요.\n\n챙기고 싶은 마음이 큰 만큼 내가 서운한 부분도 함께 살펴주세요. 오래된 관계라도 늘 나만 애써야 하는 것은 아니니, 원하는 배려를 솔직하게 말해봐도 괜찮아요.",
    },
    {
      min: 33, max: 40,
      title: "한번 내 사람은 끝까지 챙기는 타입",
      description: "사람에게 정을 많이 주고 한번 맺은 관계를 오래 가져가는 편이에요. 서운하거나 실망해도 그동안 쌓인 정 때문에 쉽게 돌아서지 못하는 타입이에요. 그만큼 따뜻하지만 관계에서 내가 너무 많이 참고 있지는 않은지도 볼 필요가 있어요.\n\n친구가 어려운 일을 겪으면 어떻게 도울 수 있을지 오래 생각하는 편이에요. 관계가 예전 같지 않아도 마음속에는 그 사람의 자리가 남아 쉽게 무심해지지 않을 수 있어요.\n\n따뜻함을 오래 유지하려면 내 에너지도 보호해야 해요. 도움을 줄 수 있는 범위를 정하고 반복해서 상처받는 상황에는 거리를 두세요. 정이 많아도 내 마음을 먼저 챙길 수 있어요.",
    },
  ],
};

export default testData;
```

## animal-personality-data.js

```javascript
"use strict";

const testData = {
  id: 37,
  url: "test.html?id=animal-personality",
  title: "내 성격을 동물로 표현하면?",
  description: "내 성격과 가장 닮은 동물은 무엇일까?",
  category: "성격",
  showResultType: true,
  stats: [
    { id: "cat", title: "고양이" },
    { id: "dog", title: "강아지" },
    { id: "fox", title: "여우" },
    { id: "wolf", title: "늑대" },
    { id: "otter", title: "수달" },
  ],
  questions: [
    {
      question: "새로운 사람들 사이에 들어가면 나는?",
      answers: ["먼저 분위기를 파악하는 편이다", "금방 말을 걸고 친해지는 편이다", "조용히 있다가 필요한 순간에만 나선다", "내가 편한 사람 한두 명과 깊게 지내는 편이다", "분위기를 띄우거나 웃음을 만드는 편이다"],
    },
    {
      question: "갑자기 문제가 생기면?",
      answers: ["일단 차분하게 상황부터 본다", "주변 사람들과 같이 해결하려 한다", "가장 효율적인 방법부터 찾는다", "혼자서라도 끝까지 버텨보는 편이다", "너무 심각하게 생각하기보다 분위기를 바꿔본다"],
    },
    {
      question: "친구들이 나를 찾는 이유는?",
      answers: ["말하지 않아도 편하게 같이 있을 수 있어서", "이야기를 잘 들어주고 반응을 잘해줘서", "현실적인 조언을 잘해줘서", "중요한 순간에 믿고 의지할 수 있어서", "같이 있으면 재미있어서"],
    },
    {
      question: "혼자 보내는 시간이 생기면?",
      answers: ["오히려 편하고 좋다", "조금 지나면 누군가와 이야기하고 싶다", "하고 싶었던 일을 정리해서 한다", "혼자만의 시간을 꽤 잘 보내는 편이다", "혼자 있어도 이것저것 재미있는 걸 찾아 한다"],
    },
    {
      question: "누군가 나에게 무례하게 행동했다면?",
      answers: ["티는 안 내도 속으로 선을 긋는다", "왜 그러는지 먼저 이야기해본다", "상황을 보고 가장 손해 없는 방식으로 대응한다", "한번 선을 넘었다고 느끼면 오래 기억한다", "웬만하면 웃어넘기고 분위기를 바꾼다"],
    },
    {
      question: "중요한 결정을 할 때 나는?",
      answers: ["내 마음이 편한 쪽을 고른다", "주변 사람들의 의견도 많이 듣는다", "장단점을 따져보고 결정한다", "내가 세운 기준대로 밀고 가는 편이다", "너무 오래 고민하기보다 일단 선택해본다"],
    },
    {
      question: "모임에서 내 모습과 가장 가까운 건?",
      answers: ["조용히 있다가 친한 사람과만 많이 말한다", "여기저기 대화하며 사람들과 잘 섞인다", "전체 분위기를 보면서 적당히 맞춘다", "많은 사람보다 몇 명과 진하게 이야기한다", "장난이나 이야기로 분위기를 띄운다"],
    },
    {
      question: "힘든 일이 생겼을 때 나는?",
      answers: ["혼자 조용히 정리할 시간이 필요하다", "가까운 사람에게 바로 털어놓는다", "감정보다 해결 방법을 먼저 생각한다", "웬만하면 혼자 버티다가 정말 힘들 때 말한다", "다른 일을 하면서 기분을 전환하려 한다"],
    },
    {
      question: "누군가 나를 칭찬하면?",
      answers: ["쑥스럽지만 속으로는 꽤 좋아한다", "바로 기분 좋아지고 표현도 잘한다", "어떤 부분을 좋게 봤는지 궁금하다", "크게 티 내지는 않지만 오래 기억한다", "장난스럽게 받아치면서 즐긴다"],
    },
    {
      question: "계획이 갑자기 바뀌면?",
      answers: ["내 페이스가 깨져 조금 불편하다", "같이 있는 사람들이 괜찮으면 상관없다", "새 상황에 맞게 바로 계획을 수정한다", "이유가 납득되면 받아들이는 편이다", "오히려 즉흥적인 상황이 재미있다"],
    },
    {
      question: "인간관계에서 가장 중요한 것은?",
      answers: ["서로의 영역을 존중하는 것", "자주 표현하고 정을 나누는 것", "서로에게 도움이 되고 잘 통하는 것", "믿음과 의리를 지키는 것", "같이 있을 때 즐거운 것"],
    },
    {
      question: "경쟁 상황이 생기면 나는?",
      answers: ["굳이 경쟁에 휘말리고 싶지 않다", "같이 잘되는 게 더 좋다", "이길 방법을 분석해본다", "시작했다면 쉽게 지고 싶지 않다", "승패보다 과정이 재미있으면 된다"],
    },
    {
      question: "처음 보는 사람이 나를 오해한다면?",
      answers: ["굳이 모든 오해를 풀 필요는 없다고 생각한다", "나를 제대로 알게 해주고 싶다", "필요하다면 설명하고 아니면 넘긴다", "가까운 사람만 나를 제대로 알면 된다고 생각한다", "시간이 지나면 알아서 알게 될 거라 생각한다"],
    },
    {
      question: "내 성격에서 가장 강한 부분은?",
      answers: ["독립심", "친화력", "눈치와 판단력", "책임감과 의리", "긍정적인 에너지"],
    },
    {
      question: "사람들이 나에게 자주 하는 말과 가장 가까운 건?",
      answers: ['"생각보다 자기 주관이 확실해."', '"사람들이랑 진짜 잘 지낸다."', '"은근히 사람이나 상황을 잘 본다."', '"한번 믿으면 진짜 오래 간다."', '"너랑 있으면 안 심심해."'],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({
      text,
      stat: ["cat", "dog", "fox", "wolf", "otter"][index],
      score: 1,
    })),
  })),
  results: [
    {
      stat: "cat",
      title: "혼자서도 잘 지내는 고양이형",
      description: "당신은 사람을 싫어하기보다 나만의 시간과 공간을 중요하게 생각하는 편이에요. 누구에게나 쉽게 마음을 열기보다는 편하다고 느껴지는 사람에게 천천히 가까워지는 타입이에요.\n\n겉으로는 무심하거나 차분해 보여도 좋아하는 사람에게는 은근히 정이 많고 애정도 깊은 편이에요. 다만 지나친 간섭이나 내 영역을 침범하는 관계에서는 금방 피로를 느낄 수 있어요.\n\n내 감정과 취향이 비교적 분명해서 다른 사람에게 휩쓸리지 않는 것이 큰 장점이에요. 혼자 있는 편안함과 좋은 사람들과 함께하는 즐거움을 적당히 나눌 때 가장 나다운 모습을 유지할 수 있어요.",
    },
    {
      stat: "dog",
      title: "사람과 함께할수록 행복한 강아지형",
      description: "당신은 사람들과 감정을 나누고 가까워지는 데 비교적 거리낌이 없는 편이에요. 좋아하는 사람에게 관심을 표현하고, 상대의 반응에서도 큰 즐거움을 느끼는 타입이에요.\n\n친구나 연인에게 먼저 다가가는 것도 잘하고 주변 분위기를 따뜻하게 만드는 힘이 있어요. 그래서 함께 있을 때 편하고 친근한 사람이라는 인상을 주기 쉬운 편이에요.\n\n다만 가까운 사람의 반응이 평소와 다르면 생각보다 쉽게 서운함을 느낄 수도 있어요. 다른 사람에게 주는 관심만큼 내 감정과 컨디션도 함께 챙기면 더 편안하게 관계를 이어갈 수 있어요.",
    },
    {
      stat: "fox",
      title: "상황을 빠르게 읽는 여우형",
      description: "당신은 감정만 앞세우기보다 주변 상황과 사람의 반응을 빠르게 파악하는 편이에요. 어떤 상황에서 어떻게 행동해야 할지 자연스럽게 판단하고 적응하는 능력이 좋은 타입이에요.\n\n사람들과 잘 지내면서도 무조건 상대에게 맞추지는 않고 내게 필요한 거리도 적당히 유지해요. 문제가 생겼을 때도 감정적으로 반응하기보다 가장 현실적인 방법을 찾으려는 편이에요.\n\n겉으로는 여유로워 보여도 머릿속에서는 여러 상황을 동시에 생각하고 있을 수 있어요. 모든 일을 계산하려 하기보다 가끔은 내 감정이 원하는 방향을 따라가보는 것도 좋아요.",
    },
    {
      stat: "wolf",
      title: "쉽게 마음 주지 않지만 깊게 가는 늑대형",
      description: "당신은 많은 사람과 넓게 어울리기보다 믿을 수 있는 사람과 깊은 관계를 만드는 편이에요. 한번 내 사람이라고 생각하면 쉽게 돌아서지 않고 오래 챙기는 타입이에요.\n\n겉으로는 독립적이고 단단해 보여도 가까운 관계에서는 책임감과 정이 상당히 큰 편이에요. 특히 신뢰와 의리를 중요하게 생각해서 한번 믿음이 깨지면 다시 마음을 열기 어려울 수도 있어요.\n\n사람을 쉽게 믿지 않는 만큼 한번 맺은 관계의 깊이는 큰 편이에요. 혼자 버티는 데 익숙하더라도 힘들 때는 믿는 사람에게 조금 기대도 괜찮아요.",
    },
    {
      stat: "otter",
      title: "어디서든 재미를 찾는 수달형",
      description: "당신은 사람들과 함께 있을 때 자연스럽게 분위기를 부드럽게 만드는 편이에요. 장난이나 대화를 좋아하고 예상하지 못한 상황에서도 재미있는 부분을 잘 찾아내는 타입이에요.\n\n새로운 사람이나 환경에도 비교적 빠르게 적응하고 무거운 분위기를 오래 끌고 가지 않는 편이에요. 주변에서는 같이 있으면 편하고 기분이 좋아지는 사람으로 느낄 가능성이 커요.\n\n다만 힘든 상황에서도 웃어넘기다 보면 내 속마음을 제대로 표현하지 못할 때가 있을 수 있어요. 즐거운 모습뿐 아니라 힘들 때의 감정도 편하게 보여줄 수 있는 관계를 만들어두면 좋아요.",
    },
  ],
};

export default testData;
```

## breakup-data.js

```javascript
"use strict";

const testData = {
  id: 32,
  url: "test.html?id=breakup",
  title: "나는 이별 후 어떤 타입일까?",
  description: "관계가 끝난 뒤 나는 어떻게 마음을 정리하는 사람일까?",
  category: "연애/결혼",
  showResultType: true,
  stats: [
    { id: "closure", title: "정리형" },
    { id: "attachment", title: "미련형" },
    { id: "transition", title: "전환형" },
    { id: "reflection", title: "복기형" },
  ],
  questions: [
    {
      question: "헤어진 직후 가장 먼저 드는 생각은?",
      answers: ["일단 혼자 정리할 시간이 필요하다", "다시 연락하고 싶은 마음이 든다", "친구를 만나거나 다른 일로 바쁘게 지내고 싶다", "왜 이렇게 됐는지 계속 생각하게 된다"],
    },
    {
      question: "전 애인의 SNS는?",
      answers: ["굳이 찾아보지 않는다", "가끔씩 들어가 본다", "아예 차단하거나 안 보이게 한다", "게시물이나 팔로우 변화를 유심히 보게 된다"],
    },
    {
      question: "헤어진 뒤 친구들이 위로해준다면?",
      answers: ["고맙지만 혼자 있는 시간이 더 필요하다", "전 애인 이야기를 계속 하게 된다", "친구들과 놀면서 기분을 바꾸고 싶다", "내가 뭘 잘못했는지 의견을 묻는다"],
    },
    {
      question: "전 애인에게 연락이 오면?",
      answers: ["필요한 말만 하고 다시 거리를 둔다", "바로 마음이 흔들릴 것 같다", "이미 끝난 관계라 크게 의미 두지 않는다", "왜 연락했는지 의도를 계속 생각한다"],
    },
    {
      question: "둘이 자주 갔던 장소를 지나가게 된다면?",
      answers: ["추억은 추억이라고 생각한다", "괜히 마음이 먹먹해진다", "다른 기억으로 덮고 싶어진다", "그때 있었던 일들이 하나씩 떠오른다"],
    },
    {
      question: "헤어진 뒤 가장 힘든 건?",
      answers: ["혼자 감정을 정리해야 하는 시간", "그 사람을 더 이상 볼 수 없다는 사실", "익숙했던 일상이 사라진 것", "내가 놓친 신호들이 계속 떠오르는 것"],
    },
    {
      question: "주변에서 소개팅을 권한다면?",
      answers: ["아직 준비가 안 됐으면 안 한다", "전 애인과 비교할 것 같아 망설인다", "새로운 사람을 만나보는 것도 괜찮다고 생각한다", "다음에는 같은 실수를 하지 않을 수 있을지 먼저 생각한다"],
    },
    {
      question: "전 애인이 새 연애를 시작했다는 걸 알게 되면?",
      answers: ["씁쓸하지만 받아들인다", "생각보다 많이 흔들릴 것 같다", "이제 정말 끝났다고 느끼고 내 생활에 집중한다", "언제부터 마음이 떠났던 건지 자꾸 생각한다"],
    },
    {
      question: "헤어진 뒤 사진이나 선물은?",
      answers: ["마음이 정리되면 천천히 정리한다", "쉽게 버리지 못하고 계속 가지고 있는다", "바로 치우거나 안 보이는 곳에 넣는다", "하나씩 보면서 그때 상황을 떠올린다"],
    },
    {
      question: "이별의 이유가 명확하지 않다면?",
      answers: ["더 이상 답을 찾지 않으려고 한다", "다시 연락해서라도 이유를 듣고 싶다", "이유보다 빨리 일상으로 돌아가고 싶다", "납득될 때까지 계속 이유를 생각한다"],
    },
    {
      question: "이별 후 가장 많이 하는 행동은?",
      answers: ["혼자 생각을 정리하고 쉬는 편이다", "예전 대화나 사진을 다시 보는 편이다", "운동, 취미, 약속 등으로 일정을 채운다", "관계의 시작부터 끝까지 머릿속으로 다시 돌아본다"],
    },
    {
      question: "시간이 꽤 지난 뒤 전 애인이 생각난다면?",
      answers: ["좋은 추억 정도로 남길 수 있다", "다시 만날 가능성을 한 번쯤 상상한다", "지금 내 생활이 더 중요하다고 느낀다", "그 관계에서 내가 배운 점을 떠올린다"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({
      text,
      stat: ["closure", "attachment", "transition", "reflection"][index],
      score: 1,
    })),
  })),
  results: [
    {
      stat: "closure",
      title: "천천히 놓아주는 정리형",
      description: "이별 직후에는 충분히 힘들어하지만, 감정을 억지로 밀어내기보다 스스로 정리할 시간을 가지는 타입이에요. 끝난 관계에 매달리기보다는 시간이 지나면서 자연스럽게 받아들이는 편이에요.\n\n추억을 전부 지우려고 하기보다 좋았던 기억과 아쉬웠던 부분을 함께 남겨두는 경우가 많아요. 그래서 시간이 흐르면 감정이 비교적 차분하게 정리되는 편이에요.\n\n다만 혼자 해결하려는 성향이 강하면 힘든 감정까지 오래 품고 있을 수 있어요. 힘든 시기에는 가까운 사람에게 마음을 나누는 것도 도움이 될 수 있어요.",
    },
    {
      stat: "attachment",
      title: "마음이 쉽게 끝나지 않는 미련형",
      description: "관계가 끝났다는 사실을 머리로는 알아도 마음이 따라가는 데 시간이 필요한 타입이에요. 전 애인의 연락이나 SNS, 함께했던 추억에 비교적 쉽게 마음이 흔들리는 편이에요.\n\n좋았던 순간을 자주 떠올리고, 다시 만날 수 있는 가능성을 한 번쯤 생각하기도 해요. 그만큼 관계에 깊이 마음을 주고 쉽게 사람을 놓지 못하는 편이에요.\n\n하지만 지나간 관계를 계속 붙잡다 보면 지금의 일상까지 멈출 수 있어요. 다시 만날 가능성보다 지금 내가 잘 지내고 있는지를 먼저 챙겨보는 게 좋아요.",
    },
    {
      stat: "transition",
      title: "새로운 일상으로 빠르게 넘어가는 전환형",
      description: "이별 후 힘든 감정에 오래 머무르기보다 새로운 일상으로 시선을 돌리는 타입이에요. 운동, 취미, 친구 약속처럼 다른 활동을 하면서 마음을 회복하는 편이에요.\n\n전 애인의 흔적을 빠르게 정리하거나 새로운 사람을 만나는 것에도 비교적 거부감이 적을 수 있어요. 과거보다 지금 해야 할 일과 앞으로의 생활에 집중하는 힘이 있는 편이에요.\n\n다만 너무 빨리 다른 일로 감정을 덮으면 나중에 뒤늦게 마음이 올라올 수도 있어요. 괜찮은 척하기보다 가끔은 속상했던 감정도 충분히 느껴보는 게 좋아요.",
    },
    {
      stat: "reflection",
      title: "이유를 알아야 마음이 놓이는 복기형",
      description: "이별 후 감정보다 먼저 관계가 왜 끝났는지를 계속 생각하는 타입이에요. 상대의 말과 행동, 내가 했던 선택들을 하나씩 돌아보며 이유를 찾으려는 편이에요.\n\n덕분에 지난 관계에서 배울 점을 잘 찾아내고 같은 실수를 반복하지 않으려는 성향이 있어요. 다만 명확한 답이 없는 상황에서도 계속 이유를 찾으려 할 수 있어요.\n\n모든 이별에 완벽한 설명이 남는 것은 아니에요. 충분히 돌아봤다면 어느 순간에는 답을 찾는 것보다 관계를 놓아주는 것도 필요해요.",
    },
  ],
};

export default testData;
```

## compatible-partner-data.js

```javascript
"use strict";

const testData = {
  id: 33,
  url: "test.html?id=compatible-partner",
  title: "나랑 잘 맞는 연애 상대는?",
  description: "어떤 사람과 만날 때 가장 편하고 오래 잘 맞을까?",
  category: "연애/결혼",
  showResultType: true,
  stats: [
    { id: "friend", title: "친구형" },
    { id: "affectionate", title: "다정형" },
    { id: "independent", title: "자유형" },
    { id: "direct", title: "직진형" },
  ],
  questions: [
    {
      question: "연애할 때 가장 중요하다고 느끼는 건?",
      answers: [
        ["서로 편하게 대화할 수 있는 것", "friend"],
        ["나를 세심하게 챙겨주는 것", "affectionate"],
        ["각자의 생활을 존중해주는 것", "independent"],
        ["확실하게 표현하고 이끌어주는 것", "direct"],
      ],
    },
    {
      question: "연락 스타일은 어떤 상대가 가장 편해?",
      answers: [
        ["하루 종일 자주 연락하는 사람", "affectionate"],
        ["필요할 때 자연스럽게 연락하는 사람", "independent"],
        ["장난도 많이 치고 대화가 재밌는 사람", "friend"],
        ["먼저 연락하고 표현을 잘하는 사람", "direct"],
      ],
    },
    {
      question: "데이트할 때 가장 끌리는 모습은?",
      answers: [
        ["계획을 잘 세우고 적극적으로 이끄는 모습", "direct"],
        ["별거 안 해도 같이 있으면 편한 모습", "friend"],
        ["내가 불편한 걸 먼저 알아채는 모습", "affectionate"],
        ["서로 하고 싶은 걸 각자 존중해주는 모습", "independent"],
      ],
    },
    {
      question: "내가 힘든 일이 있을 때 바라는 반응은?",
      answers: [
        ["옆에서 따뜻하게 위로해주는 것", "affectionate"],
        ["해결할 방법을 같이 찾아주는 것", "direct"],
        ["평소처럼 편하게 있어주는 것", "friend"],
        ["내가 먼저 말할 때까지 기다려주는 것", "independent"],
      ],
    },
    {
      question: "연애 중 혼자만의 시간이 필요할 때 상대가?",
      answers: [
        ["자연스럽게 이해해줬으면 좋겠다", "independent"],
        ["그래도 자주 연락하며 챙겨줬으면 좋겠다", "affectionate"],
        ["같이 있어도 각자 할 일을 할 수 있으면 좋겠다", "friend"],
        ["내가 거리 두는 걸 바로 알아채고 다가와줬으면 좋겠다", "direct"],
      ],
    },
    {
      question: "다툼이 생겼을 때 가장 잘 맞을 것 같은 상대는?",
      answers: [
        ["바로 대화해서 끝내려는 사람", "direct"],
        ["감정이 가라앉을 때까지 기다려주는 사람", "independent"],
        ["분위기를 풀면서 자연스럽게 화해하는 사람", "friend"],
        ["내 기분을 먼저 살피고 달래주는 사람", "affectionate"],
      ],
    },
    {
      question: "연애가 오래됐을 때 가장 원하는 관계는?",
      answers: [
        ["친구처럼 장난치고 편한 관계", "friend"],
        ["서로 꾸준히 표현하고 챙겨주는 관계", "affectionate"],
        ["각자 자기 삶도 잘 유지하는 관계", "independent"],
        ["익숙해져도 설렘과 표현이 계속 있는 관계", "direct"],
      ],
    },
    {
      question: "상대의 어떤 말에 가장 마음이 놓일까?",
      answers: [
        ['"너 하고 싶은 대로 해. 난 믿어."', "independent"],
        ['"힘들면 나한테 기대도 돼."', "affectionate"],
        ['"우리 그냥 편하게 얘기하자."', "friend"],
        ['"나는 너 좋아하는 거 확실해."', "direct"],
      ],
    },
    {
      question: "상대가 친구들과 자주 약속을 잡는다면?",
      answers: [
        ["서로 각자 생활이 있으니 괜찮다", "independent"],
        ["나와 보내는 시간도 충분하면 괜찮다", "friend"],
        ["약속이 있어도 연락은 잘해줬으면 한다", "affectionate"],
        ["나와의 약속을 우선해주는 사람이 좋다", "direct"],
      ],
    },
    {
      question: "썸을 탈 때 가장 끌리는 상대는?",
      answers: [
        ["나한테 호감을 확실하게 표현하는 사람", "direct"],
        ["천천히 가까워져도 편안한 사람", "friend"],
        ["사소한 부분까지 기억해주는 사람", "affectionate"],
        ["부담 주지 않고 자연스럽게 다가오는 사람", "independent"],
      ],
    },
    {
      question: "연인이 새로운 취미를 시작한다고 하면?",
      answers: [
        ["서로 각자 취미를 즐길 수 있어서 좋다", "independent"],
        ["같이 해보자고 먼저 제안하는 사람이 좋다", "friend"],
        ["잘하고 있는지 관심 가져주는 사람이 좋다", "affectionate"],
        ["적극적으로 응원하고 밀어주는 사람이 좋다", "direct"],
      ],
    },
    {
      question: "내가 사랑받고 있다고 가장 크게 느끼는 순간은?",
      answers: [
        ["상대가 내 선택과 생활을 존중해줄 때", "independent"],
        ["말하지 않아도 내 상태를 알아봐줄 때", "affectionate"],
        ["같이 웃고 떠드는 시간이 많을 때", "friend"],
        ["좋아한다는 표현을 아끼지 않을 때", "direct"],
      ],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map(([text, stat]) => ({ text, stat, score: 1 })),
  })),
  results: [
    {
      stat: "friend",
      title: "친구처럼 편한 사람이 잘 맞는 편",
      description: "당신은 연애에서도 편안한 대화와 자연스러운 분위기를 중요하게 느끼는 편이에요. 같이 장난치고 웃을 수 있고, 특별한 일이 없어도 함께 있는 시간이 즐거운 사람과 잘 맞아요.\n\n서로 너무 긴장하거나 눈치를 보는 관계보다 친구처럼 솔직하고 편한 관계에서 마음이 오래가는 편이에요. 연애를 하더라도 억지로 분위기를 만들기보다 일상 자체를 함께 즐길 수 있는 사람이 잘 맞을 가능성이 커요.\n\n다만 너무 편해지면 연애적인 표현이 부족해질 수 있어요. 편안함 속에서도 좋아하는 마음을 종종 표현해주는 상대라면 더 잘 맞을 수 있어요.",
    },
    {
      stat: "affectionate",
      title: "세심하게 챙겨주는 사람이 잘 맞는 편",
      description: "당신은 상대의 작은 관심과 배려에서 사랑을 크게 느끼는 편이에요. 내가 했던 말을 기억해주거나 힘들어 보일 때 먼저 챙겨주는 사람에게 마음이 편해질 가능성이 커요.\n\n화려한 표현보다 꾸준히 관심을 보여주고 내 감정을 세심하게 살펴주는 상대와 잘 맞는 편이에요. 연애 중에도 서로의 하루를 자연스럽게 공유하고 마음을 표현하는 관계를 선호할 수 있어요.\n\n다만 상대의 표현이 적으면 사랑이 부족하다고 느낄 수도 있어요. 말과 행동으로 애정을 꾸준히 보여주는 사람이라면 안정적인 관계를 만들기 좋아요.",
    },
    {
      stat: "independent",
      title: "서로의 생활을 존중해주는 사람이 잘 맞는 편",
      description: "당신은 연애를 해도 각자의 시간과 생활을 유지할 수 있는 관계에서 편안함을 느끼는 편이에요. 연락이나 만남을 지나치게 요구하기보다 서로 믿고 각자의 일을 할 수 있는 사람이 잘 맞아요.\n\n상대가 내 선택을 존중해주고 혼자 있는 시간도 자연스럽게 이해해줄 때 관계에 대한 만족도가 높아질 수 있어요. 서로 의존하기보다 각자의 삶을 잘 살아가면서 함께할 때 더 좋은 관계가 된다고 느끼는 편이에요.\n\n다만 표현이 너무 적으면 서로 마음을 오해할 수 있어요. 자유를 존중하면서도 필요한 순간에는 확실하게 마음을 표현하는 사람이 특히 잘 맞아요.",
    },
    {
      stat: "direct",
      title: "표현이 확실한 사람이 잘 맞는 편",
      description: "당신은 애매한 태도보다 좋아하는 마음을 분명하게 표현하는 사람에게 편안함을 느끼는 편이에요. 먼저 연락하고 만나자고 제안하거나, 마음을 솔직하게 말해주는 상대와 잘 맞을 가능성이 커요.\n\n관계가 애매하게 이어지는 것보다 서로의 마음과 방향이 확실한 연애를 선호하는 편이에요. 갈등이 생겨도 피하기보다 바로 대화하고 해결하려는 상대에게 신뢰를 느낄 수 있어요.\n\n다만 상대의 적극성이 지나치면 간섭처럼 느껴질 수도 있어요. 표현은 확실하지만 내 의견과 선택도 존중해주는 사람이라면 가장 잘 맞을 수 있어요.",
    },
  ],
};

export default testData;
```

## cutoff-data.js

```javascript
"use strict";

const testData = {
  id: 15,
  url: "test.html?id=cutoff",
  title: "나는 사람을 얼마나 빨리 손절하는 편일까?",
  description: "인간관계에서 나는 참는 편일까, 빠르게 정리하는 편일까?",
  category: "친구·인간관계·사회생활",
  resultLabel: "당신의 손절 지수는",
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
      description: "사람에게 쉽게 정을 끊지 않는 타입이에요. 상대의 상황을 이해하려 하고 웬만한 갈등은 넘기는 편이에요. 다만 계속 참기만 하면 혼자 상처가 쌓일 수 있어요.\n\n상대의 실수 뒤에도 사정이 있었을 거라고 생각하며 대화할 여지를 남기는 편이에요. 한 번의 갈등보다 함께 쌓아온 시간을 중요하게 보기에 관계를 회복할 기회가 많은 타입이에요.\n\n이해하는 마음이 나의 불편함을 계속 덮는 방향으로만 가지 않도록 해주세요. 같은 일이 반복된다면 무엇이 힘든지 구체적으로 말하고, 내가 받아들일 수 있는 선도 정해보세요.",
    },
    {
      min: 17, max: 24,
      title: "충분히 고민하고 정리하는 편",
      description: "한 번의 실수로 바로 관계를 끊지는 않지만 반복되는 문제는 그냥 넘기지 않는 편이에요. 상대에게 기회를 주면서도 내 기준은 지키는 타입이에요.\n\n상대가 사과했는지뿐 아니라 이후에 행동이 달라지는지도 살피는 편이에요. 바로 끊거나 무조건 참는 대신 상황을 확인하고 관계의 거리를 조절하려는 점이 장점이에요.\n\n결정을 오래 미루느라 나만 지치고 있다면 기준을 조금 더 분명히 해보세요. 어떤 변화가 필요하고 어디까지 기다릴 수 있는지 정하면 관계를 지킬 때도 정리할 때도 덜 흔들릴 수 있어요.",
    },
    {
      min: 25, max: 32,
      title: "마음이 멀어지는 속도가 빠른 편",
      description: "한번 신뢰가 깨지거나 실망하면 이전처럼 지내기 어려운 편이에요. 겉으로는 괜찮아 보여도 속으로 이미 거리를 두고 있을 가능성이 커요.\n\n겉으로는 평소처럼 지내더라도 속마음에서는 연락이나 기대를 먼저 줄일 수 있어요. 다시 친해지려면 말뿐 아니라 믿음을 회복할 행동이 필요하다고 느끼는 편이에요.\n\n상대가 내가 멀어진 이유를 모를 수도 있어요. 아직 관계를 이어가고 싶은 마음이 있다면 불편했던 일을 한 번 설명해보세요. 오해인지 반복되는 문제인지 확인하는 데 도움이 돼요.",
    },
    {
      min: 33, max: 40,
      title: "손절 결정이 빠른 편",
      description: "관계에서 선을 넘었다고 느끼면 미련 없이 정리하는 타입이에요. 인간관계에 쓸 에너지를 아끼는 장점도 있지만, 순간적인 감정으로 좋은 관계까지 놓치지 않는지는 한 번 생각해볼 필요가 있어요.\n\n관계에서 중요한 기준이 분명해 선을 넘었다고 느끼면 빠르게 거리를 두는 편이에요. 억지로 친밀함을 이어가며 에너지를 쓰지 않는다는 점에서는 스스로를 보호하는 힘이 있어요.\n\n다만 감정이 크게 올라온 순간에는 사실과 해석을 잠깐 나눠보세요. 필요한 거리를 먼저 확보한 뒤 판단해도 늦지 않아요. 대화의 여지가 있는 관계와 반복되는 상처를 구분해보면 좋아요.",
    },
  ],
};

export default testData;
```

## difficult-people-data.js

```javascript
"use strict";

const testData = {
  id: 29,
  url: "test.html?id=difficult-people",
  title: "나는 싫은 사람과도 잘 지낼 수 있을까?",
  description: "감정은 감정이고 사회생활은 사회생활일까?",
  category: "친구·인간관계·사회생활",
  resultLabel: "당신의 불편한 관계 대처 지수는",
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
      description: "싫은 감정이 있어도 필요한 관계는 무난하게 유지하는 편이에요. 감정과 상황을 비교적 잘 분리하고, 상대를 좋아하지 않아도 예의는 지키는 타입이에요.\n\n개인적인 호감과 필요한 협력을 구분해서 상대의 장점이나 성과를 인정할 수 있어요. 불편한 사람이 있어도 자리에 필요한 태도를 유지해 팀의 흐름을 크게 흔들지 않는 편이에요.\n\n그렇다고 모든 불편함을 참아야 하는 것은 아니에요. 무례한 행동이나 반복되는 문제가 있다면 업무 기준과 내 경계를 분명히 말해보세요. 예의를 지키면서도 나를 보호할 수 있어요.",
    },
    {
      min: 17, max: 24,
      title: "티는 안 내는 편",
      description: "불편한 사람과도 웬만하면 문제없이 지내는 편이에요. 다만 속으로는 어느 정도 거리 두기를 하면서 관계를 관리하는 타입이에요.\n\n좋아하지 않는 사람에게도 기본적인 인사와 협조는 할 수 있지만 마음까지 열지는 않는 편이에요. 필요한 만큼만 가까워지는 방식으로 불필요한 갈등을 줄이는 타입이에요.\n\n계속 웃으며 넘기다 보면 속으로 피로가 쌓일 수 있어요. 불편함이 커질 때는 대화의 범위나 함께하는 시간을 조절하고, 꼭 필요한 문제는 차분하게 표현해보세요.",
    },
    {
      min: 25, max: 32,
      title: "불편함이 꽤 드러나는 편",
      description: "싫은 사람과 계속 맞춰 지내는 걸 꽤 힘들어하는 편이에요. 필요한 상황에서는 참지만 오래 함께하면 스트레스가 쌓일 가능성이 커요.\n\n좋아하지 않는 사람과 오래 함께하면 반응이 짧아지거나 표정에 피로가 나타날 수 있어요. 감정을 숨기는 데 에너지가 많이 들어 필요한 일 외에는 접점을 줄이고 싶어질 수 있어요.\n\n상대와 친해지려 애쓰기보다 필요한 협력의 범위를 정해보세요. 요청과 답변을 구체적으로 나누면 감정적인 부담을 줄일 수 있어요. 자리를 벗어난 뒤에는 긴장을 풀 시간도 챙겨주세요.",
    },
    {
      min: 33, max: 40,
      title: "싫으면 거리 두는 타입",
      description: "한번 불편하다고 느끼면 굳이 관계를 유지하려 하지 않는 편이에요. 감정을 숨기기보다 가능한 한 접점을 줄이는 쪽을 선택하는 타입이에요.\n\n한번 불편해진 사람과 억지로 친밀한 모습을 유지하기보다 접점을 줄이는 편이에요. 내 감정을 분명히 아는 장점이 있지만 함께해야 하는 상황에서는 피로가 더 크게 느껴질 수 있어요.\n\n관계를 좋게 만드는 것과 필요한 일을 함께하는 것은 다른 목표예요. 꼭 해야 하는 대화는 짧고 구체적으로 하고, 반복되는 문제는 기록하거나 적절한 도움을 요청해보세요.",
    },
  ],
};

export default testData;
```

## falling-in-love-data.js

```javascript
"use strict";

const testData = {
  id: 31,
  url: "test.html?id=falling-in-love",
  title: "내가 사랑에 빠지는 순간은?",
  description: "나는 어떤 순간에 상대에게 마음이 움직이는 사람일까?",
  category: "연애/결혼",
  resultLabel: "당신이 사랑에 빠지는 순간은",
  showResultType: true,
  showStats: false,
  resultCard: true,
  answerGuide: "각 답변은 해당 성향에 1점씩 더해져요",
  stats: [
    { id: "excitement", title: "설렘형" },
    { id: "stability", title: "안정형" },
    { id: "care", title: "배려형" },
    { id: "attraction", title: "끌림형" },
  ],
  questions: [
    {
      question: "처음 만난 사람에게 가장 먼저 마음이 가는 순간은?",
      answers: ["대화가 예상보다 너무 잘 통할 때", "같이 있어도 전혀 어색하지 않을 때", "작은 걸 자연스럽게 챙겨줄 때", "외모나 분위기가 딱 내 취향일 때"],
    },
    {
      question: "연락하다가 가장 호감이 커지는 순간은?",
      answers: ["티키타카가 잘 맞아서 계속 웃게 될 때", "연락 텀이 달라도 편안하게 이어질 때", "내가 전에 한 말을 기억하고 물어봐줄 때", "평범한 말도 이상하게 설레게 느껴질 때"],
    },
    {
      question: "데이트 중 가장 마음이 움직이는 순간은?",
      answers: ["예상 못 한 행동으로 두근거리게 할 때", "오래 같이 있어도 편하고 자연스러울 때", "내가 불편한 걸 먼저 알아차려줄 때", "걷다가 문득 옆모습이 너무 좋아 보일 때"],
    },
    {
      question: "상대가 어떤 모습을 보일 때 더 끌릴까?",
      answers: ["장난스럽고 예상 못 한 매력이 있을 때", "감정 기복 없이 차분하고 믿음직할 때", "다른 사람에게도 기본적으로 친절할 때", "자기만의 스타일과 분위기가 있을 때"],
    },
    {
      question: "상대가 나를 좋아하는 것 같다고 느껴지는 순간 중 가장 좋은 건?",
      answers: ["나한테만 유독 장난치고 반응이 다를 때", "꾸준히 연락하고 약속을 지킬 때", "내가 힘들어 보이면 먼저 챙겨줄 때", "나를 보는 눈빛이나 분위기가 달라질 때"],
    },
    {
      question: "친구였던 사람에게 갑자기 마음이 생긴다면 가장 가능성 높은 계기는?",
      answers: ["어느 날 갑자기 이성적으로 느껴지는 순간", "힘든 일을 같이 겪으면서 더 가까워졌을 때", "내가 힘들 때 진심으로 옆에 있어줬을 때", "평소와 다른 모습이 갑자기 매력적으로 보였을 때"],
    },
    {
      question: "상대와 대화할 때 가장 호감이 커지는 포인트는?",
      answers: ["웃음 코드와 말센스가 잘 맞을 때", "내 말을 편하게 받아주고 대화가 안정적일 때", "내 말에 집중하고 공감해줄 때", "말투나 목소리 자체가 매력적으로 느껴질 때"],
    },
    {
      question: "상대에게 확 마음이 기울 수 있는 행동은?",
      answers: ["갑자기 보고 싶다고 솔직하게 표현할 때", "항상 한결같은 태도를 보여줄 때", "사소한 걸 기억해서 챙겨줄 때", "예상 못 한 순간 멋있거나 예뻐 보일 때"],
    },
    {
      question: "누군가에게 끌리고 있을 때 나는 무엇을 가장 많이 생각할까?",
      answers: ["다음엔 어떤 일이 생길지 기대된다", "이 사람과 오래 만나도 편할 것 같다", "이 사람은 나를 소중하게 대해줄 것 같다", "그냥 자꾸 보고 싶고 눈이 간다"],
    },
    {
      question: "상대의 단점을 발견했을 때도 마음이 계속 커질 수 있는 경우는?",
      answers: ["단점보다 같이 있을 때의 재미가 더 클 때", "단점이 있어도 믿을 수 있는 사람일 때", "기본적으로 따뜻하고 좋은 사람일 때", "단점까지 이상하게 매력적으로 느껴질 때"],
    },
    {
      question: "누군가와 썸을 탈 때 가장 중요한 감정은?",
      answers: ["두근거림", "편안함", "따뜻함", "강한 끌림"],
    },
    {
      question: "결국 내가 사랑에 빠졌다고 느끼게 되는 순간은?",
      answers: ["그 사람 때문에 평범한 하루가 특별해질 때", "그 사람과 함께 있는 미래가 자연스럽게 그려질 때", "나도 그 사람을 챙겨주고 싶다는 마음이 커질 때", "이유 없이 계속 생각나고 보고 싶을 때"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({
      text,
      stat: ["excitement", "stability", "care", "attraction"][index],
      score: 1,
    })),
  })),
  results: [
    {
      stat: "excitement",
      title: "두근거리는 순간에 마음이 움직이는 타입",
      description: "당신은 사랑이 시작될 때 ‘설렘’을 중요하게 느끼는 편이에요. 예상하지 못한 말이나 행동, 티키타카가 잘 맞는 순간처럼 평범한 일상에 특별한 감정이 생길 때 상대에게 빠르게 끌리는 타입이에요.\n\n누군가와 함께 있을 때 자꾸 웃게 되고, 다음 만남이 기다려지기 시작한다면 이미 마음이 움직이고 있을 가능성이 커요.\n\n반대로 너무 안정적이고 변화가 없는 관계에서는 조금 심심함을 느낄 수도 있어요.",
    },
    {
      stat: "stability",
      title: "편안함이 사랑으로 바뀌는 타입",
      description: "당신은 강렬한 첫인상보다 함께 있을 때 느껴지는 편안함과 신뢰를 중요하게 보는 편이에요.\n\n연락이 조금 늦어도 불안하지 않고, 오래 같이 있어도 어색하지 않으며, 이 사람과 함께라면 편하게 나답게 있을 수 있다고 느껴질 때 마음이 천천히 깊어지는 타입이에요.\n\n처음에는 큰 감정이 없던 사람에게도 시간이 지나면서 사랑이 생길 가능성이 높은 편이에요.",
    },
    {
      stat: "care",
      title: "나를 소중하게 대해주는 순간에 빠지는 타입",
      description: "당신은 상대의 작은 행동에서 마음을 많이 느끼는 편이에요.\n\n전에 했던 말을 기억해주거나, 내가 힘들어 보일 때 먼저 알아차려주거나, 별것 아닌 일도 자연스럽게 챙겨주는 모습을 보면 호감이 빠르게 커질 가능성이 높아요.\n\n겉으로 화려한 매력보다 ‘이 사람은 나를 진짜 신경 써주는구나’라는 감정이 사랑으로 이어지는 타입이에요.",
    },
    {
      stat: "attraction",
      title: "이유 없이 눈이 가는 순간에 빠지는 타입",
      description: "당신은 사랑이 시작될 때 논리보다 본능적인 끌림의 영향을 많이 받는 편이에요.\n\n외모, 분위기, 목소리, 눈빛처럼 설명하기 어려운 매력 하나가 강하게 느껴지면 상대를 계속 의식하게 되는 타입이에요.\n\n특별한 계기가 없어도 문득 그 사람이 멋있거나 예뻐 보이는 순간 갑자기 마음이 확 움직일 수도 있어요.\n\n‘왜 좋은지 모르겠는데 그냥 좋다’는 감정이 든다면 이미 꽤 많이 빠져 있을 가능성이 높아요.",
    },
  ],
};

export default testData;
```

## friend-boundaries-data.js

```javascript
"use strict";

const testData = {
  id: 25,
  url: "test.html?id=friend-boundaries",
  title: "나는 친한 친구에게도 선을 두는 편일까?",
  description: "아무리 친해도 지켜야 할 선이 있다고 생각하는 편일까?",
  category: "친구·인간관계·사회생활",
  resultLabel: "당신의 친구 사이 경계 지수는",
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
      description: "친해지면 상대와의 경계가 많이 낮아지는 편이에요. 개인적인 이야기나 물건, 시간까지 자연스럽게 공유하는 타입이에요. 친구를 가족처럼 느끼는 경우도 많아요.\n\n가까운 친구와 함께하는 시간이나 개인적인 이야기를 나누는 것이 자연스럽고 편한 편이에요. 서로 많이 알수록 친밀해진다고 느껴 친구에게 마음을 열기 쉬운 타입이에요.\n\n다만 내게 편한 방식이 상대에게도 똑같이 편한 것은 아닐 수 있어요. 물건을 쓰거나 개인적인 이야기를 전할 때는 먼저 물어보고, 상대가 혼자 있고 싶은 시간도 존중해보세요.",
    },
    {
      min: 17, max: 24,
      title: "편하지만 크게 벽은 없는 편",
      description: "친한 사람에게는 상당히 편하게 대하지만 어느 정도 기본적인 선은 있는 편이에요. 대부분은 공유하면서도 꼭 필요한 부분에서는 내 영역을 지키는 타입이에요.\n\n친구에게 마음을 열면서도 꼭 지키고 싶은 부분은 따로 남겨두는 편이에요. 평소에는 편하게 어울리다가도 중요한 상황에서는 내 기준을 말할 수 있다는 점이 강점이에요.\n\n친한 사이일수록 서로의 선을 알아서 알 거라고 생각하기 쉬워요. 불편한 일이 생기기 전에 돈, 방문, 개인적인 이야기처럼 민감한 부분을 가볍게 이야기해두면 좋아요.",
    },
    {
      min: 25, max: 32,
      title: "친해도 적당한 거리가 필요한 편",
      description: "아무리 친해도 개인적인 영역은 존중해야 한다고 생각하는 편이에요. 가까운 관계를 좋아하지만 사생활이나 인간관계까지 완전히 공유할 필요는 없다고 보는 타입이에요.\n\n친밀함을 모든 것을 공유하는 상태로 보지는 않는 편이에요. 친구를 좋아해도 혼자 쉬는 시간이나 말하고 싶지 않은 이야기가 남아 있어야 관계가 더 편하게 느껴질 수 있어요.\n\n상대가 거리를 서운함으로 받아들일 때는 이유를 짧게 설명해보세요. 혼자 쉬고 싶다는 마음과 친구를 아끼는 마음은 함께 있을 수 있어요. 가능한 시간에 먼저 연락하는 것도 도움이 돼요.",
    },
    {
      min: 33, max: 40,
      title: "경계가 확실한 타입",
      description: "친한 친구라도 넘지 않았으면 하는 선이 분명한 편이에요. 내 시간, 사생활, 물건, 인간관계를 독립적으로 유지하고 싶어 하는 타입이에요. 친하지 않아서가 아니라 편한 관계일수록 서로의 영역을 존중해야 한다고 보는 편이에요.\n\n친구라도 내 선택이나 시간을 당연하게 여기면 불편함을 느끼기 쉬워요. 서로의 생활을 존중해야 오래 편하게 지낼 수 있다고 생각해 사생활과 결정권을 중요하게 지키는 편이에요.\n\n선을 지킬 때는 상대를 밀어내는 말보다 원하는 방식을 구체적으로 전해보세요. 미리 연락해주면 좋겠다는 식의 표현은 내 영역을 보호하면서도 관계의 온도를 유지하는 데 도움이 돼요.",
    },
  ],
};

export default testData;
```

## friend-dependence-data.js

```javascript
"use strict";

const testData = {
  id: 26,
  url: "test.html?id=friend-dependence",
  title: "나는 친구에게 얼마나 의존하는 편일까?",
  description: "힘들 때도, 심심할 때도 나는 친구를 얼마나 찾는 편일까?",
  category: "친구·인간관계·사회생활",
  resultLabel: "당신의 친구 의존 지수는",
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
      description: "친구를 좋아하지만 내 감정이나 일상을 친구에게 크게 의존하지 않는 편이에요. 혼자 보내는 시간도 편하고 중요한 선택도 스스로 하는 타입이에요.\n\n고민을 바로 털어놓기보다 내 생각을 먼저 정리하고 필요한 도움을 고르는 편이에요. 친구의 일정이나 연락 상태에 하루 기분이 크게 좌우되지 않는다는 점이 장점이에요.\n\n혼자 잘 지내는 것과 언제나 혼자 해결해야 하는 것은 달라요. 도움이 필요한 때에는 가까운 사람에게 구체적으로 부탁해보세요. 기대는 경험도 관계를 더 편하게 만들 수 있어요.",
    },
    {
      min: 17, max: 24,
      title: "적당히 기대는 균형형",
      description: "혼자서도 잘 지내지만 필요할 때는 친구에게 기대는 편이에요. 독립성과 친밀감 사이의 균형을 비교적 잘 유지하는 타입이에요.\n\n내 생활을 유지하면서도 기쁜 일이나 힘든 일을 친구와 나누는 편이에요. 함께 보내는 시간과 혼자 쉬는 시간이 모두 필요하다는 것을 비교적 자연스럽게 받아들이는 타입이에요.\n\n친구에게 기대고 싶은 날에는 원하는 도움을 말로 전해보세요. 해결책이 필요한지 잠깐 들어줬으면 하는지 알려주면, 서로 부담을 줄이면서 필요한 만큼 의지할 수 있어요.",
    },
    {
      min: 25, max: 32,
      title: "친구에게 꽤 많이 기대는 편",
      description: "힘든 일이나 고민이 생기면 친구와 공유하는 게 중요하고, 함께 시간을 보내는 데서 에너지를 많이 얻는 편이에요. 친구의 연락이나 관심이 줄면 서운함을 느낄 수도 있어요.\n\n혼자 생각할 때보다 누군가와 이야기할 때 마음과 생각이 더 잘 정리될 수 있어요. 친한 사람과 일상을 나누는 것이 중요한 즐거움이자 안정감의 원천인 편이에요.\n\n친구가 바쁜 날을 관계가 멀어진 신호로만 받아들이지는 말아주세요. 혼자 즐길 수 있는 활동이나 다른 지지 관계도 조금씩 늘리면 한 사람의 반응에 덜 흔들릴 수 있어요.",
    },
    {
      min: 33, max: 40,
      title: "친구 없으면 많이 허전한 밀착형",
      description: "친구가 일상과 감정에서 상당히 큰 비중을 차지하는 타입이에요. 혼자 해결하기보다 누군가와 함께하는 걸 선호하고, 가까운 친구와의 관계 변화에도 민감하게 반응하는 편이에요.\n\n친구와 연결되어 있다는 느낌이 있어야 하루가 더 편안해질 수 있어요. 힘든 일이 생기면 혼자 정리하기보다 누군가와 바로 이야기하며 안심하고 싶은 마음이 큰 편이에요.\n\n가까운 친구도 항상 같은 속도로 연락하거나 시간을 낼 수는 없어요. 혼자 기분을 달랠 작은 방법을 마련하고 부탁할 때는 상대의 여유도 확인해보세요. 가까움 속에서도 각자의 생활은 필요해요.",
    },
  ],
};

export default testData;
```

## friend-romance-distance-data.js

```javascript
"use strict";

const testData = {
  id: 48,
  url: "test.html?id=friend-romance-distance",
  title: "친구가 연애 때문에 잠수 타면 나는?",
  description: "친구가 연애를 시작한 뒤 연락이 뜸해지면 나는 어떻게 반응할까?",
  category: "친구·인간관계·사회생활",
  showResultType: true,
  stats: [
    { id: "understanding", title: "이해형" },
    { id: "direct", title: "직진형" },
    { id: "hurt", title: "서운형" },
    { id: "distance", title: "거리두기형" },
    { id: "cool", title: "쿨형" },
  ],
  questions: [
    {
      question: "친한 친구가 연애를 시작한 뒤 연락이 확 줄었다면?",
      answers: [
        ["연애 초반이니까 그럴 수 있다고 생각한다", "understanding"],
        ["먼저 “요즘 왜 이렇게 연락이 없냐”고 말한다", "direct"],
        ["조금 서운하지만 티는 잘 안 낸다", "hurt"],
        ["나도 굳이 먼저 연락하지 않게 된다", "distance"],
        ["바쁘면 나중에 연락하겠지 하고 넘긴다", "cool"],
      ],
    },
    {
      question: "예전에는 자주 만나던 친구가 애인만 만나기 시작하면?",
      answers: [
        ["솔직히 좀 섭섭하다고 느낀다", "hurt"],
        ["친구가 행복하면 됐다고 생각한다", "cool"],
        ["한두 번은 이해하지만 계속되면 나도 거리를 둔다", "distance"],
        ["“우리도 좀 만나자”고 먼저 말한다", "direct"],
        ["연애 초반에는 그럴 수 있다고 이해하려 한다", "understanding"],
      ],
    },
    {
      question: "내가 연락했는데 며칠째 답이 없다면?",
      answers: [
        ["다시 연락해서 무슨 일 있는지 물어본다", "direct"],
        ["답 올 때까지 그냥 기다린다", "cool"],
        ["예전과 달라진 게 서운하게 느껴진다", "hurt"],
        ["나도 다음부터 연락을 줄인다", "distance"],
        ["애인이랑 바쁜가 보다 하고 넘긴다", "understanding"],
      ],
    },
    {
      question: "친구가 오랜만에 연락해서 애인 이야기만 한다면?",
      answers: [
        ["반갑긴 하지만 조금 서운하다", "hurt"],
        ["그냥 신나게 들어준다", "understanding"],
        ["내 이야기도 좀 들어달라고 솔직하게 말한다", "direct"],
        ["몇 번 반복되면 대화 자체를 줄인다", "distance"],
        ["재미있으면 듣고 아니면 적당히 반응한다", "cool"],
      ],
    },
    {
      question: "약속을 잡아놨는데 친구가 애인 때문에 취소한다면?",
      answers: [
        ["한 번 정도는 충분히 이해할 수 있다", "understanding"],
        ["이유가 합당하면 별로 신경 쓰지 않는다", "cool"],
        ["다음부터는 먼저 약속을 잘 안 잡을 것 같다", "distance"],
        ["솔직히 많이 서운할 것 같다", "hurt"],
        ["바로 “이건 좀 아니다”라고 말한다", "direct"],
      ],
    },
    {
      question: "친구가 연애 때문에 단톡방에도 거의 안 나타난다면?",
      answers: [
        ["본인이 필요할 때 다시 오겠지 한다", "cool"],
        ["연애하느라 정신없나 보다 하고 기다린다", "understanding"],
        ["나중에 슬쩍 왜 이렇게 잠수 탔냐고 말한다", "direct"],
        ["우리보다 애인이 더 중요한 것 같아 서운하다", "hurt"],
        ["나도 예전처럼 신경 쓰지 않게 된다", "distance"],
      ],
    },
    {
      question: "몇 달 만에 친구가 갑자기 “보고 싶다”고 연락하면?",
      answers: [
        ["반갑긴 하지만 예전처럼 바로 마음이 열리진 않는다", "distance"],
        ["아무 일 없었던 것처럼 만날 수 있다", "cool"],
        ["반갑지만 그동안 섭섭했던 마음도 든다", "hurt"],
        ["먼저 왜 연락 없었는지 물어본다", "direct"],
        ["연애하느라 바빴겠지 하고 자연스럽게 받아준다", "understanding"],
      ],
    },
    {
      question: "친구가 “연애하면 원래 친구 연락 줄어드는 거지”라고 한다면?",
      answers: [
        ["어느 정도는 맞는 말이라고 생각한다", "understanding"],
        ["그래도 친구 관계도 챙겨야 한다고 생각한다", "direct"],
        ["속으로는 섭섭하지만 크게 말하지 않는다", "hurt"],
        ["본인이 그렇게 생각한다면 나도 관계에 힘을 덜 쓴다", "distance"],
        ["각자 사는 거니까 크게 상관없다", "cool"],
      ],
    },
    {
      question: "친구가 헤어진 뒤 갑자기 다시 자주 연락하기 시작하면?",
      answers: [
        ["힘들 때라도 찾아줘서 괜찮다고 생각한다", "understanding"],
        ["평소엔 연락 안 하다가 이제 오는 게 조금 얄밉다", "hurt"],
        ["예전처럼 자연스럽게 다시 친해질 수 있다", "cool"],
        ["그동안 연락 없었던 건 한번 짚고 넘어간다", "direct"],
        ["받아주긴 하지만 예전만큼 가까워지진 않을 것 같다", "distance"],
      ],
    },
    {
      question: "친구가 계속 애인 일정만 우선한다면?",
      answers: [
        ["몇 번 반복되면 내 마음도 자연스럽게 멀어진다", "distance"],
        ["연애 중이니까 어느 정도는 이해한다", "understanding"],
        ["직접 친구에게 서운하다고 말한다", "direct"],
        ["크게 기대하지 않으면 편하다고 생각한다", "cool"],
        ["친구 관계가 뒤로 밀린 느낌이라 상처받는다", "hurt"],
      ],
    },
    {
      question: "내가 힘든 일이 있는데 친구가 연애하느라 연락이 안 된다면?",
      answers: [
        ["정말 필요하면 다시 연락해본다", "direct"],
        ["혼자 해결하거나 다른 친구를 찾는다", "cool"],
        ["그동안 내가 친구를 얼마나 챙겼는지 생각나면서 서운하다", "hurt"],
        ["상황이 있겠지 하고 이해하려 한다", "understanding"],
        ["앞으로는 나도 그 친구에게 덜 기대게 된다", "distance"],
      ],
    },
    {
      question: "친구가 다시 예전처럼 가까워지고 싶다고 한다면?",
      answers: [
        ["별일 아니었다면 충분히 다시 가까워질 수 있다", "cool"],
        ["그동안 왜 그랬는지 솔직하게 이야기하고 싶다", "direct"],
        ["마음은 있지만 예전처럼 완전히 돌아가긴 어려울 수 있다", "distance"],
        ["친구도 자기 연애 때문에 여유가 없었을 거라고 이해한다", "understanding"],
        ["반갑지만 섭섭했던 감정이 먼저 떠오른다", "hurt"],
      ],
    },
    {
      question: "내가 연애를 시작한다면 친구 관계는?",
      answers: [
        ["연애를 해도 친한 친구는 꾸준히 챙기고 싶다", "direct"],
        ["시기에 따라 연락이 조금 줄 수도 있다고 생각한다", "understanding"],
        ["친구도 각자 바쁠 수 있으니 크게 신경 쓰지 않는다", "cool"],
        ["상대가 나를 안 챙기면 나도 굳이 챙기지 않는다", "distance"],
        ["나 때문에 친구가 서운해할까 은근히 걱정된다", "hurt"],
      ],
    },
    {
      question: "친구 관계에서 가장 싫은 건?",
      answers: [
        ["필요할 때만 다시 찾아오는 것", "distance"],
        ["말도 없이 갑자기 잠수 타는 것", "direct"],
        ["내가 덜 중요해진 것처럼 느껴지는 것", "hurt"],
        ["서로 상황을 이해하지 못하는 것", "understanding"],
        ["굳이 관계에 의미를 너무 많이 부여하는 것", "cool"],
      ],
    },
    {
      question: "친구가 연애 때문에 멀어졌을 때 내 최종 반응은?",
      answers: [
        ["이해는 하지만 내 생활에 집중한다", "cool"],
        ["서운한 마음이 꽤 오래 남는다", "hurt"],
        ["한번은 솔직하게 관계에 대해 이야기한다", "direct"],
        ["시간이 지나 다시 연락 오면 받아줄 수 있다", "understanding"],
        ["먼저 멀어진 사람에게 굳이 매달리지는 않는다", "distance"],
      ],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map(([text, stat]) => ({ text, stat, score: 1 })),
  })),
  results: [
    {
      stat: "understanding",
      title: "연애 중인 친구 상황까지 이해해주는 편",
      description: "친구가 연애를 시작한 뒤 연락이 줄어도 어느 정도는 자연스러운 변화라고 생각하는 편이에요. 연애 초반에는 서로에게 집중할 수 있다는 걸 이해하고 친구를 재촉하지 않는 타입이에요.\n\n당장은 조금 아쉬워도 친구가 행복하다면 기다려줄 수 있고, 다시 연락이 오면 크게 따지지 않는 경우가 많아요. 그래서 주변에서는 편하게 오래 볼 수 있는 친구라고 느낄 가능성이 높아요.\n\n다만 계속 이해만 하다 보면 내 서운함을 너무 뒤로 미룰 수도 있어요. 관계가 일방적으로 느껴질 때는 내 마음도 솔직하게 알려주는 것이 좋아요.",
    },
    {
      stat: "direct",
      title: "서운하면 바로 말하고 푸는 편",
      description: "친구가 연애 때문에 갑자기 연락이 줄면 혼자 생각하기보다 직접 이야기하는 편이에요. “요즘 왜 이렇게 연락이 없냐”처럼 관계의 변화를 솔직하게 짚고 넘어가고 싶어 하는 타입이에요.\n\n친한 친구일수록 불편한 감정을 숨기기보다 말하고 해결해야 관계가 오래 간다고 생각해요. 그래서 잠깐 분위기가 어색해져도 오해를 오래 끌고 가지 않는 장점이 있어요.\n\n다만 상대는 단순히 바쁘거나 여유가 없었을 수도 있어요. 서운함을 말하되 상대의 상황까지 함께 들어주면 훨씬 편하게 관계를 회복할 수 있어요.",
    },
    {
      stat: "hurt",
      title: "겉으로는 괜찮아도 마음에는 남는 편",
      description: "친구가 연애를 시작한 뒤 연락이 줄면 생각보다 크게 서운함을 느끼는 편이에요. 특히 예전에는 자주 연락하던 사이였다면 내가 뒤로 밀린 것 같은 느낌을 받을 수 있어요.\n\n직접 따지기보다는 혼자 마음에 담아두는 경우가 많아서 친구는 당신이 서운했다는 사실을 모를 수도 있어요. 다시 연락이 와도 반갑지만 그동안의 감정이 완전히 사라지지는 않는 타입이에요.\n\n그만큼 친구 관계를 중요하게 생각하고 가까운 사람에게 정을 많이 주는 편이에요. 혼자 추측하기보다 가볍게라도 서운했던 마음을 표현하면 관계가 훨씬 편해질 수 있어요.",
    },
    {
      stat: "distance",
      title: "한번 멀어지면 나도 조용히 멀어지는 편",
      description: "친구가 연애 때문에 관계를 소홀히 하면 굳이 붙잡거나 따지기보다 나도 자연스럽게 거리를 두는 편이에요. 상대가 나에게 쓰는 만큼 나도 비슷한 정도의 에너지만 쓰려고 하는 타입이에요.\n\n친구가 나중에 다시 연락하더라도 예전처럼 바로 가까워지기보다는 어느 정도 선을 둘 가능성이 높아요. 한번 관계의 우선순위가 달라졌다고 느끼면 내 기대 자체를 줄여버리는 편이에요.\n\n덕분에 일방적인 관계에 오래 끌려다니지는 않지만 상대에게는 갑자기 멀어진 것처럼 보일 수도 있어요. 정말 소중한 친구라면 완전히 마음을 닫기 전에 한 번 정도는 서로의 생각을 확인해보는 것도 좋아요.",
    },
    {
      stat: "cool",
      title: "각자 잘 살다가 만나면 되는 편",
      description: "친구가 연애를 시작해서 연락이 줄어도 크게 의미를 두지 않는 편이에요. 친구라고 해서 항상 자주 연락하거나 만나야 한다고 생각하지 않고 각자의 생활을 존중하는 타입이에요.\n\n몇 달 동안 연락이 없더라도 다시 만났을 때 편하면 충분하다고 느끼는 경우가 많아요. 그래서 친구의 연애나 생활 변화에도 비교적 스트레스를 덜 받고 관계를 가볍게 유지할 수 있어요.\n\n다만 상대는 당신의 이런 태도를 무관심하게 느낄 수도 있어요. 소중한 친구라면 가끔 먼저 연락하면서 여전히 관계를 중요하게 생각한다는 표현을 보여주는 것도 좋아요.",
    },
  ],
};

export default testData;
```

## game-character-data.js

```javascript
"use strict";

const testData = {
  id: 19,
  url: "test.html?id=game-character",
  title: "내가 게임 속 캐릭터라면 능력치는 어디에 몰려 있을까?",
  description: "게임 캐릭터가 된다면 나는 어떤 스탯에 몰빵된 타입일까?",
  category: "재미",
  resultLabel: "당신의 게임 캐릭터 능력치는",
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
      description: "행동력, 추진력, 승부욕이 높은 타입이에요. 생각보다 행동이 빠르고 앞장서는 편이에요. 다만 너무 빨리 달리다 실수할 수 있어요.\n\n새로운 퀘스트가 나타나면 완벽한 준비를 기다리기보다 먼저 움직이는 캐릭터에 가까워요. 팀이 망설이고 있을 때 첫걸음을 내딛고 흐름을 바꾸는 역할과 잘 맞아요.\n\n빠르게 행동하는 만큼 중요한 선택 앞에서는 잠깐 멈춰 조건을 확인해보세요. 추진력에 작은 점검 습관을 더하면 힘만 센 캐릭터를 넘어 끝까지 믿고 맡길 수 있는 에이스가 될 수 있어요.",
    },
    {
      stat: "intelligence",
      title: "지능 몰빵형",
      description: "분석력, 판단력, 계획력이 높은 타입이에요. 감보다 논리를 믿고 상황을 잘 읽는 편이에요. 다만 생각이 많아 시작이 늦을 수 있어요.\n\n복잡한 상황에서도 정보를 모으고 유리한 방법을 찾는 데 강점이 있어요. 바로 눈앞의 보상보다 다음 단계까지 생각해서 움직이는 전략가 캐릭터에 가까워요.\n\n모든 변수를 계산하려다 출발이 늦어질 때는 작은 시도부터 시작해보세요. 직접 얻은 경험도 중요한 정보이니, 계획과 실행을 번갈아 하면 판단력이 더 빛날 수 있어요.",
    },
    {
      stat: "charm",
      title: "매력 몰빵형",
      description: "공감력, 친화력, 분위기 메이킹 능력이 높은 타입이에요. 혼자 잘하기보다 사람 사이에서 강한 캐릭터예요. 다만 남 눈치를 많이 볼 수 있어요.\n\n팀원의 기분을 살피고 서로 어색한 분위기를 풀어주는 역할에 강해요. 혼자 앞서가는 것보다 각자의 장점을 연결해 팀 전체를 움직이게 하는 캐릭터에 가까워요.\n\n모두를 만족시키려다 내 에너지가 먼저 바닥나지 않도록 챙겨주세요. 다른 사람을 돕는 능력만큼 내 의견을 말하고 쉬는 시간을 확보하는 것도 좋은 팀 플레이의 일부예요.",
    },
    {
      stat: "survival",
      title: "생존력 몰빵형",
      description: "적응력, 버티는 힘, 상황 대처력이 높은 타입이에요. 튀진 않아도 끝까지 살아남는 스타일이에요. 다만 편한 쪽으로만 가려는 경향이 있을 수 있어요.\n\n상황이 달라져도 무리하게 정면 승부를 하기보다 살아남을 방법을 찾는 편이에요. 자원을 아끼고 기회를 기다리다가 필요한 순간에 움직이는 캐릭터와 잘 맞아요.\n\n안전한 선택은 장점이지만 편한 길만 고르면 새로운 능력을 발견할 기회가 줄어들 수 있어요. 감당할 수 있는 작은 도전을 더하면 버티는 힘에 성장 속도까지 갖출 수 있어요.",
    },
  ],
};

export default testData;
```

## hidden-romance-data.js

```javascript
"use strict";

const testData = {
  id: 35,
  url: "test.html?id=hidden-romance",
  title: "내가 숨기고 있는 연애 성향은?",
  description: "평소에는 잘 드러나지 않는 내 연애 본능은 어떤 모습일까?",
  category: "연애/결혼",
  showResultType: true,
  stats: [
    { id: "reassurance", title: "확인형" },
    { id: "direct", title: "직진본능형" },
    { id: "guarded", title: "방어형" },
    { id: "possessive", title: "소유형" },
  ],
  questions: [
    {
      question: "좋아하는 사람이 생겼을 때 겉으로는 아무렇지 않은 척해도 속으로는?",
      answers: ["상대 반응 하나하나를 꽤 많이 신경 쓴다", "빨리 가까워지고 싶다는 생각이 든다", "괜히 마음 들킬까 봐 더 무심한 척한다", "나도 모르게 상대를 내 사람처럼 생각하게 된다"],
    },
    {
      question: "상대가 평소보다 연락이 뜸한 날에는?",
      answers: ["바쁜가 보다 하면서도 은근히 이유가 궁금하다", "내가 먼저 연락해서 분위기를 바꾼다", "신경 쓰여도 먼저 연락하지 않고 버틴다", "누구랑 있는지까지 괜히 신경 쓰인다"],
    },
    {
      question: "썸 타는 상대가 다른 이성과 친하게 지내는 걸 보면?",
      answers: ["나한테도 같은 정도의 관심이 있는지 궁금해진다", "더 적극적으로 내 존재감을 보여주고 싶다", "아무렇지 않은 척하지만 마음은 조금 식는다", "솔직히 질투가 꽤 나는 편이다"],
    },
    {
      question: "좋아하는 사람 앞에서 나는?",
      answers: ["상대 표정이나 말투를 계속 살피게 된다", "평소보다 표현이 많아지고 적극적으로 변한다", "오히려 평소보다 더 무심하고 차분해진다", "상대가 나에게 얼마나 집중하는지 신경 쓰게 된다"],
    },
    {
      question: "연애를 시작하면 가장 듣고 싶은 말은?",
      answers: ['"나는 너 진짜 좋아해."', '"우리 자주 보고 더 많이 같이 있자."', '"부담 갖지 말고 편하게 있어."', '"나는 다른 사람보다 네가 제일 중요해."'],
    },
    {
      question: "애인이 나 없이 친구들과 너무 즐겁게 지내는 모습을 보면?",
      answers: ["나 없이도 잘 지내는 게 조금 서운하다", "다음에는 나도 같이 놀자고 먼저 말한다", "티 내기 싫어서 그냥 내 할 일을 한다", "내가 없는 자리에서 너무 즐거워 보이면 괜히 질투난다"],
    },
    {
      question: "싸운 뒤 상대가 먼저 연락하지 않는다면?",
      answers: ["나를 얼마나 중요하게 생각하는지 의심이 든다", "답답해서 내가 먼저 연락할 가능성이 높다", "먼저 연락하고 싶어도 끝까지 참는다", "상대가 나보다 더 오래 버티는 게 괘씸하게 느껴진다"],
    },
    {
      question: "애인이 혼자만의 시간이 필요하다고 한다면?",
      answers: ["나 때문은 아닌지 조금 신경 쓰인다", "시간 갖는 것보다 같이 해결하고 싶다", "오히려 나도 거리 두면서 마음을 정리한다", "왜 굳이 나 없이 혼자 있고 싶은지 궁금하다"],
    },
    {
      question: "연애 중 상대의 마음이 식은 것 같다고 느껴지면?",
      answers: ["표현이나 행동을 통해 계속 확인하고 싶어진다", "관계를 살리려고 더 적극적으로 행동한다", "상처받기 전에 내가 먼저 마음을 접으려 한다", "상대가 나한테 집중하도록 만들고 싶어진다"],
    },
    {
      question: "연애할 때 내 감정을 들키는 건?",
      answers: ["상대가 확실히 좋아한다면 괜찮다", "좋아하면 굳이 숨길 필요 없다고 생각한다", "너무 많이 들키면 내가 약해지는 느낌이 든다", "상대보다 내가 더 좋아하는 것처럼 보이는 건 싫다"],
    },
    {
      question: "애인이 중요한 결정을 나와 상의하지 않았다면?",
      answers: ["나를 믿지 않는 건가 싶어 서운하다", "바로 왜 말 안 했는지 물어본다", "겉으로는 괜찮다고 하지만 마음에 남는다", "연인이라면 중요한 일은 당연히 공유해야 한다고 생각한다"],
    },
    {
      question: "누군가를 정말 많이 좋아하게 되면 나는?",
      answers: ["사랑받고 있다는 확신을 계속 받고 싶어진다", "평소보다 훨씬 솔직하고 적극적으로 변한다", "좋아할수록 오히려 감정을 숨기려 한다", "상대가 나를 가장 우선해줬으면 하는 마음이 커진다"],
    },
    {
      question: "연애 중 내가 가장 숨기기 쉬운 감정은?",
      answers: ["불안함", "보고 싶은 마음", "서운함", "질투"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({
      text,
      stat: ["reassurance", "direct", "guarded", "possessive"][index],
      score: 1,
    })),
  })),
  results: [
    {
      stat: "reassurance",
      title: "사랑받고 있다는 확신이 필요한 확인형",
      description: "겉으로는 차분해 보여도 연애를 시작하면 상대의 마음을 꽤 세심하게 확인하는 편이에요. 말투나 연락 빈도, 작은 행동에서도 나를 얼마나 좋아하는지 자연스럽게 살펴보게 돼요.\n\n확실하게 사랑받고 있다고 느껴질 때는 안정적이고 편안하게 관계를 이어가는 타입이에요. 반대로 상대의 표현이 줄거나 애매한 태도가 이어지면 혼자 여러 가지 생각을 할 수 있어요.\n\n이런 성향은 관계를 소중하게 생각하기 때문에 나타나는 모습일 수 있어요. 상대의 행동만 해석하기보다 필요한 표현을 솔직하게 요청하면 훨씬 편안한 연애를 할 수 있어요.",
    },
    {
      stat: "direct",
      title: "좋아할수록 숨기기 어려운 직진본능형",
      description: "평소에는 조심스러워 보여도 마음이 확실해지면 생각보다 적극적으로 변하는 편이에요. 먼저 연락하고 만나자고 하거나 좋아하는 마음을 행동으로 보여주는 데 크게 망설이지 않아요.\n\n애매한 관계를 오래 유지하는 것보다 서로의 마음을 확인하고 가까워지는 과정을 더 편하게 느껴요. 좋아하는 사람에게 시간과 에너지를 아낌없이 쓰는 모습도 자주 나타날 수 있어요.\n\n덕분에 상대는 당신의 마음을 알아차리기 쉽고 관계도 빠르게 발전할 수 있어요. 다만 상대의 감정 속도도 나와 같은지는 한 번씩 살펴보면 더 편안한 관계가 될 수 있어요.",
    },
    {
      stat: "guarded",
      title: "좋아할수록 마음을 숨기는 방어형",
      description: "마음이 커질수록 오히려 상대에게 감정을 들키지 않으려고 하는 편이에요. 먼저 다가갔다가 상처받거나 내가 더 좋아하는 사람처럼 보이는 상황을 부담스럽게 느낄 수 있어요.\n\n서운하거나 보고 싶은 마음이 생겨도 바로 표현하기보다 혼자 정리하려는 경우가 많아요. 그래서 실제 마음보다 훨씬 무심하고 독립적인 사람처럼 보일 때도 있어요.\n\n스스로를 지키는 데는 익숙하지만 상대는 당신의 진짜 마음을 알아차리기 어려울 수 있어요. 안전하다고 느껴지는 관계에서는 조금씩 솔직한 감정을 보여주는 것도 괜찮아요.",
    },
    {
      stat: "possessive",
      title: "좋아할수록 내 사람이길 바라는 소유형",
      description: "평소에는 크게 티 내지 않아도 연애를 하면 상대에게 특별한 존재이고 싶은 마음이 강해지는 편이에요. 상대가 나를 우선해주거나 다른 사람과는 다른 태도를 보여줄 때 사랑받고 있다고 느끼기 쉬워요.\n\n애인의 인간관계나 혼자 보내는 시간이 예상보다 신경 쓰일 때도 있을 수 있어요. 그만큼 상대와 깊게 연결되고 서로에게 중요한 사람이 되는 관계를 원하는 편이에요.\n\n관계에 애정을 많이 쏟는 만큼 질투나 서운함도 크게 느껴질 수 있어요. 상대를 내 사람이라고 느끼는 것과 서로의 생활을 존중하는 것 사이에서 균형을 잡으면 더 편안하게 사랑할 수 있어요.",
    },
  ],
};

export default testData;
```

## hidden-strength-data.js

```javascript
"use strict";

const testData = {
  id: 39,
  url: "test.html?id=hidden-strength",
  title: "내 성격에서 의외로 강한 부분은?",
  description: "평소에는 잘 드러나지 않지만, 내가 생각보다 잘하는 건 무엇일까?",
  category: "성격",
  showResultType: true,
  stats: [
    { id: "judgment", title: "판단력" },
    { id: "action", title: "실행력" },
    { id: "resilience", title: "회복력" },
    { id: "connection", title: "관계력" },
    { id: "persistence", title: "끈기" },
  ],
  questions: [
    {
      question: "갑자기 예상하지 못한 문제가 생기면 나는?",
      answers: [["주변 상황을 빠르게 파악한다", "judgment"], ["일단 부딪혀보면서 해결한다", "action"], ["감정적으로 흔들리지 않으려고 한다", "resilience"], ["주변 사람들과 역할을 나눈다", "connection"], ["끝까지 포기하지 않고 버틴다", "persistence"]],
    },
    {
      question: "누군가 내 의견을 강하게 반대하면?",
      answers: [["상대 말도 들어보고 다시 생각해본다", "judgment"], ["필요하면 바로 내 의견을 수정한다", "resilience"], ["내 생각이 맞다면 계속 밀고 간다", "persistence"], ["분위기가 너무 틀어지지 않게 조율한다", "connection"], ["말로만 고민하기보다 직접 결과를 보여주려 한다", "action"]],
    },
    {
      question: "처음 해보는 일을 맡게 되면?",
      answers: [["일단 시작하면서 익히는 편이다", "action"], ["비슷한 경험이나 정보를 먼저 찾아본다", "judgment"], ["어렵더라도 쉽게 포기하지 않는다", "persistence"], ["모르는 부분은 주변 사람에게 물어본다", "connection"], ["처음 잘 안돼도 금방 다시 시도한다", "resilience"]],
    },
    {
      question: "힘든 일이 오래 이어질 때 나는?",
      answers: [["하루씩 버티면서 계속 해나간다", "persistence"], ["상황을 바꿀 방법을 찾아본다", "judgment"], ["잠시 쉬고 다시 회복하려 한다", "resilience"], ["주변 사람에게 도움을 요청한다", "connection"], ["계속 움직이면서 해결하려 한다", "action"]],
    },
    {
      question: "여러 사람이 함께 있는 상황에서 문제 생기면?",
      answers: [["누가 뭘 해야 할지 정리한다", "judgment"], ["일단 내가 먼저 움직인다", "action"], ["사람들 분위기를 살피며 조율한다", "connection"], ["일이 꼬여도 쉽게 멘붕 오지 않는다", "resilience"], ["끝까지 책임지고 마무리하려 한다", "persistence"]],
    },
    {
      question: "실패한 뒤 내 모습과 가장 가까운 건?",
      answers: [["왜 실패했는지 분석한다", "judgment"], ["바로 다시 해본다", "action"], ["시간이 지나면 금방 털고 일어난다", "resilience"], ["주변 사람들과 이야기하면서 정리한다", "connection"], ["될 때까지 계속 시도한다", "persistence"]],
    },
    {
      question: "주변 사람들이 나에게 자주 맡기는 역할은?",
      answers: [["결정하거나 정리하는 역할", "judgment"], ["먼저 시작하고 추진하는 역할", "action"], ["분위기를 풀거나 사람 사이를 연결하는 역할", "connection"], ["힘든 상황에서도 중심을 잡는 역할", "resilience"], ["끝까지 책임지고 마무리하는 역할", "persistence"]],
    },
    {
      question: "계획이 틀어졌을 때 나는?",
      answers: [["새로운 계획을 빠르게 세운다", "judgment"], ["일단 가능한 것부터 한다", "action"], ["잠깐 흔들려도 금방 다시 적응한다", "resilience"], ["같이 있는 사람들과 방향을 맞춘다", "connection"], ["원래 목표는 쉽게 포기하지 않는다", "persistence"]],
    },
    {
      question: "누군가 힘들어하고 있다면?",
      answers: [["상황을 정리해서 현실적인 조언을 해준다", "judgment"], ["바로 도울 수 있는 행동을 한다", "action"], ["감정적으로 무너지지 않게 옆에서 버텨준다", "resilience"], ["이야기를 들어주고 사람 사이를 연결해준다", "connection"], ["쉽게 포기하지 않도록 끝까지 함께해준다", "persistence"]],
    },
    {
      question: "중요한 일을 앞두고 긴장될 때 나는?",
      answers: [["해야 할 일을 차분하게 정리한다", "judgment"], ["생각이 많아지기 전에 먼저 시작한다", "action"], ["긴장해도 시간이 지나면 금방 안정된다", "resilience"], ["주변 사람과 이야기하면 마음이 편해진다", "connection"], ["힘들어도 끝까지 버텨서 해낸다", "persistence"]],
    },
    {
      question: "내가 가장 싫어하는 상황은?",
      answers: [["기준 없이 아무렇게나 결정하는 상황", "judgment"], ["생각만 하고 아무도 움직이지 않는 상황", "action"], ["작은 일 하나로 완전히 무너지는 상황", "resilience"], ["서로 말이 안 통하고 분위기가 틀어진 상황", "connection"], ["조금 힘들다고 금방 포기하는 상황", "persistence"]],
    },
    {
      question: "사람들에게 잘 보이지 않는 내 모습은?",
      answers: [["머릿속으로 생각보다 많은 걸 계산한다", "judgment"], ["마음먹으면 행동이 생각보다 빠르다", "action"], ["힘든 일을 겪어도 다시 돌아오는 힘이 있다", "resilience"], ["사람들의 기분이나 분위기를 생각보다 잘 읽는다", "connection"], ["겉으로 티 안 내도 오래 버티는 힘이 있다", "persistence"]],
    },
    {
      question: "일이 잘 안 풀릴 때 마지막까지 남는 건?",
      answers: [["해결책을 찾으려는 생각", "judgment"], ["뭐라도 해보려는 행동", "action"], ["다시 괜찮아질 거라는 마음", "resilience"], ["주변 사람들과 함께하려는 마음", "connection"], ["끝까지 포기하지 않는 마음", "persistence"]],
    },
    {
      question: "내가 생각보다 잘하는 것은?",
      answers: [["복잡한 상황에서 핵심을 찾는 것", "judgment"], ["말보다 먼저 움직이는 것", "action"], ["힘든 일이 지나간 뒤 다시 일어나는 것", "resilience"], ["사람들과 자연스럽게 맞춰가는 것", "connection"], ["오래 걸려도 끝까지 해내는 것", "persistence"]],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map(([text, stat]) => ({ text, stat, score: 1 })),
  })),
  results: [
    {
      stat: "judgment",
      title: "복잡할수록 빛나는 판단력",
      description: "당신은 평소에는 크게 티 나지 않아도 상황을 정리하고 핵심을 찾는 힘이 강한 편이에요. 여러 가지 일이 한꺼번에 생겨도 무엇부터 해야 할지 비교적 빠르게 파악하는 타입이에요.\n\n감정에만 끌려가기보다 상황을 한 번 떨어져서 보는 능력이 있고, 결정이 필요한 순간에 생각보다 침착해질 수 있어요. 그래서 주변 사람들은 중요한 순간에 당신의 의견을 은근히 믿고 따를 가능성이 높아요.\n\n다만 너무 많이 생각하다 보면 결정 전에 에너지를 많이 쓸 수도 있어요. 충분히 판단했다면 내 선택을 믿고 움직여보는 것도 좋아요.",
    },
    {
      stat: "action",
      title: "생각보다 먼저 움직이는 실행력",
      description: "당신은 고민만 오래 하기보다 일단 해보면서 답을 찾는 힘이 강한 편이에요. 완벽하게 준비되지 않아도 필요한 순간에는 먼저 움직이고 경험하면서 방향을 잡는 타입이에요.\n\n새로운 일을 시작하거나 문제가 생겼을 때 주변보다 한발 먼저 행동하는 경우가 많아요. 덕분에 기회를 빠르게 잡거나 답답한 상황을 실제 변화로 연결하는 데 강점이 있어요.\n\n다만 행동이 빠른 만큼 가끔은 중요한 부분을 놓칠 수도 있어요. 시작하기 전에 핵심만 한 번 확인하는 습관을 더하면 실행력이 훨씬 강한 무기가 될 수 있어요.",
    },
    {
      stat: "resilience",
      title: "흔들려도 다시 돌아오는 회복력",
      description: "당신은 힘든 일이 생겨도 완전히 무너진 채 오래 머무르기보다 다시 일상으로 돌아오는 힘이 강한 편이에요. 당장은 속상하고 흔들려도 시간이 지나면 스스로 감정을 정리하고 다시 움직일 수 있는 타입이에요.\n\n예상하지 못한 변화나 실패에서도 생각보다 빠르게 적응하고 새로운 방법을 찾는 편이에요. 겉으로 보기보다 내면이 단단해서 어려운 상황에서 오히려 강해지는 모습이 나타날 수 있어요.\n\n다만 잘 버틴다는 이유로 힘든 감정을 계속 혼자 넘길 필요는 없어요. 쉴 때는 충분히 쉬고 도움을 받을 줄 알면 회복력도 더 오래 유지할 수 있어요.",
    },
    {
      stat: "connection",
      title: "사람 사이에서 빛나는 관계력",
      description: "당신은 생각보다 사람들의 분위기와 감정을 잘 읽고 관계를 부드럽게 이어가는 힘이 강한 편이에요. 누군가 불편해하거나 분위기가 어색해졌을 때 자연스럽게 균형을 맞추는 역할을 할 가능성이 높아요.\n\n사람마다 다른 성향을 파악하고 그에 맞게 소통하는 능력도 좋은 편이에요. 그래서 주변에서는 같이 있으면 편하거나 이야기하기 쉬운 사람으로 느낄 수 있어요.\n\n다만 모두를 편하게 해주려다 보면 내 감정을 뒤로 미룰 수도 있어요. 사람을 챙기는 만큼 내 입장과 필요도 함께 표현하는 것이 좋아요.",
    },
    {
      stat: "persistence",
      title: "조용히 끝까지 가는 끈기",
      description: "당신은 시작할 때 가장 눈에 띄는 사람은 아닐 수 있지만 쉽게 포기하지 않는 힘이 강한 편이에요. 시간이 오래 걸리거나 과정이 힘들어도 한번 중요하다고 생각한 일은 끝까지 붙잡는 타입이에요.\n\n겉으로는 힘들어 보여도 속으로는 계속 버티면서 결국 결과를 만들어내는 경우가 많아요. 그래서 시간이 지날수록 주변에서 믿고 맡길 수 있는 사람이라는 평가를 받을 가능성이 높아요.\n\n다만 끝까지 버티는 것과 무조건 참는 것은 조금 달라요. 방향이 맞는지 한 번씩 확인하면서 힘을 쓰면 당신의 끈기가 더 큰 장점이 될 수 있어요.",
    },
  ],
};

export default testData;
```

## jealousy-data.js

```javascript
"use strict";

const testData = {
  id: 8,
  url: "test.html?id=jealousy",
  shareDescription: "내 질투 지수 결과를 확인해보세요.",
  title: "내 질투심은 정상 범위일까?",
  description: "연애할 때 나는 얼마나 질투하는 편인지 알아보세요.",
  category: "연애/결혼",
  resultLabel: "당신의 질투 지수는",
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
      description: "상대를 꽤 믿고 각자의 인간관계를 존중하는 타입이에요. 웬만한 일에는 크게 흔들리지 않는 편이지만, 불편한 상황까지 무조건 참을 필요는 없어요. 싫은 건 솔직하게 표현해도 괜찮아요.\n\n연락이 조금 늦거나 상대가 다른 사람들과 시간을 보내도 내 생활을 이어가는 편이에요. 서로의 시간을 인정하기 때문에 상대도 관계 안에서 편안함을 느낄 수 있어요.\n\n다만 신경 쓰이지 않는 것과 불편한 감정을 눌러두는 것은 달라요. 마음에 걸리는 일이 있다면 먼저 내 감정을 살피고, 어떤 점이 불편했는지 차분하게 이야기해보세요.",
    },
    {
      min: 17, max: 24,
      title: "적당히 질투하는 편",
      description: "신경 쓰이는 건 있지만 대부분 스스로 조절할 수 있는 편이에요. 관계에 관심은 있으면서도 상대를 지나치게 통제하지 않는 비교적 균형 잡힌 타입이에요.\n\n호감과 관심이 있으니 작은 질투는 느끼지만 바로 의심으로 결론 내리지는 않는 편이에요. 상대의 설명을 듣고 상황을 다시 생각할 여유가 있어 갈등을 조율하기 좋아요.\n\n둘 사이의 기준이 다를 때는 누가 맞는지보다 어디에서 불편함이 생기는지 이야기해보세요. 연락이나 친구 관계에 대한 기대를 미리 나누면 불필요한 오해를 줄일 수 있어요.",
    },
    {
      min: 25, max: 32,
      title: "질투가 꽤 많은 편",
      description: "애인의 이성 관계나 연락 변화에 민감하게 반응하는 편이에요. 혼자 상상하다가 기분이 상하는 경우도 있을 수 있어요. 상대를 확인하려 하기보다 서로 불편한 기준을 미리 대화해보는 게 좋아요.\n\n평소와 다른 말투나 연락 간격을 알아차리면 이유를 계속 생각할 수 있어요. 상대를 소중하게 여기는 마음이 큰 만큼 확인받고 싶어지는 순간도 잦아질 수 있어요.\n\n걱정이 들 때는 실제로 확인한 사실과 내가 상상한 상황을 나눠보세요. 바로 확인하거나 제한하기보다 불안을 말로 전하고, 서로 지킬 수 있는 기준을 함께 정하는 것이 도움이 돼요.",
    },
    {
      min: 33, max: 40,
      title: "질투 과몰입 주의보",
      description: "작은 변화도 쉽게 의심으로 이어질 수 있는 편이에요. 상대를 좋아하는 마음이 큰 만큼 불안도 크게 느끼는 타입이에요. 휴대폰 확인이나 인간관계 통제로 이어지면 서로 피곤해질 수 있으니 주의가 필요해요.\n\n상대의 반응이 내 예상과 다르면 관계에 대한 확신까지 흔들릴 수 있어요. 불안할수록 연락이나 행동을 더 확인하고 싶지만 그 확인이 잠깐의 안심으로만 끝날 수도 있어요.\n\n불안을 느끼는 마음 자체를 탓할 필요는 없어요. 다만 몰래 휴대폰을 보거나 만남을 제한하는 행동보다 내 감정을 설명하는 방법을 선택해주세요. 내 일상과 관계 밖의 즐거움도 챙겨보세요.",
    },
  ],
};

export default testData;
```

## long-term-love-data.js

```javascript
"use strict";

// Vary score positions by question and preserve the order when going back.
const answerOrders = [
  [3,1,4,2], [2,4,1,3], [4,3,2,1], [1,3,2,4], [3,2,1,4],
  [2,1,4,3], [4,2,3,1], [1,4,3,2], [3,4,2,1], [2,3,1,4],
  [4,1,2,3], [1,2,4,3], [3,1,2,4], [2,4,3,1], [4,3,1,2],
];

const testData = {
  id: 47,
  url: "test.html?id=long-term-love",
  title: "나는 장기연애 체질일까?",
  description: "설렘이 익숙함으로 바뀐 뒤에도 나는 관계를 오래 이어갈 수 있을까?",
  category: "연애·결혼",
  resultMetric: { label: "장기연애 체질", normalize: true, useForResult: true },
  questions: [
    {
      question: "연애 초반의 설렘이 조금씩 줄어들기 시작하면?",
      answers: [
        ["편안해지는 과정도 연애의 일부라고 생각한다", 4],
        ["예전 같지 않은 것 같아 조금 아쉽다", 2],
        ["함께하는 방식에 변화를 주면 된다고 생각한다", 3],
        ["마음이 식은 건 아닌지부터 걱정된다", 1],
      ],
    },
    {
      question: "애인과 데이트 패턴이 비슷해졌다면?",
      answers: [
        ["익숙한 데이트도 편하고 좋다", 4],
        ["가끔 새로운 걸 하면 충분하다", 3],
        ["반복되면 점점 재미가 없어진다", 1],
        ["조금 지루하지만 크게 문제라고 생각하지는 않는다", 2],
      ],
    },
    {
      question: "애인에게 예전에는 몰랐던 단점이 보이기 시작하면?",
      answers: [
        ["나와 맞춰갈 수 있는 부분인지 먼저 본다", 4],
        ["조금 실망하지만 시간을 두고 지켜본다", 3],
        ["단점이 계속 신경 쓰이면 마음도 줄어드는 편이다", 1],
        ["웬만한 단점은 서로 있는 거라고 생각한다", 2],
      ],
    },
    {
      question: "크게 싸운 뒤 관계를 계속 이어갈지 고민된다면?",
      answers: [
        ["감정이 가라앉은 뒤 해결할 수 있는 문제인지 생각한다", 4],
        ["싸운 순간에는 헤어지고 싶다는 생각도 든다", 2],
        ["같은 문제가 반복되면 빨리 관계를 정리하는 편이다", 1],
        ["서로 고칠 의지가 있다면 다시 맞춰볼 수 있다", 3],
      ],
    },
    {
      question: "연애가 2~3년 이상 이어진 모습을 상상하면?",
      answers: [
        ["익숙하고 편한 사이가 되는 것도 좋을 것 같다", 4],
        ["잘 맞는 사람이라면 충분히 가능할 것 같다", 3],
        ["너무 익숙해지면 연애 느낌이 사라질 것 같다", 1],
        ["좋긴 하지만 권태기가 조금 걱정된다", 2],
      ],
    },
    {
      question: "애인과 성격이 다른 부분을 발견하면?",
      answers: [
        ["서로 다를 수 있다는 걸 인정하는 편이다", 4],
        ["중요한 부분만 맞으면 괜찮다", 3],
        ["계속 부딪히면 관계를 다시 생각하게 된다", 2],
        ["잘 맞는 사람이라면 웬만한 부분도 비슷해야 한다고 생각한다", 1],
      ],
    },
    {
      question: "애인이 바빠져서 예전보다 자주 만나지 못한다면?",
      answers: [
        ["상황이 나아질 때까지 서로의 생활을 존중한다", 4],
        ["서운하지만 이유가 있다면 이해하려 한다", 3],
        ["만남이 줄면 자연스럽게 마음도 멀어질 것 같다", 1],
        ["관계가 예전 같지 않다고 느껴질 것 같다", 2],
      ],
    },
    {
      question: "연애 중 권태기가 온 것 같다면?",
      answers: [
        ["관계에도 그런 시기가 있다고 생각하고 방법을 찾아본다", 4],
        ["조금 더 지켜보면서 내 마음을 확인한다", 3],
        ["설렘이 사라졌다면 끝이 가까운 것 같다고 느낀다", 1],
        ["예전처럼 돌아가야 한다는 생각에 조급해진다", 2],
      ],
    },
    {
      question: "연애하면서 가장 중요하다고 생각하는 것은?",
      answers: [
        ["시간이 지나도 서로 존중하는 것", 4],
        ["계속 좋아하는 감정을 유지하는 것", 2],
        ["함께 재미있는 경험을 많이 만드는 것", 3],
        ["처음 같은 설렘을 오래 유지하는 것", 1],
      ],
    },
    {
      question: "애인이 힘든 시기를 오래 보내고 있다면?",
      answers: [
        ["내가 감당할 수 있는 범위에서 옆을 지킨다", 4],
        ["처음에는 잘 챙기지만 길어지면 나도 지칠 것 같다", 2],
        ["서로 힘든 상황이면 어느 정도 거리를 둘 수도 있다", 3],
        ["관계까지 무거워지면 계속 만나기 어려울 것 같다", 1],
      ],
    },
    {
      question: "연애 중 혼자만의 시간이 필요해졌다면?",
      answers: [
        ["서로 각자의 시간이 있는 게 오히려 오래가는 데 좋다고 생각한다", 4],
        ["필요한 만큼만 거리를 두고 다시 만나면 된다", 3],
        ["혼자 있는 게 더 편해지면 마음이 식은 것 같아 걱정된다", 2],
        ["연애하면서 혼자 있고 싶은 마음이 커지면 관계를 끝낼 수도 있다", 1],
      ],
    },
    {
      question: "애인과 미래 계획이 조금 다르다는 걸 알게 된다면?",
      answers: [
        ["대화를 통해 맞출 수 있는 부분부터 찾아본다", 4],
        ["중요한 문제라면 충분히 고민해본다", 3],
        ["미래 방향이 다르면 빨리 정리하는 게 낫다고 생각한다", 2],
        ["생각이 다르다는 것 자체가 관계에 큰 영향을 준다", 1],
      ],
    },
    {
      question: "친구가 “연애 오래 하면 재미없지 않아?”라고 묻는다면?",
      answers: [
        ["재미보다 편안함과 신뢰도 중요한 것 같다", 4],
        ["새로운 걸 같이 하면 오래 만나도 괜찮다고 생각한다", 3],
        ["솔직히 오래 만나면 조금 지루할 것 같다", 2],
        ["설렘이 없다면 굳이 계속 만날 이유가 없다고 생각한다", 1],
      ],
    },
    {
      question: "연애 중 문제가 생겼을 때 나는?",
      answers: [
        ["둘이 해결할 방법을 먼저 찾는다", 4],
        ["일단 시간을 갖고 생각을 정리한다", 3],
        ["같은 문제가 반복되면 마음이 빠르게 지친다", 2],
        ["관계가 힘들어지면 끝내는 쪽을 먼저 생각한다", 1],
      ],
    },
    {
      question: "내가 원하는 연애의 모습과 가장 가까운 것은?",
      answers: [
        ["오랜 시간이 지나도 서로 가장 편한 사람인 관계", 4],
        ["안정적이면서 가끔 새로운 재미도 있는 관계", 3],
        ["계속 설레고 강하게 끌리는 관계", 1],
        ["서로 좋을 때까지 부담 없이 만나는 관계", 2],
      ],
    },
  ].map(({ question, answers }, questionIndex) => ({
    question,
    answers: answerOrders[questionIndex].map(score => {
      const [text] = answers.find(answer => answer[1] === score);
      return { text, score };
    }),
  })),
  results: [
    {
      min: 0,
      max: 24,
      title: "설렘이 중요한 단기 몰입형",
      description: "당신은 연애에서 익숙함보다 설렘과 감정의 생생함을 중요하게 느끼는 편이에요. 관계가 반복적으로 느껴지거나 서로에게 익숙해지면 마음이 예전 같지 않다고 느낄 수 있어요.\n\n좋아할 때는 누구보다 크게 몰입하지만 관계가 답답하거나 재미없어지면 마음이 빠르게 멀어질 가능성도 있어요. 억지로 오래 만나는 것보다 지금 서로에게 좋은 관계인지가 더 중요하다고 생각하는 타입이에요.\n\n장기연애를 못하는 사람이라기보다 관계에서 지속적인 자극과 변화를 필요로 하는 편에 가까워요. 오래 만나고 싶다면 익숙함 속에서도 함께 새로운 경험을 만드는 것이 중요해요.",
    },
    {
      min: 25,
      max: 49,
      title: "마음이 맞아야 오래 가는 선택형",
      description: "당신은 누구와도 무조건 오래 만나는 타입은 아니지만 잘 맞는 사람이라면 관계를 이어갈 수 있는 편이에요. 다만 갈등이나 권태기가 반복되면 관계를 유지해야 하는 이유를 다시 생각하게 될 가능성이 있어요.\n\n처음의 설렘도 중요하게 여기지만 시간이 지나면서 생기는 편안함도 어느 정도 받아들일 수 있어요. 상대와의 궁합이나 현재 관계의 만족도가 장기연애 여부에 큰 영향을 주는 타입이에요.\n\n오래 만나는 것 자체를 목표로 하기보다 좋은 관계라면 자연스럽게 오래 이어지는 방식을 선호해요. 문제가 생겼을 때 바로 결론을 내리기보다 한 번 더 대화해보는 것이 관계를 길게 만드는 데 도움이 될 수 있어요.",
    },
    {
      min: 50,
      max: 74,
      title: "설렘과 안정 둘 다 필요한 균형형",
      description: "당신은 연애가 오래되면서 편안해지는 것도 좋아하지만 관계에 적당한 재미와 변화도 필요한 편이에요. 매일 두근거릴 필요는 없어도 서로에게 너무 익숙해져 노력하지 않는 관계는 원하지 않아요.\n\n갈등이나 권태기가 생겨도 바로 끝내기보다 대화하고 해결해보려는 힘이 있는 편이에요. 상대와 각자의 생활을 존중하면서 함께할 수 있다면 꽤 안정적으로 관계를 이어갈 수 있어요.\n\n장기연애에 비교적 잘 맞지만 관계를 당연하게 여기기 시작하면 지루함을 느낄 수도 있어요. 함께 새로운 경험을 만들면서 편안함과 설렘을 적당히 유지하는 연애가 가장 잘 맞아요.",
    },
    {
      min: 75,
      max: 100,
      title: "시간이 지날수록 강해지는 장기연애형",
      description: "당신은 처음의 강한 설렘보다 시간이 지나며 쌓이는 신뢰와 편안함을 중요하게 생각하는 편이에요. 관계가 익숙해지는 것을 사랑이 식었다고 보기보다 서로 가까워지는 과정으로 받아들이는 타입이에요.\n\n갈등이나 권태기가 찾아와도 쉽게 관계를 포기하기보다 해결할 방법을 먼저 찾아보는 편이에요. 서로의 단점이나 다른 생활 방식도 어느 정도 받아들이면서 관계를 오래 유지할 힘이 있어요.\n\n다만 오래 만났다는 이유만으로 힘든 관계까지 무조건 버틸 필요는 없어요. 서로 존중하고 함께 노력하고 있는 관계인지 확인하면서 이어갈 때 당신의 장점이 가장 잘 드러나요.",
    },
  ],
};

export default testData;
```

## lying-data.js

```javascript
"use strict";

const testData = {
  id: 21,
  url: "test.html?id=lying",
  title: "나는 거짓말을 얼마나 잘하는 편일까?",
  description: "거짓말을 하면 바로 티 나는 타입일까, 끝까지 자연스럽게 숨기는 타입일까?",
  category: "성격",
  resultLabel: "당신의 거짓말 지수는",
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
      description: "거짓말을 하면 표정이나 말투에서 티가 나는 편이에요. 숨기려 할수록 오히려 더 어색해질 가능성이 커요.\n\n없는 이야기를 만드는 순간 평소와 다른 긴장감이 표정에 드러날 수 있어요. 말을 맞추려 애쓰기보다 솔직하게 설명하는 쪽이 오히려 편하게 느껴지는 타입이에요.\n\n불편한 질문을 받았다고 꼭 핑계를 만들 필요는 없어요. 말하고 싶지 않은 부분은 지금 이야기하기 어렵다고 표현하면, 거짓말 없이도 내 사생활과 경계를 지킬 수 있어요.",
    },
    {
      min: 17, max: 24,
      title: "어설픈 연기파",
      description: "간단한 핑계 정도는 가능하지만 질문이 길어지면 흔들리는 타입이에요. 가까운 사람에게는 특히 잘 들키는 편이에요.\n\n준비한 한두 마디는 자연스럽게 할 수 있지만 예상하지 못한 질문에는 말투가 흔들릴 수 있어요. 내 평소 모습을 잘 아는 사람에게는 작은 차이도 눈에 띄기 쉬워요.\n\n곤란한 상황을 넘기려다 설명을 계속 덧붙이면 오히려 더 복잡해질 수 있어요. 무리하게 이야기를 이어가기보다 필요한 사실과 말하기 어려운 부분을 구분해서 전해보세요.",
    },
    {
      min: 25, max: 32,
      title: "자연스러운 포커페이스형",
      description: "표정과 말투를 꽤 잘 유지하는 편이에요. 갑작스러운 질문에도 어느 정도 자연스럽게 대응할 수 있어요.\n\n상대의 반응에 바로 당황하지 않고 말의 흐름을 유지하는 데 익숙한 편이에요. 긴장한 상황에서도 표정을 조절하는 능력은 발표나 낯선 자리에서도 도움이 될 수 있어요.\n\n다만 자연스럽게 말할 수 있다는 것과 상대의 신뢰를 지킨다는 것은 별개의 일이에요. 나중에 설명하기 어려운 이야기를 만들기보다 솔직하게 표현할 방법을 먼저 찾아보세요.",
    },
    {
      min: 33, max: 40,
      title: "완벽한 연기파",
      description: "표정 관리, 이야기 유지, 순간 대처까지 상당히 자연스러운 타입이에요. 다만 잘 숨긴다고 해서 거짓말을 자주 하는 게 좋은 건 아니에요.\n\n예상하지 못한 반응에도 침착하게 말을 이어가고, 앞서 한 이야기를 기억하는 편이에요. 상황에 맞춰 표현을 바꾸는 능력이 있어 주변에서는 속마음을 읽기 어렵다고 느낄 수도 있어요.\n\n이 결과는 실제 거짓말 실력을 검증한 평가가 아니에요. 표현을 잘 조절하는 능력을 대화와 발표에 활용하면서, 가까운 관계에서는 사실과 신뢰를 우선하는 태도를 챙겨주세요.",
    },
  ],
};

export default testData;
```

## marriage-values-data.js

```javascript
"use strict";

const testData = {
  id: 22,
  url: "test.html?id=marriage-values",
  title: "나는 사랑만으로 결혼할 수 있을까?",
  description: "결혼에서 사랑과 현실, 나는 어디에 더 가까울까?",
  category: "연애/결혼",
  resultLabel: "당신의 결혼 가치관 지수는",
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
      description: "사랑하는 마음이 충분하다면 현실적인 어려움도 함께 극복할 수 있다고 믿는 편이에요. 결혼에서도 조건보다 사람 자체를 가장 중요하게 보는 타입이에요.\n\n함께하는 사람에 대한 마음과 믿음이 결혼을 결정하는 가장 큰 이유가 될 수 있어요. 조건이 완벽하지 않아도 둘이 노력하면 길이 생길 것이라는 기대가 있는 편이에요.\n\n사랑을 지키기 위해서라도 현실 이야기를 피하지 않는 것이 좋아요. 생활비, 일, 집안일처럼 반복될 문제를 구체적으로 나누면 함께 극복하고 싶은 마음을 실제 계획으로 만들 수 있어요.",
    },
    {
      min: 17, max: 24,
      title: "사랑과 현실의 균형형",
      description: "사랑이 가장 중요하지만 현실도 완전히 무시하지는 않는 편이에요. 서로 노력할 의지가 있다면 부족한 조건은 충분히 맞춰갈 수 있다고 보는 타입이에요.\n\n조건이 부족하다는 이유만으로 가능성을 닫지는 않지만 앞으로 함께 살아갈 방식은 확인하고 싶은 편이에요. 상대의 현재 상황뿐 아니라 문제를 해결하려는 태도를 중요하게 보는 타입이에요.\n\n막연히 잘 맞춰갈 수 있다고 생각하기보다 각자의 기대를 미리 이야기해보세요. 돈 관리나 일의 계획을 구체적으로 나누면 사랑과 현실 사이의 균형을 더 분명하게 잡을 수 있어요.",
    },
    {
      min: 25, max: 32,
      title: "현실도 중요한 편",
      description: "사랑만큼 생활 방식, 경제 상황, 미래 계획도 중요하게 보는 타입이에요. 좋아하는 마음만으로 결혼을 결정하기보다는 실제 함께 살아갈 수 있는지를 꼼꼼하게 생각하는 편이에요.\n\n결혼 이후에도 반복될 생활의 차이를 가볍게 넘기지 않는 편이에요. 소비 습관이나 미래 계획을 확인하면서 서로 편하게 지낼 수 있는 관계인지 생각하는 점이 강점이에요.\n\n현실을 살피는 과정이 상대를 조건으로만 평가하는 시간이 되지 않도록 해주세요. 상황이 달라졌을 때 함께 대화하고 조정할 수 있는지까지 보면 더 넓은 기준으로 판단할 수 있어요.",
    },
    {
      min: 33, max: 40,
      title: "현실 우선형",
      description: "결혼은 사랑만으로 유지되는 관계가 아니라고 보는 편이에요. 경제력, 가치관, 생활 안정 등 현실적인 조건이 맞지 않으면 아무리 사랑해도 결혼을 선택하기 어려운 타입이에요.\n\n불확실한 생활을 감수하기보다 준비된 상황에서 결혼하고 싶은 마음이 큰 편이에요. 감정이 좋아도 경제 계획이나 생활 방식이 맞지 않으면 쉽게 결정하지 않는 타입이에요.\n\n안정을 중요하게 여기는 것은 자연스러운 선택이에요. 다만 모든 조건이 완벽해질 때까지 기다리는 기준은 부담이 될 수 있으니, 꼭 필요한 조건과 함께 맞춰갈 부분을 나눠보세요.",
    },
  ],
};

export default testData;
```

## married-partner-data.js

```javascript
"use strict";

const testData = {
  id: 34,
  url: "test.html?id=married-partner",
  title: "나는 결혼하면 어떤 배우자일까?",
  description: "결혼생활 속에서 나는 어떤 모습으로 살아가게 될까?",
  category: "연애/결혼",
  showResultType: true,
  stats: [
    { id: "practical", title: "현실형" },
    { id: "caring", title: "다정형" },
    { id: "independent", title: "독립형" },
    { id: "energetic", title: "활력형" },
  ],
  questions: [
    {
      question: "배우자가 힘든 일을 겪고 있다면 나는?",
      answers: ["먼저 해결 방법부터 같이 찾아본다", "충분히 들어주고 감정을 달래준다", "필요할 때 옆에 있어주되 스스로 정리할 시간도 준다", "분위기를 바꿔주려고 맛있는 걸 먹거나 바람 쐬러 가자고 한다"],
    },
    {
      question: "주말에 둘 다 특별한 일정이 없다면?",
      answers: ["집안일이나 필요한 일을 먼저 정리하고 싶다", "같이 밥 먹고 소소하게 시간을 보내고 싶다", "각자 하고 싶은 걸 하다가 필요하면 같이 있고 싶다", "어디라도 나가서 재미있는 걸 하고 싶다"],
    },
    {
      question: "생활비를 관리한다면 나는?",
      answers: ["예산을 정하고 계획적으로 관리하고 싶다", "서로 부담되지 않게 합의해서 쓰고 싶다", "공통 비용만 정하고 개인 돈은 각자 관리하고 싶다", "기본만 맞으면 너무 빡빡하게 관리하고 싶진 않다"],
    },
    {
      question: "배우자가 친구들과 여행을 간다고 한다면?",
      answers: ["일정이나 비용만 무리 없으면 괜찮다", "잘 다녀오라고 하면서 필요한 걸 챙겨준다", "서로 각자 여행도 다닐 수 있다고 생각한다", "나도 다음엔 같이 놀러 갈 계획부터 세운다"],
    },
    {
      question: "부부싸움을 했다면 나는?",
      answers: ["원인을 정리하고 해결책을 찾으려 한다", "서로 기분이 풀릴 때까지 대화를 이어간다", "잠깐 각자 시간을 가진 뒤 이야기하고 싶다", "너무 무거워지기 전에 분위기를 풀 방법을 찾는다"],
    },
    {
      question: "배우자가 갑자기 큰돈을 쓰고 싶다고 하면?",
      answers: ["필요성과 형편부터 따져본다", "왜 사고 싶은지 충분히 듣고 같이 결정한다", "개인 돈 범위라면 본인 선택을 존중한다", "우리 생활에 큰 문제만 없다면 가끔은 써도 된다고 본다"],
    },
    {
      question: "결혼 후 가장 이상적인 일상은?",
      answers: ["안정적이고 계획이 잘 잡힌 생활", "서로 자주 대화하고 챙겨주는 생활", "함께 살지만 각자의 삶도 잘 유지하는 생활", "평범한 날에도 재미있는 일이 많은 생활"],
    },
    {
      question: "배우자가 집안일을 깜빡했다면?",
      answers: ["역할을 다시 정하고 다음부터 지키자고 한다", "힘들었나 싶어 내가 먼저 해둘 수도 있다", "매번 그런 게 아니라면 크게 신경 쓰지 않는다", "같이 빨리 끝내고 다른 걸 하자고 한다"],
    },
    {
      question: "배우자가 나와 다른 취미에 푹 빠졌다면?",
      answers: ["생활에 지장만 없으면 괜찮다고 생각한다", "어떤 취미인지 관심을 가져보려고 한다", "서로 각자 좋아하는 게 있는 게 좋다고 생각한다", "재밌어 보이면 나도 한번 같이 해본다"],
    },
    {
      question: "결혼기념일을 보내는 방식으로 가장 끌리는 건?",
      answers: ["미리 계획해서 의미 있게 보내는 것", "편지나 선물처럼 마음을 표현하는 것", "꼭 거창하게 챙기지 않아도 둘이 편하면 된다", "평소 안 해본 데이트나 여행을 하는 것"],
    },
    {
      question: "배우자가 이직이나 새로운 도전을 고민한다면?",
      answers: ["현실적인 조건과 위험을 함께 따져본다", "어떤 선택이든 응원하면서 마음을 들어준다", "본인이 원하는 삶이라면 선택을 존중한다", "새로운 기회라면 한번 해보라고 적극적으로 밀어준다"],
    },
    {
      question: "집에서 함께 보내는 시간이 많아지면?",
      answers: ["생활 루틴이 잘 맞는지가 중요하다", "자주 대화하고 함께하는 시간이 많아서 좋다", "각자 방이나 혼자 있는 시간이 꼭 필요하다", "같이 요리하거나 놀거리를 만들고 싶다"],
    },
    {
      question: "결혼 후 서로에게 가장 중요하다고 생각하는 것은?",
      answers: ["책임감과 안정감", "애정 표현과 배려", "신뢰와 존중", "즐거움과 좋은 추억"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({
      text,
      stat: ["practical", "caring", "independent", "energetic"][index],
      score: 1,
    })),
  })),
  results: [
    {
      stat: "practical",
      title: "안정적인 생활을 만들어가는 현실형 배우자",
      description: "당신은 결혼생활에서 책임감과 안정감을 중요하게 생각하는 배우자예요. 문제가 생기면 감정적으로만 반응하기보다 현실적인 해결 방법을 먼저 찾는 편이에요.\n\n생활비, 집안일, 미래 계획처럼 함께 살아가는 데 필요한 부분을 꼼꼼하게 챙길 가능성이 높아요. 배우자 입장에서는 어려운 일이 생겼을 때 믿고 의지할 수 있는 든든한 사람으로 느껴질 수 있어요.\n\n다만 모든 일을 효율이나 해결 중심으로만 바라보면 상대가 감정적인 공감을 아쉬워할 수도 있어요. 가끔은 답을 찾기보다 상대의 마음을 먼저 들어주는 것도 좋은 결혼생활에 도움이 될 수 있어요.",
    },
    {
      stat: "caring",
      title: "서로를 챙기며 살아가는 다정형 배우자",
      description: "당신은 결혼 후에도 배우자의 감정과 일상을 세심하게 챙기는 편이에요. 작은 변화도 알아차리고 힘들어 보일 때 먼저 말을 건네는 따뜻한 배우자가 될 가능성이 높아요.\n\n함께 밥을 먹거나 하루 이야기를 나누는 것처럼 평범한 일상 속 교감을 중요하게 생각하는 편이에요. 배우자가 사랑받고 있다는 느낌을 꾸준히 받을 수 있는 관계를 만드는 데 강점이 있어요.\n\n다만 상대를 너무 많이 챙기다 보면 정작 내 감정이나 필요를 뒤로 미룰 수도 있어요. 서로를 배려하는 만큼 나도 충분히 챙김받고 있는지 살펴보는 것이 좋아요.",
    },
    {
      stat: "independent",
      title: "함께하면서도 각자의 삶을 지키는 독립형 배우자",
      description: "당신은 결혼했다고 해서 모든 시간과 생활을 반드시 함께해야 한다고 생각하지 않는 편이에요. 서로를 믿고 각자의 취미, 친구, 혼자만의 시간을 존중하는 관계를 편하게 느껴요.\n\n상대를 통제하거나 지나치게 간섭하기보다 한 사람의 독립적인 개인으로 바라보는 편이에요. 덕분에 서로 답답하지 않고 오래 편안하게 지낼 수 있는 관계를 만들 가능성이 높아요.\n\n다만 상대가 애정 표현이나 함께하는 시간을 중요하게 생각한다면 거리감으로 느껴질 수도 있어요. 자유를 존중하면서도 함께하고 싶다는 마음은 충분히 표현해주는 것이 좋아요.",
    },
    {
      stat: "energetic",
      title: "결혼 후에도 재미를 놓치지 않는 활력형 배우자",
      description: "당신은 결혼생활이 반복되는 일상으로만 흘러가는 것을 별로 좋아하지 않는 편이에요. 함께 여행을 가거나 새로운 것을 해보면서 둘만의 재미와 추억을 계속 만들고 싶어 하는 타입이에요.\n\n분위기가 무거워질 때도 기분을 풀어주거나 긍정적인 방향으로 바꾸는 역할을 잘할 가능성이 높아요. 배우자에게는 같이 있으면 지루하지 않고 생활에 활력을 주는 사람으로 느껴질 수 있어요.\n\n다만 재미와 즉흥성을 중요하게 여기다 보면 현실적인 준비가 부족해질 때도 있을 수 있어요. 즐거움 속에서도 필요한 계획과 책임을 함께 챙기면 더 균형 잡힌 배우자가 될 수 있어요.",
    },
  ],
};

export default testData;
```

## mental-recovery-data.js

```javascript
"use strict";

const testData = {
  id: 42,
  url: "test.html?id=mental-recovery",
  title: "내 멘탈 회복 속도는 얼마나 빠를까?",
  description: "힘든 일이 생긴 뒤 나는 얼마나 빨리 다시 원래의 나로 돌아올까?",
  category: "성격",
  questions: [
    {
      question: "하루를 망칠 정도로 기분 나쁜 일이 생겼다면?",
      answers: [
        ["그날은 계속 생각나지만 자고 나면 많이 괜찮아진다", 3],
        ["며칠 동안 계속 떠오른다", 2],
        ["다른 일을 하다 보면 금방 잊는 편이다", 4],
        ["꽤 오래 생각나고 비슷한 상황에서도 다시 떠오른다", 1],
      ],
    },
    {
      question: "중요한 일에서 기대했던 결과를 얻지 못했다면?",
      answers: [
        ["속상하지만 다음 방법을 금방 생각해본다", 4],
        ["한동안 의욕이 떨어진 뒤 다시 시작한다", 2],
        ["충분히 속상해하고 나면 다시 해볼 마음이 생긴다", 3],
        ["다시 도전하는 것 자체가 부담스러워진다", 1],
      ],
    },
    {
      question: "누군가에게 크게 상처받는 말을 들었다면?",
      answers: [
        ["왜 그런 말을 했는지 며칠씩 생각한다", 2],
        ["기분은 나쁘지만 오래 마음에 두지는 않는다", 4],
        ["비슷한 말을 들을까 봐 이후에도 신경 쓰인다", 1],
        ["하루 정도는 마음에 남지만 시간이 지나면 괜찮아진다", 3],
      ],
    },
    {
      question: "계획했던 일이 갑자기 전부 꼬였다면?",
      answers: [
        ["당황하긴 해도 바로 다른 방법을 찾는다", 4],
        ["일단 손 놓고 싶다는 생각부터 든다", 1],
        ["잠깐 정리할 시간을 가진 뒤 다시 움직인다", 3],
        ["그날은 아무것도 하기 싫어질 가능성이 크다", 2],
      ],
    },
    {
      question: "친한 사람과 크게 다퉜다면?",
      answers: [
        ["대화가 끝난 뒤에도 오래 마음이 무겁다", 2],
        ["해결됐다면 비교적 금방 평소처럼 돌아간다", 4],
        ["한동안 어색하지만 시간이 지나면 풀린다", 3],
        ["관계가 다시 괜찮아져도 마음속에 오래 남는다", 1],
      ],
    },
    {
      question: "실수 때문에 주변 사람들에게 피해를 줬다면?",
      answers: [
        ["사과하고 해결할 부분을 처리한 뒤 털어내려고 한다", 4],
        ["계속 내가 왜 그랬는지 자책하게 된다", 1],
        ["며칠 정도는 생각나지만 점점 괜찮아진다", 3],
        ["한동안 자신감이 많이 떨어진다", 2],
      ],
    },
    {
      question: "스트레스가 심했던 하루가 끝난 뒤 나는?",
      answers: [
        ["좋아하는 걸 하거나 쉬면 금방 기분이 풀린다", 4],
        ["집에서도 계속 그 일을 생각한다", 2],
        ["잠을 자고 나면 어느 정도 회복된다", 3],
        ["다음날에도 감정이 그대로 이어지는 경우가 많다", 1],
      ],
    },
    {
      question: "기대했던 약속이나 계획이 갑자기 취소된다면?",
      answers: [
        ["아쉽지만 다른 할 일을 바로 찾는다", 4],
        ["생각보다 크게 실망해서 기분이 오래 간다", 1],
        ["조금 아쉽지만 시간이 지나면 괜찮다", 3],
        ["그날 기분이 꽤 처지는 편이다", 2],
      ],
    },
    {
      question: "누군가 나를 부정적으로 평가했다면?",
      answers: [
        ["필요한 부분만 받아들이고 나머지는 넘긴다", 4],
        ["처음엔 신경 쓰이지만 금방 내 기준을 찾는다", 3],
        ["꽤 오래 그 말을 곱씹는다", 2],
        ["이후 행동까지 위축될 정도로 영향을 받는다", 1],
      ],
    },
    {
      question: "힘든 일이 여러 개 한꺼번에 생기면?",
      answers: [
        ["우선순위를 정해서 하나씩 처리한다", 4],
        ["처음에는 멘붕이지만 조금 지나면 정신을 차린다", 3],
        ["어디서부터 해야 할지 몰라 한동안 멈춘다", 2],
        ["모든 일이 너무 크게 느껴져 쉽게 회복하기 어렵다", 1],
      ],
    },
    {
      question: "크게 실패한 경험이 생겼을 때 나는?",
      answers: [
        ["다음에는 어떻게 할지 생각하는 편이다", 4],
        ["충분히 쉬고 나면 다시 시도할 수 있다", 3],
        ["실패했던 순간이 계속 떠올라 자신감이 떨어진다", 1],
        ["다시 시작하기까지 꽤 긴 시간이 필요하다", 2],
      ],
    },
    {
      question: "기분이 많이 가라앉았을 때 가장 가까운 모습은?",
      answers: [
        ["내 상태를 알아차리고 회복할 방법을 찾는다", 4],
        ["시간이 해결해줄 때까지 조용히 버틴다", 2],
        ["하루 정도 충분히 쉬면 조금씩 괜찮아진다", 3],
        ["한번 가라앉으면 쉽게 빠져나오기 어렵다", 1],
      ],
    },
    {
      question: "예상하지 못한 큰 변화가 생긴다면?",
      answers: [
        ["새로운 상황에 맞게 금방 적응하려 한다", 4],
        ["처음엔 불편하지만 조금씩 익숙해진다", 3],
        ["예전 상황으로 돌아가고 싶다는 생각을 오래 한다", 2],
        ["변화 자체가 큰 스트레스로 오래 남는다", 1],
      ],
    },
    {
      question: "힘든 일을 겪은 뒤 비슷한 상황이 다시 온다면?",
      answers: [
        ["지난 경험 덕분에 오히려 더 잘 대처한다", 4],
        ["조금 긴장하지만 이전보다는 괜찮다", 3],
        ["예전 기억이 떠올라 다시 불안해진다", 1],
        ["시작하기 전부터 걱정이 많이 된다", 2],
      ],
    },
    {
      question: "힘든 시기를 지나고 나면 나는 보통?",
      answers: [
        ["생각보다 금방 평소 생활로 돌아온다", 4],
        ["시간이 조금 필요하지만 결국 원래 페이스를 찾는다", 3],
        ["괜찮아진 뒤에도 한동안 영향을 받는다", 2],
        ["지나간 일도 오래 마음에 남는 편이다", 1],
      ],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map(([text, score]) => ({ text, score })),
  })),
  results: [
    {
      min: 51,
      max: 60,
      title: "넘어져도 금방 일어나는 초고속 회복형",
      description: "힘든 일이 생겨도 비교적 빠르게 감정을 정리하고 다시 일상으로 돌아오는 편이에요. 당장은 속상하거나 흔들려도 그 감정에 오래 머무르기보다 다음 행동을 생각하는 힘이 있어요.\n\n실패나 예상 밖의 변화가 생겨도 새로운 방법을 찾고 상황에 맞춰 움직이는 편이에요. 한 번 힘든 일을 겪고 나면 오히려 다음에는 더 잘 대처하는 모습도 나타날 수 있어요.\n\n다만 빨리 괜찮아지는 만큼 힘든 감정을 충분히 들여다보지 않고 넘길 때도 있을 수 있어요. 잘 회복하는 것과 아무렇지 않은 것은 다르니, 필요할 때는 충분히 쉬어도 괜찮아요.",
    },
    {
      min: 39,
      max: 50,
      title: "흔들려도 제자리로 잘 돌아오는 회복형",
      description: "힘든 일이 생기면 영향을 받기는 하지만 시간이 지나면 비교적 안정적으로 회복하는 편이에요. 속상할 때는 충분히 속상해하면서도 그 감정 때문에 일상이 오래 멈추지는 않는 타입이에요.\n\n문제가 생겼을 때 잠깐 쉬거나 생각을 정리하면 다시 해결할 힘을 찾는 경우가 많아요. 완전히 아무렇지 않은 사람은 아니지만, 스스로 원래 상태로 돌아오는 방법을 어느 정도 알고 있어요.\n\n다만 스트레스가 여러 개 겹치면 평소보다 회복 시간이 길어질 수도 있어요. 내가 지쳤다는 신호가 보일 때 미리 쉬어주면 훨씬 빠르게 균형을 되찾을 수 있어요.",
    },
    {
      min: 27,
      max: 38,
      title: "충분한 시간이 있어야 회복되는 편",
      description: "힘든 일이 생기면 생각보다 감정의 영향을 오래 받는 편이에요. 겉으로는 일상을 이어가더라도 마음속에서는 상황을 계속 되짚거나 신경 쓰고 있을 수 있어요.\n\n특히 실패나 인간관계처럼 나에게 중요한 문제일수록 원래 컨디션으로 돌아오는 데 시간이 필요한 타입이에요. 대신 충분히 생각하고 감정을 정리한 뒤에는 같은 일을 조금 더 단단하게 받아들일 수 있어요.\n\n회복이 느리다고 해서 멘탈이 약하다는 의미는 아니에요. 억지로 빨리 괜찮아지려고 하기보다 나에게 필요한 회복 시간을 충분히 주는 것이 더 잘 맞아요.",
    },
    {
      min: 15,
      max: 26,
      title: "한번 흔들리면 여운이 오래 남는 편",
      description: "힘든 일이 생기면 그 감정이나 기억이 비교적 오래 마음에 남는 편이에요. 문제가 끝난 뒤에도 당시 상황을 다시 떠올리거나 비슷한 일이 생길까 걱정할 수 있어요.\n\n특히 실패나 타인의 말처럼 마음에 크게 닿는 일은 자신감이나 다음 행동에도 영향을 줄 가능성이 있어요. 그래서 다른 사람보다 원래 페이스로 돌아오는 데 조금 더 많은 시간과 에너지가 필요할 수 있어요.\n\n빨리 털어내지 못한다고 스스로를 답답하게 생각할 필요는 없어요. 혼자 버티기보다 충분히 쉬고 편한 사람과 마음을 나누는 것이 회복 속도를 높이는 데 도움이 될 수 있어요.",
    },
  ],
};

export default testData;
```

## mental-strength-data.js

```javascript
"use strict";

const testData = {
  id: 18,
  url: "test.html?id=mental-strength",
  title: "내 멘탈은 얼마나 단단한 편일까?",
  description: "스트레스나 실패 앞에서 나는 얼마나 쉽게 흔들리는 사람일까?",
  category: "성격",
  resultLabel: "당신의 멘탈 단단함 지수는",
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
      description: "예상치 못한 문제나 실패가 생겨도 비교적 빠르게 중심을 되찾는 타입이에요. 감정에 휩쓸리기보다 해결할 방법을 찾는 편이고, 한번 힘든 일을 겪어도 회복하는 속도가 빠른 편이에요.\n\n실패를 내 전체 가치와 연결하기보다 이번에 잘 안 된 부분으로 나누어 보는 편이에요. 예상 밖의 상황에서도 지금 할 수 있는 일을 찾아 일상을 이어가는 힘이 있어요.\n\n잘 버틴다고 해서 피로가 없는 것은 아니에요. 힘든 날에는 해결책을 찾는 일을 잠깐 내려놓고 쉬어도 괜찮아요. 회복을 위한 여유도 오래 단단하게 지내는 데 도움이 돼요.",
    },
    {
      min: 26, max: 33,
      title: "복구형 멘탈",
      description: "스트레스나 실패에 영향을 받긴 하지만 오래 끌지는 않는 편이에요. 힘들 때는 충분히 힘들어하고, 시간이 지나면 다시 자기 페이스를 찾는 비교적 안정적인 타입이에요.\n\n처음에는 속상하거나 흔들려도 휴식과 주변의 도움을 통해 균형을 되찾는 편이에요. 감정을 무조건 참기보다 충분히 느끼고 다시 움직일 수 있다는 점이 장점이에요.\n\n내가 회복하는 데 도움이 되는 방식을 알아두면 더 편해질 수 있어요. 산책, 수면, 대화처럼 나에게 맞는 방법을 챙기고 힘든 시기에는 평소보다 속도를 낮춰보세요.",
    },
    {
      min: 18, max: 25,
      title: "유리주의보",
      description: "일이 잘 풀리지 않거나 예상치 못한 문제가 생기면 감정적으로 영향을 많이 받는 편이에요. 특히 실패나 타인의 평가를 오래 생각하는 경우가 있을 수 있어요. 다만 멘탈이 약하다기보다 회복하는 데 시간이 필요한 타입에 가까워요.\n\n그날의 실수나 다른 사람의 말이 이후의 기분까지 이어질 수 있어요. 상황을 세심하게 돌아보는 장점이 있지만, 이미 지나간 일을 반복해서 생각하면 에너지가 많이 들 수 있어요.\n\n한 번의 실패가 나를 전부 설명하지는 않아요. 사실과 걱정을 나누어 적거나 당장 할 수 있는 작은 일 하나에 집중해보세요. 충분히 쉬면서 내 속도로 회복해도 괜찮아요.",
    },
    {
      min: 10, max: 17,
      title: "초예민 모드",
      description: "스트레스나 실패를 마음속에 오래 가지고 가는 편이에요. 한번 흔들리면 다른 일에도 영향을 받을 가능성이 크고, 스스로를 몰아붙이는 경향도 있을 수 있어요. 혼자 버티기보다 충분히 쉬고 주변 도움을 받는 것도 필요해요.\n\n예상하지 못한 일이 겹치면 마음에 남는 여운이 커서 평소처럼 지내기 어려울 수 있어요. 작은 신호를 잘 느끼는 만큼 피로와 부담도 더 일찍 알아차리는 편일 수 있어요.\n\n억지로 빨리 괜찮아지려고 스스로를 몰아붙이지 않아도 돼요. 일정을 줄이고 편한 사람에게 상황을 나눠보세요. 일상에 어려움이 오래 이어진다면 도움을 구하는 것도 좋은 선택이에요.",
    },
  ],
};

export default testData;
```

## million-followers-data.js

```javascript
"use strict";

const testData = {
  id: 28,
  url: "test.html?id=million-followers",
  title: "나는 하루아침에 100만 팔로워가 생기면 어떻게 변할까?",
  description: "갑자기 모두가 나를 보기 시작한다면, 나는 어떤 사람이 될까?",
  category: "재미",
  resultLabel: "당신의 유명인 변화 지수는",
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
      description: "100만 명이 나를 보고 있어도 내 생활과 기준을 크게 바꾸지 않는 타입이에요. 관심은 반갑지만 유명세 때문에 내가 달라지는 건 별로 원하지 않는 편이에요.\n\n많은 관심이 생겨도 콘텐츠나 생활의 중심을 내 취향에 두려는 편이에요. 다른 사람의 평가 때문에 하루의 계획을 전부 바꾸지 않아 유명세 속에서도 자기 페이스를 지킬 수 있어요.\n\n새로운 기회를 무조건 피할 필요는 없어요. 내 기준에 맞는 협업이나 활동을 골라 경험해보면, 익숙한 생활을 지키면서도 관심이 가져온 좋은 변화를 받아들일 수 있어요.",
    },
    {
      min: 17, max: 24,
      title: "적당히 즐기는 인기 적응형",
      description: "유명해진 상황을 즐기면서도 어느 정도 선을 지킬 줄 아는 편이에요. 좋은 기회는 활용하지만 SNS 숫자가 내 생활의 전부가 되지는 않는 타입이에요.\n\n사람들이 알아봐 주는 상황은 즐겁지만 쉬는 시간과 사생활도 필요하다고 느끼는 편이에요. 기회를 활용하되 모든 반응에 즉시 맞추지 않는 태도가 오래 활동하는 데 도움이 될 수 있어요.\n\n관심이 커질수록 미리 기준을 정해두면 편해져요. 공개할 사생활의 범위나 광고를 선택하는 조건을 생각해두면, 갑자기 제안이 많아져도 내 속도로 결정할 수 있어요.",
    },
    {
      min: 25, max: 32,
      title: "셀럽 본능이 깨어나는 성장형",
      description: "사람들의 관심이 커질수록 더 잘하고 싶어지는 타입이에요. 반응, 조회수, 콘텐츠 성과에도 꽤 민감하고 유명세를 새로운 기회로 적극 활용하는 편이에요.\n\n좋은 반응이 오면 다음 콘텐츠를 더 잘 만들고 싶어지는 편이에요. 새로운 사람을 만나고 기회를 넓히는 데 적극적이라 변화한 환경에서 빠르게 성장할 가능성이 있어요.\n\n조회수가 낮은 날을 내 가치가 낮아진 날로 받아들이지는 말아주세요. 성과를 참고하되 내 취향과 휴식도 남겨두면 반응에 휘둘리는 부담을 줄이면서 활동을 이어갈 수 있어요.",
    },
    {
      min: 33, max: 40,
      title: "100만 팔로워 풀장착 셀럽형",
      description: "100만 팔로워가 생기는 순간 생활 자체가 확 달라질 가능성이 큰 타입이에요. 콘텐츠, 인맥, 광고, 이미지 관리까지 적극적으로 챙기면서 유명세를 제대로 즐길 것 같아요. 다만 숫자와 반응에 너무 끌려다닐 가능성도 있어요.\n\n관심이 커지는 만큼 이미지와 콘텐츠를 관리하는 데 많은 에너지를 쓸 수 있어요. 성장을 놓치고 싶지 않아 쉬는 순간에도 다음 반응과 기회를 생각하게 될 가능성이 있어요.\n\n유명세를 즐기더라도 생활 전체를 숫자에 맡기지는 않는 것이 좋아요. 댓글을 확인하는 시간과 쉬는 시간을 구분하고, 화면 밖에서도 나를 편하게 대해주는 관계를 챙겨보세요.",
    },
  ],
};

export default testData;
```

## mood-swings-data.js

```javascript
"use strict";

// Keep the shuffled order stable when returning to a question.
const answerOrders = [
  [2,0,3,1], [1,3,0,2], [3,2,1,0], [0,2,1,3], [2,1,0,3],
  [1,0,3,2], [3,1,2,0], [0,3,2,1], [2,3,1,0], [1,2,0,3],
  [3,0,1,2], [0,1,3,2], [2,0,1,3], [1,3,2,0], [3,2,0,1],
];

const testData = {
  id: 46,
  url: "test.html?id=mood-swings",
  title: "나는 감정 기복이 큰 사람일까?",
  description: "내 기분은 얼마나 자주, 얼마나 크게 흔들리는 편일까?",
  category: "성격",
  resultMetric: { label: "감정 기복", normalize: true, useForResult: true },
  questions: [
    {
      question: "아침 기분이 좋았는데 사소하게 기분 나쁜 일이 생기면?",
      answers: ["금방 다시 평소 기분으로 돌아온다", "잠깐 신경 쓰이지만 오래 가지 않는다", "생각보다 기분이 꽤 오래 가라앉는다", "그 일 하나로 하루 전체 기분이 달라진다"],
    },
    {
      question: "누군가 평소보다 차갑게 대하면?",
      answers: ["별일 아니라고 생각하고 넘긴다", "조금 신경 쓰이지만 금방 잊는다", "내가 뭘 잘못했나 계속 생각하게 된다", "기분이 확 가라앉고 다른 일에도 영향을 받는다"],
    },
    {
      question: "좋은 일이 생겼을 때 나는?",
      answers: ["기분은 좋지만 평소랑 크게 다르지 않다", "하루 정도 기분 좋게 보내는 편이다", "평소보다 말이나 행동이 확 밝아진다", "기분이 크게 올라가고 들뜬 상태가 오래간다"],
    },
    {
      question: "계획이 갑자기 틀어지면?",
      answers: ["새로운 계획을 세우면 그만이라고 생각한다", "조금 아쉽지만 금방 적응한다", "생각보다 짜증이 나고 기분이 오래 남는다", "갑자기 아무것도 하기 싫어질 정도로 기분이 바뀐다"],
    },
    {
      question: "내가 기분이 안 좋을 때 주변 사람들은?",
      answers: ["거의 눈치채지 못한다", "가까운 사람은 조금 알아차린다", "표정이나 말투에서 꽤 티가 난다", "내가 말하지 않아도 대부분 바로 알아차린다"],
    },
    {
      question: "하루 동안 내 기분 변화를 돌아보면?",
      answers: ["아침부터 저녁까지 크게 비슷하다", "한두 번 정도 기분이 바뀌는 편이다", "상황에 따라 기분이 여러 번 달라진다", "같은 날에도 좋았다가 싫었다가 크게 반복된다"],
    },
    {
      question: "기대하던 일이 취소되면?",
      answers: ["아쉽지만 바로 다른 일을 찾는다", "조금 아쉬워하다가 금방 괜찮아진다", "한동안 기분이 처지는 편이다", "하루 전체가 망한 것처럼 느껴질 수 있다"],
    },
    {
      question: "누군가 나를 칭찬하면?",
      answers: ["고맙긴 하지만 기분 변화는 크지 않다", "기분이 좋아지고 자신감이 조금 올라간다", "그날 하루가 꽤 좋아지는 편이다", "기분이 확 좋아지고 다른 일까지 잘될 것 같다"],
    },
    {
      question: "반대로 누군가 나를 비판하면?",
      answers: ["필요한 부분만 듣고 넘긴다", "잠깐 기분은 나쁘지만 오래 가지 않는다", "계속 생각나고 자신감이 조금 떨어진다", "기분이 크게 무너지고 다른 일까지 하기 싫어진다"],
    },
    {
      question: "피곤한 날 내 감정은?",
      answers: ["평소와 크게 다르지 않다", "조금 예민해지는 정도다", "사소한 일에도 짜증이나 서운함이 커진다", "평소라면 넘길 일에도 감정이 확 터질 수 있다"],
    },
    {
      question: "사람들과 즐겁게 놀다가 집에 돌아온 뒤에는?",
      answers: ["비슷한 기분이 계속 이어진다", "조금 차분해지는 정도다", "갑자기 허전하거나 기분이 떨어질 때가 있다", "방금 전까지 즐거웠는데 이유 없이 확 가라앉기도 한다"],
    },
    {
      question: "기분이 안 좋을 때 해야 할 일이 생기면?",
      answers: ["감정과 할 일을 분리해서 하는 편이다", "조금 힘들어도 해야 할 건 한다", "집중이 잘 안 되고 속도가 떨어진다", "감정 때문에 해야 할 일을 거의 못 할 때도 있다"],
    },
    {
      question: "누군가에게 서운한 일이 생기면?",
      answers: ["바로 이야기하거나 혼자 금방 정리한다", "몇 시간 정도는 신경 쓰인다", "하루 이상 생각나는 경우가 많다", "서운함이 쌓이면 애정이나 관계 자체가 갑자기 달라 보인다"],
    },
    {
      question: "내가 기분 좋을 때와 안 좋을 때의 모습은?",
      answers: ["주변에서 크게 차이를 느끼기 어렵다", "말수나 분위기가 조금 달라지는 정도다", "말투, 표정, 행동이 꽤 달라진다", "거의 다른 사람처럼 느껴질 만큼 차이가 크다"],
    },
    {
      question: "내 감정에 대해 가장 가까운 생각은?",
      answers: ["기분은 변해도 금방 중심을 찾는 편이다", "상황에 따라 흔들리지만 크게 걱정할 정도는 아니다", "감정에 따라 하루 컨디션이 꽤 달라지는 편이다", "내 감정을 나도 예측하기 어려울 때가 많다"],
    },
  ].map(({ question, answers }, questionIndex) => ({
    question,
    answers: answerOrders[questionIndex].map(index => ({ text: answers[index], score: index + 1 })),
  })),
  results: [
    {
      min: 0,
      max: 24,
      title: "감정 변화가 크지 않은 안정형",
      description: "당신은 좋은 일이나 나쁜 일이 생겨도 감정이 크게 출렁이는 편은 아니에요. 기분이 변하더라도 비교적 빠르게 중심을 찾고 일상으로 돌아오는 힘이 있어요.\n\n감정과 해야 할 일을 어느 정도 분리할 수 있어서 주변에서는 차분하고 안정적인 사람으로 보일 가능성이 높아요. 사소한 일 하나 때문에 하루 전체가 크게 흔들리는 경우도 많지 않은 편이에요.\n\n다만 감정 변화가 적다고 해서 감정이 없는 것은 아니에요. 속으로 넘기는 일이 많다면 가끔은 내 기분을 충분히 들여다보는 것도 좋아요.",
    },
    {
      min: 25,
      max: 49,
      title: "적당히 흔들리는 균형형",
      description: "상황에 따라 기분이 달라지기는 하지만 감정에 완전히 휩쓸리는 편은 아니에요. 좋은 일이 있으면 기분이 올라가고 속상한 일이 있으면 잠시 가라앉는 자연스러운 범위에 가까워요.\n\n감정이 흔들려도 시간이 지나면 다시 평소 상태로 돌아오는 편이고 일상에 미치는 영향도 크지 않아요. 주변 사람들도 당신의 기분 변화를 어느 정도 알아차릴 수 있지만 크게 부담스러울 정도는 아니에요.\n\n다만 피곤하거나 스트레스가 쌓인 날에는 평소보다 감정 변화가 커질 수 있어요. 내 컨디션이 좋지 않을 때는 중요한 판단을 조금 미뤄도 괜찮아요.",
    },
    {
      min: 50,
      max: 74,
      title: "기분에 영향을 꽤 많이 받는 편",
      description: "당신은 주변 상황이나 사람의 반응에 따라 감정이 비교적 크게 움직이는 편이에요. 좋은 일이 생기면 확 밝아지고 반대로 서운하거나 힘든 일이 생기면 기분이 오래 남을 수 있어요.\n\n감정이 올라가거나 내려갈 때 말투나 행동에도 자연스럽게 변화가 나타날 가능성이 높아요. 특히 피곤하거나 스트레스가 많은 시기에는 사소한 일에도 평소보다 예민하게 반응할 수 있어요.\n\n감정이 풍부한 만큼 주변 분위기를 잘 느끼고 공감하는 힘도 큰 편이에요. 다만 순간적인 기분이 내 하루 전체를 결정하지 않도록 잠깐 거리를 두는 연습도 도움이 될 수 있어요.",
    },
    {
      min: 75,
      max: 100,
      title: "감정의 파도가 큰 편",
      description: "당신은 좋은 일과 나쁜 일에 대한 감정 반응이 꽤 크고 빠른 편이에요. 같은 하루 안에서도 상황에 따라 기분이 크게 올라갔다가 갑자기 가라앉는 경험을 할 수 있어요.\n\n감정 상태가 말투나 행동, 집중력에도 영향을 주기 쉬워서 주변에서도 기분 변화를 빠르게 알아차릴 가능성이 높아요. 특히 스트레스나 피로가 쌓이면 평소보다 감정 조절이 더 어려워질 수 있어요.\n\n그만큼 즐거움이나 설렘 같은 긍정적인 감정도 깊게 느낄 수 있는 타입이에요. 감정이 크게 움직일 때 바로 행동하기보다 잠깐 시간을 두면 훨씬 편하게 균형을 잡을 수 있어요.",
    },
  ],
};

export default testData;
```

## overseas-move-data.js

```javascript
"use strict";

const answerOrders = [
  [2,4,1,0,3], [3,0,2,4,1], [1,3,4,2,0], [4,2,0,3,1], [0,1,3,4,2],
  [3,2,1,0,4], [1,4,0,3,2], [4,0,3,2,1], [2,3,4,1,0], [0,4,2,1,3],
  [4,1,2,3,0], [2,0,4,3,1], [0,3,1,2,4], [3,1,0,4,2], [1,2,3,0,4],
];

const testData = {
  id: 49,
  url: "test.html?id=overseas-move",
  title: "갑자기 해외 이민 기회가 생기면 나는?",
  description: "익숙한 삶을 떠나 완전히 새로운 나라에서 살 기회가 생긴다면 나는 어떤 선택을 할까?",
  category: "재미",
  showResultType: true,
  stats: [
    { id: "adventure", title: "모험형" },
    { id: "practical", title: "현실검토형" },
    { id: "relationships", title: "관계중심형" },
    { id: "stability", title: "안정형" },
    { id: "exploration", title: "탐색형" },
  ],
  questions: [
    {
      question: "해외에서 5년 이상 살 수 있는 기회가 생겼다는 말을 들으면?",
      answers: ["설레면서 바로 가고 싶다는 생각부터 든다", "일단 조건부터 자세히 알아본다", "가족이나 가까운 사람들과 떨어지는 게 가장 걱정된다", "지금 생활을 굳이 버려야 하나 싶다", "몇 달 정도 살아보고 결정하고 싶다"],
    },
    {
      question: "이민 갈 나라가 내가 한 번도 가보지 않은 곳이라면?",
      answers: ["오히려 더 궁금하고 기대된다", "생활비, 치안, 일자리부터 찾아본다", "현지에 아는 사람이 있는지가 중요하다", "익숙하지 않은 곳이라 부담이 커진다", "직접 가서 분위기를 먼저 경험해보고 싶다"],
    },
    {
      question: "지금 가진 직장이나 커리어를 어느 정도 포기해야 한다면?",
      answers: ["더 좋은 기회가 있다면 다시 시작할 수도 있다", "장기적으로 이득인지 계산해본다", "혼자 결정하기보다 가족이나 연인과 상의한다", "지금까지 쌓은 걸 버리는 건 너무 아깝다", "휴직이나 단기 체류처럼 돌아올 방법을 먼저 찾는다"],
    },
    {
      question: "현지 언어를 잘하지 못한다면?",
      answers: ["살다 보면 어떻게든 늘 거라고 생각한다", "출국 전부터 공부 계획을 세운다", "말이 안 통하는 상태로 사람들과 떨어질까 걱정된다", "이것 때문에 이민 자체를 망설일 것 같다", "일단 짧게 살아보며 내가 적응 가능한지 확인한다"],
    },
    {
      question: "새로운 나라에서 아는 사람이 한 명도 없다면?",
      answers: ["새로운 사람을 만나면 된다고 생각한다", "커뮤니티나 생활 정보를 미리 찾아본다", "혼자라는 느낌이 가장 힘들 것 같다", "이민을 다시 고민하게 될 것 같다", "처음에는 단기 거주로 적응해보고 싶다"],
    },
    {
      question: "가족이 “굳이 그렇게 멀리 가야 해?”라고 반대한다면?",
      answers: ["결국 내 인생이니 내가 원하는 쪽을 선택한다", "장단점을 설명하고 현실적으로 설득해본다", "가족이 너무 힘들어하면 마음이 흔들릴 것 같다", "반대가 심하면 그냥 남는 것도 생각한다", "일단 몇 달만 가보겠다고 제안한다"],
    },
    {
      question: "이민 후 첫해 생활이 생각보다 힘들다면?",
      answers: ["원래 처음은 힘든 거라고 생각하고 버틴다", "문제를 정리하고 해결 방법을 하나씩 찾는다", "가족이나 친구가 너무 보고 싶어질 것 같다", "괜히 왔다는 생각이 자주 들 것 같다", "일정 기간 더 살아본 뒤 계속 있을지 판단한다"],
    },
    {
      question: "해외에서 지금보다 수입은 조금 줄지만 삶의 여유가 늘어난다면?",
      answers: ["새로운 삶 자체가 마음에 들면 괜찮다", "생활비까지 계산해서 실질적으로 괜찮은지 본다", "함께 갈 사람이 있다면 충분히 고려한다", "수입까지 줄어든다면 굳이 갈 이유가 없다고 느낀다", "직접 살아본 뒤 만족도를 보고 결정하고 싶다"],
    },
    {
      question: "이민을 고민할 때 내가 가장 먼저 검색할 것 같은 건?",
      answers: ["여행지, 문화, 재미있는 생활 모습", "집값, 월급, 세금, 의료, 비자", "한인 커뮤니티나 가족 방문 방법", "한국과 비교한 불편한 점", "한 달 살기 후기나 실제 거주 후기"],
    },
    {
      question: "해외에서 완전히 다른 문화에 적응해야 한다면?",
      answers: ["새로운 문화에 맞춰 사는 것도 재미있을 것 같다", "이해해야 할 규칙부터 차근차근 배운다", "사람들과 정서적으로 잘 맞을지가 가장 중요하다", "익숙한 방식대로 살 수 없는 게 스트레스일 것 같다", "직접 생활하면서 나와 맞는지 판단한다"],
    },
    {
      question: "한국에 있는 친구들과 자연스럽게 멀어질 수도 있다면?",
      answers: ["진짜 친한 사람은 멀리 있어도 남는다고 생각한다", "연락이나 방문 계획을 미리 생각해둔다", "인간관계가 멀어지는 게 가장 아쉽다", "이 부분 때문에 이민을 크게 고민할 것 같다", "살아보면서 실제로 얼마나 힘든지 보고 판단한다"],
    },
    {
      question: "이민 생활이 예상보다 너무 잘 맞는다면?",
      answers: ["아예 정착하는 것도 바로 생각해볼 수 있다", "장기비자, 집, 커리어까지 구체적으로 계획한다", "가족이나 가까운 사람도 함께할 방법을 찾는다", "그래도 한국으로 돌아올 가능성은 열어두고 싶다", "몇 년 더 살아본 뒤 최종 결정하고 싶다"],
    },
    {
      question: "반대로 이민 생활이 너무 안 맞는다면?",
      answers: ["실패라고 생각하지 않고 다른 곳을 찾아볼 수도 있다", "손해를 최소화해서 돌아갈 방법을 찾는다", "한국에 있는 사람들이 더 그리워질 것 같다", "역시 원래 살던 곳이 낫다고 느낄 것 같다", "정해둔 기간까지만 살아보고 판단한다"],
    },
    {
      question: "해외 이민에서 나에게 가장 중요한 조건은?",
      answers: ["새로운 경험과 가능성", "직업, 돈, 생활 환경", "함께할 사람과 인간관계", "안정적인 생활과 익숙함", "언제든 선택을 바꿀 수 있는 자유"],
    },
    {
      question: "결국 선택해야 하는 날이 왔다면?",
      answers: ["마음이 끌리면 과감하게 떠난다", "모든 조건을 비교한 뒤 결정한다", "소중한 사람들과의 관계를 기준으로 결정한다", "지금 생활이 충분히 괜찮다면 남는다", "가능하다면 먼저 살아보고 최종 선택한다"],
    },
  ].map(({ question, answers }, questionIndex) => ({
    question,
    answers: answerOrders[questionIndex].map(index => ({
      text: answers[index],
      stat: ["adventure", "practical", "relationships", "stability", "exploration"][index],
      score: 1,
    })),
  })),
  results: [
    {
      stat: "adventure",
      title: "기회가 생기면 일단 떠나보고 싶은 모험형",
      description: "당신은 익숙한 환경을 떠나는 것보다 새로운 삶을 경험해보지 못하는 것을 더 아쉬워하는 편이에요. 좋은 기회가 생기면 완벽하게 준비될 때까지 기다리기보다 직접 부딪혀보고 싶은 마음이 커요.\n\n낯선 문화와 새로운 사람을 만나는 과정에서도 두려움보다 호기심을 먼저 느낄 가능성이 높아요. 한번뿐인 인생이라면 다양한 곳에서 살아보는 것도 충분히 가치 있다고 생각하는 타입이에요.\n\n다만 새로운 경험에 대한 기대만으로 중요한 현실 조건을 놓칠 수도 있어요. 떠나기 전 최소한의 생활비와 비자, 커리어 계획 정도는 확인해두면 훨씬 자유롭게 도전할 수 있어요.",
    },
    {
      stat: "practical",
      title: "설렘보다 조건부터 따져보는 현실검토형",
      description: "당신은 해외 이민 자체를 싫어하지는 않지만 좋은 기회라는 이유만으로 바로 결정하지는 않는 편이에요. 직업, 수입, 주거, 비자처럼 실제 생활에 영향을 주는 조건을 충분히 확인해야 마음이 움직여요.\n\n감정적인 기대보다 장기적으로 내 삶에 어떤 변화가 생길지를 중요하게 보는 타입이에요. 조건만 충분히 좋다면 오히려 다른 사람보다 체계적으로 준비해서 안정적으로 정착할 가능성이 높아요.\n\n다만 모든 위험을 없앤 뒤 결정하려 하면 좋은 기회를 오래 고민하다 놓칠 수도 있어요. 필수 조건과 감수 가능한 위험을 구분해두면 선택이 조금 더 쉬워질 수 있어요.",
    },
    {
      stat: "relationships",
      title: "어디서 사느냐보다 누구와 사느냐가 중요한 관계중심형",
      description: "당신은 새로운 나라에서 살아보는 것에도 관심이 있지만 사람과의 관계가 선택에 큰 영향을 주는 편이에요. 가족이나 연인, 친한 친구들과 멀어지는 상황을 생각하면 기대보다 걱정이 먼저 커질 수 있어요.\n\n좋은 직장과 환경이 있어도 혼자 모든 걸 시작해야 한다면 쉽게 결정하기 어려울 가능성이 높아요. 반대로 함께할 사람이 있거나 가까운 사람들의 지지가 있다면 예상보다 과감하게 움직일 수도 있어요.\n\n당신에게 이민은 장소를 바꾸는 문제라기보다 인간관계와 생활 전체를 바꾸는 선택에 가까워요. 떠난 뒤에도 소중한 관계를 유지할 방법을 미리 만들어두면 훨씬 편하게 새로운 삶을 시작할 수 있어요.",
    },
    {
      stat: "stability",
      title: "익숙하고 안정적인 삶이 더 중요한 안정형",
      description: "당신은 새로운 기회가 흥미롭게 느껴져도 지금까지 만들어온 생활을 쉽게 내려놓지는 않는 편이에요. 익숙한 환경과 직장, 사람들처럼 이미 안정적으로 자리 잡은 것들의 가치를 크게 생각해요.\n\n해외생활의 재미보다 언어와 문화, 직업처럼 달라지는 부분에서 오는 불확실성을 더 크게 느낄 수 있어요. 현재 생활이 충분히 만족스럽다면 굳이 큰 변화를 만들어야 할 이유를 찾기 어려운 타입이에요.\n\n변화를 선택하지 않는 것도 충분히 하나의 선택이에요. 다만 관심이 계속 남는다면 이민처럼 큰 결정을 하기 전에 짧은 해외생활부터 경험해보는 것도 좋아요.",
    },
    {
      stat: "exploration",
      title: "직접 살아본 뒤 결정하고 싶은 탐색형",
      description: "당신은 해외 이민에 관심은 있지만 한 번의 결정으로 모든 것을 바꾸는 방식에는 부담을 느끼는 편이에요. 가능하다면 몇 달이나 1년 정도 직접 살아보고 나와 맞는 생활인지 확인하고 싶어 해요.\n\n남들의 후기나 조건도 참고하지만 결국 내가 실제로 느끼는 만족도가 가장 중요한 타입이에요. 그래서 처음부터 완전한 정착을 선택하기보다 여러 가능성을 열어두는 방식을 선호할 가능성이 높아요.\n\n신중하면서도 새로운 경험 자체를 포기하지 않는 것이 당신의 장점이에요. 선택을 미루는 데 그치지 않고 작은 경험이라도 직접 해본다면 나에게 맞는 답을 훨씬 빨리 찾을 수 있어요.",
    },
  ],
};

export default testData;
```

## relationship-control-data.js

```javascript
"use strict";

const testData = {
  id: 24,
  url: "test.html?id=relationship-control",
  title: "나는 연애할 때 상대를 얼마나 통제하려는 편일까?",
  description: "걱정과 관심일까, 아니면 상대를 내 기준에 맞추려는 걸까?",
  category: "연애/결혼",
  resultLabel: "당신의 연애 통제 성향 지수는",
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
      description: "연애를 해도 서로의 생활과 선택을 존중하는 편이에요. 상대를 바꾸려고 하기보다 각자의 영역을 인정하는 타입이에요.\n\n상대가 나와 다른 취향이나 인간관계를 갖고 있어도 자연스럽게 받아들이는 편이에요. 연애를 시작했다고 각자의 선택권이 줄어드는 것은 아니라고 생각해 편한 관계를 만들 수 있어요.\n\n자유를 존중하더라도 필요한 배려와 약속은 함께 정할 수 있어요. 내가 원하는 연락이나 함께 보내는 시간을 솔직하게 말하면, 존중과 관심을 동시에 전할 수 있어요.",
    },
    {
      min: 17, max: 24,
      title: "적당한 합의형",
      description: "상대를 통제하려 하지는 않지만 연인 사이에 어느 정도 기준과 배려는 필요하다고 보는 편이에요. 불편한 부분은 대화로 조율하려는 타입이에요.\n\n연애에서 중요한 기준이 생겨도 혼자 정하기보다 서로 이야기하고 맞추려는 편이에요. 내 불편함을 표현하면서도 상대가 다른 생각을 할 여지를 남겨두는 점이 장점이에요.\n\n서로 동의한 약속도 상황이 달라지면 다시 조정할 수 있어요. 한쪽만 계속 양보하고 있지는 않은지 확인하고, 둘 다 감당할 수 있는 기준을 찾아보세요.",
    },
    {
      min: 25, max: 32,
      title: "간섭이 꽤 많은 편",
      description: "상대의 행동이 관계에 영향을 준다고 생각해서 연락, 인간관계, 생활 방식 등에 관여하는 편이에요. 본인은 배려를 원한다고 느껴도 상대에게는 간섭처럼 느껴질 수 있어요.\n\n걱정되는 상황을 줄이기 위해 상대의 행동에 구체적인 요청을 할 수 있어요. 연락이나 만남의 방식이 달라지면 관계에 대한 배려가 부족하다고 느껴질 가능성도 있어요.\n\n불편함을 말하는 것과 상대의 선택을 대신 정하는 것은 구분해보면 좋아요. 하지 말라는 요구부터 꺼내기보다 어떤 감정이 드는지 설명하고 상대의 입장도 들어보세요.",
    },
    {
      min: 33, max: 40,
      title: "내 기준에 맞추길 원하는 편",
      description: "연애하면 서로의 행동에 어느 정도 권한이 생긴다고 생각하는 타입이에요. 상대가 내 기준에서 벗어나면 불편함을 크게 느끼는 편이라, 관심과 통제의 경계를 생각해볼 필요가 있어요.\n\n내가 싫어하는 행동을 계속하면 나를 중요하게 생각하지 않는다고 느낄 수 있어요. 그래서 갈등이 생겼을 때 상대의 행동을 바꾸는 일이 먼저 필요하다고 생각하기 쉬운 편이에요.\n\n연인이라도 각자의 시간과 인간관계를 결정할 권리는 남아 있어요. 요청을 거절할 여지도 서로에게 허용하면서, 바꿀 수 없는 차이가 있다면 관계의 기준 자체를 함께 돌아보세요.",
    },
  ],
};

export default testData;
```

## relationship-energy-data.js

```javascript
"use strict";

const testData = {
  id: 23,
  url: "test.html?id=relationship-energy",
  title: "나는 연애할 때 감정소모가 큰 편일까?",
  description: "연애 하나로 하루 기분이 얼마나 흔들리는지 알아보세요.",
  category: "연애/결혼",
  resultLabel: "당신의 연애 감정소모 지수는",
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
      description: "연애를 해도 내 생활과 감정을 비교적 잘 유지하는 타입이에요. 문제가 생겨도 관계 하나 때문에 하루 전체가 크게 흔들리지는 않는 편이에요.\n\n애인과의 관계가 중요해도 다른 일정과 내 감정을 함께 챙기는 편이에요. 갈등이 생겨도 모든 일을 멈추기보다 필요한 대화를 하고 일상으로 돌아오는 힘이 있어요.\n\n감정소모가 적다고 관심이 적다는 뜻은 아니에요. 다만 상대가 더 많은 표현을 원할 수 있으니, 내가 관계를 소중하게 생각한다는 마음을 말과 행동으로 전해보세요.",
    },
    {
      min: 17, max: 24,
      title: "적당히 신경 쓰는 편",
      description: "연애에 영향을 받기는 하지만 금방 균형을 찾는 편이에요. 좋아하는 만큼 신경은 쓰면서도 내 생활까지 잃지는 않는 타입이에요.\n\n답장이 늦거나 작은 다툼이 생기면 신경은 쓰이지만 혼자 결론을 크게 키우지는 않는 편이에요. 관계의 문제를 생각하는 시간과 내 생활을 이어가는 시간이 함께 남아 있어요.\n\n감정이 평소보다 오래 남는 날에는 그냥 넘기기보다 무엇이 불편했는지 정리해보세요. 작은 서운함을 제때 나누고 내 시간도 챙기면 관계의 균형을 유지하기 좋아요.",
    },
    {
      min: 25, max: 32,
      title: "감정소모가 꽤 큰 편",
      description: "애인의 말투나 행동 변화에 민감하고, 관계가 안 좋으면 다른 일에도 영향을 받는 편이에요. 연애에 진심인 만큼 감정 에너지도 많이 쓰는 타입이에요.\n\n애인의 반응에 따라 마음이 자주 움직여 연락을 확인하거나 지난 대화를 다시 떠올릴 수 있어요. 관계에 집중하는 힘이 큰 만큼 다른 일에 쓸 에너지가 줄어드는 날도 있을 거예요.\n\n서운함이 생기면 혼자 해석을 반복하기보다 확인이 필요한 부분을 골라 이야기해보세요. 연락을 잠시 내려놓고 몰입할 활동을 마련하면 내 기분을 돌보는 데 도움이 돼요.",
    },
    {
      min: 33, max: 40,
      title: "연애가 하루를 좌우하는 편",
      description: "관계의 작은 변화에도 감정이 크게 흔들릴 수 있는 타입이에요. 애인의 기분이나 연락 상태가 내 하루 컨디션까지 좌우할 가능성이 커요.\n\n관계가 편안한 날에는 다른 일도 잘 풀리는 것 같고, 불안한 날에는 평소 일까지 버겁게 느껴질 수 있어요. 확신을 받고 싶은 마음이 커서 상대의 반응을 계속 살피게 될 가능성이 있어요.\n\n좋아하는 마음이 커도 내 하루가 모두 상대의 반응으로 정해질 필요는 없어요. 수면, 식사, 친구와의 시간처럼 내 일상의 기반을 챙기고 불안할 때 필요한 대화를 구체적으로 요청해보세요.",
    },
  ],
};

export default testData;
```

## relationship-fatigue-data.js

```javascript
"use strict";

const testData = {
  id: 36,
  url: "test.html?id=relationship-fatigue",
  title: "내 인간관계 피로도는 몇 %일까?",
  description: "사람을 만나고 관계를 유지하는 일이 나에게 얼마나 에너지를 쓰게 할까?",
  category: "친구·인간관계·사회생활",
  resultMetric: { label: "인간관계 피로도", normalize: true, useForResult: true },
  questions: [
    {
      question: "약속이 연달아 잡혀 있는 주를 보내면?",
      answers: ["오히려 사람 만나는 게 재밌어서 괜찮다", "조금 피곤하지만 충분히 즐길 수 있다", "일정이 많아질수록 혼자 있고 싶어진다", "약속 생각만 해도 벌써 지친다"],
    },
    {
      question: "여러 사람이 있는 모임에 다녀온 뒤 나는?",
      answers: ["기분이 좋아지고 에너지가 생긴다", "조금 피곤하지만 만족스럽다", "집에 오면 한동안 아무 말도 하기 싫다", "다음날까지도 혼자 있고 싶다"],
    },
    {
      question: "친한 친구가 갑자기 만나자고 하면?",
      answers: ["웬만하면 바로 나간다", "컨디션 괜찮으면 만난다", "조금 고민한 뒤 결정한다", "약속 없는 날은 그냥 쉬고 싶다"],
    },
    {
      question: "누군가의 고민을 오래 들어준 뒤에는?",
      answers: ["크게 힘들지 않다", "조금 지치지만 괜찮다", "생각보다 에너지가 많이 빠진다", "내 감정까지 무거워지는 느낌이 든다"],
    },
    {
      question: "단톡방 메시지가 많이 쌓여 있으면?",
      answers: ["재미있게 읽고 바로 답한다", "시간 날 때 천천히 확인한다", "답해야 한다는 생각에 조금 부담된다", "아예 열어보기 싫을 때가 있다"],
    },
    {
      question: "새로운 사람들과 어울려야 하는 상황에서는?",
      answers: ["새로운 사람 만나는 게 재밌다", "처음만 조금 어색하다", "익숙해질 때까지 꽤 신경을 쓴다", "계속 긴장해서 많이 피곤하다"],
    },
    {
      question: "친구가 자주 연락하고 자주 만나고 싶어 한다면?",
      answers: ["나도 좋다", "어느 정도는 괜찮다", "가끔은 연락을 줄이고 싶어진다", "친해도 너무 자주 연락하면 부담스럽다"],
    },
    {
      question: "인간관계에서 가장 피곤한 순간은?",
      answers: ["딱히 크게 피곤하다고 느끼지 않는다", "상대에게 맞춰줘야 할 때", "분위기나 감정을 계속 신경 써야 할 때", "싫어도 관계를 유지해야 할 때"],
    },
    {
      question: "모임에서 분위기가 어색해지면 나는?",
      answers: ["별로 신경 쓰지 않는다", "상황을 보면서 자연스럽게 있는다", "괜히 내가 분위기를 풀어야 할 것 같다", "어색한 분위기 자체가 너무 피곤하다"],
    },
    {
      question: "오래 연락하지 않은 사람에게 연락이 오면?",
      answers: ["반갑고 자연스럽게 대화한다", "반갑지만 조금 어색하다", "무슨 일인지부터 궁금해진다", "괜히 관계를 다시 이어가야 할 것 같아 부담된다"],
    },
    {
      question: "사람들과 하루 종일 함께 있어야 한다면?",
      answers: ["하루 종일 있어도 괜찮다", "중간중간 혼자 있는 시간이 있으면 좋다", "몇 시간 지나면 혼자 있고 싶어진다", "생각만 해도 꽤 힘들 것 같다"],
    },
    {
      question: "누군가 나에게 서운한 티를 내면?",
      answers: ["바로 물어보고 해결한다", "조금 신경 쓰이지만 대화해본다", "내가 뭘 잘못했는지 계속 생각한다", "관계가 불편해지는 것 자체가 너무 피곤하다"],
    },
    {
      question: "약속이 취소됐다는 연락을 받으면?",
      answers: ["아쉽다", "아쉽지만 괜찮다", "솔직히 조금 반갑다", "속으로 엄청 좋아한다"],
    },
    {
      question: "사람을 만날 때의 나는?",
      answers: ["거의 있는 그대로 행동한다", "상황에 따라 조금 조절한다", "상대에 맞춰 말투나 행동을 꽤 바꾸는 편이다", "사람마다 다른 모습을 보여주는 느낌이 든다"],
    },
    {
      question: "인간관계를 유지하는 데 대해 나는?",
      answers: ["자연스럽게 하면 되는 일이라고 생각한다", "어느 정도 노력은 필요하다고 본다", "생각보다 많은 에너지가 필요한 일이라고 느낀다", "가끔 모든 관계에서 잠깐 사라지고 싶을 때가 있다"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({ text, score: index + 1 })),
  })),
  results: [
    {
      min: 0,
      max: 24,
      title: "사람 만나도 에너지 남는 편",
      description: "사람을 만나고 관계를 이어가는 데서 큰 피로를 느끼지 않는 편이에요. 대화나 모임 자체를 즐기고, 여러 사람과 함께 있어도 비교적 자연스럽게 행동하는 타입이에요.\n\n상대의 반응이나 분위기를 지나치게 신경 쓰지 않아서 인간관계에 쓰는 에너지가 적은 편이에요. 약속이 많거나 새로운 사람을 만나도 금방 적응하고 일상으로 돌아오는 힘이 있어요.\n\n다만 내가 편하다고 해서 상대도 같은 속도와 거리를 원하는 건 아닐 수 있어요. 가끔은 상대가 어떤 관계 방식을 편하게 느끼는지도 함께 살펴보면 좋아요.",
    },
    {
      min: 25,
      max: 49,
      title: "적당히 사람도 만나고 혼자도 쉬는 편",
      description: "사람들과 어울리는 걸 싫어하지는 않지만, 관계가 많아지면 어느 정도 피로를 느끼는 편이에요. 좋아하는 사람과 보내는 시간은 즐겁지만 혼자 회복하는 시간도 꽤 중요하게 느껴져요.\n\n약속이나 연락이 적당할 때는 편하지만 일정이 몰리면 자연스럽게 혼자 있고 싶어질 수 있어요. 인간관계와 내 시간을 비교적 균형 있게 조절하는 타입에 가까워요.\n\n사람을 피한다기보다 내가 쓸 수 있는 에너지를 잘 알고 있는 편이에요. 피곤하다고 느껴질 때는 억지로 약속을 채우기보다 충분히 쉬어도 괜찮아요.",
    },
    {
      min: 50,
      max: 74,
      title: "사람을 만나면 생각보다 많이 지치는 편",
      description: "관계를 유지하면서 상대의 말과 감정, 분위기를 꽤 많이 신경 쓰는 편이에요. 사람들과 즐겁게 시간을 보내더라도 집에 돌아오면 생각보다 큰 피로가 몰려올 수 있어요.\n\n특히 새로운 사람을 만나거나 불편한 관계를 유지해야 할 때 에너지를 많이 사용하는 타입이에요. 혼자 있는 시간이 부족하면 사람을 만나는 것 자체가 부담스럽게 느껴질 수도 있어요.\n\n그렇다고 인간관계를 싫어하는 것은 아니고, 관계에 쓰는 에너지가 큰 편에 가까워요. 약속 사이에 혼자 회복할 시간을 충분히 만들어두면 훨씬 편하게 관계를 이어갈 수 있어요.",
    },
    {
      min: 75,
      max: 100,
      title: "인간관계 배터리가 자주 방전되는 편",
      description: "사람을 만나고 연락을 이어가는 것만으로도 꽤 많은 에너지를 사용하는 편이에요. 좋아하는 사람과 함께 있어도 시간이 길어지면 혼자 조용히 쉬고 싶은 마음이 커질 수 있어요.\n\n상대의 기분이나 분위기를 많이 살피거나 관계가 불편해질까 신경 쓰면서 더 쉽게 지칠 수도 있어요. 약속이 겹치거나 연락이 몰리면 모든 관계에서 잠깐 벗어나고 싶다고 느끼는 순간도 있을 수 있어요.\n\n혼자 있는 시간이 많은 것이 인간관계를 못한다는 의미는 아니에요. 내가 편하게 감당할 수 있는 관계의 거리와 속도를 알고 조절하는 것이 가장 중요해요.",
    },
  ],
};

export default testData;
```

## romance-behavior-data.js

```javascript
"use strict";

const testData = {
  id: 43,
  url: "test.html?id=romance-behavior",
  title: "내가 연애하면 가장 많이 하는 행동은?",
  description: "좋아하는 사람이 생기면 나는 어떤 행동을 가장 자주 하게 될까?",
  category: "연애·결혼",
  showResultType: true,
  stats: [
    { id: "caring", title: "챙김형" },
    { id: "contact", title: "연락형" },
    { id: "together", title: "함께형" },
    { id: "thoughtful", title: "생각형" },
    { id: "responsive", title: "반응형" },
  ],
  questions: [
    {
      question: "연애를 시작하면 가장 먼저 달라지는 건?",
      answers: ["상대 일정을 자연스럽게 더 많이 궁금해한다", "연락 빈도가 확 늘어난다", "같이 할 일을 계속 찾게 된다", "표현은 적어도 혼자 상대 생각을 많이 한다", "상대 반응에 따라 기분이 많이 움직인다"],
    },
    {
      question: "애인이 하루 종일 바쁜 날이라면?",
      answers: ["밥은 먹었는지, 잘 쉬고 있는지 챙긴다", "틈날 때마다 연락을 기다리거나 먼저 보낸다", "끝나고 같이 뭘 할지 생각한다", "방해하기 싫어서 연락은 참지만 계속 생각난다", "답장이 늦으면 평소보다 신경이 쓰인다"],
    },
    {
      question: "데이트가 끝난 뒤 집에 돌아오면?",
      answers: ["오늘 즐거웠는지 먼저 물어본다", "바로 연락을 이어가는 편이다", "다음에 어디 갈지 벌써 생각한다", "오늘 했던 말과 장면을 혼자 다시 떠올린다", "상대 반응이 어땠는지 계속 생각한다"],
    },
    {
      question: "애인이 피곤해 보이면 나는?",
      answers: ["먼저 쉬라고 하고 필요한 걸 챙긴다", "괜찮은지 계속 연락으로 확인한다", "같이 쉬거나 편한 데이트를 하자고 한다", "괜히 부담 줄까 봐 조용히 지켜본다", "나 때문에 기분이 안 좋은 건 아닌지 신경 쓴다"],
    },
    {
      question: "애인과 주말 계획을 세울 때?",
      answers: ["상대가 하고 싶은 걸 먼저 물어본다", "일정 잡는 과정에서도 연락을 자주 주고받는다", "같이 할 수 있는 새로운 걸 찾는 게 재밌다", "여러 선택지를 혼자 미리 생각해둔다", "상대가 얼마나 적극적인지 은근히 본다"],
    },
    {
      question: "애인이 평소보다 말수가 적다면?",
      answers: ["컨디션이 안 좋은지 먼저 챙겨본다", "무슨 일 있는지 바로 연락해서 물어본다", "같이 기분 전환할 방법을 찾는다", "내가 뭔가 잘못했나 혼자 생각해본다", "나한테 마음이 식은 건 아닌지 신경 쓰인다"],
    },
    {
      question: "연애 중 내가 자주 하는 말은?",
      answers: ['"밥 먹었어?"', '"뭐 해?"', '"우리 이거 같이 하자."', '"아까 그 말 무슨 뜻이었지?"', '"왜 오늘 반응이 달라?"'],
    },
    {
      question: "애인이 새로운 취미를 시작한다면?",
      answers: ["필요한 게 있는지 챙겨준다", "어떻게 하고 있는지 자주 물어본다", "나도 같이 해보고 싶어진다", "상대가 그 취미를 좋아하게 된 이유가 궁금하다", "그 취미 때문에 나와 보내는 시간이 줄까 봐 조금 신경 쓰인다"],
    },
    {
      question: "연애가 오래될수록 나는?",
      answers: ["더 자연스럽게 생활을 챙겨준다", "연락이 루틴처럼 자리 잡는다", "같이 만드는 추억이 점점 중요해진다", "상대를 더 많이 이해하려고 관찰한다", "상대의 작은 변화에도 더 민감해진다"],
    },
    {
      question: "애인이 힘든 일을 털어놓으면?",
      answers: ["실질적으로 도울 수 있는 걸 먼저 찾는다", "이후에도 괜찮은지 계속 연락한다", "같이 시간을 보내며 기분을 풀어준다", "어떤 말이 제일 도움이 될지 오래 생각한다", "내가 뭘 해줘야 마음이 풀릴지 많이 신경 쓴다"],
    },
    {
      question: "애인이 친구들과 여행을 간다면?",
      answers: ["필요한 거 빠뜨리지 않았는지 챙겨준다", "도착했는지, 잘 놀고 있는지 연락이 궁금하다", "다음에는 나랑도 여행 가자고 한다", "일부러 연락을 줄이지만 속으로는 자주 생각난다", "연락 빈도가 평소와 다르면 신경이 쓰인다"],
    },
    {
      question: "기념일이 다가오면?",
      answers: ["상대가 좋아할 걸 준비하려고 한다", "며칠 전부터 관련 이야기를 자주 꺼낸다", "같이 특별한 시간을 보내는 걸 가장 중요하게 본다", "어떤 의미를 담을지 혼자 많이 고민한다", "상대가 얼마나 챙길지 은근히 기대하게 된다"],
    },
    {
      question: "애인과 다퉜을 때 나는?",
      answers: ["상대가 상처받은 부분부터 챙기려고 한다", "오래 끌기 싫어서 연락해서 풀려고 한다", "직접 만나서 같이 해결하고 싶다", "대화 내용을 계속 되짚어본다", "상대 태도가 달라지면 바로 불안해진다"],
    },
    {
      question: "애인에게 가장 많이 해주는 건?",
      answers: ["사소한 걸 챙겨주는 것", "자주 연락하고 표현하는 것", "같이 있는 시간을 만드는 것", "상대를 많이 생각하고 이해하려는 것", "상대 반응을 살피며 맞춰주는 것"],
    },
    {
      question: "연애 중인 내 모습과 가장 가까운 건?",
      answers: ["챙겨주다 보면 자연스럽게 생활까지 신경 쓴다", "연락이 끊기면 허전할 정도로 자주 소통한다", "뭐든 같이하고 싶은 마음이 커진다", "말보다 머릿속에서 상대 생각을 더 많이 한다", "상대 기분이나 말투에 내 감정도 자주 따라간다"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({
      text,
      stat: ["caring", "contact", "together", "thoughtful", "responsive"][index],
      score: 1,
    })),
  })),
  results: [
    {
      stat: "caring",
      title: "사랑하면 자꾸 챙겨주게 되는 편",
      description: "당신은 연애를 시작하면 상대의 생활을 자연스럽게 챙기는 행동이 가장 많이 늘어나는 편이에요. 밥은 먹었는지, 피곤하지는 않은지, 필요한 건 없는지 사소한 부분까지 신경 쓰게 돼요.\n\n좋아한다는 말을 많이 하지 않아도 행동으로 마음을 보여주는 경우가 많아요. 상대 입장에서는 함께 있을수록 든든하고 따뜻한 사람으로 느낄 가능성이 높아요.\n\n다만 너무 챙겨주다 보면 상대의 일까지 내가 책임져야 한다고 느낄 수도 있어요. 배려하는 마음은 유지하되 상대가 스스로 할 수 있는 부분은 맡겨두는 것도 좋아요.",
    },
    {
      stat: "contact",
      title: "사랑하면 연락이 자연스럽게 많아지는 편",
      description: "당신은 연애를 시작하면 상대와 자주 소통하는 행동이 가장 많이 늘어나는 편이에요. 별일이 없어도 뭐 하는지 궁금하고, 사소한 이야기도 자연스럽게 공유하고 싶어져요.\n\n연락 자체가 사랑을 확인하는 중요한 방식이라 대화가 잘 이어질수록 관계에 안정감을 느껴요. 좋아하는 사람과 하루를 계속 연결해서 보내는 느낌을 중요하게 생각하는 타입이에요.\n\n다만 연락 빈도가 줄었다고 해서 마음까지 줄었다고 단정할 필요는 없어요. 서로 편하게 느끼는 연락 방식과 속도를 맞추면 훨씬 안정적인 연애를 할 수 있어요.",
    },
    {
      stat: "together",
      title: "사랑하면 뭐든 같이하고 싶어지는 편",
      description: "당신은 연애를 시작하면 함께 보내는 시간과 경험을 자연스럽게 늘리는 편이에요. 맛있는 걸 먹거나 여행을 가는 것부터 사소한 일상까지 같이하는 데 큰 즐거움을 느껴요.\n\n좋아하는 사람과 추억을 쌓을수록 관계가 더 깊어진다고 느끼는 타입이에요. 그래서 새로운 곳이나 재미있는 일이 생기면 가장 먼저 애인과 함께하고 싶다는 생각이 들 수 있어요.\n\n다만 모든 시간을 같이 보내다 보면 각자의 생활이 조금 부족해질 수도 있어요. 함께하는 즐거움과 혼자 보내는 시간을 적당히 나누면 관계가 더 오래 편안하게 이어질 수 있어요.",
    },
    {
      stat: "thoughtful",
      title: "사랑하면 혼자서 상대 생각을 많이 하는 편",
      description: "당신은 겉으로 크게 표현하지 않아도 연애를 하면 머릿속에서 상대를 많이 생각하는 편이에요. 상대가 했던 말이나 행동을 기억하고 그 의미를 혼자 곱씹는 경우도 많아요.\n\n어떻게 하면 더 잘 이해할 수 있을지, 어떤 행동을 하면 좋아할지 세심하게 고민하는 타입이에요. 그래서 표현은 조용해 보여도 실제로는 관계에 꽤 많은 마음과 에너지를 쓰고 있을 수 있어요.\n\n다만 머릿속에서만 생각하다 보면 상대는 당신의 마음을 잘 모를 수도 있어요. 생각한 만큼 작은 말이나 행동으로 표현해주면 관계가 훨씬 더 편안해질 수 있어요.",
    },
    {
      stat: "responsive",
      title: "사랑하면 상대의 반응을 많이 살피는 편",
      description: "당신은 연애를 시작하면 상대의 말투나 표정, 연락 변화에 자연스럽게 관심이 많아지는 편이에요. 평소와 조금만 달라 보여도 무슨 일이 있는지 빠르게 알아차리는 타입이에요.\n\n그만큼 상대의 기분에 공감하고 관계의 변화를 세심하게 살필 수 있다는 장점이 있어요. 다만 상대 반응에 따라 내 하루 기분까지 함께 흔들리는 경우도 생길 수 있어요.\n\n상대의 모든 행동에 의미를 찾기보다 직접 물어보는 편이 오히려 마음을 편하게 해줄 수 있어요. 상대를 살피는 만큼 내 감정도 함께 챙기면 훨씬 안정적인 연애를 할 수 있어요.",
    },
  ],
};

export default testData;
```

## romance-priorities-data.js

```javascript
"use strict";

const testData = {
  id: 50,
  url: "test.html?id=romance-priorities",
  title: "내가 연애에서 절대 포기 못 하는 건?",
  description: "좋아하는 마음만으로는 부족한, 내 연애의 가장 중요한 기준은 무엇일까?",
  category: "연애·결혼",
  showResultType: true,
  stats: [
    { id: "trust", title: "신뢰형" },
    { id: "affection", title: "애정표현형" },
    { id: "communication", title: "소통형" },
    { id: "freedom", title: "자유존중형" },
    { id: "future", title: "안정미래형" },
  ],
  questions: [
    {
      question: "연애하면서 가장 크게 상처받을 것 같은 상황은?",
      answers: [
        ["중요한 일을 나에게 숨기는 것", "trust"],
        ["서로 대화가 점점 줄어드는 것", "communication"],
        ["나를 당연하게 여기고 표현이 없어지는 것", "affection"],
        ["내 생활이나 인간관계까지 간섭하는 것", "freedom"],
        ["미래에 대한 생각이 전혀 맞지 않는 것", "future"],
      ],
    },
    {
      question: "아무리 좋아해도 헤어질 가능성이 가장 큰 이유는?",
      answers: [
        ["서로 원하는 미래가 완전히 다를 때", "future"],
        ["거짓말이 반복될 때", "trust"],
        ["내 개인적인 영역을 계속 침범할 때", "freedom"],
        ["문제가 생겨도 대화를 피할 때", "communication"],
        ["좋아한다는 느낌을 거의 받지 못할 때", "affection"],
      ],
    },
    {
      question: "애인에게 가장 듣고 싶은 말은?",
      answers: [
        ['"무슨 일이든 솔직하게 말할게."', "trust"],
        ['"나는 항상 네 편이야."', "affection"],
        ['"우리 앞으로도 같이 계획해보자."', "future"],
        ['"네 생각도 충분히 이해하고 싶어."', "communication"],
        ['"네가 하고 싶은 건 존중할게."', "freedom"],
      ],
    },
    {
      question: "연애가 오래될수록 더 중요해지는 것은?",
      answers: [
        ["서로를 믿고 의심하지 않는 것", "trust"],
        ["각자의 생활을 유지하는 것", "freedom"],
        ["감정을 계속 표현하는 것", "affection"],
        ["앞으로의 삶을 함께 그려가는 것", "future"],
        ["불편한 것도 편하게 이야기하는 것", "communication"],
      ],
    },
    {
      question: "애인이 연락을 자주 못 하는 상황이라면?",
      answers: [
        ["바쁜 이유가 확실하다면 믿을 수 있다", "trust"],
        ["연락보다 만났을 때 애정을 잘 표현하면 괜찮다", "affection"],
        ["서로 각자 생활이 있으니 크게 상관없다", "freedom"],
        ["상황을 솔직하게 설명해주면 이해할 수 있다", "communication"],
        ["이런 생활이 계속될 관계인지가 더 중요하다", "future"],
      ],
    },
    {
      question: "애인과 크게 다퉜을 때 가장 필요한 것은?",
      answers: [
        ["거짓말 없이 솔직하게 이야기하는 것", "trust"],
        ["서로 감정을 충분히 말하고 듣는 것", "communication"],
        ["싸웠어도 서로 좋아한다는 표현을 해주는 것", "affection"],
        ["각자 진정할 시간을 존중하는 것", "freedom"],
        ["같은 문제가 반복되지 않게 해결책을 만드는 것", "future"],
      ],
    },
    {
      question: "애인이 나를 정말 사랑한다고 느끼는 순간은?",
      answers: [
        ["어떤 상황에서도 내 믿음을 저버리지 않을 때", "trust"],
        ["사소한 순간에도 좋아한다는 표현을 해줄 때", "affection"],
        ["중요한 결정을 함께 의논할 때", "future"],
        ["내 선택과 생활 방식을 존중해줄 때", "freedom"],
        ["내 말을 진지하게 들어줄 때", "communication"],
      ],
    },
    {
      question: "연애하면서 가장 답답한 사람은?",
      answers: [
        ["문제가 생기면 입을 닫아버리는 사람", "communication"],
        ["나를 통제하려는 사람", "freedom"],
        ["말과 행동이 자꾸 다른 사람", "trust"],
        ["미래에 대해 아무 생각이 없는 사람", "future"],
        ["좋아한다면서 표현은 전혀 안 하는 사람", "affection"],
      ],
    },
    {
      question: "애인이 친구들과 자주 시간을 보낸다면?",
      answers: [
        ["나와의 약속만 잘 지키면 괜찮다", "trust"],
        ["각자 친구를 만나는 시간도 필요하다고 생각한다", "freedom"],
        ["그래도 나에게 애정 표현은 충분히 해줬으면 좋겠다", "affection"],
        ["서로 일정이나 생각을 편하게 공유하면 괜찮다", "communication"],
        ["장기적으로 함께할 시간을 충분히 만드는지가 중요하다", "future"],
      ],
    },
    {
      question: "좋은 연애라고 느끼는 관계는?",
      answers: [
        ["서로의 미래에 자연스럽게 포함되어 있는 관계", "future"],
        ["의심할 필요 없이 믿을 수 있는 관계", "trust"],
        ["각자 자기 삶을 살면서 함께하는 관계", "freedom"],
        ["좋아하는 마음을 자주 표현하는 관계", "affection"],
        ["어떤 이야기도 편하게 할 수 있는 관계", "communication"],
      ],
    },
    {
      question: "애인이 큰 고민을 혼자 해결한 뒤 나중에 알려줬다면?",
      answers: [
        ["왜 나에게 말하지 않았는지 서운하다", "communication"],
        ["숨기거나 거짓말한 게 아니라면 이해할 수 있다", "trust"],
        ["혼자 해결하고 싶은 일도 있을 수 있다고 생각한다", "freedom"],
        ["힘들 때 나를 찾지 않았다는 게 조금 서운하다", "affection"],
        ["앞으로 중요한 문제도 혼자 결정할까 걱정된다", "future"],
      ],
    },
    {
      question: "연애하면서 내가 가장 많이 확인하고 싶은 것은?",
      answers: [
        ["이 사람이 나에게 솔직한 사람인지", "trust"],
        ["서로 아직 좋아하는 마음이 충분한지", "affection"],
        ["문제가 생겼을 때 대화가 가능한 사람인지", "communication"],
        ["함께 오래 갈 수 있는 관계인지", "future"],
        ["연애 때문에 내가 나답지 않게 변하고 있지는 않은지", "freedom"],
      ],
    },
    {
      question: "애인이 내 행동에 불만이 있다고 한다면?",
      answers: [
        ["왜 그렇게 느꼈는지 충분히 이야기해보고 싶다", "communication"],
        ["고칠 부분이라면 앞으로의 관계를 위해 노력한다", "future"],
        ["무조건 바꾸라고 하면 부담스럽다", "freedom"],
        ["솔직하게 말해준 것 자체는 고맙다", "trust"],
        ["불만이 있어도 나를 좋아하는 마음은 표현해줬으면 좋겠다", "affection"],
      ],
    },
    {
      question: "연애 상대를 고를 때 가장 중요하게 보는 것은?",
      answers: [
        ["믿을 만한 사람인지", "trust"],
        ["나를 좋아한다는 게 잘 느껴지는 사람인지", "affection"],
        ["서로 말이 잘 통하는 사람인지", "communication"],
        ["각자의 삶을 존중할 수 있는 사람인지", "freedom"],
        ["미래 방향이 비슷한 사람인지", "future"],
      ],
    },
    {
      question: "딱 하나만 지킬 수 있다면 나는?",
      answers: [
        ["서로 숨기는 것 없이 믿는 관계", "trust"],
        ["시간이 지나도 애정을 표현하는 관계", "affection"],
        ["끝까지 대화가 끊기지 않는 관계", "communication"],
        ["사랑해도 서로를 억압하지 않는 관계", "freedom"],
        ["함께할 미래를 만들어가는 관계", "future"],
      ],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map(([text, stat]) => ({ text, stat, score: 1 })),
  })),
  results: [
    {
      stat: "trust",
      title: "결국 가장 중요한 건 믿을 수 있는 사람",
      description: "당신은 연애에서 무엇보다 서로를 믿을 수 있는 관계를 중요하게 생각하는 편이에요. 연락 횟수나 표현 방식이 조금 달라도 상대가 솔직하고 믿을 만하다면 충분히 안정감을 느낄 수 있어요.\n\n반대로 작은 거짓말이나 숨기는 일이 반복되면 좋아하는 마음이 남아 있어도 관계를 계속하기 어려울 수 있어요. 한번 깨진 신뢰를 다시 쌓는 데도 비교적 많은 시간이 필요한 타입이에요.\n\n당신에게 사랑은 단순한 감정보다 믿고 내 편이라고 느낄 수 있는 관계에 가까워요. 서로 솔직함을 지키면서도 사소한 모든 것까지 확인하려 하지 않을 때 가장 편안한 연애를 할 수 있어요.",
    },
    {
      stat: "affection",
      title: "사랑받고 있다는 느낌은 꼭 필요한 편",
      description: "당신은 마음속으로 좋아하는 것만큼 그 마음을 실제로 표현하는 것도 중요하게 생각해요. 말이나 스킨십, 연락, 작은 행동처럼 상대의 애정을 직접 느낄 수 있을 때 관계에 안정감을 얻는 편이에요.\n\n오래 만났다는 이유로 표현이 줄어들면 사랑이 식은 건 아닌지 서운함을 느낄 수도 있어요. 거창한 이벤트보다 일상 속에서 계속 나를 좋아하고 있다는 신호가 필요한 타입이에요.\n\n당신에게 애정 표현은 단순한 서비스가 아니라 관계를 유지하는 중요한 방식이에요. 서로 원하는 표현 방식이 다를 수 있으니 내가 어떤 순간에 사랑받는다고 느끼는지 알려주는 것도 좋아요.",
    },
    {
      stat: "communication",
      title: "말이 통하지 않는 연애는 견디기 어려운 편",
      description: "당신은 연애에서 어떤 문제가 생겨도 서로 이야기할 수 있는 관계를 가장 중요하게 생각해요. 생각이 다르거나 싸우는 것보다 대화 자체가 끊겨버리는 상황을 훨씬 답답하게 느끼는 편이에요.\n\n서운한 점이나 원하는 것을 솔직하게 말하고 상대의 입장도 충분히 듣고 싶어 하는 타입이에요. 그래서 의견이 달라도 대화가 잘 된다면 충분히 관계를 이어갈 수 있다고 생각해요.\n\n다만 모든 문제를 바로 대화로 해결하려 하면 상대에게는 생각할 시간이 부족할 수도 있어요. 서로 말할 준비가 되었을 때 충분히 이야기하는 방식이 당신에게 가장 잘 맞는 연애예요.",
    },
    {
      stat: "freedom",
      title: "사랑해도 내 삶은 지키고 싶은 편",
      description: "당신은 연애를 하더라도 서로가 각자의 삶을 유지할 수 있는 관계를 중요하게 생각해요. 친구, 취미, 혼자 있는 시간처럼 연애 밖의 생활도 존중받아야 편안함을 느끼는 타입이에요.\n\n좋아한다는 이유로 연락이나 행동을 지나치게 통제하면 사랑보다 답답함을 먼저 느낄 수 있어요. 서로 믿으면서 필요한 순간에 함께하고 각자의 시간도 자연스럽게 보내는 관계를 선호해요.\n\n당신에게 거리는 애정 부족이 아니라 오래 편하게 사랑하기 위해 필요한 공간에 가까워요. 다만 독립적인 모습이 상대에게 무관심으로 보이지 않도록 애정 표현도 함께 보여주면 좋아요.",
    },
    {
      stat: "future",
      title: "결국 함께 갈 수 있는 사람이어야 하는 편",
      description: "당신은 현재 즐거운 것만큼 이 관계가 앞으로도 이어질 수 있는지를 중요하게 생각해요. 좋아하는 마음이 커도 가치관이나 생활 방식, 미래 방향이 너무 다르면 관계를 오래 유지하기 어렵다고 느껴요.\n\n연애가 깊어질수록 자연스럽게 결혼이나 생활, 돈처럼 현실적인 부분까지 생각하게 될 가능성이 높아요. 상대가 나와 함께 미래를 만들어가려는 모습을 보일 때 가장 큰 안정감을 느끼는 타입이에요.\n\n당신에게 좋은 연애는 순간의 설렘뿐 아니라 시간이 지나도 서로의 삶에 남아 있는 관계예요. 다만 너무 먼 미래만 생각하다 현재의 즐거움을 놓치지 않도록 지금의 관계도 충분히 즐겨보세요.",
    },
  ],
};

export default testData;
```

## secret-data.js

```javascript
"use strict";

const testData = {
  id: 20,
  url: "test.html?id=secret",
  title: "나는 비밀을 들으면 얼마나 오래 참을 수 있을까?",
  description: "입이 무거운 편일까, 말하고 싶어서 근질근질한 편일까?",
  category: "성격",
  resultLabel: "당신의 비밀 유지 성향은",
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
      description: "비밀을 맡겨도 되는 타입이에요. 감정이 상하거나 상황이 바뀌어도 남의 이야기를 쉽게 꺼내지 않는 편이에요.\n\n재미있는 이야기보다 상대가 믿고 맡겼다는 사실을 더 중요하게 여기는 편이에요. 누가 캐물어도 자세한 내용을 덧붙이지 않아 친구들이 편하게 속마음을 털어놓을 수 있어요.\n\n다만 무거운 이야기를 혼자 책임질 필요까지는 없어요. 듣기 버거운 상황에서는 상대에게 내 한계를 말하고, 어떤 도움을 원하는지 함께 정리해보는 것도 괜찮아요.",
    },
    {
      min: 17, max: 24,
      title: "믿고 맡길 수 있는 편",
      description: "웬만한 비밀은 잘 지키는 편이에요. 다만 너무 충격적이거나 부담스러운 이야기는 혼자 가지고 있기 힘들 수 있어요.\n\n상대의 이야기를 함부로 꺼내지 않으려는 기준이 있고, 평소에는 그 기준을 잘 지키는 편이에요. 갑자기 질문을 받더라도 말을 돌리거나 대화를 정리할 여유가 있어요.\n\n이야기가 너무 부담스럽다면 다른 사람에게 털어놓기 전에 비밀 주인과 먼저 상의해보세요. 어디까지 공유해도 되는지 확인하면 신뢰를 지키면서 내 부담도 줄일 수 있어요.",
    },
    {
      min: 25, max: 32,
      title: "입이 조금 근질근질한 편",
      description: "비밀을 지키려고는 하지만 누군가에게 말하고 싶은 유혹도 꽤 큰 편이에요. 특히 분위기에 휩쓸리면 힌트를 흘릴 가능성이 있어요.\n\n놀랍거나 재미있는 이야기를 들으면 누군가와 반응을 나누고 싶은 마음이 커질 수 있어요. 이름을 빼거나 작은 힌트만 주는 정도는 괜찮다고 느끼는 순간도 있을 거예요.\n\n하지만 작은 단서만으로도 당사자를 알아볼 수 있다는 점은 기억해주세요. 말하고 싶어질 때는 한 번 멈추고, 이 이야기를 꺼낼 권한이 나에게 있는지 생각해보면 좋아요.",
    },
    {
      min: 33, max: 40,
      title: "비밀 유지 주의보",
      description: "비밀을 혼자 들고 있기 힘든 타입이에요. 악의는 없어도 “이 정도는 괜찮겠지” 하다가 퍼뜨릴 수 있으니 조심해야 해요.\n\n대화가 무르익거나 감정이 올라오면 비밀보다 지금 하고 싶은 말이 먼저 나올 수 있어요. 특히 친한 사람에게만 말하면 안전할 거라고 생각하기 쉬운 편이에요.\n\n처음부터 지키기 어려운 이야기는 듣지 않겠다고 말해도 괜찮아요. 이미 들었다면 사람 이름이나 상황의 단서까지 조심하고, 공유가 필요할 때는 당사자의 허락을 먼저 구해주세요.",
    },
  ],
};

export default testData;
```

## sociability-data.js

```javascript
"use strict";

const testData = {
  id: 45,
  url: "test.html?id=sociability",
  title: "내 사회성은 사실 어느 정도일까?",
  description: "낯선 사람, 모임, 대화 속에서 드러나는 내 진짜 사회성은 몇 %일까?",
  category: "친구·인간관계·사회생활",
  resultMetric: { label: "사회성", normalize: true, useForResult: true },
  questions: [
    {
      question: "처음 보는 사람들과 한자리에 있게 된다면?",
      answers: [
        ["누가 먼저 말 걸어주면 자연스럽게 대화한다", 3],
        ["먼저 말을 걸면서 분위기에 들어가는 편이다", 4],
        ["필요한 말만 하고 조용히 있는 편이다", 1],
        ["처음엔 어색하지만 시간이 지나면 조금씩 말이 많아진다", 2],
      ],
    },
    {
      question: "친하지 않은 동료와 단둘이 점심을 먹게 됐다면?",
      answers: [
        ["생각보다 이것저것 물어보며 대화를 이어간다", 4],
        ["상대가 말하면 잘 받아주면서 이야기한다", 3],
        ["어색하긴 하지만 적당히 대화할 수 있다", 2],
        ["무슨 말을 해야 할지 계속 고민될 것 같다", 1],
      ],
    },
    {
      question: "여러 명이 있는 모임에서 나는?",
      answers: [
        ["친한 사람이 있을 때만 편하게 말하는 편이다", 2],
        ["여기저기 자연스럽게 섞여서 이야기한다", 4],
        ["주로 듣고 있다가 할 말이 있을 때만 말한다", 1],
        ["누군가 말을 걸면 꽤 잘 대화하는 편이다", 3],
      ],
    },
    {
      question: "새로운 사람의 연락처를 받아야 하는 상황이라면?",
      answers: [
        ["필요하면 별 부담 없이 먼저 물어본다", 4],
        ["이유가 분명하다면 어렵지 않게 물어볼 수 있다", 3],
        ["상대가 먼저 알려주면 가장 편하다", 2],
        ["웬만하면 다른 방법을 찾고 싶다", 1],
      ],
    },
    {
      question: "친구의 친구들과 함께 놀게 된다면?",
      answers: [
        ["처음부터 편하게 이야기하는 편이다", 4],
        ["초반에는 조용하지만 금방 적응한다", 3],
        ["내 친구 옆에 주로 붙어 있는다", 2],
        ["새로운 사람들과 어울리는 것 자체가 피곤하다", 1],
      ],
    },
    {
      question: "대화 중 갑자기 정적이 흐르면?",
      answers: [
        ["굳이 내가 채우지 않아도 된다고 생각한다", 1],
        ["어색해서 아무 말이나 꺼내볼 것 같다", 2],
        ["자연스럽게 다른 화제를 꺼낸다", 4],
        ["상대가 말할 만한 주제를 하나 던져본다", 3],
      ],
    },
    {
      question: "모임에 아는 사람이 한 명도 없다면?",
      answers: [
        ["가능하면 참석하지 않고 싶다", 1],
        ["가긴 하지만 누군가 먼저 다가와주길 바란다", 2],
        ["조금 긴장해도 사람들과 자연스럽게 이야기한다", 3],
        ["오히려 새로운 사람을 만나는 게 재미있다", 4],
      ],
    },
    {
      question: "누군가 나에게 사적인 이야기를 꺼냈다면?",
      answers: [
        ["어떤 반응을 해야 할지 조금 고민된다", 2],
        ["이야기를 잘 들어주고 자연스럽게 질문한다", 4],
        ["상대가 편하게 말할 수 있도록 적당히 반응한다", 3],
        ["크게 친하지 않다면 조금 부담스럽다", 1],
      ],
    },
    {
      question: "여러 사람 앞에서 내 의견을 말해야 한다면?",
      answers: [
        ["생각이 있다면 비교적 편하게 말한다", 4],
        ["긴장되지만 필요한 말은 할 수 있다", 3],
        ["가능하면 다른 사람이 먼저 말했으면 좋겠다", 1],
        ["머릿속으로 충분히 정리돼야 말할 수 있다", 2],
      ],
    },
    {
      question: "새로운 환경에 들어갔을 때 친해지는 속도는?",
      answers: [
        ["먼저 사람들에게 다가가면서 금방 친해진다", 4],
        ["몇 번 같이 지내다 보면 자연스럽게 친해진다", 3],
        ["먼저 다가오는 사람이 있어야 관계가 시작되는 편이다", 2],
        ["친해지기까지 꽤 오랜 시간이 필요하다", 1],
      ],
    },
    {
      question: "모르는 사람에게 부탁해야 할 일이 생기면?",
      answers: [
        ["어떻게 말할지 한참 고민하게 된다", 1],
        ["조금 어색하지만 필요하면 할 수 있다", 2],
        ["상황을 설명하고 자연스럽게 부탁한다", 3],
        ["이런 상황에 크게 거리낌이 없는 편이다", 4],
      ],
    },
    {
      question: "단체 대화에서 내 모습과 가까운 것은?",
      answers: [
        ["다른 사람 말을 잘 듣고 필요한 순간에 참여한다", 3],
        ["대화를 주도하거나 새로운 주제를 자주 꺼낸다", 4],
        ["말할 타이밍을 고민하다 놓치는 경우가 있다", 1],
        ["친한 사람이 많을수록 말이 많아진다", 2],
      ],
    },
    {
      question: "처음 만난 사람과 공통 관심사를 발견했다면?",
      answers: [
        ["먼저 질문하면서 이야기를 길게 이어간다", 4],
        ["상대가 적극적이면 나도 자연스럽게 말이 많아진다", 3],
        ["관심사는 반갑지만 갑자기 가까워지지는 않는다", 2],
        ["그래도 낯선 사람과 긴 대화를 하는 건 부담스럽다", 1],
      ],
    },
    {
      question: "사람들과 함께 있을 때 가장 가까운 모습은?",
      answers: [
        ["다른 사람들의 분위기를 보면서 적당히 맞춰간다", 3],
        ["내가 분위기를 만들거나 대화를 이끄는 경우가 많다", 4],
        ["친한 사람 몇 명과 이야기하는 게 가장 편하다", 2],
        ["사람이 많아질수록 말수가 줄어드는 편이다", 1],
      ],
    },
    {
      question: "주변에서 나를 처음 본 사람은 어떻게 느낄 것 같아?",
      answers: [
        ["먼저 다가가기 쉬운 사람처럼 보일 것 같다", 4],
        ["처음에는 조용하지만 대화하면 편한 사람처럼 보일 것 같다", 3],
        ["친해지기 전까지는 조금 거리감 있어 보일 것 같다", 2],
        ["쉽게 말을 걸기 어려운 사람처럼 보일 수도 있다", 1],
      ],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map(([text, score]) => ({ text, score })),
  })),
  results: [
    {
      min: 0,
      max: 24,
      title: "혼자가 훨씬 편한 스타일",
      description: "사람들과 어울리지 못한다기보다 혼자 있을 때 훨씬 자연스럽고 편안함을 느끼는 편이에요. 새로운 관계를 만들거나 여러 사람 사이에 들어가는 상황에서는 생각보다 많은 에너지를 사용할 수 있어요.\n\n먼저 다가가기보다는 상대가 다가와야 관계가 시작되는 경우가 많고, 친해지는 데도 시간이 필요한 타입이에요. 대신 한번 편해진 사람과는 생각보다 깊고 자연스러운 관계를 만들 수 있어요.\n\n사회성이 낮다고 인간관계를 못한다는 의미는 아니에요. 많은 사람과 친해지는 것보다 나에게 잘 맞는 관계를 선택하는 방식에 가까워요.",
    },
    {
      min: 25,
      max: 49,
      title: "친해지면 달라지는 선택적 사회성",
      description: "처음부터 누구와도 쉽게 어울리는 편은 아니지만 익숙해지면 생각보다 편하게 사람들과 지내는 편이에요. 낯선 환경에서는 조용해 보일 수 있어도 친한 사람이 생기면 말과 행동이 훨씬 자연스러워져요.\n\n굳이 모든 사람과 가까워질 필요를 느끼지 않고 내가 편하다고 느끼는 관계를 중심으로 움직이는 타입이에요. 그래서 처음 본 사람과 오래 알고 지낸 사람이 보는 당신의 이미지가 꽤 다를 수도 있어요.\n\n새로운 관계를 시작할 때만 조금 더 시간이 필요한 것에 가까워요. 편안한 환경에서는 충분히 좋은 사회성을 보여줄 수 있는 타입이에요.",
    },
    {
      min: 50,
      max: 74,
      title: "어디서든 무난하게 적응하는 균형형 사회성",
      description: "새로운 사람이나 환경에서도 크게 어려움을 느끼지 않고 적당히 잘 어울리는 편이에요. 먼저 분위기를 이끌지는 않더라도 필요한 순간에는 자연스럽게 대화하고 관계를 만들 수 있어요.\n\n혼자 있는 시간도 좋아하지만 사람들과 함께하는 시간 역시 충분히 즐길 수 있는 타입이에요. 상황에 따라 조용히 있을 수도 있고 적극적으로 나설 수도 있어서 사회적인 적응력이 좋은 편이에요.\n\n모든 사람에게 맞추려고 하지 않으면서도 필요한 관계는 자연스럽게 이어갈 수 있어요. 사회성과 혼자만의 시간을 비교적 균형 있게 사용하는 모습에 가까워요.",
    },
    {
      min: 75,
      max: 100,
      title: "사람 사이에서 자연스럽게 살아나는 높은 사회성",
      description: "새로운 사람을 만나거나 낯선 환경에 들어가도 비교적 빠르게 적응하는 편이에요. 먼저 말을 걸거나 대화를 이어가는 데 큰 부담이 없고 사람들과 관계를 만드는 과정도 자연스럽게 느껴져요.\n\n처음 보는 사람과도 공통점을 빠르게 찾고 어색한 분위기를 풀어가는 능력이 좋은 편이에요. 주변에서는 친화력이 좋거나 어디서든 잘 섞이는 사람이라는 인상을 받을 가능성이 높아요.\n\n다만 사회성이 좋다고 항상 사람들과 함께 있어야 하는 것은 아니에요. 사람을 잘 대하는 능력과 내가 실제로 사람을 만나고 싶은지는 별개의 문제이니 혼자 쉬는 시간도 챙겨주세요.",
    },
  ],
};

export default testData;
```

## social-adaptation-data.js

```javascript
"use strict";

const testData = {
  id: 30,
  url: "test.html?id=social-adaptation",
  title: "나는 사회생활에서 얼마나 적응이 빠른 편일까?",
  description: "새로운 사람, 새로운 환경에 나는 얼마나 빨리 녹아드는 타입일까?",
  category: "친구·인간관계·사회생활",
  resultLabel: "당신의 사회생활 적응 지수는",
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
      description: "새로운 사람이나 환경에 대한 부담이 적고, 상황을 빠르게 파악해서 자연스럽게 맞춰가는 편이에요. 변화가 생겨도 비교적 금방 자기 페이스를 찾는 타입이에요.\n\n처음 보는 사람이나 낯선 규칙도 관찰하면서 빠르게 익히는 편이에요. 완벽하게 준비되지 않아도 먼저 시도해보기에 새로운 자리에서 경험을 쌓는 속도가 빠를 수 있어요.\n\n금방 익숙해졌다고 모든 규칙을 이미 안다고 생각할 필요는 없어요. 중요한 부분은 한 번 더 확인하고 주변의 다른 속도도 배려하면, 빠른 적응력이 팀 안에서 더 편하게 발휘될 수 있어요.",
    },
    {
      min: 26, max: 33,
      title: "조금만 지나면 금방 적응하는 편",
      description: "처음에는 약간 어색하거나 긴장해도 시간이 지나면 자연스럽게 적응하는 편이에요. 완전히 낯선 상황에서도 큰 스트레스 없이 익숙해질 수 있는 타입이에요.\n\n처음에는 긴장해도 주변을 살피고 작은 대화나 시도를 하면서 편안함을 찾아가는 편이에요. 낯선 상황을 무조건 피하지 않고 익숙해질 시간을 줄 수 있다는 점이 장점이에요.\n\n새 환경에서 나를 편하게 만드는 요소를 알아두면 도움이 돼요. 질문할 사람이나 하루의 기본 루틴을 정해두면 불확실함이 줄고, 새로운 일에 더 여유 있게 집중할 수 있어요.",
    },
    {
      min: 18, max: 25,
      title: "적응에 시간이 필요한 편",
      description: "새로운 사람이나 환경에 익숙해지기까지 시간이 조금 필요한 타입이에요. 처음에는 조용하지만 익숙해지고 나면 편하게 지내는 경우가 많아요.\n\n먼저 충분히 관찰하고 분위기를 이해한 뒤 참여하는 쪽이 편할 수 있어요. 초반에 조용하다고 관심이 없거나 능력이 부족한 것은 아니며 익숙해지면 내 장점이 더 잘 드러나는 편이에요.\n\n처음부터 모두와 가까워지려고 하기보다 작은 목표 하나를 정해보세요. 한 사람에게 인사하거나 모르는 규칙을 질문하는 식으로 시작하면 내 속도를 지키면서 적응할 수 있어요.",
    },
    {
      min: 10, max: 17,
      title: "익숙한 환경이 편한 타입",
      description: "낯선 사람이나 갑작스러운 변화에서 스트레스를 크게 느끼는 편이에요. 빠르게 적응하기보다는 충분히 관찰하고 익숙해진 뒤 편해지는 타입이에요.\n\n이미 아는 규칙과 편한 관계가 있을 때 내 능력을 더 안정적으로 발휘하는 편이에요. 갑작스러운 변화가 생기면 새 정보를 받아들이는 것만으로도 에너지가 많이 들 수 있어요.\n\n낯선 환경에 바로 익숙해져야 한다고 재촉하지 않아도 돼요. 미리 일정과 필요한 정보를 확인하고 하루에 하나씩 익혀보세요. 익숙한 휴식 습관을 유지하는 것도 부담을 줄이는 데 도움이 돼요.",
    },
  ],
};

export default testData;
```

## social-awareness-data.js

```javascript
"use strict";

const testData = {
  id: 16,
  url: "test.html?id=social-awareness",
  title: "나는 인간관계에서 눈치를 얼마나 보는 편일까?",
  description: "다른 사람의 말투, 표정, 분위기를 얼마나 신경 쓰는지 알아보세요.",
  category: "친구·인간관계·사회생활",
  resultLabel: "당신의 눈치 지수는",
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
      description: "다른 사람의 반응에 크게 흔들리지 않는 편이에요. 필요한 말도 비교적 솔직하게 하고, 상대의 기분까지 전부 내 책임이라고 생각하지 않는 타입이에요.\n\n모든 표정과 말투에 의미를 붙이기보다 상대에게도 각자의 사정이 있다고 보는 편이에요. 내 의견을 편하게 말할 수 있어 애매한 상황을 오래 끌지 않는 장점이 있어요.\n\n가끔은 내가 편하게 한 말이 상대에게 다르게 들릴 수도 있어요. 중요한 대화에서는 상대의 반응을 한 번 확인하고, 필요한 배려를 더하면 솔직함이 더 편안하게 전달될 수 있어요.",
    },
    {
      min: 17, max: 24,
      title: "적당한 센스형",
      description: "상대의 감정이나 분위기를 어느 정도 고려하지만 지나치게 끌려다니지는 않는 편이에요. 상황에 맞게 배려하면서도 내 생각을 표현할 줄 아는 타입이에요.\n\n처음에는 분위기를 살피지만 상대 반응만으로 내 행동을 모두 정하지는 않는 편이에요. 필요할 때는 맞춰주고 의견이 다를 때는 내 생각도 말할 수 있다는 점이 강점이에요.\n\n다만 배려와 양보가 계속 한쪽으로 쏠리는지는 가끔 돌아봐주세요. 관계가 편하려면 상대 기분뿐 아니라 내가 원하는 것도 대화에 함께 올라올 수 있어야 해요.",
    },
    {
      min: 25, max: 32,
      title: "분위기 감지형",
      description: "상대의 말투나 표정 변화를 빠르게 알아차리고 신경 쓰는 편이에요. 배려심이 큰 장점이지만, 상대 반응을 너무 해석하다 보면 내가 지칠 수 있어요.\n\n말투가 짧아지거나 표정이 달라지면 금방 알아차려 상황을 돌아보는 편이에요. 덕분에 상대가 말하지 않은 불편함을 챙기거나 갈등을 줄이는 데 도움이 될 수 있어요.\n\n하지만 그 변화가 꼭 나 때문인 것은 아니에요. 혼자 의미를 정하기보다 필요할 때 직접 확인하고, 답을 알 수 없는 반응은 잠시 내려놓는 연습을 해보면 좋아요.",
    },
    {
      min: 33, max: 40,
      title: "인간관계 레이더형",
      description: "다른 사람의 감정과 반응을 굉장히 세밀하게 살피는 타입이에요. 갈등을 피하려고 내 의견이나 감정을 뒤로 미루는 경우가 많을 수 있어요. 모두를 편하게 하려다 내가 불편해지지 않는지가 중요해요.\n\n자리에 있는 사람들의 기분을 살피느라 내가 하고 싶은 말을 뒤로 미루기 쉬워요. 세심한 배려는 장점이지만 계속 긴장한 채 관계를 유지하면 만남 뒤에 많이 지칠 수 있어요.\n\n모두를 편하게 해줄 책임이 나에게 있는 것은 아니에요. 작은 의견부터 표현하고 부담스러운 부탁에는 생각할 시간을 요청해보세요. 내 감정도 관계 안에서 존중받아야 해요.",
    },
  ],
};

export default testData;
```

## social-mask-data.js

```javascript
"use strict";

const testData = {
  id: 17,
  url: "test.html?id=social-mask",
  title: "내 사회생활 가면은 얼마나 두꺼울까?",
  description: "밖에서의 나와 혼자 있을 때의 나는 얼마나 다를까?",
  category: "친구·인간관계·사회생활",
  resultLabel: "당신의 사회생활 가면 지수는",
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
      description: "밖에서도 비교적 본래 모습 그대로 지내는 편이에요. 싫은 건 싫다고 하고, 기분도 어느 정도 드러내는 타입이에요. 사람 때문에 에너지를 과하게 쓰는 편은 아니에요.\n\n상대에 따라 크게 다른 모습을 만들기보다 내 반응을 자연스럽게 보여주는 편이에요. 친해진 뒤에야 본모습을 알게 되는 차이가 작아 주변에서는 솔직한 사람으로 느낄 수 있어요.\n\n편하게 표현하는 것과 모든 감정을 바로 드러내는 것은 조금 달라요. 중요한 자리에서는 전달할 방식과 타이밍을 한 번 생각하면 내 모습을 지키면서도 관계를 편하게 만들 수 있어요.",
    },
    {
      min: 17, max: 24,
      title: "반반형",
      description: "상황에 맞게 조절은 하지만 본래 모습까지 숨기지는 않는 편이에요. 예의와 솔직함 사이에서 적당히 균형을 맞추는 타입이에요.\n\n낯선 자리에서는 조금 더 예의를 챙기고 편한 사람 앞에서는 긴장을 풀 줄 아는 편이에요. 상황에 맞추는 능력과 나다운 모습이 함께 남아 있어 부담이 크게 쌓이지 않을 수 있어요.\n\n그래도 여러 만남이 겹치면 평소보다 에너지가 더 들 수 있어요. 내가 어디에서 편하고 어디에서 힘을 많이 쓰는지 알아두면 약속과 휴식의 균형을 잡는 데 도움이 돼요.",
    },
    {
      min: 25, max: 32,
      title: "사회생활 모드형",
      description: "분위기, 상대, 상황에 맞춰 내 모습을 많이 조절하는 편이에요. 사회생활은 잘하지만, 집에 오면 유독 지치는 이유가 있을 수 있어요.\n\n누구를 만나는지에 따라 말투와 반응을 조절해서 자리의 분위기를 맞추는 편이에요. 주변에는 편한 사람으로 보일 수 있지만 그만큼 내 감정을 계속 관리하는 수고가 있어요.\n\n모든 자리에서 좋은 반응을 보여줄 필요는 없어요. 부담 없는 관계에서는 작은 취향이나 의견부터 솔직하게 말해보세요. 밖에서 쓴 에너지를 회복할 혼자만의 시간도 챙겨주세요.",
    },
    {
      min: 33, max: 40,
      title: "풀가면 장착형",
      description: "밖에서는 거의 별도의 사회생활용 캐릭터를 쓰는 타입이에요. 싫어도 웃고, 피곤해도 밝게 행동하고, 분위기까지 챙기는 편이에요. 사람들에게는 편한 사람이지만 정작 본인은 에너지 소모가 큰 편일 수 있어요.\n\n내 기분이 좋지 않아도 상대가 불편하지 않게 먼저 웃거나 분위기를 살릴 수 있어요. 이런 능력 덕분에 사회생활은 매끄러워 보여도 집에 돌아오면 긴장이 한꺼번에 풀릴 수 있어요.\n\n언제나 밝고 친절해야 한다는 기준을 조금 낮춰도 괜찮아요. 오늘은 조용히 있고 싶다고 말하거나 무리한 부탁을 거절해보세요. 편한 모습으로 쉬는 시간도 나에게 필요한 시간이에요.",
    },
  ],
};

export default testData;
```

## stress-change-data.js

```javascript
"use strict";

const testData = {
  id: 40,
  url: "test.html?id=stress-change",
  title: "내가 스트레스 받으면 가장 먼저 변하는 것은?",
  description: "평소와 달라지는 내 모습은 어디에서 가장 먼저 드러날까?",
  category: "성격",
  showResultType: true,
  stats: [
    { id: "speech", title: "말투형" },
    { id: "emotion", title: "감정형" },
    { id: "action", title: "행동형" },
    { id: "routine", title: "생활형" },
    { id: "relationship", title: "관계형" },
  ],
  questions: [
    {
      question: "일이 한꺼번에 몰리면 가장 먼저 나타나는 변화는?",
      answers: ["평소보다 말수가 확 줄어든다", "사소한 일에도 예민해진다", "해야 할 일을 자꾸 미룬다", "식사나 수면 패턴이 흐트러진다", "사람 만나는 게 갑자기 귀찮아진다"],
    },
    {
      question: "하루 종일 신경 쓰이는 일이 있을 때 나는?",
      answers: ["대답이 짧아지고 반응이 줄어든다", "작은 말에도 쉽게 기분이 상한다", "해야 할 일에 집중이 잘 안 된다", "늦게 자거나 평소보다 많이 먹게 된다", "연락을 일부러 늦게 보게 된다"],
    },
    {
      question: "누군가 계속 말을 걸면?",
      answers: ["대답은 하지만 말이 짧아진다", "괜히 짜증이 올라온다", "다른 일 하면서 대충 반응한다", "피곤해서 그냥 쉬고 싶어진다", "혼자 있고 싶어서 자리를 피하고 싶다"],
    },
    {
      question: "스트레스가 심한 날 퇴근이나 일정이 끝나면?",
      answers: ["아무 말도 하기 싫어진다", "하루 있었던 일이 계속 생각난다", "해야 할 일을 다 미루고 눕는다", "배달이나 야식부터 찾게 된다", "약속이 있어도 취소하고 싶어진다"],
    },
    {
      question: "내가 힘들다는 걸 주변에서 가장 먼저 알아차릴 만한 부분은?",
      answers: ["말투나 목소리가 달라진다", "표정과 감정 기복이 커진다", "평소보다 집중력이나 속도가 떨어진다", "잠, 식사, 피로감이 확 달라진다", "사람들과 거리를 두기 시작한다"],
    },
    {
      question: "계획이 계속 꼬이면 나는?",
      answers: ["말하기 귀찮아져서 조용해진다", "짜증부터 난다", "그냥 손 놓고 싶어진다", "컨디션이 무너지면서 더 지친다", "주변 사람까지 귀찮게 느껴진다"],
    },
    {
      question: "스트레스가 오래 이어질 때 가장 자주 생기는 모습은?",
      answers: ["대화가 점점 줄어든다", "감정이 널뛰기한다", "미루는 일이 많아진다", "생활 리듬이 완전히 깨진다", "혼자 있는 시간이 급격히 늘어난다"],
    },
    {
      question: "중요한 일을 앞두고 압박감을 느끼면?",
      answers: ["불필요한 대화를 줄인다", "작은 실수에도 스스로 화가 난다", "해야 할 걸 알면서도 손이 잘 안 간다", "잠을 설칠 가능성이 크다", "연락이나 약속을 최소화하고 싶어진다"],
    },
    {
      question: "스트레스 받을 때 내가 제일 싫어지는 건?",
      answers: ["누가 계속 말 거는 것", "별것 아닌데도 감정적으로 반응하는 내 모습", "해야 할 걸 못 하고 있는 내 모습", "망가지는 수면과 식사 패턴", "괜히 사람들에게까지 거리 두는 내 모습"],
    },
    {
      question: "힘든 날 누군가 “괜찮아?”라고 물으면?",
      answers: ["“응” 하고 대화를 빨리 끝낸다", "괜찮다고 해도 표정에 다 드러난다", "대답보다 일단 해야 할 걸 피하고 싶다", "너무 피곤해서 그냥 쉬고 싶다고 한다", "누구와도 대화하기 싫다고 느낀다"],
    },
    {
      question: "스트레스가 쌓일수록 나는?",
      answers: ["평소보다 무뚝뚝해진다", "참다가 한 번에 터질 가능성이 높아진다", "평소 루틴을 유지하기 어려워진다", "먹는 것과 자는 시간이 들쭉날쭉해진다", "연락할 사람을 점점 줄이게 된다"],
    },
    {
      question: "예상보다 큰 실수를 했을 때 나는?",
      answers: ["말을 줄이고 혼자 생각한다", "자책이 오래 간다", "다른 일까지 손에 잘 안 잡힌다", "밥맛이 없거나 과하게 먹게 된다", "주변 사람을 피하고 싶어진다"],
    },
    {
      question: "스트레스 받는 시기에 가장 먼저 포기하기 쉬운 건?",
      answers: ["대화와 연락", "감정 조절", "해야 할 일의 속도와 루틴", "수면과 식사 관리", "약속과 인간관계"],
    },
    {
      question: "주변 사람이 내 스트레스를 눈치챈다면 이유는?",
      answers: ["평소보다 말이 없어져서", "예민하고 날카로워져서", "평소보다 일을 미루거나 멍해져서", "얼굴이 피곤하고 생활 리듬이 깨져서", "연락이나 만남을 피해서"],
    },
    {
      question: "스트레스가 심할 때 가장 먼저 회복하고 싶은 건?",
      answers: ["편하게 말할 수 있는 여유", "안정된 기분", "다시 움직일 수 있는 집중력", "정상적인 수면과 식사", "사람들과 편하게 지낼 수 있는 에너지"],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map((text, index) => ({
      text,
      stat: ["speech", "emotion", "action", "routine", "relationship"][index],
      score: 1,
    })),
  })),
  results: [
    {
      stat: "speech",
      title: "스트레스가 말투부터 바꾸는 편",
      description: "당신은 스트레스를 받으면 가장 먼저 말수가 줄거나 반응이 짧아지는 편이에요. 평소에는 자연스럽게 하던 대화도 귀찮게 느껴지고, 괜히 말을 아끼게 될 수 있어요.\n\n기분이 나쁜 게 아니어도 주변에서는 차갑거나 무뚝뚝해졌다고 느낄 가능성이 있어요. 특히 에너지가 부족한 날에는 설명하기보다 조용히 있고 싶은 마음이 더 커질 수 있어요.\n\n억지로 말을 많이 하려고 하기보다 혼자 정리할 시간을 먼저 갖는 게 도움이 될 수 있어요. 조금 회복한 뒤 가까운 사람에게 지금 상태를 짧게라도 알려주면 오해를 줄이기 좋아요.",
    },
    {
      stat: "emotion",
      title: "스트레스가 감정부터 흔드는 편",
      description: "당신은 스트레스를 받으면 가장 먼저 감정의 폭이 커지는 편이에요. 평소라면 넘길 수 있는 일도 예민하게 느껴지고, 작은 말에도 마음이 쉽게 흔들릴 수 있어요.\n\n짜증, 서운함, 자책 같은 감정이 평소보다 오래 남으면서 하루 전체 분위기에 영향을 줄 수 있어요. 특히 여러 일이 겹치면 내가 왜 이렇게 예민한지 스스로도 답답하게 느껴질 수 있어요.\n\n감정을 억지로 눌러두기보다 지금 내가 지쳐 있다는 신호로 받아들이는 게 좋아요. 잠깐 쉬거나 감정을 정리할 시간을 가지면 훨씬 빠르게 원래 페이스로 돌아올 수 있어요.",
    },
    {
      stat: "action",
      title: "스트레스가 행동력부터 떨어뜨리는 편",
      description: "당신은 스트레스를 받으면 해야 할 일을 알면서도 몸이 잘 따라주지 않는 편이에요. 평소에는 금방 처리하던 일도 미루게 되고, 집중력이 떨어져 시작 자체가 어렵게 느껴질 수 있어요.\n\n할 일이 쌓일수록 더 부담을 느끼고, 그 부담 때문에 다시 미루는 흐름이 생길 가능성도 있어요. 의지가 부족해서라기보다 스트레스로 사용할 수 있는 에너지가 줄어든 상태에 가까워요.\n\n이럴 때는 한꺼번에 해결하려 하기보다 가장 작은 일부터 하나씩 끝내는 게 좋아요. 조금이라도 움직이기 시작하면 생각보다 빠르게 다시 리듬을 찾을 수 있어요.",
    },
    {
      stat: "routine",
      title: "스트레스가 생활 리듬부터 무너뜨리는 편",
      description: "당신은 스트레스를 받으면 수면, 식사, 피로감 같은 생활 패턴에서 가장 먼저 변화가 나타나는 편이에요. 잠이 잘 오지 않거나 반대로 너무 오래 자고 싶어질 수 있고, 먹는 습관도 평소와 달라질 수 있어요.\n\n생활 리듬이 깨지면 몸이 더 피곤해지고, 그 피로가 다시 스트레스를 키우는 흐름으로 이어질 수 있어요. 겉으로는 크게 티가 나지 않아도 몸이 먼저 현재 상태를 보여주는 타입에 가까워요.\n\n힘든 시기일수록 완벽한 관리보다 기본적인 수면과 식사 시간을 지키는 게 중요해요. 생활 리듬이 조금씩 돌아오면 감정과 집중력도 함께 안정될 가능성이 높아요.",
    },
    {
      stat: "relationship",
      title: "스트레스가 인간관계 거리부터 바꾸는 편",
      description: "당신은 스트레스를 받으면 사람들과의 거리를 먼저 늘리는 편이에요. 평소에는 괜찮던 연락이나 약속도 부담스럽게 느껴지고, 혼자 조용히 있고 싶은 마음이 커질 수 있어요.\n\n누군가가 싫어진다기보다 사람에게 쓸 에너지 자체가 부족해지면서 자연스럽게 관계를 줄이는 타입이에요. 그래서 연락이 늦어지거나 약속을 피하면서 스스로 회복할 시간을 확보하려 할 수 있어요.\n\n혼자 쉬는 시간은 분명 필요하지만 너무 오래 모든 관계를 끊을 필요는 없어요. 편한 사람 한두 명과 최소한의 연결을 유지하면 스트레스를 회복하는 데 오히려 도움이 될 수 있어요.",
    },
  ],
};

export default testData;
```

## variety-character-data.js

```javascript
"use strict";

const testData = {
  id: 41,
  url: "test.html?id=variety-character",
  title: "내 인생이 예능이라면 나는 어떤 캐릭터일까?",
  description: "사람들 사이에서 나는 어떤 역할로 기억되는 사람일까?",
  category: "재미",
  showResultType: true,
  stats: [
    { id: "center", title: "센터형" },
    { id: "reaction", title: "리액션형" },
    { id: "brain", title: "브레인형" },
    { id: "chaos", title: "사고뭉치형" },
    { id: "quiet", title: "조용한한방형" },
  ],
  questions: [
    {
      question: "여러 명이 모였는데 분위기가 어색하다면?",
      answers: [
        ["누군가 말할 때 리액션을 크게 해준다", "reaction"],
        ["먼저 이야깃거리를 꺼내 분위기를 띄운다", "center"],
        ["상황을 지켜보다가 필요한 순간에 한마디 한다", "quiet"],
        ["다들 편해질 수 있게 자연스럽게 대화를 연결한다", "brain"],
        ["어색한 상황 자체가 웃겨서 이상한 행동을 할 수도 있다", "chaos"],
      ],
    },
    {
      question: "친구들과 여행을 가면 내 역할은?",
      answers: [
        ["일정이나 동선을 은근히 정리하는 편이다", "brain"],
        ["재미있는 일이 생기면 제일 먼저 반응한다", "reaction"],
        ["평소엔 조용하다가 결정적인 순간에 웃긴 말을 한다", "quiet"],
        ["예상 못 한 행동으로 사건을 하나씩 만든다", "chaos"],
        ["사람들이 자연스럽게 내 쪽을 보고 움직이는 편이다", "center"],
      ],
    },
    {
      question: "친구가 황당한 실수를 했다면?",
      answers: [
        ["왜 그렇게 됐는지 상황부터 정리한다", "brain"],
        ["너무 웃겨서 바로 크게 반응한다", "reaction"],
        ["한마디로 상황을 정리해서 모두를 웃긴다", "quiet"],
        ["나도 비슷한 실수를 해서 일이 더 커질 수 있다", "chaos"],
        ["그 상황을 소재로 계속 놀리면서 분위기를 만든다", "center"],
      ],
    },
    {
      question: "단체 사진을 찍을 때 나는?",
      answers: [
        ["사람들이 잘 나오도록 위치나 구도를 챙긴다", "brain"],
        ["누가 시키지 않아도 자연스럽게 가운데 있는 경우가 많다", "center"],
        ["웃긴 표정이나 포즈를 해버린다", "chaos"],
        ["옆에서 다른 사람 포즈를 보고 잘 따라준다", "reaction"],
        ["평범하게 있다가 사진 한 장에서 이상하게 존재감이 크다", "quiet"],
      ],
    },
    {
      question: "사람들이 내 이야기에 웃기 시작하면?",
      answers: [
        ["더 신나서 계속 이야기를 이어간다", "center"],
        ["사람들이 웃는 걸 보고 나도 더 크게 웃는다", "reaction"],
        ["여기서 멈춰야 제일 웃긴 타이밍인지 생각한다", "brain"],
        ["나도 왜 웃긴지 모르겠는데 상황이 점점 커진다", "chaos"],
        ["별생각 없이 한 말인데 반응이 커서 당황한다", "quiet"],
      ],
    },
    {
      question: "모임에서 누군가 너무 말이 많다면?",
      answers: [
        ["적당한 타이밍에 다른 사람에게 화제를 넘긴다", "brain"],
        ["열심히 들어주면서 반응해준다", "reaction"],
        ["나도 같이 이야기하면서 분위기를 더 키운다", "center"],
        ["듣고 있다가 핵심을 찌르는 한마디를 한다", "quiet"],
        ["갑자기 전혀 다른 이야기를 꺼낼 가능성이 있다", "chaos"],
      ],
    },
    {
      question: "갑자기 카메라가 나를 찍고 있다면?",
      answers: [
        ["생각보다 자연스럽게 행동할 것 같다", "center"],
        ["카메라를 의식해서 평소보다 반응이 커질 것 같다", "reaction"],
        ["어색해서 이상한 행동을 할 것 같다", "chaos"],
        ["굳이 나서지는 않지만 평소처럼 있을 것 같다", "quiet"],
        ["상황을 파악하면서 다른 사람들을 먼저 볼 것 같다", "brain"],
      ],
    },
    {
      question: "게임이나 미션을 해야 한다면?",
      answers: [
        ["규칙을 파악하고 이길 방법부터 생각한다", "brain"],
        ["승패보다 일단 재미있게 하는 게 중요하다", "chaos"],
        ["사람들 반응을 끌어내면서 적극적으로 참여한다", "center"],
        ["다른 사람이 잘하면 누구보다 열심히 반응한다", "reaction"],
        ["조용히 하다가 의외로 좋은 결과를 낸다", "quiet"],
      ],
    },
    {
      question: "친구들이 나를 놀리기 시작하면?",
      answers: [
        ["오히려 받아치면서 내가 분위기를 주도한다", "center"],
        ["같이 웃으면서 재미있게 받아준다", "reaction"],
        ["가만히 있다가 결정적인 말 한마디로 역전한다", "quiet"],
        ["왜 놀리는지 논리적으로 반박한다", "brain"],
        ["더 웃기려고 스스로 소재를 추가한다", "chaos"],
      ],
    },
    {
      question: "모임에서 갑자기 문제가 생기면?",
      answers: [
        ["상황을 정리하고 해결 방법을 찾는다", "brain"],
        ["다들 너무 긴장하지 않게 분위기를 풀어준다", "reaction"],
        ["어떻게든 사람들을 움직이게 만든다", "center"],
        ["예상 밖의 방법을 시도하다가 또 다른 일이 생길 수도 있다", "chaos"],
        ["필요할 때만 정확하게 의견을 낸다", "quiet"],
      ],
    },
    {
      question: "처음 보는 사람들과 있을 때 나는?",
      answers: [
        ["분위기를 보고 사람들 성향부터 파악한다", "brain"],
        ["누가 말하면 반응을 잘해주면서 자연스럽게 섞인다", "reaction"],
        ["어느 순간 내가 대화를 주도하고 있다", "center"],
        ["초반에는 조용하지만 친해지면 의외라는 말을 듣는다", "quiet"],
        ["긴장해서 평소보다 이상한 말을 할 가능성이 있다", "chaos"],
      ],
    },
    {
      question: "친구들이 내게 자주 하는 말과 가장 가까운 건?",
      answers: [
        ['"너 없으면 분위기 너무 조용해."', "center"],
        ['"너는 진짜 반응이 좋아."', "reaction"],
        ['"너 생각보다 머리 잘 굴린다."', "brain"],
        ['"넌 진짜 뭔가 하나씩 터뜨린다."', "chaos"],
        ['"가만히 있다가 한마디 하는 게 제일 웃겨."', "quiet"],
      ],
    },
    {
      question: "예상하지 못한 일이 생겼을 때?",
      answers: [
        ["오히려 재미있는 상황이 생겼다고 생각한다", "chaos"],
        ["어떻게 해야 할지 빠르게 판단한다", "brain"],
        ["사람들 반응을 보며 같이 웃거나 놀란다", "reaction"],
        ["상황을 이용해서 더 재미있게 만든다", "center"],
        ["조용히 지켜보다가 나중에 한마디 한다", "quiet"],
      ],
    },
    {
      question: "내가 예능 프로그램에 출연한다면 가장 자신 있는 건?",
      answers: [
        ["분위기를 이끌고 사람들과 잘 어울리는 것", "center"],
        ["다른 출연자의 말을 살려주는 것", "reaction"],
        ["게임이나 상황에서 전략을 짜는 것", "brain"],
        ["예상 못 한 행동으로 장면을 만드는 것", "chaos"],
        ["분량은 적어도 기억에 남는 한마디를 하는 것", "quiet"],
      ],
    },
    {
      question: "방송이 끝난 뒤 사람들이 나를 어떻게 기억했으면 좋겠어?",
      answers: [
        ['"저 사람 나오면 재밌다."', "center"],
        ['"같이 있으면 분위기가 진짜 좋다."', "reaction"],
        ['"생각보다 엄청 똑똑한 캐릭터다."', "brain"],
        ['"저 사람 때문에 레전드 장면 나왔다."', "chaos"],
        ['"분량은 적은데 나올 때마다 웃겼다."', "quiet"],
      ],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map(([text, stat]) => ({ text, stat, score: 1 })),
  })),
  results: [
    {
      stat: "center",
      title: "자연스럽게 중심이 되는 메인 캐릭터",
      description: "당신은 여러 사람이 함께 있을 때 자연스럽게 분위기의 중심이 되는 편이에요. 먼저 이야기를 꺼내거나 사람들의 반응을 끌어내면서 흐름을 만드는 힘이 있어요.\n\n굳이 주목받으려고 하지 않아도 주변 사람들이 당신의 말이나 행동을 따라가는 경우가 많을 수 있어요. 재미있는 일이 생기면 더 크게 살리고, 어색한 순간도 자연스럽게 넘기는 편이에요.\n\n다만 항상 분위기를 책임져야 한다는 부담까지 가질 필요는 없어요. 가끔은 다른 사람에게 중심을 맡기고 편하게 따라가는 것도 충분히 즐거울 수 있어요.",
    },
    {
      stat: "reaction",
      title: "다른 사람까지 빛나게 만드는 리액션 캐릭터",
      description: "당신은 직접 웃긴 말을 하지 않아도 주변 사람의 이야기를 재미있게 만들어주는 힘이 있는 편이에요. 상대의 말에 잘 웃고 공감해주면서 모임의 분위기를 자연스럽게 살려주는 타입이에요.\n\n사람들은 당신과 대화하면 내 이야기를 잘 들어준다는 느낌을 받을 가능성이 높아요. 그래서 처음 보는 사람과도 비교적 편하게 어울리고, 모임에서 꼭 필요한 사람이 되기 쉬워요.\n\n다만 다른 사람의 분위기에 맞추다 보면 내 컨디션보다 반응을 먼저 챙길 수도 있어요. 항상 좋은 반응을 보여주지 않아도 편하게 있을 수 있는 관계를 함께 만들어보세요.",
    },
    {
      stat: "brain",
      title: "뒤에서 판을 읽는 전략가 캐릭터",
      description: "당신은 눈에 가장 많이 띄기보다 상황을 빠르게 파악하고 흐름을 정리하는 데 강한 편이에요. 게임이나 문제가 생겼을 때 사람들이 놓친 부분을 찾아내고 현실적인 방법을 제시하는 타입이에요.\n\n다른 사람들이 신나게 움직이는 동안 머릿속에서는 다음 상황까지 생각하고 있을 가능성이 높아요. 그래서 결정적인 순간에 믿고 의견을 물어볼 수 있는 사람으로 보일 수 있어요.\n\n다만 모든 상황을 너무 분석하려 하면 재미있는 순간까지 계산하게 될 수도 있어요. 가끔은 전략 없이 분위기를 따라가 보는 것도 새로운 재미를 줄 수 있어요.",
    },
    {
      stat: "chaos",
      title: "가만히 있어도 사건이 생기는 예능 치트키",
      description: "당신은 일부러 웃기려고 하지 않아도 예상하지 못한 상황을 자주 만들어내는 편이에요. 갑작스러운 행동이나 실수조차 나중에는 재미있는 에피소드로 남을 가능성이 높아요.\n\n계획대로 흘러가지 않는 상황에서도 너무 심각하게 받아들이지 않고 재미를 찾는 힘이 있어요. 그래서 주변에서는 당신과 함께 있으면 무슨 일이 생길지 몰라 지루하지 않다고 느낄 수 있어요.\n\n다만 재미있게 넘어갈 수 있는 일과 실제로 챙겨야 하는 일은 구분할 필요가 있어요. 당신의 즉흥적인 매력에 약간의 주의력만 더해지면 어디서든 강한 캐릭터가 될 수 있어요.",
    },
    {
      stat: "quiet",
      title: "가만히 있다가 한마디로 끝내는 히든 캐릭터",
      description: "당신은 처음부터 앞에 나서기보다 상황을 지켜보다가 필요한 순간에 존재감을 보여주는 편이에요. 평소에는 조용해 보여도 예상하지 못한 한마디나 행동으로 분위기를 뒤집을 때가 있어요.\n\n말이 많지 않아서 오히려 당신이 한마디 했을 때 주변 사람들이 더 크게 반응할 가능성이 높아요. 처음에는 차분한 사람으로 보이다가 친해질수록 의외의 모습을 발견하는 재미가 있는 타입이에요.\n\n굳이 다른 사람처럼 계속 분위기를 띄우려고 할 필요는 없어요. 지금처럼 내 타이밍에 움직이는 것이 오히려 당신만의 강한 캐릭터가 될 수 있어요.",
    },
  ],
};

export default testData;
```

## workplace-image-data.js

```javascript
"use strict";

const testData = {
  id: 38,
  url: "test.html?id=workplace-image",
  title: "회사에서 나는 어떤 이미지로 보일까?",
  description: "내가 생각하는 나와 동료들이 보는 나는 얼마나 다를까?",
  category: "친구·인간관계·사회생활",
  showResultType: true,
  stats: [
    { id: "reliable", title: "든든형" },
    { id: "friendly", title: "친화형" },
    { id: "skilled", title: "실력파형" },
    { id: "organized", title: "야무진형" },
    { id: "independent", title: "독립형" },
  ],
  questions: [
    {
      question: "새로운 업무를 맡았을 때 나는?",
      answers: [
        ["일단 필요한 내용을 정리하고 차근차근 시작한다", "organized"],
        ["잘 모르겠는 부분은 주변에 물어보며 같이 풀어간다", "friendly"],
        ["말보다 결과로 보여주려고 한다", "skilled"],
        ["책임진 일은 어떻게든 끝까지 마무리한다", "reliable"],
        ["내 방식대로 먼저 파악하고 혼자 해보는 편이다", "independent"],
      ],
    },
    {
      question: "회의 중 내 의견과 다른 이야기가 나오면?",
      answers: [
        ["굳이 필요하지 않으면 조용히 듣는 편이다", "independent"],
        ["분위기를 해치지 않게 내 의견을 말한다", "friendly"],
        ["근거가 있다면 분명하게 이야기한다", "organized"],
        ["전체적으로 어떤 선택이 가장 나은지 생각한다", "reliable"],
        ["내 생각이 맞다고 판단되면 결과로 증명하고 싶다", "skilled"],
      ],
    },
    {
      question: "동료가 갑자기 업무를 도와달라고 하면?",
      answers: [
        ["내가 할 수 있는 부분은 적극적으로 도와준다", "reliable"],
        ["일단 상황을 듣고 같이 방법을 찾아본다", "friendly"],
        ["내 업무에 지장이 없다면 도와준다", "independent"],
        ["가장 빠르게 해결할 수 있는 방법을 알려준다", "skilled"],
        ["우선순위를 확인하고 가능한 범위를 정한다", "organized"],
      ],
    },
    {
      question: "점심시간에 나는?",
      answers: [
        ["친한 동료들과 이야기하면서 먹는 게 좋다", "friendly"],
        ["그날 상황에 따라 편하게 움직인다", "organized"],
        ["가끔은 혼자 먹는 것도 편하다", "independent"],
        ["사람들과 어울리지만 너무 오래 있지는 않는다", "skilled"],
        ["주변 사람들을 챙기면서 자연스럽게 같이 움직인다", "reliable"],
      ],
    },
    {
      question: "업무 실수를 했을 때 나는?",
      answers: [
        ["원인을 확인하고 같은 실수를 반복하지 않게 정리한다", "organized"],
        ["혼자 먼저 해결해본 뒤 필요한 경우에만 공유한다", "independent"],
        ["빠르게 인정하고 바로 수정한다", "reliable"],
        ["실수한 부분보다 결과를 어떻게 복구할지 집중한다", "skilled"],
        ["관련된 사람들에게 먼저 상황을 설명한다", "friendly"],
      ],
    },
    {
      question: "회사에서 가장 듣고 싶은 말은?",
      answers: [
        ['"같이 일하면 편해."', "friendly"],
        ['"저 사람한테 맡기면 걱정 없어."', "reliable"],
        ['"일 진짜 잘한다."', "skilled"],
        ['"자기 할 일은 확실히 한다."', "independent"],
        ['"일 처리가 진짜 깔끔하다."', "organized"],
      ],
    },
    {
      question: "갑자기 일이 몰리면 나는?",
      answers: [
        ["할 일을 나누고 우선순위부터 정한다", "organized"],
        ["묵묵히 하나씩 처리하면서 끝까지 버틴다", "reliable"],
        ["최대한 효율적인 방법을 찾아 빠르게 처리한다", "skilled"],
        ["필요하면 주변 사람들과 역할을 나눈다", "friendly"],
        ["내가 맡은 부분부터 집중해서 끝낸다", "independent"],
      ],
    },
    {
      question: "신입이나 새로운 동료가 들어오면?",
      answers: [
        ["먼저 말을 걸고 편하게 적응하도록 도와준다", "friendly"],
        ["필요한 부분을 정리해서 알려준다", "organized"],
        ["물어보면 최대한 정확하게 알려준다", "skilled"],
        ["모르는 게 있으면 언제든 물어보라고 한다", "reliable"],
        ["굳이 먼저 다가가진 않지만 필요하면 도와준다", "independent"],
      ],
    },
    {
      question: "회사에서 불편한 사람이 있다면?",
      answers: [
        ["업무에 필요한 관계만 유지한다", "independent"],
        ["최대한 티 내지 않고 무난하게 지낸다", "friendly"],
        ["감정과 일을 분리하려고 한다", "reliable"],
        ["일만 잘 맞으면 크게 신경 쓰지 않는다", "skilled"],
        ["선을 넘는 부분은 분명하게 정리한다", "organized"],
      ],
    },
    {
      question: "내가 맡은 일에 다른 사람이 계속 의견을 낸다면?",
      answers: [
        ["좋은 의견이면 자연스럽게 받아들인다", "reliable"],
        ["왜 그렇게 생각하는지 충분히 들어본다", "friendly"],
        ["더 좋은 결과가 나온다면 방식은 상관없다", "skilled"],
        ["필요한 의견과 아닌 의견을 구분한다", "organized"],
        ["지나친 간섭처럼 느껴지면 조금 불편하다", "independent"],
      ],
    },
    {
      question: "상사가 갑자기 새로운 일을 맡긴다면?",
      answers: [
        ["요구사항부터 빠르게 파악한다", "skilled"],
        ["일정과 현재 업무를 먼저 정리한다", "organized"],
        ["맡은 일이니 최대한 책임지고 해낸다", "reliable"],
        ["필요한 부분은 주변과 소통하면서 진행한다", "friendly"],
        ["일단 혼자 파악할 시간을 갖고 싶다", "independent"],
      ],
    },
    {
      question: "회사 사람들과 친해지는 정도는?",
      answers: [
        ["회사에서도 편한 사람들과 친하게 지내는 편이다", "friendly"],
        ["업무 관계와 개인적인 관계를 어느 정도 나누는 편이다", "independent"],
        ["친해지더라도 기본적인 선은 지키는 편이다", "organized"],
        ["같이 일하면서 자연스럽게 신뢰가 쌓이는 게 중요하다", "reliable"],
        ["사람보다 일로 인정받는 게 더 중요하다", "skilled"],
      ],
    },
    {
      question: "누군가 내 업무 결과를 칭찬하면?",
      answers: [
        ["속으로 뿌듯하지만 크게 티 내지는 않는다", "independent"],
        ["다음에도 믿고 맡길 수 있게 더 잘하고 싶어진다", "reliable"],
        ["노력한 만큼 인정받은 것 같아 좋다", "skilled"],
        ["같이 일한 사람들에게도 공을 돌린다", "friendly"],
        ["잘된 이유를 기억해두고 다음에도 활용한다", "organized"],
      ],
    },
    {
      question: "회사에서 예상치 못한 문제가 생기면?",
      answers: [
        ["상황을 빠르게 정리하고 해결 순서를 잡는다", "organized"],
        ["누가 필요한지 파악해서 같이 움직인다", "friendly"],
        ["내가 할 수 있는 부분은 끝까지 책임진다", "reliable"],
        ["원인을 빠르게 찾아 해결하는 데 집중한다", "skilled"],
        ["불필요하게 휘말리지 않고 내 역할에 집중한다", "independent"],
      ],
    },
    {
      question: "퇴근 직전 급한 일이 생겼다면?",
      answers: [
        ["정말 급한 일인지 먼저 판단한다", "organized"],
        ["내가 해야 할 일이라면 마무리하고 간다", "reliable"],
        ["빠르게 끝낼 수 있는 방법부터 찾는다", "skilled"],
        ["같이 해야 한다면 주변 사람들과 맞춰서 처리한다", "friendly"],
        ["내 업무가 아니라면 굳이 먼저 나서지는 않는다", "independent"],
      ],
    },
  ].map(({ question, answers }) => ({
    question,
    answers: answers.map(([text, stat]) => ({ text, stat, score: 1 })),
  })),
  results: [
    {
      stat: "reliable",
      title: "믿고 맡길 수 있는 사람으로 보이는 편",
      description: "회사에서는 책임감 있고 믿을 만한 사람이라는 이미지를 주는 편이에요. 맡은 일이 생기면 쉽게 손을 놓지 않고 끝까지 마무리하려는 모습이 자주 보일 수 있어요.\n\n주변 사람들도 문제가 생겼을 때 당신에게 도움을 요청하거나 의견을 물어볼 가능성이 높아요. 화려하게 앞에 나서기보다 꾸준하게 제 역할을 해내면서 신뢰를 쌓는 타입이에요.\n\n다만 책임감 때문에 다른 사람의 일까지 너무 많이 떠맡게 될 수도 있어요. 도와주는 것과 내가 책임져야 하는 일을 구분하면 훨씬 편하게 회사생활을 할 수 있어요.",
    },
    {
      stat: "friendly",
      title: "같이 일하면 편한 사람으로 보이는 편",
      description: "회사에서는 사람들과 자연스럽게 어울리고 분위기를 편하게 만드는 이미지가 강한 편이에요. 먼저 말을 걸거나 상대 이야기를 잘 들어줘서 함께 일하기 편한 사람으로 느껴질 수 있어요.\n\n업무에서도 혼자 해결하기보다 필요한 사람들과 소통하면서 문제를 풀어가는 데 강점이 있어요. 새로운 사람이나 낯선 팀에서도 비교적 빠르게 관계를 만들 수 있는 타입이에요.\n\n다만 주변 분위기를 너무 신경 쓰면 정작 내 의견을 뒤로 미루게 될 수도 있어요. 사람들과 잘 지내는 장점은 유지하면서 필요한 순간에는 내 생각도 분명하게 말해보세요.",
    },
    {
      stat: "skilled",
      title: "말보다 결과로 보여주는 사람으로 보이는 편",
      description: "회사에서는 일 잘하고 자기 역할이 확실한 사람이라는 이미지를 주기 쉬운 편이에요. 불필요하게 말이 많기보다 맡은 업무를 빠르고 정확하게 처리하는 모습을 중요하게 생각해요.\n\n문제가 생겨도 감정적으로 반응하기보다 해결 방법이나 결과에 집중하는 편이에요. 그래서 동료들에게는 업무적으로 믿을 수 있고 능력 있는 사람처럼 보일 가능성이 높아요.\n\n다만 일에 집중하다 보면 주변에서는 조금 차갑거나 무심하게 느낄 때도 있을 수 있어요. 작은 대화나 표현을 조금만 더해도 실력과 친근함을 함께 보여줄 수 있어요.",
    },
    {
      stat: "organized",
      title: "일 처리가 똑 부러지는 사람으로 보이는 편",
      description: "회사에서는 상황 파악이 빠르고 일을 깔끔하게 정리하는 사람이라는 이미지가 강한 편이에요. 업무를 시작하기 전에 우선순위와 필요한 부분을 정리해서 효율적으로 움직이려는 타입이에요.\n\n해야 할 말과 하지 않아도 될 말을 구분하고, 필요한 순간에는 의견도 분명하게 표현하는 편이에요. 그래서 주변에서는 현실적이고 야무지게 회사생활을 하는 사람으로 볼 가능성이 높아요.\n\n다만 기준이 명확한 만큼 느리거나 답답한 상황에서는 예민해질 수도 있어요. 모든 일이 내 방식대로 흘러가지 않아도 조금 여유를 두면 강점이 더 잘 드러날 수 있어요.",
    },
    {
      stat: "independent",
      title: "자기 영역이 확실한 사람으로 보이는 편",
      description: "회사에서는 혼자서도 자기 일을 잘해내고 개인적인 영역이 분명한 사람으로 보이는 편이에요. 필요한 소통은 하지만 굳이 모든 사람과 가까워져야 한다고 생각하지 않는 타입이에요.\n\n업무와 사생활을 비교적 잘 구분하고 혼자 집중할 수 있는 환경에서 능력을 잘 발휘하는 편이에요. 주변 분위기에 쉽게 휘둘리지 않아 자기 페이스를 유지하는 데도 강점이 있어요.\n\n다만 표현이 적으면 다른 사람에게는 조금 어렵거나 거리감 있는 사람으로 보일 수도 있어요. 필요할 때 먼저 한마디 건네는 것만으로도 훨씬 편안한 이미지를 줄 수 있어요.",
    },
  ],
};

export default testData;
```

## year-off-data.js

```javascript
"use strict";

// Fixed orders keep each question stable when revisiting it while varying type positions.
const answerOrders = [
  [2,4,1,0,3], [3,0,2,4,1], [1,3,4,2,0], [4,2,0,3,1], [0,1,3,4,2],
  [3,2,1,0,4], [1,4,0,3,2], [4,0,3,2,1], [2,3,4,1,0], [0,4,2,1,3],
  [4,1,2,3,0], [2,0,4,3,1], [0,3,1,2,4], [3,1,0,4,2], [1,2,3,0,4],
];

const testData = {
  id: 44,
  url: "test.html?id=year-off",
  title: "갑자기 1년 휴가가 생기면 나는?",
  description: "아무 의무 없이 1년이 주어진다면 나는 어떻게 살아갈까?",
  category: "재미",
  showResultType: true,
  stats: [
    { id: "travel", title: "여행형" },
    { id: "growth", title: "성장형" },
    { id: "rest", title: "휴식형" },
    { id: "connection", title: "관계형" },
    { id: "adventure", title: "도전형" },
  ],
  questions: [
    {
      question: "갑자기 내일부터 1년 동안 아무 일도 안 해도 된다는 말을 들으면?",
      answers: ["평소 못 가본 곳부터 떠올린다", "하고 싶었던 공부나 프로젝트를 생각한다", "일단 며칠은 아무것도 안 하고 쉬고 싶다", "누구랑 시간을 보낼지부터 생각한다", "평소라면 못 해볼 일을 해보고 싶어진다"],
    },
    {
      question: "휴가 첫 달을 보낸다면 가장 가까운 모습은?",
      answers: ["짐 싸서 다른 지역이나 나라에 가 있을 것 같다", "새로운 운동이나 취미를 제대로 시작할 것 같다", "늦잠 자고 먹고 싶은 걸 먹으며 푹 쉴 것 같다", "친구나 가족과 밀린 약속을 몰아서 잡을 것 같다", "계획 없이 그날그날 하고 싶은 걸 해볼 것 같다"],
    },
    {
      question: "1년 뒤 반드시 하나를 얻어야 한다면?",
      answers: ["평생 기억할 만한 경험", "지금보다 발전한 나", "제대로 쉬었다는 만족감", "소중한 사람들과 만든 추억", "예전에는 상상하지 못했던 새로운 삶의 방식"],
    },
    {
      question: "돈이 충분하다는 전제라면 가장 해보고 싶은 것은?",
      answers: ["여러 나라를 천천히 여행하기", "배우고 싶었던 걸 제대로 배워보기", "좋은 집에서 여유롭게 아무것도 안 하기", "좋아하는 사람들과 자주 놀러 다니기", "한 달 살기나 낯선 일을 즉흥적으로 해보기"],
    },
    {
      question: "시간이 너무 많아서 심심해지기 시작하면?",
      answers: ["새로운 여행지를 찾아본다", "뭔가 배울 거리를 만든다", "심심한 것도 나름 즐기면서 쉰다", "사람들에게 연락해서 약속을 만든다", "아무 생각 없이 새로운 일을 벌인다"],
    },
    {
      question: "휴가 중 가장 행복할 것 같은 순간은?",
      answers: ["처음 보는 풍경 앞에 서 있을 때", "어제보다 내가 나아졌다고 느낄 때", "알람 없이 눈을 뜨는 아침", "좋아하는 사람들과 늦게까지 웃고 있을 때", "전혀 예상하지 못한 일이 생겼을 때"],
    },
    {
      question: "1년 동안 한곳에만 있어야 한다면?",
      answers: ["다른 지역을 못 간다는 게 가장 답답할 것 같다", "그곳에서 할 수 있는 걸 찾아서 배울 것 같다", "오히려 안정적이라 괜찮을 것 같다", "같이 지낼 사람이 있다면 크게 상관없다", "규칙을 깨고 다른 재미를 찾을 것 같다"],
    },
    {
      question: "주변에서 “1년 동안 뭐 했어?”라고 묻는다면 가장 하고 싶은 대답은?",
      answers: ["“여기저기 진짜 많이 다녔어.”", "“배우고 만들고 많이 성장했어.”", "“진짜 제대로 쉬었어.”", "“좋아하는 사람들이랑 많이 지냈어.”", "“별별 걸 다 해봤어.”"],
    },
    {
      question: "휴가가 절반 정도 지났을 때 가장 걱정될 것 같은 건?",
      answers: ["아직 못 가본 곳이 너무 많은 것", "시간을 의미 없이 쓰고 있는 것", "다시 바쁜 생활로 돌아가야 하는 것", "사람들과 멀어지거나 혼자가 되는 것", "너무 똑같은 일상만 반복하는 것"],
    },
    {
      question: "하루 일정을 짠다면 가장 가까운 건?",
      answers: ["오늘 갈 곳과 볼 것을 정해둔다", "운동, 공부, 취미 시간을 어느 정도 계획한다", "굳이 계획하지 않고 컨디션대로 움직인다", "누구를 만날지 중심으로 하루를 정한다", "아침에 일어나서 그날 하고 싶은 걸 정한다"],
    },
    {
      question: "휴가 중 새로운 사람이 말을 걸어온다면?",
      answers: ["여행 정보나 새로운 장소 이야기에 관심이 간다", "그 사람이 가진 경험이나 지식이 궁금하다", "기분 내키면 편하게 대화한다", "금방 친해져서 같이 놀 수도 있다", "갑자기 같이 뭔가 하자고 해도 재밌을 것 같다"],
    },
    {
      question: "1년 동안 SNS를 한다면 가장 많이 올릴 것 같은 건?",
      answers: ["여행 사진과 새로운 장소", "운동, 공부, 취미 같은 변화 기록", "카페, 집, 쉬는 일상", "친구나 가족과 함께한 사진", "갑자기 시작한 이상한 도전이나 사건"],
    },
    {
      question: "휴가가 끝나기 한 달 전이라면?",
      answers: ["마지막 여행을 한 번 더 떠난다", "지난 1년 동안 한 걸 정리하고 다음 목표를 세운다", "남은 시간만큼은 더 여유롭게 쉬고 싶다", "보고 싶은 사람들을 최대한 많이 만난다", "마지막으로 크게 하나 질러보고 싶어진다"],
    },
    {
      question: "다시 일상으로 돌아가야 한다면 가장 아쉬운 건?",
      answers: ["자유롭게 어디든 갈 수 있었던 것", "내 성장을 위해 마음껏 시간을 쓸 수 있었던 것", "시간에 쫓기지 않고 살았던 것", "사람들과 여유롭게 지낼 수 있었던 것", "예측하지 않아도 되는 자유로운 생활"],
    },
    {
      question: "아무도 나를 평가하지 않는 1년이 주어진다면?",
      answers: ["세상을 최대한 많이 보고 싶다", "내가 어디까지 할 수 있는지 시험해보고 싶다", "그냥 내 속도대로 편하게 살고 싶다", "좋아하는 사람들과 시간을 많이 보내고 싶다", "평소의 나와 완전히 다른 삶을 살아보고 싶다"],
    },
  ].map(({ question, answers }, questionIndex) => ({
    question,
    answers: answerOrders[questionIndex].map(index => ({
      text: answers[index],
      stat: ["travel", "growth", "rest", "connection", "adventure"][index],
      score: 1,
    })),
  })),
  results: [
    {
      stat: "travel",
      title: "세상을 최대한 많이 보고 싶은 여행형",
      description: "갑자기 긴 시간이 주어진다면 한곳에 머무르기보다 새로운 곳을 찾아 떠나고 싶은 편이에요. 처음 보는 풍경과 낯선 분위기에서 일상에서는 느끼기 어려운 자극을 얻는 타입이에요.\n\n시간이 생기면 물건보다 경험에 쓰고 싶다는 마음이 크고, 여행에서 얻는 기억을 중요하게 생각해요. 익숙한 환경을 잠시 벗어났을 때 오히려 내가 어떤 사람인지 더 잘 알게 될 수도 있어요.\n\n다만 너무 많은 곳을 보려고 하면 여행 자체가 또 하나의 일정처럼 느껴질 수 있어요. 가끔은 한곳에 오래 머물면서 천천히 보내는 시간도 충분히 좋은 경험이 될 수 있어요.",
    },
    {
      stat: "growth",
      title: "쉬는 시간도 성장으로 채우는 성장형",
      description: "긴 휴가가 생겨도 아무것도 하지 않고 보내기보다 그동안 미뤄둔 일을 해보고 싶은 편이에요. 공부, 운동, 자격증, 취미처럼 결과가 남는 일에 자연스럽게 관심이 가는 타입이에요.\n\n시간을 자유롭게 쓸 수 있을수록 내가 얼마나 달라질 수 있는지 시험해보고 싶어 할 가능성이 높아요. 1년이 끝났을 때 이전보다 나아진 모습을 확인하면 가장 큰 만족감을 느낄 수 있어요.\n\n다만 쉬는 시간까지 반드시 생산적으로 보내야 한다고 생각하면 오히려 부담이 될 수 있어요. 아무것도 하지 않는 시간도 다음 단계로 가기 위한 충분한 과정이 될 수 있어요.",
    },
    {
      stat: "rest",
      title: "아무것도 안 해도 행복한 휴식형",
      description: "갑자기 1년이 주어진다면 가장 먼저 그동안 쌓인 피로부터 제대로 풀고 싶은 편이에요. 계획을 빽빽하게 채우기보다 늦잠을 자고 천천히 하루를 시작하는 생활에서 만족을 느껴요.\n\n무언가를 이루지 않아도 내 시간대로 움직일 수 있다는 것 자체를 큰 자유로 느끼는 타입이에요. 평소 바쁜 생활에서 놓쳤던 작은 일상과 여유를 다시 즐기고 싶어 할 가능성이 높아요.\n\n다만 쉬는 시간이 너무 길어지면 어느 순간 지루함이나 무기력을 느낄 수도 있어요. 충분히 쉬고 난 뒤에는 작은 취미나 새로운 루틴 하나를 더해보는 것도 좋아요.",
    },
    {
      stat: "connection",
      title: "좋아하는 사람들과 시간을 채우는 관계형",
      description: "긴 휴가가 생기면 무엇을 하느냐보다 누구와 함께하느냐를 더 중요하게 생각하는 편이에요. 바빠서 자주 보지 못했던 친구나 가족과 시간을 보내는 것만으로도 큰 만족을 느낄 수 있어요.\n\n혼자 멋진 경험을 하는 것보다 좋아하는 사람과 함께 웃고 이야기했던 순간이 더 오래 기억에 남는 타입이에요. 여행이나 취미도 함께할 사람이 있을 때 훨씬 즐겁게 느껴질 가능성이 높아요.\n\n다만 사람들과 보내는 시간만 채우다 보면 정작 내게 필요한 혼자만의 시간이 부족해질 수도 있어요. 관계를 즐기는 만큼 아무 약속 없는 하루도 가끔 만들어두면 더 편안하게 쉴 수 있어요.",
    },
    {
      stat: "adventure",
      title: "평소 못 해본 걸 다 해보는 도전형",
      description: "갑자기 1년의 자유가 생기면 똑같은 일상을 반복하기보다 새로운 일을 벌이고 싶은 편이에요. 낯선 취미나 한 달 살기처럼 평소에는 쉽게 선택하지 못했던 경험에 특히 끌리는 타입이에요.\n\n미리 모든 걸 계획하기보다 그때그때 재미있어 보이는 것을 따라가면서 예상 밖의 경험을 만드는 걸 좋아해요. 1년이 끝났을 때 안정적으로 쉬었다는 느낌보다 재미있는 이야기가 많이 남는 것을 더 만족스럽게 느낄 수 있어요.\n\n다만 즉흥적으로 움직이다 보면 시간이나 돈을 예상보다 많이 사용할 수도 있어요. 최소한의 기준만 정해두고 움직이면 자유로움은 유지하면서도 훨씬 많은 경험을 즐길 수 있어요.",
    },
  ],
};

export default testData;
```

## assets/favicon.svg

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="16" fill="#ff547e"/>
  <path d="m9 16 4.5 4.5L23 11" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```
