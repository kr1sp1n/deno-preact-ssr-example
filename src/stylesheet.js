const styles = {
  myButton: {
      color: 'green'
  }
}

import jss from 'https://dev.jspm.io/jss'
const JSS = jss.default
const sheet = JSS.createStyleSheet(styles)
export default sheet