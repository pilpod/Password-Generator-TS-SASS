import { btnGenerate, codeInput } from "./elements.js";
import { generatePass } from "./generator.js";

export function renderCode()
{

    btnGenerate.addEventListener('click', () => {
        console.log('test');
        codeInput.value =  generatePass();
    })

}