// @format

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleRadio = this.handleRadio.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);

    this.state = {
      selectedRadio: 'react',
      checkboxGroup: {
        node: false,
        react: true,
        express: false,
        mongodb: false,
      },
    };
  }

  handleRadio(event) {
    this.setState({selectedRadio: event.target.value});
  }

  handleCheckbox(event) {
    let obj = this.state.checkboxGroup;
    obj[event.target.value] = event.target.checked; // true or false
    this.setState({checkboxGroup: obj});
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
        <hr />
        <h2>input: checkbox</h2>
        <label>
          <input
            type="checkbox"
            name="checkboxGroup"
            value="node"
            checked={this.state.checkboxGroup['node']}
            onChange={this.handleCheckbox}
          />
          Node
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkboxGroup"
            value="react"
            checked={this.state.checkboxGroup['react']}
            onChange={this.handleCheckbox}
          />
          React
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkboxGroup"
            value="express"
            checked={this.state.checkboxGroup['express']}
            onChange={this.handleCheckbox}
          />
          Express
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkboxGroup"
            value="mongodb"
            checked={this.state.checkboxGroup['mongodb']}
            onChange={this.handleCheckbox}
          />
          MongoDB
        </label>
      </form>
    );
  }
}
