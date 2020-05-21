// @format
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleRadio = this.handleRadio.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.state = {
      selectedRadio: 'react',
      checkboxGroup: {
        node: false,
        react: true,
        express: false,
        mongodb: false
      }
    };
  }

  handleRadio(event) {
    this.setState({
      selectedRadio: event.target.value
    });
  }

  handleCheckbox(event) {
    let obj = this.state.checkboxGroup;
    obj[event.target.value] = event.target.checked; // true or false

    this.setState({
      checkboxGroup: obj
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
    }), "Polymer"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h2", null, "input: checkbox"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      name: "checkboxGroup",
      value: "node",
      checked: this.state.checkboxGroup['node'],
      onChange: this.handleCheckbox
    }), "Node"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      name: "checkboxGroup",
      value: "react",
      checked: this.state.checkboxGroup['react'],
      onChange: this.handleCheckbox
    }), "React"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      name: "checkboxGroup",
      value: "express",
      checked: this.state.checkboxGroup['express'],
      onChange: this.handleCheckbox
    }), "Express"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      name: "checkboxGroup",
      value: "mongodb",
      checked: this.state.checkboxGroup['mongodb'],
      onChange: this.handleCheckbox
    }), "MongoDB"));
  }

}