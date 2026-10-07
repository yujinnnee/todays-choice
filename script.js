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
const TESTS_PER_PAGE = 9;
let selectedCategory = "all";
let currentTestPage = 1;

function renderCategoryTests() {
  const filteredCards = categoryCards.filter((card) => selectedCategory === "all" || card.dataset.category === selectedCategory);
  const pageCount = Math.ceil(filteredCards.length / TESTS_PER_PAGE);
  currentTestPage = Math.max(1, Math.min(currentTestPage, pageCount || 1));
  const offset = (currentTestPage - 1) * TESTS_PER_PAGE;
  const pageCards = new Set(filteredCards.slice(offset, offset + TESTS_PER_PAGE));
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
