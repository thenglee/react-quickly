// @format
// let dataUrl = '/ch05/users/real-user-data.json';
let dataUrl = '/real-user-data.json';
ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Users, {
  "data-url": dataUrl
})), document.getElementById('content'));