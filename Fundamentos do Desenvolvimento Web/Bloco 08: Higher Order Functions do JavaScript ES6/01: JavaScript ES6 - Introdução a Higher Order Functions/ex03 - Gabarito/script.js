const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (rightAnswers, answers) => {
  let result = 0;
  for (let i = 1; i <= 10; i += 1) {
    if (rightAnswers[i] === answers[i]) {
      result += 1;
    } else if (answers[i] === 'N.A') {
      result += 0;
    } else {
      result -= 0.5;
    }
  }
  return result;
}

const finalEvaluation = (rightAnswers, answers, checkAnswers) => checkAnswers(rightAnswers, answers);

console.log(finalEvaluation(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
