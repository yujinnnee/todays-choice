# 오늘의 초이스

GitHub Pages에서 제공하는 정적 테스트 사이트입니다. 페이지 주소를 유지하기 위해 HTML과 호스팅·검색엔진 설정은 루트에 둡니다.

```text
assets/
  css/           공통·테스트·정보 페이지 스타일
  js/            화면 동작, 테스트 실행·로딩, SEO, GA4, 공유
  *.png, *.svg   기존 공유 이미지와 파비콘
data/
  tests/         기존 50개 테스트의 질문·선택지·결과 데이터
  content/       카탈로그, 소개, 해설, 관련 추천, SEO 설명
docs/            운영·구현·콘텐츠 관리 문서
previews/        화면 미리보기 이미지
scripts/         정적 링크·사이트맵 관리 도구
tests/           자동 검사
*.html           홈·테스트·정보·오류·사이트 소유 확인 페이지
CNAME            도메인 설정
robots.txt       크롤링 설정
sitemap.xml      기존 페이지 목록
```

별도 빌드 단계 없이 저장소 루트를 정적 서버로 제공합니다. ES module을 사용하므로 HTML 파일을 직접 열기보다 로컬 HTTP 서버로 확인합니다.

저장소 루트에서 검증합니다.

```text
node tests/content.test.js
node tests/seo.test.js
node tests/routing.test.js
node tests/analytics.test.js
node tests/browser-smoke.js
```

브라우저 검사는 로컬 Chrome을 사용하며, 다른 설치 경로는 `CHROME_PATH`로 지정합니다.

- [테스트 구조](docs/test-structure.md)
- [콘텐츠 관리와 보강 기록](docs/content-quality.md)
- [SEO 설정](docs/seo-setup.md)
- [GA4 설정](docs/analytics-setup.md)
