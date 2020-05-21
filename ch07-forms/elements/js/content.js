// @format
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleRadio = this.handleRadio.bind(this);
    this.state = {
      selectedRadio: 'react'
    };
  }

  handleRadio(event) {
    this.setState({
      selectedRadio: event.target.value
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("h2", null, "input: radio"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "radioGroup",
      value: "angular",
      checked: this.state.selectedRadio === 'angular',
      onChange: this.handleRadio
    }), "Angular"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "radioGroup",
      value: "react",
      checked: this.state.selectedRadio === 'react',
      onChange: this.handleRadio
    }), "React"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "radioGroup",
      value: "polymer",
      checked: this.state.selectedRadio === 'polymer',
      onChange: this.handleRadio
    }), "Polymer"));
  }

}