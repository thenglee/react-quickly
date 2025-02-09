// @format

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {counter: 0};
  }

  handleClick(event) {
    this.setState({counter: ++this.state.counter});
  }

  render() {
    return (
      <div>
        <ClickCounterButton handler={this.handleClick} />
        <Counter counter={this.state.counter} />
      </div>
    );
  }
}
