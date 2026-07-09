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

function testAdaptiveMixHasNoRepeats() {
  resetGeneratorMemory();
  const questions = chooseQuestions();
  assert.strictEqual(questions.length, 10, "Adaptive mix should generate 10 questions.");
  assertUniquePrompts(questions, "Adaptive mix");
}

const tests = [
  testTopicList,
  testEachTopicGeneratesCorrectTopicOnly,
  testBackToBackTopicTestsDoNotRepeat,
  testDifficultyLabelsStayCorrect,
  testExponentsAndLogsStaySeparate,
  testAdaptiveMixHasNoRepeats
];

for (const test of tests) {
  test();
  console.log(`✓ ${test.name}`);
}

console.log("All topic generator tests passed.");
