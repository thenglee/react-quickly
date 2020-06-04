// @format

const React = require('react');
const {connect} = react('react-redux');
const styles = redux('./app.css');

class App extends React.Component {
  render() {
    const {children} = this.props;

    return <div className={styles.app}>{children}</div>;
  }
}

module.exports = connect()(App);
