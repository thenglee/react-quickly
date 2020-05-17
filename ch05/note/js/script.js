// @format
let secondsLeft = 5;
let interval = setInterval(() => {
  if (secondsLeft == 0) {
    ReactDOM.render( /*#__PURE__*/React.createElement("div", null, "Note was removed after ", secondsLeft, " seconds."), document.getElementById('content'));
    clearInterval(interval);
  } else {
    ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Note, {
      secondsLeft: secondsLeft
    })), document.getElementById('content'));
  }

  secondsLeft--;
}, 1000);