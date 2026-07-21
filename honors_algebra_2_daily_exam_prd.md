# PRD: Daily Honors Algebra 2 Prep Exam App  
## For a Rising 9th Grader Preparing for Lake Washington High School Honors Algebra 2

## 1. Product Name

**Algebra 2 Glow-Up Prep**

Alternate names:
- **Honors Algebra 2 Daily Sprint**
- **LWHS Algebra 2 Ready**
- **30-Minute Algebra Boss Mode**

---

## 2. Product Summary

This app gives a rising 9th grader a new **30-minute Honors Algebra 2 prep exam every day** for 2–6 weeks before school starts.

Each exam includes a mix of:

- Multiple choice
- Short answer
- True/false
- Correct-the-mistake
- Graph/interpretation questions
- Formula/application questions

After each exam, the app automatically grades the student, gives a percentage, shows strengths and weak spots, and uses past performance to generate the next day’s exam.

The app should feel personalized. The student can enter their name, choose a style mode, and choose a color theme from a dropdown menu.

The app also includes:

- A **Formula Sheet** always available during the test
- A **“Teach Me This Topic”** button during each question
- A progress dashboard
- Improvement tracking over time
- Adaptive daily question generation
- Two major voice modes: **Bestie Mode** and **Formal Mode**

---

## 3. Target User

### Primary User

A rising 9th grader who already completed Algebra 1 and Geometry and is preparing for Honors Algebra 2.

### Student Assumption

The student does **not** need basic Algebra 1 review as the main focus. They need a preview and strengthening plan for real Honors Algebra 2 topics.

### Secondary Users

- Parent helping student prepare
- Tutor or teacher reviewing progress
- Student using it independently over summer

---

## 4. Main Goal

Help the student feel confident and ready before Honors Algebra 2 begins by giving them consistent, focused, personalized 30-minute practice exams.

The app should answer:

1. What topics am I strong in?
2. What topics do I keep missing?
3. Am I improving?
4. What should I study next?
5. Can I learn a topic during the test if I get stuck?
6. Can the app feel fun instead of boring?

---

## 5. Timeframe and Study Plan

The app should support a flexible prep plan from **2 to 6 weeks**. The prep-plan dropdown must include 2, 3, 4, 5, and 6 weeks.

### Recommended 6-Week Plan

| Week | Focus | Goal |
|---|---|---|
| Week 1 | Algebra 2 foundations and function fluency | Build comfort with notation, transformations, quadratics, complex numbers |
| Week 2 | Polynomial, rational, radical, and inverse functions | Start true Honors Algebra 2 depth |
| Week 3 | Exponential/logarithmic functions, sequences, systems, modeling | Build advanced reasoning |
| Week 4 | Mixed cumulative exams and school-readiness challenges | Simulate harder Honors Algebra 2 thinking |
| Week 5 | Targeted weak-topic recovery and spaced review | Strengthen topics identified by the first four weeks of results |
| Week 6 | Cumulative mock exams and confidence building | Practice full mixed sets and finish school-ready |

### If the Student Only Has 2 Weeks

The app should compress the plan:

- Days 1–3: Diagnostic and functions/quadratics
- Days 4–6: Polynomials, complex numbers, rational expressions
- Days 7–9: Radicals, inverses, exponentials/logs
- Days 10–12: Systems, sequences, modeling
- Days 13–14: Cumulative mock exams

### If the Student Has 3 Weeks

The app should use the first 2 weeks for topic coverage and the third week for cumulative mixed review.

### If the Student Has 4, 5, or 6 Weeks

- A 4-week plan follows the core topic sequence and cumulative review schedule.
- A 5-week plan adds one week of adaptive weak-topic recovery and spaced review.
- A 6-week plan adds weak-topic recovery in Week 5 and cumulative mock exams in Week 6.

---

## 6. Honors Algebra 2 Concept Scope

The exam generator must include real Algebra 2 Honors topics, not just Algebra 1.

The generator must also avoid exact repeated questions. For adaptive mixes, selected-topic tests, and printable worksheets, the app should remember recently used question prompts on the device and skip them when building a new set. If the student chooses a large number of questions, the app may reuse the same skill type, but the prompt and numbers should change before any exact repeat appears.

Question generation should primarily use OpenAI through Firebase Functions so the API key stays private. Basic accounts use the configured lower-cost OpenAI model, while Premium/Admin accounts use GPT-5.6. If the OpenAI/Firebase function is unavailable, the app may fall back to the local template generator so studying is not blocked.

### Core Topic Bank

#### A. Function Foundations

- Function notation
- Domain and range
- Average rate of change
- Increasing/decreasing intervals
- Max/min from graphs
- Transformations of functions
- Even and odd functions
- Composition of functions
- Inverse functions

Example question types:
- Find \(f(g(x))\)
- Determine whether a function has an inverse
- Describe transformations from parent function
- Interpret a graph

---

#### B. Quadratic Functions and Complex Numbers

- Vertex form, standard form, factored form
- Completing the square
- Quadratic formula
- Discriminant
- Complex roots
- Operations with complex numbers
- Graphing parabolas
- Systems involving linear and quadratic equations

Example question types:
- Solve \(2x^2 - 5x + 7 = 0\)
- Identify the number and type of roots from the discriminant
- Convert from standard form to vertex form
- Correct a mistake in completing the square

---

#### C. Polynomial Functions

- Polynomial operations
- Factoring higher-degree polynomials
- End behavior
- Zeros and multiplicity
- Remainder Theorem
- Factor Theorem
- Polynomial long division
- Synthetic division
- Complex zeros
- Sketching polynomial graphs

Example question types:
- Divide \(2x^3 - 3x^2 + 4x - 5\) by \(x - 2\)
- Use the Remainder Theorem
- Determine possible real zeros
- Match polynomial equation to graph behavior
- Explain multiplicity from a graph

