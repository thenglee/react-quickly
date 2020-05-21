// @format
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleRadio = this.handleRadio.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.state = {
      selectedRadio: 'react',
      checkboxGroup: {
        node: false,
        react: true,
        express: false,
        mongodb: false
      },
      selectedValue: 'node',
      description: `With the right pattern, applications will be more scalable and easier to maintain.
If you aspire one day to become a Node.js architect (or maybe you're already one and want to extend your knowledge), this presentation is for you.`
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

  handleChange(event) {
    console.log('onChange event: ', event.target.value, event.target.checked);
  }

  handleInput(event) {
    console.log('onInput event: ', event.target.value, event.target.checked);
  }

  handleSelectChange(event) {
    this.setState({
      selectedValue: event.target.value
    });
    console.log(event.target.value, event.target.selected);
  }

  render() {
    return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("h2", null, "input: text"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "new-book-title",
      defaultValue: "Node: The Best Parts"
    }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h2", null, "input: password"), /*#__PURE__*/React.createElement("input", {
      type: "password",
      defaultValue: "123456",
      onChange: this.handleChange,
      onInput: this.handleInput
    }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h2", null, "input: radio"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
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
    }), "MongoDB"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("textarea", {
      name: "description",
      defaultValue: this.state.description,
      onChange: this.handleChange
    }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("textarea", {
      name: "description",
      defaultValue: 'Pro Express.js is for the reader\nwho wants to quickly get up-to-speed with Express.js, \nthe flexible Node.js framework',
      onChange: this.handleChange
    }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("select", {
      value: this.state.selectedValue,
      onChange: this.handleSelectChange
    }, /*#__PURE__*/React.createElement("option", {
      value: "ruby"
    }, "Ruby"), /*#__PURE__*/React.createElement("option", {
      value: "node"
    }, "Node"), /*#__PURE__*/React.createElement("option", {
      value: "python"
    }, "Python")));
  }

}