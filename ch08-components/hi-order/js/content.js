// @format
const EnhancedButton = LoadWebsite(Button);
const EnhancedLink = LoadWebsite(Link);
const EnhancedLogo = LoadWebsite(Logo);

class Content extends React.Component {
  render() {
    let number = 1;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EnhancedButton, null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(EnhancedLink, null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(EnhancedLogo, null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("iframe", {
      id: "frame",
      src: "",
      width: "600",
      height: "500"
    }));
  }

}