---

#### D. Rational Expressions and Rational Functions

- Simplifying rational expressions
- Multiplying/dividing rational expressions
- Adding/subtracting rational expressions
- Restrictions on domain
- Solving rational equations
- Extraneous solutions
- Vertical asymptotes
- Horizontal/slant asymptotes
- Holes in graphs

Example question types:
- Simplify \(\frac{x^2 - 9}{x^2 + x - 6}\)
- Solve a rational equation and check for extraneous solutions
- Identify asymptotes
- Correct a mistake where a student forgot domain restrictions

---

#### E. Radical and Power Functions

- Rational exponents
- Radical equations
- Extraneous solutions
- Simplifying radicals
- Graphing square root and cube root functions
- Transformations of radical functions

Example question types:
- Solve \(\sqrt{x+5} = x - 1\)
- Rewrite \(x^{3/2}\) in radical form
- Identify domain of a square root function
- Explain why a solution is extraneous

---

#### F. Exponential and Logarithmic Functions

- Exponential growth and decay
- Compound interest
- Logarithm meaning
- Converting exponential and logarithmic form
- Log properties
- Solving exponential equations
- Solving logarithmic equations
- Graphing exponential/log functions
- Domain/range of log functions

In the custom-topic dropdown, this combined curriculum area must appear as two separate choices:

- **Exponential Functions** generates only exponential growth, decay, equation, and modeling questions.
- **Logarithms** generates only logarithm meaning, conversion, property, domain, and equation questions.

Selecting one must never generate questions from the other.

The app must not use a combined **Exponentials & Logs** topic label in the active question bank. Starter, adaptive, and custom-generated questions should label exponential-only questions as **Exponential Functions** and logarithm-only questions as **Logarithms**.

Beginner-facing logarithm questions should show the formal log notation first, then include a plain-language translation only when the translation genuinely helps. Example: “What is log base 2 of 4? Translation: 2 to what power equals 4?” More advanced or already-clear log questions should not be cluttered with unnecessary translation text.

Example question types:
- Solve \(3 \cdot 2^x = 48\)
- Convert \(\log_2 32 = 5\) to exponential form
- Use log properties to expand or condense
- Model growth/decay from context

---

#### G. Sequences and Series

- Arithmetic sequences
- Geometric sequences
- Recursive formulas
- Explicit formulas
- Finite geometric series
- Applications

Example question types:
- Find the 12th term of a geometric sequence
- Write recursive and explicit forms
- Find a finite geometric sum
- Compare arithmetic vs geometric growth

---

#### H. Systems and Modeling

- Systems of linear equations
- Linear-quadratic systems
- Nonlinear systems
- Modeling with equations
- Interpreting solutions in context
- Graphical solutions using technology

Example question types:
- Solve a line/parabola system
- Determine whether a solution makes sense in context
- Estimate intersection points from a graph
- Create equations from a word problem

---

#### I. Intro Trigonometry / Unit Circle Preview

This should be a light preview only unless the actual Honors Algebra 2 teacher covers it deeply.

- Radians
- Unit circle basics
- Sine, cosine, tangent
- Special angles
- Periodic behavior
- Amplitude, midline, period
- Basic trig graph interpretation

Example question types:
- Convert degrees to radians
- Find \(\sin(\pi/6)\)
- Identify amplitude and period
- Match a sine graph to an equation

---

#### J. Statistics and Data Modeling Preview

Optional, depending on course pacing.

- Normal distributions
- Standard deviation
- Regression models
- Interpreting residuals
- Correlation vs causation

---

## 7. Daily Exam Structure

### Exam Mode Selection

The setup screen must include a **Practice Type** dropdown with three choices:

1. **Adaptive Mix (recommended)**
   - Uses the app's adaptive topic weighting and spaced-review logic.
   - Always contains 10 questions.
   - Always has a 30-minute timer.
   - The student cannot change question amount or time in this mode.
2. **Choose One Topic**
   - Shows an Algebra 2 topic dropdown.
   - Shows a difficulty dropdown with Warm-up, Easy, Medium, and Honors.
   - Shows a Question Amount number-entry field.
   - Shows a Test Time number-entry field measured in minutes.
   - For Premium/Admin accounts only, each active question shows an option to make the **next** question easier or harder. This adjustment only affects the next unanswered question in that selected-topic test.
3. **End-of-Unit Test**
   - Shows an Algebra 2 topic dropdown.
   - Shows Question Amount and Test Time fields.
   - Does not use one fixed difficulty level.
   - Mixes Warm-up, Easy, Medium, and Honors questions from the selected topic to feel like a real end-of-unit review.
- The student may type any positive whole number into either field instead of choosing from preset options.
- Every question in the session should practice the selected topic.
- Questions must be generated with varied values and prompts so the same exact question does not repeat within the session, even when the requested amount is larger than the starter question bank.
- Generated practice questions should use small, beginner-friendly numbers that cycle instead of growing forever. Long custom tests should not create huge radicals, exponents, system constants, sequence terms, or angle measures just because the student requested more questions.
- Difficulty must feel noticeably different:
  - **Warm-up** questions should be super easy, one-step, confidence-building problems.
  - **Easy** questions should stay simple but may add one extra step.
  - **Medium** questions should feel like normal class practice.
  - **Honors** questions should be harder and more applied, but still use readable numbers.
- Radical warm-ups should use very small radicands, generally 50 or below, and should not turn into giant three-digit square roots.
- Generated practice questions should vary both the numbers and the prompt pattern. For example, exponential practice should mix direct equations, coefficient equations, and shifted-exponent equations instead of repeating the same template.
- If the question generator is updated, old saved in-progress test drafts created by earlier generator versions should be cleared so stale oversized questions do not keep reappearing after an update.

