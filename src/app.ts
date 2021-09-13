import { renderCode } from './components/codeRender.js';
import { CopyPasswordToClipboard } from './components/copyPassword.js';

function app() {
    renderCode();
    CopyPasswordToClipboard();
}

app();