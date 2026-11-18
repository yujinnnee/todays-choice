"use strict";
(() => {
  const problems = THINKING_TESTS;
  const find = name => document.querySelector(`[data-thinking-${name}]`);
  const grid = document.querySelector('#thinking-grid') || find('preview');
  const levels = ['쉬움', '보통', '조금 어려움', '어려움', '매우 어려움'];
  const difficulty = test => `난이도 · ${levels[test.difficulty - 1]}`;
  const mobileLayout = window.matchMedia('(max-width: 640px)');
  let currentPage = 1;
  let selectedCategory = '전체';
  let selectedSort = 'default';
  const sortLabels = { default: '기본순', easy: '쉬운순', hard: '어려운순' };
  function renderPagination(total, perPage) {
    const pagination = find('pagination');
    if (!pagination) return;
    const pageCount = Math.max(1, Math.ceil(total / perPage));
    pagination.hidden = pageCount <= 1;
    pagination.replaceChildren();
    find('page-status').textContent = `${selectedCategory} 문제 ${total}개, ${sortLabels[selectedSort]}, ${pageCount}페이지 중 ${currentPage}페이지`;
    if (pagination.hidden) return;
    const addButton = (label, page, disabled = false) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'page-button';
      button.textContent = label;
      button.disabled = disabled;
      button.setAttribute('aria-label', /^\d+$/.test(label) ? `${label}페이지` : label);
      if (page === currentPage && /^\d+$/.test(label)) button.setAttribute('aria-current', 'page');
      button.addEventListener('click', () => {
        currentPage = page;
        render();
        grid.scrollIntoView({ block: 'start' });
        grid.querySelector('a')?.focus({ preventScroll: true });
      });
      pagination.append(button);
    };
    addButton('이전', currentPage - 1, currentPage === 1);
    const first = Math.max(1, Math.min(currentPage - 2, pageCount - 4));
    for (let page = first; page <= Math.min(pageCount, first + 4); page += 1) addButton(String(page), page);
    addButton('다음', currentPage + 1, currentPage === pageCount);
  }
  // Sample without replacement; leave the full listing in catalog order.
  function sample(items, count) {
    const shuffled = [...items];
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  }
  function createCard(test) {
    const card = document.createElement('a');
    card.className = 'test-card thinking-card';
    card.href = `thinking-detail.html?id=${encodeURIComponent(test.id)}`;
    const label = document.createElement('span'); label.className = 'eyebrow'; label.textContent = test.category;
    const title = document.createElement('h3'); title.textContent = test.title;
    const level = document.createElement('p'); level.textContent = difficulty(test);
    const action = document.createElement('span'); action.className = 'card-bottom';
    const arrow = document.createElement('span'); arrow.className = 'circle-arrow';
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('class', 'icon'); icon.setAttribute('aria-hidden', 'true');
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', '#icon-arrow');
    icon.append(use); arrow.append(icon); action.append(arrow);
    card.append(label, title, level, action); return card;
  }
  function render(category = selectedCategory) {
    selectedCategory = category;
    const matches = problems.filter(test => category === '전체' || test.category === category);
    if (selectedSort === 'easy') matches.sort((a, b) => a.difficulty - b.difficulty);
    if (selectedSort === 'hard') matches.sort((a, b) => b.difficulty - a.difficulty);
    const perPage = (mobileLayout.matches ? 1 : 3) * 3;
    currentPage = Math.min(currentPage, Math.max(1, Math.ceil(matches.length / perPage)));
    const visible = find('preview') ? sample(matches, 6) : matches.slice((currentPage - 1) * perPage, currentPage * perPage);
    grid.replaceChildren(...visible.map(createCard));
    find('empty').hidden = visible.length > 0;
    renderPagination(matches.length, perPage);
  }
  const todayGrid = find('today');
  if (todayGrid) {
    const shuffled = sample(problems, problems.length);
    const picks = shuffled.slice(0, 3);
    const signature = () => picks.map(test => test.id).sort().join(',');
    try {
      const key = 'todayChoice.thinkingTodayTests';
      if (shuffled.length > 3 && sessionStorage.getItem(key) === signature()) picks[2] = shuffled[3];
      sessionStorage.setItem(key, signature());
    } catch {
      // Recommendations still work when browser storage is unavailable.
    }
    todayGrid.replaceChildren(...picks.map(createCard));
    find('today-section').hidden = picks.length === 0;
  }
  const randomButton = find('random');
  if (randomButton) {
    randomButton.disabled = problems.length === 0;
    randomButton.addEventListener('click', () => {
      if (!problems.length) return;
      const test = problems[Math.floor(Math.random() * problems.length)];
      location.assign(`thinking-detail.html?id=${encodeURIComponent(test.id)}`);
    });
  }
  if (grid) {
    render();
    find('sort')?.addEventListener('change', event => {
      selectedSort = event.target.value;
      currentPage = 1;
      render();
    });
    const filters = [...document.querySelectorAll('[data-thinking-filter]')];
    filters.forEach(button => {
      const category = button.dataset.thinkingFilter;
      const count = problems.filter(test => category === '전체' || test.category === category).length;
      const countLabel = document.createElement('span');
      countLabel.className = 'category-count';
      countLabel.textContent = `(${count})`;
      button.replaceChildren(document.createTextNode(category), countLabel);
      button.setAttribute('aria-label', `${category} 문제 ${count}개`);
      button.addEventListener('click', () => {
        filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
        currentPage = 1;
        render(category);
      });
    });
    mobileLayout.addEventListener('change', () => {
      if (!find('pagination')) return;
      currentPage = 1;
      render();
    });
  }
  if (!find('runner')) return;
  const test = problems.find(item => item.id === new URLSearchParams(location.search).get('id'));
  if (!test) {
    find('title').textContent = '문제를 찾을 수 없습니다.';
    find('error').hidden = false;
    return;
  }
  const title = `${test.title} | ${test.category} 사고력 테스트 | 오늘의 초이스`;
  document.title = title;
  const canonical = new URL(`thinking-detail.html?id=${encodeURIComponent(test.id)}`, 'https://todayschoice.kr/').href;
  document.querySelector('link[rel="canonical"]').href = canonical;
  document.querySelector('meta[name="robots"]').content = 'index, follow';
  const description = `${test.title} ${test.category} 문제에 도전하고 정답과 해설을 확인하세요. 오늘의 초이스 ${test.category} 사고력 테스트.`;
  for (const [selector, content] of [
    ['meta[name="description"]', description], ['meta[property="og:title"]', title],
    ['meta[property="og:description"]', description], ['meta[property="og:url"]', canonical],
    ['meta[name="twitter:title"]', title], ['meta[name="twitter:description"]', description]
  ]) document.querySelector(selector).content = content;
  document.querySelector('script[type="application/ld+json"]').textContent = JSON.stringify({
    '@context': 'https://schema.org', '@type': 'WebPage', name: title, description, url: canonical
  });
  find('category').textContent = test.category;
  find('title').textContent = test.title;
  find('difficulty').textContent = difficulty(test);
  // Keep each condition on its own line without empty paragraphs or retained blank lines.
  const questionParts = test.question.split(/(?<=[.!?])(?=\s)|(?<=\n)/).map(part => part.trim()).filter(Boolean);
  const promptIndex = questionParts.findLastIndex(part => /[?？]\s*$/.test(part));
  find('question').replaceChildren(...questionParts.map((part, index) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = part;
    if (index === promptIndex) paragraph.className = 'thinking-prompt';
    return paragraph;
  }));
  if (test.image) {
    const image = find('image'); image.src = test.image;
    image.alt = test.imageAlt || '문제 참고 이미지'; image.hidden = false;
    find('figure').hidden = false;
    find('caption').textContent = test.imageCaption ? `(${test.imageCaption})` : '';
  }
  const form = find('form'); form.hidden = false;
  const choices = test.choices.map((choice, index) => {
    const label = document.createElement('label');
    const input = document.createElement('input'); input.type = 'radio'; input.name = 'answer'; input.value = index; input.required = true;
    const text = document.createElement('span'); text.className = 'thinking-choice-text'; text.textContent = choice;
    const badge = document.createElement('span'); badge.className = 'thinking-choice-badge'; badge.hidden = true;
    label.append(input, text, badge); find('choices').append(label);
    input.addEventListener('change', () => { find('selection-error').hidden = true; });
    return { label, input, badge };
  });
  let revealed = false;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (revealed) return;
    const selected = form.querySelector('input:checked');
    if (!selected) {
      find('selection-error').hidden = false;
      choices[0].input.focus();
      return;
    }
    revealed = true;
    const selectedIndex = Number(selected.value);
    find('selection-error').hidden = true;
    find('result').textContent = selectedIndex === test.answer ? '정답입니다!' : '아쉽습니다!';
    find('selected').textContent = `내가 선택한 답: ${test.choices[selectedIndex]}`;
    find('answer').textContent = `정답: ${test.choices[test.answer]}`;
    find('explanation').textContent = test.explanation;
    choices.forEach(({ label, input, badge }, index) => {
      const correct = index === test.answer;
      const chosen = index === selectedIndex;
      label.classList.toggle('is-correct', correct);
      label.classList.toggle('is-wrong', chosen && !correct);
      badge.textContent = chosen ? (correct ? '내 선택 · 정답' : '내 선택 · 오답') : '정답';
      badge.hidden = !chosen && !correct;
      input.disabled = true;
    });
    find('reveal').disabled = true;
    find('feedback').hidden = false;
    find('actions').hidden = false;
    find('result').focus({ preventScroll: true });
  });
  find('reset').addEventListener('click', () => {
    revealed = false;
    form.reset();
    choices.forEach(({ label, input, badge }) => {
      input.disabled = false;
      label.classList.remove('is-correct', 'is-wrong');
      badge.hidden = true; badge.textContent = '';
    });
    find('reveal').disabled = false;
    find('feedback').hidden = true;
    find('actions').hidden = true;
    find('selection-error').hidden = true;
    for (const name of ['result', 'selected', 'answer', 'explanation']) find(name).textContent = '';
    choices[0].input.focus();
  });
  const categoryProblems = problems.filter(item => item.category === test.category);
  const recommendations = [...categoryProblems, ...problems.filter(item => item.category !== test.category)]
    .filter(item => item !== test).slice(0, 3);
  find('related-links').replaceChildren(...recommendations.map(item => {
    const link = document.createElement('a');
    link.href = `thinking-detail.html?id=${encodeURIComponent(item.id)}`;
    link.textContent = item.title;
    return link;
  }));
  find('related-section').hidden = recommendations.length === 0;
  const next = categoryProblems.length > 1
    ? categoryProblems[(categoryProblems.indexOf(test) + 1) % categoryProblems.length]
    : problems[(problems.indexOf(test) + 1) % problems.length];
  if (next && next !== test) find('next').href = `thinking-detail.html?id=${encodeURIComponent(next.id)}`;
  else find('next').hidden = true;
})();