The topic, question amount, and test time controls must remain hidden while Adaptive Mix is selected. The difficulty dropdown should show for Choose One Topic and hide for End-of-Unit Test because end-of-unit tests are mixed difficulty. Both number fields must reject empty, zero, negative, decimal, and nonnumeric values and show a beginner-friendly message when correction is needed. The setup summary should update immediately while the student types so they can see the chosen focus, number of questions, and time before starting.

The selected mode and custom topic settings should be stored locally. Results must record whether the session was adaptive, topic-specific, or end-of-unit, along with the selected topic, question count, and time limit.

The app should show a small visible version label in the header so the student can confirm whether the newest GitHub Pages update has loaded. Service worker registration should be versioned when app files change, and the page should refresh once when a new service worker takes control.

If a student chooses **Save & exit** during a test, the Home setup card must show a clear **Resume saved test** button. The button should only appear when a saved draft exists, and it should restore the saved questions, answers, timer, and current question position.

The Home setup card should also include a **Make printable worksheet** option. It should generate a clean worksheet for Adaptive Mix, the selected single topic, or an End-of-Unit Test. For Adaptive Mix, the worksheet uses the fixed adaptive question count. For single-topic practice, it uses the selected topic, difficulty, and typed question amount. For End-of-Unit worksheets, it uses the selected topic and a mixed difficulty distribution. The worksheet should include blank answer space, multiple-choice options when needed, and an answer key on a separate printed page. The worksheet view should have a print button and print-friendly styling that hides the app navigation and gradient interface.

When **Choose one topic** is selected, the setup controls should include a difficulty dropdown with **Warm-up**, **Easy**, **Medium**, and **Honors**. The selected difficulty applies to single-topic tests and single-topic printable worksheets. Adaptive Mix keeps its own mixed difficulty behavior.

During a Premium/Admin selected-topic test, the student can choose whether the next question should be easier or harder. The app should regenerate only the next unanswered question, keep the current topic the same, save the choice in the draft, and never show this control for Basic users, Adaptive Mix, or End-of-Unit Tests.

Each exam should be designed for exactly **30 minutes**.

### Recommended Question Count

Each daily exam should have **16–22 questions** depending on difficulty.

Suggested default:

| Question Type | Count |
|---|---:|
| Multiple choice | 6 |
| Short answer | 5 |
| True/false with explanation | 3 |
| Correct the mistake | 3 |
| Challenge problem | 1–2 |

Total: **18–19 questions**

### Difficulty Mix

| Difficulty | Percentage |
|---|---:|
| Warm-up | 20% |
| Medium | 50% |
| Honors challenge | 30% |

### Daily Exam Flow

1. Student opens app
2. Student enters name or app remembers name
3. Student chooses:
   - Style mode
   - Color theme
   - Exam plan length: 2, 3, 4, 5, or 6 weeks
4. App generates today’s exam
5. Student starts 30-minute timer
6. Student answers questions
7. Student may use:
   - Formula Sheet
   - Teach Me This Topic button
8. Student submits exam
9. App grades exam
10. App shows:
   - Score
   - Percentage
   - Topic breakdown
   - Improvement trend
   - What to study next
   - Bestie/Formal feedback
11. App saves results
12. App uses results to generate tomorrow’s exam

---

## 8. Style Modes

The student can choose how the app talks.

### Mode 1: Bestie Mode

Bestie Mode should be extremely encouraging, fun, dramatic, and hype.

Tone:
- Gen Z / Gen Alpha
- Energetic
- Friendly
- Encouraging
- Never mean
- Makes math feel less scary

Example messages:

**Before exam:**

> Okay, Maya, it’s Algebra 2 glow-up time. You are about to absolutely cook. 30 minutes, full focus, no panic, just main character math energy.

**After strong result:**

> WAITTTT you ate that. Polynomial division tried to humble you and you said “not today.” Your score is 86%, and your graphing accuracy is giving academic weapon.

**After weak result:**

> Okay bestie, today was a little spicy, but we are NOT spiraling. Rational functions were the villain today, so tomorrow we’re pulling up with extra practice and receipts.

**When student improves:**

> HELLO??? You went from 61% to 74% on exponential/log questions. That is not luck, that is growth. Your Algebra 2 aura is rising.

---

### Mode 2: Formal Mode

Formal Mode should feel like a real academic exam system.

Tone:
- Clear
- Calm
- Serious
- Precise
- No slang
- Similar to a school exam platform

Example messages:

**Before exam:**

> You will have 30 minutes to complete this Honors Algebra 2 practice exam. Answer all questions to the best of your ability. Your score and topic analysis will be shown after submission.

**After exam:**

> Your score is 15 out of 20, or 75%. Your strongest area was quadratic functions. Your weakest area was rational expressions. Tomorrow’s exam will include additional rational expression practice.

---

## 9. Color Theme Dropdown

The student should be able to choose a color theme from a dropdown menu.

### App Logo Direction

The app logo should feel like a polished real study app icon: friendly, soft, gender-neutral, and math-themed without being too childish. The preferred direction is a rounded gradient badge with a cute calculator/graph motif, small sparkle details, and balanced spacing so it still reads clearly at phone-icon size.

### Required Themes

| Theme Name | Description |
|---|---|
| Lavender Glow | Purple/lavender soft theme |
| Ocean Focus | Blue and teal calm theme |
| Matcha Study | Green cozy theme |
| Sunset Hype | Orange/pink energetic theme |
| Midnight Mode | Dark mode with high contrast |
| Bubblegum Pop | Pink fun theme |
| Classic Exam | White/gray clean school theme |
| Aurora Sky | Blue, violet, and mint gradient inspired by the northern lights |
| Cosmic Grape | Deep indigo, violet, and magenta gradient with high contrast |
| Tropical Splash | Turquoise, ocean blue, and lime gradient |
| Peach Sorbet | Peach, coral, and soft pink sunset gradient |
| Golden Hour | Warm gold, apricot, and rose gradient |

