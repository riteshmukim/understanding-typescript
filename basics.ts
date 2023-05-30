function add(
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string
): number | void {
  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result);
  }
  return result;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultText = "Result is: "

const result = add(number1, number2, printResult, resultText);

console.log(result);
