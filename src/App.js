import html from "./html.js"

import Foo from "./components/Foo.js"
import Footer from "./components/Footer.js"

import sheet from "./stylesheet.js"

const App = (props) => html`
  <div>
    <h1>Rendered with deno</h1>
    <${Foo} items=${props.items} />
    <${Footer}>footer content here <button className=${sheet.classes.myButton}>Button Component</button><//>
  </div>
`;

export default App