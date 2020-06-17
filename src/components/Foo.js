import html from "../html.js"

const Foo = (props) => html`
  <ul>
    ${props.items.map((item) => html`<li key=${item.id}>${item.name}</li>`)}
  </ul>
`;

export default Foo