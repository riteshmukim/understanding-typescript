type Convertable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Convertable,
  input2: Convertable,
  resultType: ConversionDescriptor
) {
  let result: Convertable;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedNumber = combine(1, 2, "as-number");
console.log(combinedNumber);

const combinedStringNumber = combine("1", "2", "as-number");
console.log(combinedStringNumber);

const combinedNames = combine("Ritesh", " Mukim", "as-text");
console.log(combinedNames);
