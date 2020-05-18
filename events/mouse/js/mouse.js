// @format
class Mouse extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1px solid red'
      },
      onMouseOver: (event => {
        console.log('mouse is over with event');
        console.dir(event);
      }).bind(this)
    }, "Open DevTools and move your mouse cursor over here"));
  }

}