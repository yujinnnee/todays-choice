# 오늘의 초이스 SEO 관리

메인 제목: 오늘의 초이스 | 무료 심리테스트, 연애·성격 테스트

메인 설명: 연애, 성격, 인간관계, 재미 테스트까지 가볍게 즐길 수 있는 무료 심리테스트 사이트 오늘의 초이스입니다.

## 적용 방식

- `index.html`: 고유 title/description, 요청한 keywords, robots, canonical, OG, Twitter Card, WebSite JSON-LD. 기존 공유 이미지를 유지합니다.
- 메인 HTML에 등록된 테스트의 제목·부제목·실제 링크를 포함합니다. JavaScript를 실행하지 않아도 이 목록을 읽을 수 있습니다. 실행 후의 필터·검색·랜덤 추천·페이지 이동은 기존 동작을 유지합니다.
- `test.html?id=<slug>`: `test-seo.js`가 목록과 `seo-descriptions.js`를 읽어 테스트별 title/description/canonical/OG/Twitter/WebPage JSON-LD를 생성합니다. title 형식은 `테스트 제목 | 오늘의 초이스 심리테스트`입니다.
- 숫자 ID, UTM, 해시가 붙어도 canonical과 og:url은 등록된 slug 주소를 사용합니다. 잘못된 ID나 로드 실패는 noindex로 처리하며 정상 테스트에는 noindex를 넣지 않습니다.
- `404.html`은 고유 안내 제목과 설명, noindex를 사용합니다. 인증용 네이버 HTML은 원본을 유지하며 sitemap에 넣지 않습니다.
- sitemap은 메인 1개와 테스트 37개, 총 38개입니다. robots.txt는 기존 내용이 정상이라 변경하지 않았습니다.
- GA4, Kakao 공유, AdSense 및 결과 계산 코드는 변경하지 않았습니다. 로더의 문서 제목과 오류 페이지용 SEO 처리만 추가했습니다.

## 공통 HTML의 한계

GitHub Pages는 `test.html?id=...` 요청마다 동일한 원본 HTML을 반환합니다. 개별 제목·설명과 테스트 본문은 JavaScript 실행 후 생성되므로 JavaScript를 실행하지 않는 수집기나 일반 링크 미리보기는 공통 메타정보를 볼 수 있습니다. 메인 링크는 원본 HTML에 있지만 개별 테스트의 검색 수집까지 보장하는 것은 아닙니다.

Google은 렌더링한 JavaScript 메타정보와 canonical을 처리할 수 있지만, 각 수집기의 실제 결과는 등록된 검색 도구에서 확인해야 합니다. 개별 메타정보를 HTTP 응답부터 다르게 제공하려면 기존 테스트 데이터와 공통 템플릿으로 정적 HTML을 자동 생성하거나, URL별 응답을 제공하는 호스팅 구조가 필요합니다. 이번 작업에서는 요청한 공통 페이지 구조를 유지합니다.

참고: [Google JavaScript SEO 안내](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [Naver HTML 마크업 안내](https://searchadvisor.naver.com/doc/wmt_guide_ps_quality.pdf).

## 테스트 추가 시

1. 기존처럼 데이터 모듈과 `test-catalog.js` 항목을 추가합니다.
2. `seo-descriptions.js`에 실제 내용에 맞는 설명을 작성합니다.
3. `node scripts/build-seo.js`를 실행해 메인 HTML 링크와 sitemap을 갱신합니다.
4. `node tests/seo.test.js`, `node tests/routing.test.js`, `node tests/analytics.test.js`를 실행합니다.

## 배포 후 수동 확인

1. 공개 메인 페이지, `test.html?id=long-term-love`, sitemap과 robots.txt가 정상 응답하는지 확인합니다.
2. Search Console의 URL 검사에서 메인과 대표 테스트의 실시간 테스트를 실행하고 렌더링된 HTML의 title/description/canonical/본문을 확인합니다. Google이 선택한 canonical도 확인합니다.
3. Naver Search Advisor에서 메인과 대표 테스트의 수집 결과 및 제목·설명이 개별 내용으로 인식되는지 확인합니다. 수집이 공통 HTML에 머물면 위의 정적 생성 방식이 필요합니다.
4. sitemap 주소는 `https://todayschoice.kr/sitemap.xml`입니다. 배포 후 제출 상태를 확인하고 필요한 URL의 재수집을 요청합니다.
5. 검색 반영 시점, 표시 제목·설명 및 순위는 검색엔진이 결정합니다. 기술 검증 결과를 노출 순위 보장으로 해석하지 않습니다.
