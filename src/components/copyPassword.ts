import { btnCopy, codeInput } from "./elements.js";

export function CopyPasswordToClipboard() {
    btnCopy.addEventListener('click', () => {
        navigator.clipboard.writeText( codeInput.value );
    })
}