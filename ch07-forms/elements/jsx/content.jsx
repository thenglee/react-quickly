// @format

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleRadio = this.handleRadio.bind(this);

    this.state = {
      selectedRadio: 'react',
    };
  }

  handleRadio(event) {
    this.setState({selectedRadio: event.target.value});
  }

  render() {
    return (
      <form>
        <h2>input: radio</h2>
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="angular"
            checked={this.state.selectedRadio === 'angular'}
            onChange={this.handleRadio}
          />
          Angular
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="react"
            checked={this.state.selectedRadio === 'react'}
            onChange={this.handleRadio}
          />
          React
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="polymer"
            checked={this.state.selectedRadio === 'polymer'}
            onChange={this.handleRadio}
          />
          Polymer
        </label>
      </form>
    );
  }
}
