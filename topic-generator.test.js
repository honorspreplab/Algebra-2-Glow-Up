const fs = require("fs");
const assert = require("assert");

const appCode = fs.readFileSync("app.js", "utf8");
const safeCutPoint = appCode.indexOf("function validPositiveInteger");

if (safeCutPoint === -1) {
  throw new Error("Could not find the safe test cut point in app.js.");
}

global.window = { APP_ADMIN_EMAILS: [] };

let fakeStorage = {};
global.localStorage = {
  getItem(key) {
    return fakeStorage[key] || null;
  },
  setItem(key, value) {
    fakeStorage[key] = value;
  },
  removeItem(key) {
    delete fakeStorage[key];
  }
};

eval(appCode.slice(0, safeCutPoint));

const EXPECTED_TOPICS = [
  "Functions",
  "Quadratics",
  "Complex Numbers",
  "Polynomials",
  "Rational Functions",
  "Radicals",
  "Exponential Functions",
  "Logarithms",
  "Sequences",
  "Systems",
  "Trigonometry"
];

function resetGeneratorMemory() {
  fakeStorage = {};
  data = load();
}

function assertUniquePrompts(questions, label) {
  const prompts = questions.map(q => q.prompt);
  const unique = new Set(prompts);
  assert.strictEqual(unique.size, prompts.length, `${label} has repeated question prompts.`);
}

function assertGoodQuestionShape(question, label) {
  assert.ok(question.id, `${label} is missing an id.`);
  assert.ok(question.topic, `${label} is missing a topic.`);
  assert.ok(question.difficulty, `${label} is missing a difficulty.`);
  assert.ok(question.prompt, `${label} is missing a prompt.`);
  assert.ok(question.lesson, `${label} is missing a lesson.`);
  assert.ok(question.explanation, `${label} is missing an explanation.`);
  assert.ok(question.answer, `${label} is missing an answer.`);
}

function testTopicList() {
  assert.deepStrictEqual(allTopics(), EXPECTED_TOPICS, "The topic dropdown/test bank changed unexpectedly.");
}

function testEachTopicGeneratesCorrectTopicOnly() {
  resetGeneratorMemory();
  for (const topic of EXPECTED_TOPICS) {
    const questions = chooseTopicQuestions(topic, 12, "Warm-up");
    assert.strictEqual(questions.length, 12, `${topic} did not generate 12 questions.`);
    assertUniquePrompts(questions, topic);
    questions.forEach((question, index) => {
      assertGoodQuestionShape(question, `${topic} question ${index + 1}`);
      assert.strictEqual(question.topic, topic, `${topic} generated a question from ${question.topic}.`);
    });
  }
}

function testBackToBackTopicTestsDoNotRepeat() {
  for (const topic of EXPECTED_TOPICS) {
    resetGeneratorMemory();
    const firstTest = chooseTopicQuestions(topic, 10, "Medium");
    const secondTest = chooseTopicQuestions(topic, 10, "Medium");
    const secondPrompts = new Set(secondTest.map(q => q.prompt));
    const overlap = firstTest.filter(q => secondPrompts.has(q.prompt));
    assert.strictEqual(overlap.length, 0, `${topic} repeated prompts across back-to-back tests.`);
  }
}

function testDifficultyLabelsStayCorrect() {
  resetGeneratorMemory();
  for (const difficulty of ["Warm-up", "Easy", "Medium", "Honors"]) {
    const questions = chooseTopicQuestions("Radicals", 8, difficulty);
    questions.forEach(question => {
      assert.strictEqual(question.difficulty, difficulty, `Difficulty should stay ${difficulty}.`);
    });
  }
}

function testDifficultyNumbersStayFriendly() {
  resetGeneratorMemory();
  for (const topic of EXPECTED_TOPICS) {
    for (const difficulty of ["Warm-up", "Easy", "Medium", "Honors"]) {
      const questions = chooseTopicQuestions(topic, 8, difficulty);
      questions.forEach(question => {
        assert.ok(
          questionHasFriendlyNumbers(question),
          `${topic} ${difficulty} has numbers that are too large: ${question.prompt}`
        );
      });
    }
  }
}

