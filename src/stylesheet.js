const styles = {
  myButton: {
    color: "green",
  },
  navList: {
    "list-style": "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    display: "inline",
    "margin-right": "1em",
  },
};

import jss from "https://cdn.pika.dev/jss";
const sheet = jss.createStyleSheet(styles);
export default sheet;
