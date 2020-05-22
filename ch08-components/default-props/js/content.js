// @format
class Content extends React.Component {
  render() {
    let number = 1;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      buttonLabel: "Start"
    }), /*#__PURE__*/React.createElement(Button, null), /*#__PURE__*/React.createElement(Button, {
      title: number
    }), /*#__PURE__*/React.createElement(Button, null), /*#__PURE__*/React.createElement(Button, {
      email: "not-a-valid-email"
    }), /*#__PURE__*/React.createElement(Button, {
      email: "hi@azat.co"
    }));
  }

}