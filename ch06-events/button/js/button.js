// @format
class SaveButton extends React.Component {
  handleSave(event) {
    console.log(this, event);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: this.handleSave.bind(this)
    }, "Save"));
  }

}