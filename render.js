import render from "https://cdn.pika.dev/preact-render-to-string";

import data from "http://localhost:8000/data.js";
const items = data().items;

import html from './src/html.js'
import App from './src/App.js'

import sheet from "./src/stylesheet.js"

const output = html`
  <html>
    <head>
      <style>${sheet.toString()}</style>
    </head>
    <body><${App} items=${items} />
    </body>
  </html>
`;

console.log(`<!DOCTYPE html>${render(output)}`);