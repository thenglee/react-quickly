// @format
class Button extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      onClick: this.props.handleClick
    }, this.props.label);
  }

}

class Link extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("a", {
      onClick: this.props.handleClick,
      href: "#"
    }, this.props.label);
  }

}

class Logo extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("img", {
      onClick: this.props.handleClick,
      width: "40",
      src: "logo.png",
      href: "#"
    });
  }

}