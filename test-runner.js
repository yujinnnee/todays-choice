"use strict";

// A different test can reuse this controller by supplying the same data shape.
function createTestRunner(root, data) {
  const screens = Array.from(root.querySelectorAll("[data-screen]"));
  const find = (name) => root.querySelector(`[data-role="${name}"]`);
  let questionIndex = 0;
  let answers = Array(data.questions.length).fill(null);
  let screen = "start";

  find("category").textContent = data.category;
  find("title").textContent = data.title;
  find("description").textContent = data.description;
  find("count").textContent = `총 ${data.questions.length}문항${data.answerGuide ? ` (${data.answerGuide})` : ""}`;
  find("progress").max = data.questions.length;
  if (!data.stats) {
    find("max-score").textContent = data.questions.reduce((sum, question) =>
      sum + Math.max(...question.answers.map((answer) => answer.score)), 0);
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
    showScreen("start");
  });
  showScreen("start", false);
}

createTestRunner(document.querySelector("[data-test-runner]"), testData);
