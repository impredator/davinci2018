import React from 'react';
import Star from '../../../components/Star';
import './ScoreSummary.css';

const ScoreSummary = () => {
  return (
    <div className="score-summary">
      <div className="score-summary__top">
        <div className="summary-item">
          <div className="summary-item__value">8.9 <Star value={9} /></div>
          <div className="summary-item__title">观众评分642661人</div>
        </div>
        <div className="summary-item">
          <div className="summary-item__value">80%</div>
          <div className="summary-item__title">V淘推荐度</div>
        </div>
        <div className="summary-item">
          <div className="summary-item__value">87723</div>
          <div className="summary-item__title">想看人数</div>
        </div>
      </div>
      <div className="summary-btn">
        <button className="summary-btn__item summary-btn__item--want"><i /> 想看</button>
        <button className="summary-btn__item summary-btn__item--seen"><i /> 看过</button>
      </div>``
    </div>
  );
};

export default ScoreSummary;
