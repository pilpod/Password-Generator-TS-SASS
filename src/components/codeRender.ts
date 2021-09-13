import { btnGenerate, codeInput } from "./elements.js";
import { generatePass } from "./generator.js";

export function renderCode()
{

    btnGenerate.addEventListener('click', () => {
        codeInput.value =  generatePass();
    })

}