### Gradient Theme Requirements

Gradient themes should be available in the same theme dropdown as solid-color themes. Each gradient theme must use a coordinated, readable gradient system rather than changing only the page background.

Gradient themes should apply coordinated gradients to every major visual layer:

- The main page background
- Navigation and header surfaces
- Setup, exam, result, dashboard, and formula-sheet cards
- Form fields, dropdowns, answer choices, and selected states
- Primary buttons
- Progress bars
- Timer cards and accents
- Score rings and charts
- Question navigation buttons
- Modal, lesson, feedback, and review surfaces

No major interface surface should fall back to a flat solid color while a gradient theme is active. Gradients should vary by layer so that cards remain visually distinct from the page background. Text may also use a gradient treatment for large decorative headings, but questions, answers, labels, and body copy must maintain accessible contrast. The selected gradient theme must be saved locally and restored when the student returns.

### Theme Requirements

Each theme should change:

- Background color
- Card color
- Button color
- Progress bar color
- Timer color
- Score chart accent color

The theme should not change the math content or grading.

---

## 10. Student Name Personalization

The app must include a text field:

> “What should we call you?”

The app should save the name and use it in:

- Welcome message
- Exam start screen
- Feedback report
- Progress dashboard
- Encouragement messages

Example:

> Welcome back, Maya. Ready for Day 6?

In Bestie Mode:

> Maya, today we are defeating logs. No fear, just vibes and correct answers.

In Formal Mode:

> Maya, today’s exam focuses on logarithmic equations, rational expressions, and function transformations.

---

## 11. Formula Sheet Feature

The student should have access to a formula sheet during the exam.

### Formula Sheet Button

Button label:

> Formula Sheet

The formula sheet should open in a side panel or modal.

### Formula Sheet Should Include

#### Quadratics

- \(ax^2 + bx + c = 0\)
- \(x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}\)
- Discriminant: \(b^2 - 4ac\)
- Vertex: \(x = \frac{-b}{2a}\)
- Vertex form: \(y = a(x-h)^2 + k\)

#### Complex Numbers

- \(i = \sqrt{-1}\)
- \(i^2 = -1\)
- \(a + bi\) form
- Conjugate: \(a - bi\)

#### Polynomials

- Remainder Theorem: remainder of \(p(x) \div (x-a)\) is \(p(a)\)
- Factor Theorem: \(x-a\) is a factor if \(p(a)=0\)
- End behavior rules
- Multiplicity rules

#### Rational Functions

- Vertical asymptote: denominator \(=0\), after simplification
- Hole: canceled factor
- Horizontal asymptote:
  - degree top < degree bottom: \(y=0\)
  - degree top = degree bottom: ratio of leading coefficients
  - degree top > degree bottom: no horizontal asymptote
- Check for extraneous solutions

#### Radicals and Rational Exponents

- \(x^{1/n} = \sqrt[n]{x}\)
- \(x^{m/n} = \sqrt[n]{x^m}\)
- Always check radical equation solutions

#### Exponents and Logs

- \(a^x = b \iff \log_a(b)=x\)
- \(\log_b(xy)=\log_b x+\log_b y\)
- \(\log_b(x/y)=\log_b x-\log_b y\)
- \(\log_b(x^p)=p\log_b x\)
- Change of base: \(\log_b a = \frac{\log a}{\log b}\)

#### Sequences

- Arithmetic: \(a_n = a_1 + (n-1)d\)
- Geometric: \(a_n = a_1r^{n-1}\)
- Finite geometric sum: \(S_n = a_1\frac{1-r^n}{1-r}\), \(r \neq 1\)

#### Trig Preview

- \(180^\circ = \pi\) radians
- \(\sin^2\theta + \cos^2\theta = 1\)
- \(\tan\theta = \frac{\sin\theta}{\cos\theta}\)
- Unit circle special values

### Formula Sheet Usage

Using the formula sheet should **not** reduce the student’s score.

The purpose is to help the student learn formulas while practicing.

---

## 12. “Teach Me This Topic” Button

### Offline Conversational Study Coach

For the MVP, the Teach Me feature should open an offline conversational Study Coach rather than showing only one static mini-lesson.

The student can:

- Type unlimited follow-up questions about the current problem
- Ask for a simpler explanation
- Ask for the first step or next step
- Ask which formula or rule applies
- Ask for another example with different numbers
- Ask why a step works
- Request a full walkthrough of the current problem

The coach should remember the conversation separately for each exam question. Quick-reply buttons should make common requests easy on a phone. Opening the coach or requesting a hint marks the question as **Hinted**; requesting the exact solution or full walkthrough marks it as **Assisted**.

The interface must accurately label this as an offline Study Coach, not a general-purpose internet AI. When it cannot interpret a free-form request, it should say what kinds of follow-ups it can answer and offer useful quick prompts. It must never pretend to understand a question it cannot handle.

Each question should have a button:

> Teach Me This Topic

or in Bestie Mode:

> Help bestie, teach me this

### What It Does

When clicked, the app gives a mini-lesson related to the question.

The app should not immediately give away the exact answer unless the student asks for a full walkthrough.

### Mini-Lesson Format

1. Name of topic
2. When to use it
3. Key formula or method
4. One worked example with different numbers
5. A hint for the current problem
6. Option to return to question

### Assisted Question Tracking

If the student uses the Teach Me button, the app should mark the question as:

- **Unassisted** if they only opened the formula sheet
- **Hinted** if they used a topic hint
- **Assisted** if they viewed a step-by-step explanation for the exact question

The final results should show:

- Overall score
- Unassisted score
- Assisted questions list
- Topics where help was used most often

Example:

> Overall score: 82%  
> Unassisted score: 71%  
> You used help most often on rational functions and logarithmic equations.

