import { generatePass } from './components/generator.js';

function app() {
    const pass: string = (generatePass());
    console.log(pass);
}

app();