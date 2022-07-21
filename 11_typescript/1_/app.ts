let userInput: unknown; 
let userName: string;

userInput = 4;
userInput = 'Max';

if(typeof userInput === 'string') {
  userName = userInput;
}

//It's common to use never when throwing an error message
function generatedError(message:string, code:number):never {
  throw{message: message, errorCode: code}
}

generatedError('An error ocurred!', 500)
