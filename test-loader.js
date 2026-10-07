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