This helps the app know what the student truly understands versus what they can solve with support.

---

## 13. Grading Requirements

After the student submits, the app should show:

### Score Summary

- Points earned
- Total points
- Percentage
- Letter grade equivalent
- Time used
- Number of hints used
- Number of formula sheet opens
- Assisted vs unassisted score

### Example

> Score: 17/21  
> Percentage: 81%  
> Grade: B-  
> Time used: 29:14  
> Formula sheet opened: 4 times  
> Teach Me used: 3 times  
> Unassisted score: 72%

### Suggested Grade Bands

| Percentage | Grade |
|---:|---|
| 93–100 | A |
| 90–92 | A- |
| 87–89 | B+ |
| 83–86 | B |
| 80–82 | B- |
| 77–79 | C+ |
| 73–76 | C |
| 70–72 | C- |
| 60–69 | Needs Review |
| Below 60 | Reteach Needed |

---

## 14. Feedback Requirements

The app should give immediate, useful feedback.

### Feedback Must Include

1. Overall performance
2. Strongest topics
3. Weakest topics
4. Mistake patterns
5. Recommended practice topics
6. Tomorrow’s adaptive focus
7. Encouraging message in chosen style

### Mistake Pattern Examples

The app should identify patterns like:

- Forgot to check for extraneous solutions
- Used exponent rules incorrectly
- Confused horizontal and vertical asymptotes
- Made sign errors when completing the square
- Misread function transformations
- Used log rules incorrectly
- Factored incorrectly
- Did not distribute negative signs
- Solved correctly but did not answer the question asked

### Bestie Mode Feedback Example

> Maya, you got 78%, which is actually a solid Day 5 score. You cooked on quadratics, but rational functions came in wearing villain eyeliner. Tomorrow we’re doing extra asymptote and hole questions because we are NOT letting them win.

### Formal Mode Feedback Example

> Maya, your score was 78%. You performed well on quadratic and polynomial operations. Your main area for improvement is rational functions, specifically identifying holes and vertical asymptotes. Tomorrow’s exam will include additional rational function questions.

---

## 15. Progress Dashboard

The dashboard should show improvement over time.

### Required Dashboard Sections

#### A. Overall Score Trend

Line chart showing daily percentage.

Example:

| Day | Score |
|---|---:|
| Day 1 | 62% |
| Day 2 | 68% |
| Day 3 | 71% |
| Day 4 | 76% |

#### B. Topic Mastery

Each topic should have a mastery score from 0–100.

Example:

| Topic | Mastery |
|---|---:|
| Quadratics | 86 |
| Polynomials | 74 |
| Rational Functions | 52 |
| Logs | 61 |
| Inverses | 69 |

#### C. Heat Map

Use colors to show:

- Green: strong
- Yellow: improving
- Red: needs review

#### D. Improvement Badges

Examples:

- Polynomial Comeback
- No More Sign Errors
- Log Legend
- Function Glow-Up
- Rational Function Recovery
- 3-Day Streak
- 80% Club
- Accuracy Queen/King

#### E. Personal Improvement Notes

The app should write 2–4 sentences after every test.

Example:

> You improved by 9 percentage points compared with your first exam. Your biggest growth is in quadratic transformations. Your next target is rational equations because you are still missing extraneous solution checks.

---

## 16. Adaptive Question Generation

The app must remember previous tests and use them to create new ones.

### Data the App Should Save

For every question:

- Question ID
- Topic
- Subtopic
- Difficulty
- Question type
- Correct answer
- Student answer
- Correct/incorrect
- Time spent
- Hint used?
- Formula sheet used?
- Assisted or unassisted?
- Mistake category
- Date
- Exam number

### How Tomorrow’s Exam Is Generated

The next exam should include:

- 40% weak topics from previous tests
- 30% current planned topic
- 20% mixed review
- 10% challenge/honors extension

### Spaced Review Logic

If a student misses a topic, it should come back:

- Next day: easier/medium retry
- 3 days later: mixed context
- 7 days later: challenge version

### Example

If the student misses rational functions on Day 4:

- Day 5: identifying holes and asymptotes
- Day 7: rational equation with extraneous solution
- Day 11: mixed rational/log modeling question

---

## 17. Daily Exam Plan: 4 Weeks

### Week 1: Function and Quadratic Readiness

| Day | Focus |
|---:|---|
| 1 | Diagnostic: mixed Algebra 2 readiness |
| 2 | Function notation, domain/range, graph features |
| 3 | Transformations and inverse functions |
| 4 | Quadratic forms and graphing |
| 5 | Completing the square and quadratic formula |
| 6 | Complex numbers and discriminant |
| 7 | Mixed review: functions + quadratics |

### Week 2: Polynomial and Rational Functions

| Day | Focus |
|---:|---|
| 8 | Polynomial operations and factoring |
| 9 | End behavior, zeros, multiplicity |
| 10 | Remainder and Factor Theorems |
| 11 | Polynomial division and synthetic division |
| 12 | Rational expressions and domain restrictions |
| 13 | Rational functions, holes, asymptotes |
| 14 | Mixed review: polynomials + rational functions |

### Week 3: Radicals, Logs, Sequences, Systems

| Day | Focus |
|---:|---|
| 15 | Radical expressions and rational exponents |
| 16 | Radical equations and extraneous solutions |
| 17 | Exponential growth and decay |
| 18 | Logarithms and log properties |
| 19 | Solving exponential/log equations |
| 20 | Arithmetic/geometric sequences and series |
| 21 | Systems and modeling |

### Week 4: Honors Readiness and Cumulative Exams

| Day | Focus |
|---:|---|
| 22 | Trig/unit circle preview |
| 23 | Mixed graph interpretation |
| 24 | Modeling challenge exam |
| 25 | Cumulative exam 1 |
| 26 | Targeted weak-topic repair |
| 27 | Cumulative exam 2 |
| 28 | Final Honors Algebra 2 readiness exam |

