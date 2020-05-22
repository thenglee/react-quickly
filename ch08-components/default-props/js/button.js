// @format
class Button extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("button", {
      className: "btn"
    }, this.props.buttonLabel);
  }

}

Button.defaultProps = {
  buttonLabel: 'Submit'
};