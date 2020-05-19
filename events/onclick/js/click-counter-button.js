// @format
class ClickCounterButton extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("button", {
      onClick: this.props.handler,
      className: "btn btn-info"
    }, "Don't touch me with your dirty hands!");
  }

}