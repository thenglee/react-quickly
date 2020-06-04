// @format

const React = require('react');
const {Router, Route, IndexRoute, browserHistory} = require('react-router');
const App = require('components/app/app.js');
const Movies = require('components/app/movies.js');
const Movie = require('components/app/movie.js');

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Movies} />
      <Route path="movies" component={Movies}>
        <Route path=":id" component={Movie} />
      </Route>
    </Route>
  </Router>
);
