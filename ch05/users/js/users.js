// @format
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch(this.props['data-url']).then(response => response.json()).then(users => this.setState({
      users: users
    }));
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("h1", null, "List of Users"), /*#__PURE__*/React.createElement("table", {
      className: "table-striped table-condensed table table-bordered table-hover"
    }, /*#__PURE__*/React.createElement("tbody", null, this.state.users.map(user => /*#__PURE__*/React.createElement("tr", {
      key: user.id
    }, /*#__PURE__*/React.createElement("td", null, user.first_name, " ", user.last_name), /*#__PURE__*/React.createElement("td", null, user.email), /*#__PURE__*/React.createElement("td", null, user.ip_address))))));
  }

}