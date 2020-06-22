import data from "http://localhost:8000/data.js";
const { pages, events } = data();

import { html, render, emptyDirSync, writeFileStr } from "./deps.js";
import App from "./App.js";

import sheet from "./stylesheet.js";

const distDir = "./dist";
emptyDirSync(distDir);

pages.forEach(async (page) => {
  const output = `<!doctype html>${
    render(html`
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>${sheet.toString()}</style>
      </head>
      <body><${App} currentPage=${page.id} pages=${pages} events=${events} />
      </body>
    </html>
  `)
  }`;
  await writeFileStr(`${distDir}/${page.id}.html`, output);
});
