// @format
class Link extends React.Component {
  render() {
    const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-');
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
      href: url
    }, this.props.label), /*#__PURE__*/React.createElement("br", null));
  }

}

class Menu extends React.Component {
  render() {
    let menus = ['Home', 'About', 'Services', 'Portfolio', 'Contact us']; // mock data store

    console.log('hello');
    return /*#__PURE__*/React.createElement("div", null, menus.map((v, i) => {
      return /*#__PURE__*/React.createElement("div", {
        key: i
      }, /*#__PURE__*/React.createElement(Link, {
        label: v
      }));
    }));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(Menu, null), document.getElementById('menu'));