function testRadicalWarmupsStayTiny() {
  resetGeneratorMemory();
  const questions = chooseTopicQuestions("Radicals", 20, "Warm-up");
  questions.forEach(question => {
    const numbers = question.prompt.match(/\d+/g)?.map(Number) || [];
    assert.ok(numbers.every(number => number <= 50), `Radical warm-up is too large: ${question.prompt}`);
    assert.ok(!question.prompt.includes("+"), `Radical warm-up should stay one-step: ${question.prompt}`);
  });
}

function testDifficultyLevelsChangeQuestionStyle() {
  resetGeneratorMemory();
  const warmup = chooseTopicQuestions("Radicals", 3, "Warm-up");
  const medium = chooseTopicQuestions("Radicals", 3, "Medium");
  const honors = chooseTopicQuestions("Radicals", 3, "Honors");
  assert.ok(warmup.every(q => /Simplify sqrt\(\d+\)/.test(q.prompt)), "Radical warm-up should be simple radical simplification.");
  assert.ok(medium.some(q => q.prompt.includes("+")), "Radical medium should include combining like radicals.");
  assert.ok(honors.some(q => /Solve sqrt\(x\+/.test(q.prompt)), "Radical honors should include radical equations.");
}

function testExponentsAndLogsStaySeparate() {
  resetGeneratorMemory();
  const exponentQuestions = chooseTopicQuestions("Exponential Functions", 25, "Warm-up");
  const logLeak = exponentQuestions.find(q => /log/i.test(`${q.prompt} ${q.lesson} ${q.explanation}`));
  assert.strictEqual(logLeak, undefined, "Exponential Functions should not generate logarithm questions.");

  const logQuestions = chooseTopicQuestions("Logarithms", 12, "Warm-up");
  assert.ok(
    logQuestions.some(q => /log base/i.test(q.prompt)),
    "Logarithms should include actual log questions."
  );
}

function testLogQuestionsMatchFormulaSheet() {
  resetGeneratorMemory();
  const easy = chooseTopicQuestions("Logarithms", 30, "Easy", { remember: false });
  const medium = chooseTopicQuestions("Logarithms", 32, "Medium", { remember: false });
  const honors = chooseTopicQuestions("Logarithms", 32, "Honors", { remember: false });
  const easyText = easy.map(q => `${q.prompt} ${q.lesson}`).join(" ").toLowerCase();
  const mediumText = medium.map(q => `${q.prompt} ${q.lesson}`).join(" ").toLowerCase();
  const honorsText = honors.map(q => `${q.prompt} ${q.lesson}`).join(" ").toLowerCase();

  for (const rule of ["product rule", "quotient rule", "power rule"]) {
    assert.ok(easyText.includes(rule), `Easy logarithms should practice the ${rule}.`);
    assert.ok(mediumText.includes(rule), `Medium logarithms should practice the ${rule}.`);
  }
  assert.ok(honorsText.includes("strictly positive"), "Honors logarithms should practice positive-domain restrictions.");
  assert.ok(honorsText.includes("product rule"), "Honors logarithms should combine logarithm properties.");
}

function testAdaptiveMixHasNoRepeats() {
  resetGeneratorMemory();
  const questions = chooseQuestions();
  assert.strictEqual(questions.length, 10, "Adaptive mix should generate 10 questions.");
  assertUniquePrompts(questions, "Adaptive mix");
}

function testQuestionLoadingTextDoesNotNameProvider() {
  assert.ok(!appCode.includes("Generating OpenAI questions"), "Student loading text should not name the provider.");
  assert.ok(!appCode.includes("OpenAI questions ready"), "Student success text should not name the provider.");
  assert.ok(appCode.includes("Creating your test"), "The neutral test-loading message is missing.");
}

const tests = [
  testTopicList,
  testEachTopicGeneratesCorrectTopicOnly,
  testBackToBackTopicTestsDoNotRepeat,
  testDifficultyLabelsStayCorrect,
  testDifficultyNumbersStayFriendly,
  testRadicalWarmupsStayTiny,
  testDifficultyLevelsChangeQuestionStyle,
  testExponentsAndLogsStaySeparate,
  testLogQuestionsMatchFormulaSheet,
  testAdaptiveMixHasNoRepeats,
  testQuestionLoadingTextDoesNotNameProvider
];

for (const test of tests) {
  test();
  console.log(`✓ ${test.name}`);
}

console.log("All topic generator tests passed.");
