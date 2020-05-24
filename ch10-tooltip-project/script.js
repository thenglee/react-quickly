// @format
class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const {
      offsetTop: top,
      offsetLeft: left
    } = ReactDOM.findDOMNode(this);
    this.setState({
      opacity: !this.state.opacity,
      top,
      left
    });
  }

  render() {
    const style = {
      zIndex: this.state.opacity ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) + 20,
      left: (this.state.left || 0) - 30
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'blue'
      },
      onMouseEnter: this.toggle,
      onMouseOut: this.toggle
    }, this.props.children), /*#__PURE__*/React.createElement("div", {
      className: "tooltip bottom",
      style: style,
      role: "tooltip"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tooltip-arrow"
    }), /*#__PURE__*/React.createElement("div", {
      className: "tooltip-inner"
    }, this.props.text)));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tooltip, {
  text: "The book you're reading now"
}, "React Quickly"), " was published in 2017. It's awesome!"), document.getElementById('tooltip'));
