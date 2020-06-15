import React from 'https://dev.jspm.io/preact';
import render from "https://dev.jspm.io/preact-render-to-string";

import data from "http://localhost:8000/data.js";
const items = data().items

const Foo = (props) => (
  <ul>
    {props.items.map(item => (<li key={item.id}>{item.name}</li>))}
  </ul>
);

const App = (props) => <div class="foo">
  <h1>Rendered by preact with deno</h1>
  <Foo items={props.items}/>
</div>;

const html = <html><body><App items={items} /></body></html>
console.log(`<!DOCTYPE html>${render(html)}`);