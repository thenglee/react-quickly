// @format

const {handleActions} = require('redux-actions');

const FETCH_MOVIES = 'movies/FETCH_MOVIES';
const FETCH_MOVIE = 'movies/FETCH_MOVIE';

const initialState = {
  movies: [],
  movie: {},
};

module.exports = {
  reducer: handleActions(
    {
      [FETCH_MOVIES]: (state, action) => ({...state, all: action.movies}),
      [FETCH_MOVIE]: (state, action) => ({
        ...state,
        current: state.all[action.index - 1],
      }),
    },
    initialState,
  ),
};
