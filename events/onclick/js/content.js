// @format
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      counter: 0
    };
  }

  handleClick(event) {
    this.setState({
      counter: ++this.state.counter
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ClickCounterButton, {
      handler: this.handleClick
    }), /*#__PURE__*/React.createElement(Counter, {
      counter: this.state.counter
    }));
  }

}