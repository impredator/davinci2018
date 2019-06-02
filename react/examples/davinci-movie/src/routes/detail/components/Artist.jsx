import React from 'react';
import PropTypes from 'prop-types';
import './Artist.css';

const Artist = ({ data }) => {
  return (
    <div className="artist">
      <ul className="artist__list">
        {
          data.map(item => (
            <li className="" key={item.name}>
              <a href="#" className="artist-info">
                <div className="artist-info__image" style={{ backgroundImage: `url(${item.image})` }} />
                <div>
                  <dl className="artist-info__name">{item.name}</dl>
                  <dd className="artist-info__job">{item.job}</dd>
                </div>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

Artist.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Artist;