---

## 18. Daily Exam Plan: 2-Week Version

| Day | Focus |
|---:|---|
| 1 | Diagnostic |
| 2 | Functions, domain/range, transformations |
| 3 | Quadratics and complex numbers |
| 4 | Polynomial operations, factoring, zeros |
| 5 | Remainder Theorem, Factor Theorem, polynomial division |
| 6 | Rational expressions and functions |
| 7 | Mixed review 1 |
| 8 | Radicals and rational exponents |
| 9 | Exponentials and logs |
| 10 | Log equations and applications |
| 11 | Sequences and systems |
| 12 | Trig preview and graph interpretation |
| 13 | Cumulative exam |
| 14 | Final readiness exam |

---

## 19. Question Types

### Multiple Choice

Used for:
- Quick checks
- Concept recognition
- Graph interpretation
- Formula selection

### Short Answer

Used for:
- Solving equations
- Simplifying expressions
- Finding roots/asymptotes
- Writing formulas

### True/False

Must often require explanation.

Example:

> True or false: If \(x = 3\) makes the denominator of a rational equation zero, then \(x = 3\) can still be a valid solution.

Correct answer: False.

### Correct the Mistake

The app shows a fake student solution with an error.

Example:

> A student solves \(\sqrt{x+6}=x\) and gets \(x=3\). Explain the mistake and solve correctly.

This is especially important for Honors Algebra 2 because it trains reasoning, not just answer-getting.

---

## 20. Timer Behavior

The exam timer should be 30 minutes.

### During the Exam

Show:

- Time remaining
- Questions answered
- Questions flagged
- Formula Sheet button
- Teach Me This Topic button

### When Time Runs Out

The app should automatically mark:

- Questions answered within 30 minutes
- Questions unanswered
- Questions answered after time, if extra time is allowed

Recommended behavior:

- Allow the student to keep working after time expires
- Show two scores:
  1. **30-minute official score**
  2. **Full completion score**

Example:

> 30-minute score: 14/18 = 78%  
> Full completion score: 17/20 = 85%

This helps the student see both speed and understanding.

---

## 21. User Interface Requirements

### Home Screen

Must include:

- Student name input
- Style mode dropdown
- Color theme dropdown
- Prep plan selector: 2 weeks, 3 weeks, 4 weeks, 5 weeks, 6 weeks
- Start today’s exam button
- View progress button

### Exam Screen

Must include:

- Question card
- Answer input
- Timer
- Formula Sheet button
- Teach Me This Topic button
- Flag question button
- Next/previous navigation
- Submit exam button

### Results Screen

Must include:

- Score
- Percentage
- Grade
- Topic performance
- Mistake patterns
- Improvement summary
- Recommended next steps
- Button to review missed questions
- Button to start mini-practice

### Dashboard Screen

Must include:

- Score trend chart
- Topic mastery chart
- Streak count
- Weak topics
- Strong topics
- Past exam list
- Improvement badges

---

## 22. Data Storage

The app should store daily state and results locally on the computer.

### Mobile and Travel Support

The app must be fully usable on modern phones in portrait orientation.

Mobile requirements:

- Responsive layouts with no horizontal scrolling
- Touch targets at least 44 pixels tall where practical
- Input text of at least 16 pixels to avoid unwanted mobile-browser zoom
- Safe-area spacing for phones with notches and home indicators
- The iPhone status-bar safe area must use the active theme color or gradient instead of showing an unthemed white strip
- A compact, scrollable question navigator
- Sticky Previous and Next controls during an exam
- Formula sheet content that fits in a scrollable mobile modal
- Readable results, charts, topic rows, and setup controls on narrow screens
- Progressive Web App metadata so the app can be added to a phone's home screen
- Offline caching of the app shell after the first successful hosted visit

The app must continue saving the student's profile and results in browser localStorage. Because localStorage is device-specific, phone results and computer results are not automatically synchronized in the MVP. Offline installation and caching require the app to be served over HTTPS (or localhost during development); they do not activate when the HTML file is opened directly from the filesystem.

### Server-Backed Authentication, Accounts, Premium, and Admin Access

The current static MVP uses localStorage and GitHub Pages. Real Google/Microsoft sign-in, premium access, administrator approval, cross-device usage tracking, and OpenAI API model routing cannot be implemented securely with only static HTML/CSS/JavaScript. These features require a backend service, a database, and server-side API calls.

#### Required Authentication Flow

Before accessing the app, users should see an authentication pop-up/page with:

- **Continue with Google**
- **Continue with Microsoft**

The backend must verify the user’s identity using the provider’s verified OAuth/OpenID token. The frontend must not decide whether a user is premium or admin by itself.

On first successful sign-in, a new user account should be created as:

- `accountType: "basic"`
- `premiumStatus: "none"`
- `createdAt`
- `lastLoginAt`
- `provider`
- `email`
- `displayName`

#### Account Types

The app should support two account types:

1. **Basic / Free**
   - Costs the user nothing.
   - Can take **one test per calendar day**.
   - Can generate limited worksheets, if usage limits are later added.
   - Uses the configured low-cost OpenAI model for AI-backed question generation, grading, explanations, and feedback.

2. **Premium**
   - Can take unlimited tests.
   - Can use premium AI-backed features without the one-test-per-day limit.
   - Uses the configured premium OpenAI model for AI-backed question generation, grading, explanations, and feedback.

The following emails must always be treated as premium:

- `radhikatchandra@outlook.com`
- `radhikachandra809@gmail.com`
- `ranveer.chandra@gmail.com`

These same emails should also be administrator accounts.

#### OpenAI Model Routing

All OpenAI API calls must happen server-side. The browser must never contain an OpenAI API key.

