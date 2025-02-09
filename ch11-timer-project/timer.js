// @format
const Timer = props => {
  if (props.timeLeft == 0) {
    document.getElementById('end-of-time').play();
  }

  if (props.timeLeft == null || props.timeLeft == 0) {
    return /*#__PURE__*/React.createElement("div", null);
  }

  return /*#__PURE__*/React.createElement("h1", null, "Time left: ", props.timeLeft);
};

const Button = props => {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-default",
    onClick: () => {
      props.startTimer(props.time);
    }
  }, props.time, " seconds", ' ');
};

class TimerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: null,
      timer: null
    };
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer(timeLeft) {
    clearInterval(this.state.timer);
    let timer = setInterval(() => {
      console.log('2: Inside of setInterval');
      var timeLeft = this.state.timeLeft - 1; // setState timeLeft will run first

      if (timeLeft == 0) clearInterval(timer);
      this.setState({
        timeLeft: timeLeft
      });
    }, 1000);
    console.log('1: After setInterval');
    return this.setState({
      timeLeft: timeLeft,
      timer: timer
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "row-fluid"
    }, /*#__PURE__*/React.createElement("h2", null, "Timer"), /*#__PURE__*/React.createElement("div", {
      className: "btn-group",
      role: "group"
    }, /*#__PURE__*/React.createElement(Button, {
      time: "5",
      startTimer: this.startTimer
    }), /*#__PURE__*/React.createElement(Button, {
      time: "10",
      startTimer: this.startTimer
    }), /*#__PURE__*/React.createElement(Button, {
      time: "15",
      startTimer: this.startTimer
    })), /*#__PURE__*/React.createElement(Timer, {
      timeLeft: this.state.timeLeft
    }), /*#__PURE__*/React.createElement("audio", {
      id: "end-of-time",
      src: "flute_c_long_01.wav",
      preload: "auto"
    }));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(TimerWrapper, null), document.getElementById('timer-app'));
