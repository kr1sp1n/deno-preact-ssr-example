import { html } from "../deps.js";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Calendar = ({ date, events }) => {
  const eventsThisMonth = events.filter((e) =>
    date.getMonth() === (new Date(e.start).getMonth())
  );
  return html`
    <div style="width:450px;">
      <h3>${monthNames[date.getMonth()]} ${date.getFullYear()}</h3>
      <hr/>
      <ul>
        ${
    eventsThisMonth.map((e) => {
      const d = new Date(e.start);
      const minutes = d.getMinutes();
      return html`
            <li>
              ${dayNames[d.getDay()]}, ${d.getDate()}. ${d.getHours()}:${
        (minutes < 10) ? `0${minutes}` : minutes
      } - ${e.title}
            </li>
          `;
    })
  }
      </ul>
    </div>
  `;
};

export default Calendar;
