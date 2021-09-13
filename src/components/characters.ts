export function getArrayChar(): string[]
{
    const arrChar: any[] = [];

    for (let i = 33; i <= 126; i++) {
        let char = String.fromCharCode(i);
        arrChar.push(char);
    }

    return arrChar;
}