Model routing should be configurable on the backend:

- Basic users: use the cheapest currently approved OpenAI model for simple generation/grading tasks.
- Premium users: use the configured premium model, requested as `gpt-5.6` if available in the connected OpenAI account.

If a requested model is unavailable, the backend should fail safely with an administrator-visible configuration error instead of silently switching models. Model IDs should be stored in server configuration, not hard-coded throughout the frontend.

#### Basic Daily Limit

Basic users may start only **one test per day**. This limit must be enforced by the backend using server timestamps, not by localStorage.

The backend should store:

- `testsStartedToday`
- `lastTestStartedAt`
- `testStartHistory`
- `usageByDay`

If a basic user reaches the daily limit, the Home screen should show:

> You’ve used your free test for today. Come back tomorrow or request Premium.

#### Premium Upgrade Request

Basic users should see an **Upgrade to Premium** option on the Home screen.

When clicked, the user can submit a premium request. The backend should store:

- user id
- email
- display name
- request date/time
- request status: `pending`, `approved`, or `denied`
- admin decision date/time
- approving admin email, if approved

Until approved, the user remains Basic.

#### Administrator Dashboard

Administrators should have an additional dashboard area visible only to admin accounts.

Admin dashboard requirements:

- View all signed-in users.
- See each user’s email, display name, provider, account type, premium status, first login, and last login.
- See who requested Premium.
- Approve or deny Premium requests.
- Manually change a user between Basic and Premium.
- Search/filter by email and account type.
- View usage totals for:
  - last 24 hours
  - last 30 days
  - current month
  - previous months
  - current year
  - all time
- View per-user usage:
  - tests started
  - tests completed
  - worksheets generated
  - AI questions generated
  - AI grading calls
  - estimated model usage/cost if available from backend logs
- Run an admin-only AI model health check that safely tests the configured Basic and Premium OpenAI models from the backend without exposing the API key.

Admin actions must be logged in an audit log.

#### Security Requirements

- Auth tokens must be verified on the backend.
- Premium/admin status must be checked on the backend for protected actions.
- OpenAI API keys must never be exposed in frontend JavaScript.
- A user changing localStorage or browser code must not be able to become Premium or Admin.
- Admin emails should be stored in server configuration and checked against verified sign-in emails.
- Usage limits must use server timestamps.
- Admin dashboards must require verified admin authorization on every request.

#### Suggested Backend Options

Acceptable backend options include:

- Firebase Authentication + Firestore + Cloud Functions
- Supabase Auth + Postgres + Edge Functions
- A custom Node/Express backend with a hosted database

GitHub Pages can still host the frontend, but authentication, premium status, usage limits, admin actions, and OpenAI calls must be handled by the backend.

#### Firebase Implementation Files Added

The Firebase-backed version should include these project files:

- `firebase-config.js` for the public Firebase web app configuration and admin email list.
- `firebase.json` for Firebase Hosting, Firestore, and Functions configuration.
- `firestore.rules` to prevent users from editing their own premium/admin status.
- `firestore.indexes.json` for admin request and usage queries.
- `functions/package.json` for Cloud Functions dependencies.
- `functions/index.js` for secure callable backend functions:
  - `syncUser`
  - `requestPremium`
  - `startTestSession`
  - `logUsage`
  - `adminListDashboard`
  - `adminSetPremium`
  - `generateWithOpenAI`

The frontend should include a sign-in gate, Google/Microsoft sign-in buttons, sign-out, account status display, Premium request button, and Admin dashboard tab for administrator accounts.

### Minimum Storage

Use local JSON files or browser local storage.

### Recommended Storage Files

```text
/data
  student_profile.json
  exam_history.json
  topic_mastery.json
  daily_state.json
  question_bank.json
```

### student_profile.json

```json
{
  "studentName": "Maya",
  "styleMode": "bestie",
  "theme": "Lavender Glow",
  "prepPlanWeeks": 4,
  "startDate": "2026-07-15"
}
```

### exam_history.json

```json
[
  {
    "examId": "day-001",
    "date": "2026-07-15",
    "score": 14,
    "total": 20,
    "percentage": 70,
    "officialThirtyMinuteScore": 68,
    "fullCompletionScore": 75,
    "topics": {
      "quadratics": 80,
      "polynomials": 60,
      "rationalFunctions": 45
    },
    "hintsUsed": 3,
    "formulaSheetOpens": 5,
    "mistakePatterns": ["sign errors", "forgot extraneous solution check"]
  }
]
```

### topic_mastery.json

```json
{
  "quadratics": {
    "mastery": 82,
    "lastPracticed": "2026-07-18",
    "trend": "improving"
  },
  "rationalFunctions": {
    "mastery": 51,
    "lastPracticed": "2026-07-18",
    "trend": "needs_review"
  }
}
```

---

## 23. AI Question Generator Requirements

The question generator should produce new questions daily.

### Prompt Requirements

The generator should know:

- Student grade level
- Course target: Honors Algebra 2
- Previous test results
- Weak topics
- Strong topics
- Desired style mode
- Question type mix
- Difficulty mix
- Whether hints should be generated
- Whether explanations should be generated
- Whether formula sheet entries are relevant

The generator must obey the requested topic and difficulty. For selected-topic tests, it should not secretly mix topics, and it should not make every difficulty feel the same. It should also avoid oversized values:

- Radicals: Warm-up <= 50, Easy <= 90, Medium <= 160, Honors <= 225
- Exponential/logarithm prompts: avoid very large values such as 16384; use friendly powers and readable coefficients
- Trigonometry: keep angle measures reasonable for the selected level

If OpenAI returns too few usable questions after filtering for topic, difficulty, unique prompts, and friendly numbers, the frontend may fill the missing questions with the local template generator.

### Question Object Format

