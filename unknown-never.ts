let userInput: unknown;
let userName: string;

userInput = 1;
userInput = "Ritesh";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw {
    message,
    errorCode: code,
  };
}

const result = generateError("Internal error", 500);
console.log(result);
