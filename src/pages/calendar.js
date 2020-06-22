import Calendar from "../components/Calendar.js";
import { html } from "../deps.js";

export default (props) =>
  html`
  <${Calendar} date=${new Date()} events=${props.events}/>
`;
