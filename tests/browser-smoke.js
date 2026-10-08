// Run with CHROME_PATH set if Chrome is installed somewhere else.
const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");
const http = require("node:http");
const { spawn } = require("node:child_process");
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
    body = body.replace("</body>", `<script>
      let ticks = 0;
      const timer = setInterval(() => {
        try {
          if (location.pathname === '/index.html') {
            if (document.querySelectorAll('h1').length !== 1) throw Error('main headings');
            if (document.querySelector('link[rel="canonical"]').href !== 'https://todayschoice.kr/') throw Error('main canonical');
            if (JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)['@type'] !== 'WebSite') throw Error('site schema');
            const cards = [...document.querySelectorAll('#category-grid .test-card')];
            if (cards.length !== TEST_CATALOG.length || !document.querySelector('.category-count')) return;
            const expected = matchMedia('(max-width:640px)').matches ? 5 : 9;
            if (cards.filter(card => !card.hidden).length !== expected) throw Error('pagination');
            if (document.querySelectorAll('#new-tests .test-card').length !== 3) throw Error('today');
            const pagination = document.querySelector('#test-pagination');
            const pageCount = Math.ceil(TEST_CATALOG.length / expected);
            const numberButtons = () => [...pagination.querySelectorAll('.page-button')].filter(button => /^[0-9]+$/.test(button.textContent));
            if (numberButtons().length !== Math.min(5, pageCount)) throw Error('page number limit');
            if (!pagination.querySelector('[aria-label="처음"]').disabled) throw Error('first page state');
            pagination.querySelector('[aria-label="맨끝"]').click();
            if (pagination.querySelector('[aria-current="page"]').textContent !== String(pageCount)) throw Error('last page');
            if (!pagination.querySelector('[aria-label="맨끝"]').disabled) throw Error('last page state');
            if (numberButtons().at(-1).textContent !== String(pageCount)) throw Error('last page window');
            pagination.querySelector('[aria-label="이전"]').click();
            if (pagination.querySelector('[aria-current="page"]').textContent !== String(pageCount - 1)) throw Error('previous page');
            pagination.querySelector('[aria-label="처음"]').click();
            pagination.querySelector('[aria-label="다음"]').click();
            if (pagination.querySelector('[aria-current="page"]').textContent !== '2') throw Error('next page');
            pagination.querySelector('[aria-label="처음"]').click();
            document.querySelector('[data-filter=love]').click();
            if (cards.filter(card => !card.hidden).some(card => card.dataset.category !== 'love')) throw Error('filter');
            document.querySelector('.search-toggle').click();
            const input = document.querySelector('#search-input');
            input.value = '사랑에 빠지는'; input.dispatchEvent(new Event('input'));
            if (document.querySelectorAll('.search-result').length !== 1) throw Error('search');
          } else {
            const start = document.querySelector('[data-role=start]');
            if (!window.testData || start.closest('section').hidden) return;
            const currentTest = TEST_CATALOG.find(test => test.id === testData.id);
            const canonical = 'https://todayschoice.kr/' + currentTest.url;
            if (document.querySelectorAll('link[rel="canonical"]').length !== 1 || document.querySelector('link[rel="canonical"]').href !== canonical) throw Error('test canonical');
            if (document.querySelector('meta[property="og:title"]').content !== testData.title) throw Error('test OG title');
            if (!document.querySelector('meta[name="description"]').content.startsWith(testData.title)) throw Error('test description');
            if (JSON.parse(document.querySelector('#test-webpage-schema').textContent).url !== canonical) throw Error('test schema');
            start.click();
            for (let i = 0; i < testData.questions.length; i++) document.querySelector('[data-role=answers] button').click();
            if (document.querySelector('[data-screen=result]').hidden) throw Error('result hidden');
            if (!document.querySelector('[data-role=result-title]').textContent) throw Error('result title');
            if (document.querySelector('[data-role=score-panel]')) throw Error('unwanted score');
            if (document.querySelector('[data-role=stats], [data-role=result-label]')) throw Error('unwanted result details');
            document.querySelector('[data-role=restart]').click();
            if (document.querySelector('[data-screen=start]').hidden) throw Error('restart');
          }
          document.body.dataset.smoke = 'PASS'; clearInterval(timer);
        } catch (error) { document.body.dataset.smoke = 'FAIL:' + error.message; clearInterval(timer); }
        if (++ticks > 100) { document.body.dataset.smoke = 'TIMEOUT'; clearInterval(timer); }
      }, 50);
    </script></body>`);
  }
  res.end(body);
});

server.listen(0, "127.0.0.1", async () => {
  try {
    for (const [route, width] of [["index.html", 1200], ["index.html", 390], ["test.html?id=jealousy", 390], ["test.html?id=game-character", 390], ["test.html?id=falling-in-love", 390], ["test.html?id=million-followers", 390]]) {
      const profile = fs.mkdtempSync(path.join(os.tmpdir(), "choice-smoke-"));
      const result = await new Promise((resolve, reject) => {
        const child = spawn(browser, ["--headless", "--disable-gpu", "--no-first-run", "--disable-background-networking", "--virtual-time-budget=7000", `--window-size=${width},900`, `--user-data-dir=${profile}`, "--dump-dom", `http://127.0.0.1:${server.address().port}/${route}`], { windowsHide: true });
        let stdout = "", stderr = "";
        const timeout = setTimeout(() => { child.kill(); reject(Error("Browser timeout")); }, 20000);
        child.stdout.on("data", value => { stdout += value; });
        child.stderr.on("data", value => { stderr += value; });
        child.on("error", reject);
        child.on("close", code => { clearTimeout(timeout); resolve({ code, stdout, stderr }); });
      });
      if (!result.stdout.includes('data-smoke="PASS"')) throw Error(`${route}: ${result.stdout.match(/data-smoke="[^"]*"/) || result.stderr.slice(-1500) || "No output"}`);
      console.log(`PASS browser: ${route}, width ${width}`);
    }
  } catch (error) { console.error(error.message); process.exitCode = 1; }
  finally { server.close(); }
});
