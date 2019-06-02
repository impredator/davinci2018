import React from 'react';
import PropTypes from 'prop-types';
import './MovieItem.css';

const MovieItem = ({ data }) => {
  return (
    <div className="movie-item">
      <div className="movie-item__poster">
        <img src={data.poster} alt=""/>
      </div>
      <div className="movie-item__detail">
        <div className="movie-item__name">{data.name}</div>
        <div className="movie-item__score">观众评分 <span>{data.score}</span></div>
        <div className="movie-item__director">导演：{data.director}</div>
        { data.actor && <div className="movie-item__actor">主演：{data.actor}</div> }
        <div className="movie-item__tag">
          {
            data.tags.map((tag, i) => {
                return <span key={tag}
                    className={i%2 ? 'tag tag--blue' : 'tag tag--red'}>{tag}</span>;
            })
          }
        </div>
      </div>
      <div className="movie-item__btn">
        <button className="btn">购票</button>
        <span className="movie-item__price">¥ {data.price}</span>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default MovieItem;
