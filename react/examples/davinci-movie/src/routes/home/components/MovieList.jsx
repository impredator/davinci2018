import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MovieItem from './MovieItem';

const MovieList = ({ movie }) => {
  return (
    <ul className="home__content">
      {
        movie.map(item =>
          <li key={item.name}>
            <Link to="/detail">
              <MovieItem data={item} />
            </Link>
          </li>
        )
      }
    </ul>
  );
};

MovieList.propTypes = {
  movie: PropTypes.array.isRequired
};

export default MovieList;
