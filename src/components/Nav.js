import { html } from "../deps.js";
import sheet from "../stylesheet.js";

const Nav = (props) =>
  html`
  <nav>
    <ol className=${sheet.classes.navList}>
      ${
    props.pages.map((page) =>
      html`
        <li key=${page.id} className=${sheet.classes.navItem}>
          ${
        (props.currentPage === page.id)
          ? page.title
          : html`<a href="${page.id}.html">${page.title}</a>`
      }
        </li>
      `
    )
  }
    </ol>
  </nav>
`;

export default Nav;
