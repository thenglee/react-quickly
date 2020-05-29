// @format

const React = require('react');

module.exports = function Login() {
  return (
    <div>
      <h3>Login</h3>
      <input type="text" placeholder="email" className="form-control" />
      <input type="text" placeholder="password" className="form-control" />
      <button className="btn btn-primary">Login</button>
    </div>
  );
};