```json
{
  "questionId": "poly-division-003",
  "topic": "Polynomial Functions",
  "subtopic": "Synthetic Division",
  "difficulty": "medium",
  "type": "short_answer",
  "prompt": "Use synthetic division to divide 2x^3 - 5x^2 + 3x - 7 by x - 2.",
  "choices": null,
  "correctAnswer": "2x^2 - x + 1 remainder -5",
  "rubric": {
    "points": 3,
    "partialCredit": true
  },
  "hint": "Use 2 as the synthetic division value because the divisor is x - 2.",
  "miniLesson": "Synthetic division is used when dividing by x - a...",
  "formulaSheetTags": ["polynomials", "remainder_theorem"]
}
```

---

## 24. Partial Credit

Short-answer questions should allow partial credit.

### Example

Question:

> Solve \(x^2 - 4x + 13 = 0\).

Correct answer:

> \(x = 2 \pm 3i\)

Rubric:

| Work | Points |
|---|---:|
| Uses quadratic formula or completes square correctly | 1 |
| Gets discriminant \(-36\) | 1 |
| Writes final complex solutions correctly | 1 |

Total: 3 points

---

## 25. Review Missed Questions

After grading, the student should be able to review missed questions.

For each missed question, show:

- Student answer
- Correct answer
- Explanation
- Mistake type
- Mini-lesson
- Similar practice question

### Bestie Mode Example

> You were SO close. The only thing that betrayed us was the negative sign. Let’s fix that villain behavior.

### Formal Mode Example

> Your setup was correct, but a sign error occurred when distributing \(-2\). Review the corrected solution below.

---

## 26. Improvement Recommendations

The app should give specific recommendations.

### Weak Topic Example

If rational functions are weak:

> Practice identifying domain restrictions before simplifying. You are often canceling factors correctly, but forgetting that canceled factors still create holes.

### Speed Example

If time is weak:

> You are accurate when you finish, but your average time per polynomial division question is high. Tomorrow’s warm-up should include 4 quick synthetic division problems.

### Accuracy Example

If careless mistakes are common:

> You understand the method, but sign errors are lowering your score. Add a final 20-second check for negatives, distribution, and copied values.

---

## 27. Success Metrics

The app is successful if:

- Student completes at least 10 exams
- Student’s overall score improves by 10+ percentage points
- Student’s weak-topic mastery improves over time
- Student can identify their top 3 weak topics
- Student feels more confident before school starts
- Student can solve mixed Honors Algebra 2 problems without needing hints every time

---

## 28. MVP Features

The first version must include:

1. Student name input
2. Style mode selection
3. Color theme dropdown
4. Daily exam generator
5. 30-minute timer
6. Multiple question types
7. Formula sheet
8. Teach Me This Topic button
9. Auto-grading
10. Percentage and grade
11. Save previous results
12. Adaptive next-day exam
13. Progress dashboard
14. Improvement feedback

---

## 29. Future Features

Possible later upgrades:

- Parent dashboard
- Printable PDF exams
- Export results to CSV
- Voice mode for reading questions aloud
- Desmos-style graphing integration
- Streak rewards
- Custom teacher syllabus upload
- “I only have 10 minutes today” mini-quiz mode
- Challenge boss battles
- Final readiness certificate

---

## 30. Acceptance Criteria

The app is ready when:

- A student can enter their name and be addressed by that name
- A student can choose Bestie Mode or Formal Mode
- A student can choose a color theme
- The app generates a new daily 30-minute Honors Algebra 2 exam
- The app includes real Algebra 2 Honors topics
- The app includes a formula sheet during the test
- Each question has a Teach Me This Topic option
- The app grades the exam after submission
- The app shows score, percentage, and grade
- The app saves prior results
- The next exam adapts based on previous performance
- The dashboard shows improvement over time
- The student receives specific improvement advice
- Bestie Mode is genuinely fun, hype, and encouraging
- Formal Mode feels like a real exam platform

---

## 31. Example Day 1 Diagnostic Exam Blueprint

### Topics

- Function notation
- Quadratic equations
- Complex numbers
- Polynomial factoring
- Rational expressions
- Exponent rules
- Intro logs
- Sequences

### Question Mix

| Type | Count |
|---|---:|
| Multiple choice | 6 |
| Short answer | 7 |
| True/false | 3 |
| Correct the mistake | 3 |
| Challenge | 1 |

Total: 20 questions

### Time

30 minutes

### Grading

20–25 total points depending on partial credit.

---

## 32. Example Result Message: Bestie Mode

> Maya, you got 76% on today’s exam, and honestly? That is a strong start. You absolutely cooked on quadratics and function notation. The main villain today was rational expressions, especially domain restrictions and holes. Tomorrow we’re going to do a targeted rational function glow-up, plus a few polynomial review questions so your skills stay fresh. You are not behind. You are building the Algebra 2 brain cells brick by brick, and it is working.

---

## 33. Example Result Message: Formal Mode

> Maya, your score on today’s exam was 76%. Your strongest areas were quadratic functions and function notation. Your weakest area was rational expressions, particularly domain restrictions and holes. Tomorrow’s exam will include targeted rational function review along with cumulative polynomial practice.

---

## 34. Final Product Vision

This app should feel like a personal Honors Algebra 2 coach.

It should not just say whether the student is right or wrong. It should help the student understand patterns, build confidence, remember formulas, practice under time pressure, and feel ready for a challenging high school math class.

The app should be rigorous enough for Honors Algebra 2, but friendly enough that a rising 9th grader actually wants to use it every day.

---

## References

- Lake Washington High School Course Catalog: https://lwhs.lwsd.org/academics/course-catalog
- Common Core High School Algebra Standards: https://thecorestandards.org/Math/Content/HSA/
- Common Core High School Functions Standards: https://thecorestandards.org/Math/Content/HSF/
