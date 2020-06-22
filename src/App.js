import { html } from "./deps.js";

import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";

import sheet from "./stylesheet.js";

// TODO: load pages dynamically:
import about from "./pages/about.js"
import index from "./pages/index.js"
import calendar from "./pages/calendar.js"

const App = (props) => {
  const pages = {
    about,
    index,
    calendar
  }
  const Page = pages[props.currentPage]
  return html`
    <div>
      <h1>Rendered with deno</h1>
      <${Nav} currentPage=${props.currentPage} pages=${props.pages} />
      <${Page} ...${props} />
      <${Footer}>footer content here <button className=${sheet.classes.myButton}>Button Component</button><//>
    </div>
  `;
};

export default App;
