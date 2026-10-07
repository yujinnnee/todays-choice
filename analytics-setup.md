# GA4 연결 안내

`analytics.js`의 `GA4_MEASUREMENT_ID`에 실제 측정 ID `G-JGQJWYPHNL`을 적용했습니다. 앞으로 ID를 변경할 때는 이 한 곳을 바꾸면 모든 페이지에 적용됩니다. 값이 `G-XXXXXXXXXX`인 placeholder 상태에서는 Google SDK를 요청하거나 데이터를 전송하지 않습니다.

모든 HTML의 `<head>`가 공통 `analytics.js`를 불러옵니다. 이 파일이 비동기로 gtag SDK를 추가하고 `gtag('config', GA4_MEASUREMENT_ID)`를 한 번 실행합니다. 기본 페이지 조회는 자동 전송하므로 별도의 `page_view` 이벤트를 중복 전송하지 않습니다.

## 이벤트

모든 테스트 이벤트에는 `test_id`(문자열), `test_title`, `test_category`가 포함됩니다. 개별 답변은 전송하지 않습니다.

| 이벤트 | 발생 시점 | 추가 파라미터 |
| --- | --- | --- |
| `test_view` | 테스트 상세 페이지 로드 | 없음 |
| `test_start` | 상세 페이지 테스트 시작 버튼 클릭 | `question_count` |
| `test_complete` | 모든 답변 완료 후 결과 표시 | `question_count`, `result_title`, `result_score`, `max_score` |
| `test_share` | 카카오톡 공유 버튼 클릭 | `method: kakao` |

게임 캐릭터 테스트 완료 이벤트는 최고 스탯의 횟수를 `result_score`, 전체 문항 수를 `max_score`, 해당 스탯 ID를 `result_stat`으로 보냅니다. 다른 테스트는 총점을 보냅니다.

뒤로가기 후 같은 시도의 시작은 중복 집계하지 않습니다. 다시하기 후 새로 시작·완료하면 각각 새로운 이벤트를 보냅니다. 메인의 랜덤 테스트 버튼은 상세 페이지로 이동하며 실제 질문 시작 시에만 `test_start`를 보냅니다. 공유 이벤트는 버튼 클릭이며 실제 메시지 발송 성공을 의미하지 않습니다.

## 확인 방법

실제 측정 ID를 적용하고 사이트를 열어 GA4 실시간 보고서에서 접속과 이벤트를 확인하세요. 일반 보고서에서 방문자 수, 페이지 및 화면별 조회수, 트래픽 획득 경로를 확인할 수 있습니다.

테스트별 이벤트를 보고서에서 비교하려면 GA4 관리의 맞춤 정의에서 이벤트 범위 측정기준으로 `test_id`, `test_title`, `test_category`, `result_title`, `result_stat`, `method`를 등록하세요. 점수 분석이 필요하면 `result_score`, `max_score`, `question_count`를 맞춤 측정항목으로 등록하세요.

인스타그램 프로필에 게시할 사이트 링크는 아래처럼 UTM을 붙이면 유입을 구분하기 쉽습니다. 사이트에서 인스타그램으로 나가는 링크를 바꾸는 작업은 아닙니다.

`https://todayschoice.kr/?utm_source=instagram&utm_medium=social&utm_campaign=profile`

광고 차단 프로그램이나 브라우저 설정에 따라 수집되지 않을 수 있습니다. 로컬 검증은 이벤트 호출과 설정을 확인합니다. 실제 서버 수신 여부는 배포 후 GA4 실시간 보고서에서 확인하세요.

검증: `node tests/analytics.test.js`

공식 문서: [이벤트 전송](https://developers.google.com/analytics/devguides/collection/ga4/events), [페이지 조회](https://developers.google.com/analytics/devguides/collection/ga4/views), [UTM 유입 추적](https://support.google.com/analytics/answer/10917952), [맞춤 정의](https://support.google.com/analytics/answer/14240153).
