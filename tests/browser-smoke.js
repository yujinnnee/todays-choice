// Run with CHROME_PATH set if Chrome is installed somewhere else.
const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");
const http = require("node:http");
const { spawn } = require("node:child_process");
const vm = require("node:vm");
const catalogContext = {};
vm.runInNewContext(fs.readFileSync("data/content/test-catalog.js", "utf8") + ";this.catalog=TEST_CATALOG;", catalogContext);
vm.runInNewContext(fs.readFileSync("data/content/thinking-tests.js", "utf8") + ";this.thinking=THINKING_TESTS;", catalogContext);
const browser = process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const base = process.cwd();
const server = http.createServer((req, res) => {
  const file = path.resolve(base, "." + new URL(req.url, "http://localhost").pathname);
  if (!file.startsWith(base + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    res.writeHead(404); res.end(); return;
  }
  let body = fs.readFileSync(file);
  const extension = path.extname(file);
  res.setHeader("Content-Type", ({ ".js": "text/javascript", ".html": "text/html", ".css": "text/css", ".svg": "image/svg+xml" })[extension] || "application/octet-stream");
  if (path.basename(file) === "analytics.js") body = body.toString().replace('"G-JGQJWYPHNL"', '"G-XXXXXXXXXX"');
  if (extension === ".html") {
    body = body.toString().replace(/<script[^>]*src="https:[\s\S]*?<\/script>/g, "");
    if (!new URL(req.url, "http://localhost").searchParams.has("preview")) body = body.replace("</body>", `<script>
      let ticks = 0;
      const timer = setInterval(() => {
        try {
          if (location.pathname === '/index.html') {
            if (document.querySelectorAll('h1').length !== 1) throw Error('home heading');
            if (document.querySelectorAll('main .test-card').length !== 12) throw Error('home picks');
            const picks = [...document.querySelectorAll('[data-thinking-preview] .test-card')];
            if (picks.length !== 6 || new Set(picks.map(link=>link.href)).size !== 6) throw Error('random picks');
            if (picks.some(link=>!THINKING_TESTS.some(t=>link.getAttribute('href') === 'thinking-detail.html?id='+t.id))) throw Error('home links');
            if (!document.querySelector('[data-thinking-empty]').hidden) throw Error('home empty');
          } else if (location.pathname === '/thinking.html') {
            if (document.querySelectorAll('[data-thinking-filter]').length !== 6) throw Error('thinking filters');
            const todayGrid = document.querySelector('[data-thinking-today]');
            const todayLinks = [...todayGrid.querySelectorAll('.test-card')];
            if (todayLinks.length !== 3 || new Set(todayLinks.map(link=>link.href)).size !== 3) throw Error('thinking today picks');
            if (todayLinks.some(link=>!THINKING_TESTS.some(test=>link.getAttribute('href')==='thinking-detail.html?id='+test.id))) throw Error('thinking today links');
            const todaySnapshot = todayGrid.innerHTML;
            const perPage = (matchMedia('(max-width:640px)').matches ? 1 : 3)*3;
            const pager = document.querySelector('[data-thinking-pagination]');
            const sort = document.querySelector('[data-thinking-sort]');
            if (!sort || sort.options.length !== 3) throw Error('sort control');
            for (const order of ['default','easy','hard']) {
              document.querySelector('[data-thinking-filter="전체"]').click();
              pager.querySelector('[aria-label="다음"]').click();
              sort.value = order;
              sort.dispatchEvent(new Event('change', {bubbles:true}));
              if (pager.querySelector('[aria-current="page"]').textContent !== '1') throw Error('sort resets page');
            for (const button of document.querySelectorAll('[data-thinking-filter]')) {
              button.click();
              const categoryMatches = THINKING_TESTS.filter(t=>button.dataset.thinkingFilter==='전체'||t.category===button.dataset.thinkingFilter);
              const levels = order==='hard'?[5,4,3,2,1]:[1,2,3,4,5];
              const expected = order==='default'?categoryMatches:levels.flatMap(level=>categoryMatches.filter(test=>test.difficulty===level));
              if (sort.value !== order) throw Error('sort persists across categories');
              const pages = Math.ceil(expected.length/perPage);
              if (pager.hidden !== (pages<=1)) throw Error('pagination visibility');
              for (let page=1;page<=pages;page++) {
                const links = [...document.querySelectorAll('#thinking-grid .test-card')];
                const slice = expected.slice((page-1)*perPage,page*perPage);
                if (links.length !== slice.length || links.some((link,i)=>link.getAttribute('href') !== 'thinking-detail.html?id='+slice[i].id)) throw Error('category page');
                const rows = new Set(links.map(link=>Math.round(link.getBoundingClientRect().top)));
                if (rows.size>3) throw Error('three row limit');
                if (pages>1) {
                  if (pager.querySelector('[aria-current="page"]').textContent !== String(page)) throw Error('current page');
                  if (pager.querySelector('[aria-label="이전"]').disabled !== (page===1)) throw Error('previous page state');
                  if (pager.querySelector('[aria-label="다음"]').disabled !== (page===pages)) throw Error('next page state');
                  if (page<pages) pager.querySelector('[aria-label="다음"]').click();
                }
              }
              if (pages>1) {
                pager.querySelector('[aria-label="이전"]').click();
                if (pager.querySelector('[aria-current="page"]').textContent !== String(pages-1)) throw Error('previous page navigation');
                const numbered = [...pager.querySelectorAll('.page-button')].find(button=>/^[0-9]+$/.test(button.textContent));
                const target = numbered.textContent;
                numbered.click();
                if (pager.querySelector('[aria-current="page"]').textContent !== target) throw Error('numbered page navigation');
              }
              if (button.getAttribute('aria-pressed') !== 'true') throw Error('filter state');
              if (button.querySelector('.category-count').textContent !== '('+expected.length+')') throw Error('filter count');
            }
            }
            document.querySelector('[data-thinking-filter="전체"]').click();
            if (!document.querySelector('[data-thinking-empty]').hidden) throw Error('thinking empty');
            if (todayGrid.innerHTML !== todaySnapshot) throw Error('today picks changed while filtering');
          } else if (location.pathname === '/thinking-detail.html') {
            const id = new URLSearchParams(location.search).get('id');
            const test = THINKING_TESTS.find(t=>t.id===id);
            const q = name => document.querySelector('[data-thinking-'+name+']');
            if (!test) {
              if (q('error').hidden) return;
              if (q('error').hidden || q('title').textContent !== '문제를 찾을 수 없습니다.') throw Error('unknown problem');
              if (!q('form').hidden || !q('feedback').hidden || !q('actions').hidden) throw Error('invalid problem UI');
              if (!q('related-section').hidden) throw Error('invalid problem recommendations');
              if (document.querySelector('meta[name="robots"]').content !== 'noindex, follow') throw Error('error indexing');
            } else {
              if (q('form').hidden) return;
              const relatedLinks = [...q('related-links').querySelectorAll('a')];
              if (q('related-section').hidden || relatedLinks.length !== 3 || new Set(relatedLinks.map(link => link.href)).size !== 3) throw Error('related problems');
              for (const link of relatedLinks) {
                const related = THINKING_TESTS.find(item => item.id === new URL(link.href).searchParams.get('id'));
                if (!related || related.id === test.id || related.category !== test.category || link.textContent !== related.title) throw Error('related problem link');
              }
              const compactQuestion = value => [...value].filter(character => character.trim()).join('');
              if (compactQuestion(q('question').textContent) !== compactQuestion(test.question)) throw Error('question');
              const image = q('image');
              if (!image.complete) return;
              if (!image.naturalWidth || q('figure').hidden || image.alt !== test.imageAlt) throw Error('problem diagram');
              if (q('caption').textContent !== '('+test.imageCaption+')') throw Error('diagram caption');
              const feedback = q('feedback');
              const form = q('form');
              if (q('question').querySelectorAll('p').length < 1) throw Error('question paragraphs');
              const title = test.title+' | '+test.category+' 사고력 테스트 | 오늘의 초이스';
              const canonical = 'https://todayschoice.kr/thinking-detail.html?id='+test.id;
              if (document.title !== title || document.querySelector('meta[property="og:title"]').content !== title) throw Error('problem title');
              if (document.querySelector('link[rel="canonical"]').href !== canonical) throw Error('problem canonical');
              if (document.querySelector('meta[name="robots"]').content !== 'index, follow') throw Error('valid indexing');
              if (JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent).url !== canonical) throw Error('problem schema');
              if (!feedback.hidden || q('explanation').textContent || !q('actions').hidden) throw Error('early answer');
              q('reveal').click();
              if (q('selection-error').hidden || q('selection-error').textContent !== '답을 하나 선택해주세요.' || !feedback.hidden || q('answer').textContent) throw Error('unselected');
              const choices = [...form.querySelectorAll('input')];
              if (choices.length !== 4 || choices.some((input,i)=>input.closest('label').querySelector('.thinking-choice-text').textContent !== test.choices[i])) throw Error('choice labels');
              for (let index=0; index<4; index++) {
                choices[index].click();
                if (!q('selection-error').hidden) throw Error('selection error clearing');
                q('reveal').click();
                if (feedback.hidden || q('explanation').textContent !== test.explanation || q('actions').hidden) throw Error('answer reveal');
                if (q('result').textContent !== (index===test.answer?'정답입니다!':'아쉽습니다!')) throw Error('grading');
                if (q('selected').textContent !== '내가 선택한 답: '+test.choices[index]) throw Error('selected answer');
                if (q('answer').textContent !== '정답: '+test.choices[test.answer]) throw Error('correct answer');
                if (!choices[test.answer].closest('label').classList.contains('is-correct')) throw Error('correct color');
                if (index!==test.answer && !choices[index].closest('label').classList.contains('is-wrong')) throw Error('wrong color');
                if (!choices.every(input=>input.disabled) || !q('reveal').disabled) throw Error('answer lock');
                const category = THINKING_TESTS.filter(t=>t.category===test.category);
                const next = category[(category.indexOf(test)+1)%category.length];
                if (q('next').getAttribute('href') !== 'thinking-detail.html?id='+next.id) throw Error('next problem');
                q('reset').click();
                if (choices.some(input=>input.checked||input.disabled) || q('reveal').disabled || !feedback.hidden || !q('actions').hidden) throw Error('reset state');
                if (q('answer').textContent || q('explanation').textContent || form.querySelector('.is-correct,.is-wrong')) throw Error('reset answer');
              }
              if (window.innerWidth<=640 && q('reveal').getBoundingClientRect().height<40) throw Error('mobile button');
            }
          } else if (location.pathname === '/psychology.html') {
            if (document.querySelectorAll('h1').length !== 1) throw Error('main headings');
            if (document.querySelector('link[rel="canonical"]').href !== 'https://todayschoice.kr/psychology.html') throw Error('main canonical');
            if (JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)['@type'] !== 'CollectionPage') throw Error('site schema');
            const cards = [...document.querySelectorAll('#category-grid .test-card')];
            if (cards.length !== TEST_CATALOG.length || !document.querySelector('.category-count')) return;
            const expected = matchMedia('(max-width:640px)').matches ? 3 : 9;
            if (cards.filter(card => !card.hidden).length !== expected) throw Error('pagination');
            if (document.querySelectorAll('#new-tests .test-card').length !== 3) throw Error('today');
            const pagination = document.querySelector('#test-pagination');
            const pageCount = Math.ceil(TEST_CATALOG.length / expected);
            const numberButtons = () => [...pagination.querySelectorAll('.page-button')].filter(button => /^[0-9]+$/.test(button.textContent));
            if (numberButtons().length !== Math.min(5, pageCount)) throw Error('page number limit');
            if (!pagination.querySelector('[aria-label="이전"]').disabled) throw Error('first page state');
            for(let page=1;page<pageCount;page++) pagination.querySelector('[aria-label="다음"]').click();
            if (pagination.querySelector('[aria-current="page"]').textContent !== String(pageCount)) throw Error('last page');
            if (!pagination.querySelector('[aria-label="다음"]').disabled) throw Error('last page state');
            if (numberButtons().at(-1).textContent !== String(pageCount)) throw Error('last page window');
            pagination.querySelector('[aria-label="이전"]').click();
            if (pagination.querySelector('[aria-current="page"]').textContent !== String(pageCount-1)) throw Error('previous page');
            document.querySelector('[data-filter=all]').click();
            pagination.querySelector('[aria-label="2페이지"]').click();
            if (pagination.querySelector('[aria-current="page"]').textContent !== '2') throw Error('numbered page');
            document.querySelector('[data-filter=all]').click();
            const visible = cards.filter(card=>!card.hidden);
            if (new Set(visible.map(card=>Math.round(card.getBoundingClientRect().top))).size !== 3) throw Error('psychology three rows');
            if (cards.filter(card=>card.hidden).some(card=>getComputedStyle(card).display!=='none')) throw Error('hidden psychology cards');
            document.querySelector('[data-filter=love]').click();
            if (cards.filter(card => !card.hidden).some(card => card.dataset.category !== 'love')) throw Error('filter');
            document.querySelector('[data-category-link=fun]').click();
            if (document.querySelector('[data-filter=fun]').getAttribute('aria-pressed') !== 'true') throw Error('category guide filter');
            if (cards.filter(card => !card.hidden).some(card => card.dataset.category !== 'fun')) throw Error('category guide cards');
            document.querySelector('.search-toggle').click();
            const input = document.querySelector('#search-input');
            input.value = '사랑에 빠지는'; input.dispatchEvent(new Event('input'));
            if (document.querySelectorAll('.search-result').length !== 1) throw Error('search');
            if (document.querySelector('.search-result').tagName !== 'A' || !document.querySelector('.search-result').href.includes('test.html?id=')) throw Error('search link');
          } else {
            const start = document.querySelector('[data-role=start]');
            if (!window.testData || start.closest('section').hidden) return;
            const currentTest = TEST_CATALOG.find(test => test.id === testData.id);
            const canonical = 'https://todayschoice.kr/' + currentTest.url;
            if (document.querySelectorAll('link[rel="canonical"]').length !== 1 || document.querySelector('link[rel="canonical"]').href !== canonical) throw Error('test canonical');
            if (document.querySelector('meta[property="og:title"]').content !== testData.title) throw Error('test OG title');
            if (!document.querySelector('meta[name="description"]').content.startsWith(testData.title)) throw Error('test description');
            if (JSON.parse(document.querySelector('#test-webpage-schema').textContent).url !== canonical) throw Error('test schema');
            if (!document.querySelector('[data-role=focus]').textContent) throw Error('test focus');
            const guide = document.querySelector('[data-role=result-guide]');
            if (guide.closest('[data-screen]').dataset.screen !== 'result' || !guide.closest('[data-screen]').hidden) throw Error('premature guide');
            const related = [...document.querySelectorAll('[data-role=related-links] a')];
            if (related.length !== 3 || related.some((link, i) => link.getAttribute('href') !== TEST_CATALOG.find(test => test.slug === TEST_RELATED[currentTest.slug][i]).url)) throw Error('curated related links');
            start.click();
            for (let i = 0; i < testData.questions.length; i++) document.querySelector('[data-role=answers] button').click();
            if (document.querySelector('[data-screen=result]').hidden) throw Error('result hidden');
            if (!document.querySelector('[data-role=result-title]').textContent) throw Error('result title');
            if (guide.hidden || !guide.getBoundingClientRect().height) throw Error('guide hidden');
            if (guide.querySelectorAll('h2').length !== 3 || guide.querySelectorAll('p').length !== 3) throw Error('guide sections');
            if ([...guide.querySelectorAll('p')].some((p, i) => p.textContent !== TEST_GUIDES[currentTest.slug][i][1])) throw Error('wrong guide content');
            if (guide.getBoundingClientRect().top < document.querySelector('[data-role=result-card]').getBoundingClientRect().bottom) throw Error('guide position');
            if (document.documentElement.scrollWidth > window.innerWidth) throw Error('horizontal overflow');
            const metric = document.querySelector('[data-role=result-metric]');
            if (testData.resultMetric && (metric.hidden || !metric.textContent.endsWith('%'))) throw Error('missing percentage metric');
            if (!testData.resultMetric && !metric.hidden) throw Error('unwanted percentage metric');
            if (document.querySelector('[data-role=score-panel]')) throw Error('unwanted score');
            if (document.querySelector('[data-role=stats], [data-role=result-label]')) throw Error('unwanted result details');
            document.querySelector('[data-role=restart]').click();
            if (document.querySelector('[data-screen=start]').hidden) throw Error('restart');
            if (!guide.closest('[data-screen]').hidden) throw Error('guide visible after restart');
          }
          if (['/psychology.html','/thinking.html'].includes(location.pathname)) {
            const sections=[...document.querySelector('main').children];
            if (!sections[0].classList.contains('hero') || !sections[1].classList.contains('listing-today') || !sections[2].classList.contains('listing-section')) throw Error('shared catalog section order');
            if (sections[1].querySelectorAll('.test-card').length!==3) throw Error('shared today layout');
            const card=sections[1].querySelector('.test-card');
            if (getComputedStyle(card).paddingTop !== (innerWidth<=640?'18px':'24px')) throw Error('shared card padding');
          }
          for (const card of document.querySelectorAll('.test-card[data-category]')) {
            const test = TEST_CATALOG.find(item => item.url === card.getAttribute('href'));
            if (card.querySelector('.icon-tile') || card.querySelector('.eyebrow')?.textContent !== test.category) throw Error('psychology category text');
          }
          document.querySelector('.search-toggle').click();
          const dialog = document.querySelector('#search-dialog');
          const input = document.querySelector('#search-input');
          const resultLinks = () => [...document.querySelectorAll('.search-result')];
          const setQuery = text => { input.value=text; input.dispatchEvent(new Event('input')); };
          if (!dialog.open || resultLinks().length !== TEST_CATALOG.length+THINKING_TESTS.length) throw Error('combined search');
          document.querySelector('[data-search-type="psychology"]').click();
          if (resultLinks().length !== TEST_CATALOG.length || resultLinks().some(link=>!link.querySelector('.search-result-meta').textContent.startsWith('심리 테스트'))) throw Error('psychology search filter');
          document.querySelector('[data-search-type="thinking"]').click();
          if (resultLinks().length !== THINKING_TESTS.length || resultLinks().some(link=>!link.querySelector('.search-result-meta').textContent.startsWith('사고력 테스트'))) throw Error('thinking search filter');
          document.querySelector('[data-search-type="all"]').click();
          setQuery('공간 지각');
          if (resultLinks().length !== THINKING_TESTS.filter(test=>test.category==='공간지각').length) throw Error('category search');
          setQuery('사고력테스트');
          if (resultLinks().length !== THINKING_TESTS.length) throw Error('unspaced type search');
          setQuery(THINKING_TESTS[0].title.replace(/\s/g,''));
          if (resultLinks().length !== 1 || resultLinks()[0].getAttribute('href') !== 'thinking-detail.html?id='+THINKING_TESTS[0].id) throw Error('thinking search link');
          if (document.querySelector('#search-results').textContent.includes(THINKING_TESTS[0].explanation)) throw Error('search answer leakage');
          document.querySelector('[data-search-type="psychology"]').click();
          if (resultLinks().length !== 0 || !document.querySelector('.empty-results')) throw Error('filtered empty search');
          setQuery(TEST_CATALOG[0].title);
          if (!resultLinks().some(link=>link.getAttribute('href')===TEST_CATALOG[0].url)) throw Error('psychology search link');
          setQuery('@@no-match-unique@@');
          if (resultLinks().length || !document.querySelector('.empty-results')) throw Error('empty search');
          if (dialog.scrollWidth>dialog.clientWidth || dialog.getBoundingClientRect().width>innerWidth) throw Error('search overflow');
          dialog.querySelector('[data-close]').click();
          document.querySelector('.search-toggle').click();
          if (input.value || document.querySelector('[data-search-type="all"]').getAttribute('aria-pressed')!=='true') throw Error('search reset');
          dialog.querySelector('[data-close]').click();
          if (document.documentElement.scrollWidth > window.innerWidth) throw Error('horizontal overflow');
          if (document.querySelectorAll('.main-nav a').length !== 4) throw Error('navigation');
          const nav = [...document.querySelectorAll('.main-nav a')];
          if (nav[2].textContent !== '사고력 테스트') throw Error('label');
          document.body.dataset.smoke = 'PASS'; clearInterval(timer);
        } catch (error) { document.body.dataset.smoke = 'FAIL:' + error.message; clearInterval(timer); }
        if (++ticks > 100) { document.body.dataset.smoke = 'TIMEOUT'; clearInterval(timer); }
      }, 50);
    </script></body>`);
  }
  res.end(body);
});

// Set the CSS viewport explicitly: Chrome's window-size flag can clamp narrow windows.
async function launchBrowser() {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'choice-smoke-'));
  const child = spawn(browser, ['--headless', '--disable-gpu', '--no-first-run', '--disable-background-networking', '--remote-debugging-port=0', '--user-data-dir='+profile, 'about:blank'], {windowsHide:true});
  let errors=''; child.stderr.on('data', value=>{errors+=value;});
  let launchError; child.on('error',error=>{launchError=error;});
  const activePort = path.join(profile,'DevToolsActivePort');
  let websocket;
  try {
    for(let i=0;i<100&&!fs.existsSync(activePort);i++) {
      if(launchError) throw launchError;
      if(child.exitCode!==null) throw Error(errors.slice(-600));
      await new Promise(resolve=>setTimeout(resolve,100));
    }
    if(!fs.existsSync(activePort)) throw Error('Chrome debugging port timeout');
    const [port,endpoint]=fs.readFileSync(activePort,'utf8').trim().split(/\r?\n/);
    websocket=new WebSocket('ws://127.0.0.1:'+port+endpoint);
    await new Promise((resolve,reject)=>{websocket.addEventListener('open',resolve,{once:true});websocket.addEventListener('error',reject,{once:true});});
    let sequence=0; const pending=new Map();
    websocket.addEventListener('message',event=>{
      const message=JSON.parse(event.data); const request=pending.get(message.id);
      if(request){pending.delete(message.id);clearTimeout(request.timeout);message.error?request.reject(Error(message.error.message)):request.resolve(message.result);}
    });
    const send=(method,params={},sessionId)=>new Promise((resolve,reject)=>{
      const id=++sequence;
      const timeout=setTimeout(()=>{pending.delete(id);reject(Error('Chrome command timeout: '+method));},15000);
      pending.set(id,{resolve,reject,timeout});
      websocket.send(JSON.stringify({id,method,params,...(sessionId?{sessionId}:{})}));
    });
    return {child,websocket,send};
  } catch(error) {websocket?.close();child.kill();throw error;}
}
server.listen(0, '127.0.0.1', async () => {
  let chrome;
  try {
    chrome=await launchBrowser();
    async function openPage(route,width,height=900) {
      const {targetId}=await chrome.send('Target.createTarget',{url:'about:blank'});
      const {sessionId}=await chrome.send('Target.attachToTarget',{targetId,flatten:true});
      const send=(method,params={})=>chrome.send(method,params,sessionId);
      await send('Page.enable');
      await send('Network.enable');
      await send('Network.setBlockedURLs',{urls:['https://*']});
      await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<=640});
      await send('Page.navigate',{url:`http://127.0.0.1:${server.address().port}/${route}`});
      const evaluate=async expression=>{
        const result=await send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});
        if(result.exceptionDetails) throw Error(result.exceptionDetails.text);
        return result.result.value;
      };
      return {targetId,send,evaluate};
    }
    let routes=[['index.html',1200],['index.html',390],['index.html',320],['psychology.html',1200],['psychology.html',390],['thinking.html',1200],['thinking.html',320],['thinking-detail.html?id=missing',390],['thinking-detail.html',320],['thinking-detail.html?id=missing',1200],
      ...catalogContext.thinking.map(test=>[`thinking-detail.html?id=${test.id}`,390]),
      ['thinking-detail.html?id=reasoning-004',320],['thinking-detail.html?id=spatial-003',1200],
      ...catalogContext.catalog.map(test=>[test.url,390]),
      ['test.html?id=long-distance-love',1200],['test.html?id=workplace-intolerance',1200],['test.html?id=weather-personality',1200]];
    if(process.argv.includes('--thinking-only')) routes=routes.filter(([route])=>route.startsWith('thinking'));
    if(process.argv.includes('--screenshots-only')) routes=[];
    for(const [route,width] of routes) {
      const page=await openPage(route,width);
      try {
        const state=await page.evaluate(`new Promise(resolve=>{let n=0;const timer=setInterval(()=>{const state=document.body?.dataset.smoke;if(state||++n>120){clearInterval(timer);resolve({state:state||'TIMEOUT',width:innerWidth});}},50);})`);
        if(state.state!=='PASS'||state.width!==width) throw Error(`${route}: ${JSON.stringify(state)}`);
        console.log(`PASS browser: ${route}, CSS viewport ${width}px`);
      } finally {await chrome.send('Target.closeTarget',{targetId:page.targetId});}
    }
    if(process.argv.includes('--screenshots') || process.argv.includes('--screenshots-only')) {
      for(const [id,width] of (process.argv.includes('--catalog-screenshots') ? [['psychology',390],['thinking',390],['psychology',1200],['thinking',1200]] : [['math-005',390],['math-005',1200],['logic-006',390],['logic-006',1200],['spatial-003',390],['reasoning-004',390],['math-006',1200],['pattern-005',390]])) {
        const catalog=['psychology','thinking'].includes(id);
        const page=await openPage(catalog?id+'.html?preview=1':'thinking-detail.html?id='+id+'&preview=1',width,1200);
        try {
          const ready=await page.evaluate(`new Promise(resolve=>{let n=0;const timer=setInterval(()=>{if(document.readyState==='complete'&&document.querySelector('[data-thinking-question] p, .listing-today .test-card')&&[...document.images].every(image=>image.complete)||++n>120){clearInterval(timer);resolve({width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth});}},50);})`);
          if(ready.width!==width||ready.overflow) throw Error('Screenshot viewport overflow: '+id);
          const screenshot=await page.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
          const output=path.join(base,'previews',(catalog?'catalog-':'thinking-')+id+'-'+width+'.png');
          fs.writeFileSync(output,Buffer.from(screenshot.data,'base64'));
          console.log('Saved screenshot: '+output);
        } finally {await chrome.send('Target.closeTarget',{targetId:page.targetId});}
      }
    }
  } catch(error) {console.error(error.message);process.exitCode=1;}
  finally {
    if(chrome){chrome.websocket.close();chrome.child.kill();}
    server.close();
  }
});
