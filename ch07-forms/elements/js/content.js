// @format
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleRadio = this.handleRadio.bind(this);
    this.state = {
      radioGroup: {
        angular: false,
        react: true,
        polymer: false
      }
    };
  }

  handleRadio(event) {
    let obj = {}; // erase other radios

    obj[event.target.value] = event.target.checked; // true

    this.setState({
      radioGroup: obj
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("h2", null, "input: radio"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "radioGroup",
      value: "angular",
      checked: this.state.radioGroup['angular'],
      onChange: this.handleRadio
    }), "Angular"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "radioGroup",
      value: "react",
      checked: this.state.radioGroup['react'],
      onChange: this.handleRadio
    }), "React"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "radioGroup",
      value: "polymer",
      checked: this.state.radioGroup['polymer'],
      onChange: this.handleRadio
    }), "Polymer"));
  }

}