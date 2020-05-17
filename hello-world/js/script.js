// @format
class Content extends React.Component {
  getUrl() {
    return 'http://webapplog.com';
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Your REST API URL is:", /*#__PURE__*/React.createElement("a", {
      href: this.getUrl()
    }, this.getUrl())));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(Content, null), document.getElementById('content'));
