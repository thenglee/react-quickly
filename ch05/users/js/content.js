// @format
class Content extends React.Component {
  constructor(props) {
    super(props);
    console.log('I log, therefore I am');
  }

  componentWillMount() {
    console.log(ReactDOM.findDOMNode(this));
  }

  componentDidMount() {
    console.log(ReactDOM.findDOMNode(this));
  }

  render() {
    console.log('Render');
    return /*#__PURE__*/React.createElement("div", null);
  }

}