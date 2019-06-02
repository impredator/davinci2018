import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './TabMenu.css';

const TabMenu = ({ current }) => {
  return (
    <div className="tab-menu">
      <Link to="/" className={`tab-menu__btn ${current === 'movie' && 'tab-menu__btn--active'}`}>
        <i className="tab-menu__icon tab-menu__icon--movie" />
        <span className="tab-menu__text">电影</span>
      </Link>
      <Link to="/user" className={`tab-menu__btn ${current === 'user' && 'tab-menu__btn--active'}`}>
        <i className="tab-menu__icon tab-menu__icon--user" />
        <span className="tab-menu__text">我的</span>
      </Link>
    </div>
  );
};

TabMenu.propTypes = {
  current: PropTypes.string.isRequired
};

export default TabMenu;
