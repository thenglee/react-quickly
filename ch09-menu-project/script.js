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
  constructor(props) {
    super(props);
    this.state = {
      menus: []
    };
  }

  componentDidMount() {
    fetch(this.props['data-url']).then(response => response.json()).then(menus => this.setState({
      menus: menus
    }));
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, this.state.menus.map((v, i) => {
      return /*#__PURE__*/React.createElement("div", {
        key: i
      }, /*#__PURE__*/React.createElement(Link, {
        label: v
      }));
    }));
  }

}

let dataUrl = '/menus.json';
ReactDOM.render( /*#__PURE__*/React.createElement(Menu, {
  "data-url": dataUrl
}), document.getElementById('menu'));
