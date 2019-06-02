import React from 'react';
import './BaseInfo.css';

const BaseInfo = () => {
  return (
    <div className="base-info">
      <div className="base-info__detail">
        <h3 className="base-info__name">绿皮书</h3>
        <div className="base-info__subTitle">Green Book</div>
        <div className="base-info__other">剧情 / 喜剧 / 传记</div>
        <div className="base-info__other">美国 | 130分钟</div>
        <div className="base-info__other">2019-03-01(中国大陆)</div>
      </div>
      {/* 点击展示轮播浮层:子->父组件传值 */}
      <div className="base-info__poster" style={{ backgroundImage: 'url(/source/movie/asset.jpeg)' }} />
    </div>
  );
};

export default BaseInfo;
