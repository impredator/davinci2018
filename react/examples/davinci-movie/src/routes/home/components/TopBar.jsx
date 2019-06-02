import React from 'react';
import PropTypes from 'prop-types';
import './TopBar.css';

const TopBar = ({ city, showCityLayer }) => {
  return (
    <div className="top-bar">
      <div className="top-bar__city" onClick={showCityLayer}>{city}</div>
      <div className="top-bar__search" />
      <div className="top-bar__scan" />
    </div>
  );
};

TopBar.propTypes = {
  city: PropTypes.string.isRequired,
  showCityLayer: PropTypes.func.isRequired
};

export default TopBar;
