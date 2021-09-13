import { getArrayChar } from "./characters.js";

export function generatePass (): string
{
    let arrChars: string[] = getArrayChar();

    let codeLength: number = 8;
    let code: string = '';

    while (codeLength > 0) {
        let index: number = Math.floor(Math.random() * (arrChars.length));
        let char: string = arrChars[index];
        code += char;
        codeLength--;
    }

    return code;
}