import { getArrayChar } from "./characters.js";

export function generatePass ()
{
    let arrChars = getArrayChar();

    let codeLength = 8;
    let code = '';

    while (codeLength > 0) {
        let index = Math.floor(Math.random() * (arrChars.length));
        let char = arrChars[index];
        code += char;
        codeLength--;
    }

    return code;
}