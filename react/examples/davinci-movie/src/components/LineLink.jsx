import React from 'react';
import PropTypes from 'prop-types';
import './LinkLink.css';

// 公共 <LineLink title="收藏的电影" extra="20" href="#" />
const LineLink = ({ href, title, extra }) => {
  return (
    <a href="" className="lineLink">
      <div className="lineLink__title">{title}</div>
      <div className="lineLink__extra">{extra}</div>
      <i className="lineLink__arrow" />
    </a>
  );
};

LineLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  extra: PropTypes.string
};

export default LineLink;
