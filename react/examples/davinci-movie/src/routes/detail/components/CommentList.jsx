import React from 'react';
import PropTypes from 'prop-types';
import Star from '../../../components/Star';
import CollapsibleText from '../../../components/CollapsibleText';
import './CommentList.css';

const CommentList = ({ data, onClickZan }) => {
  return (
    <ul className="comment-list">
      {
        data.map(comment => (
          <li key={comment.id}>
            <div className="comment-item">
              <div className="comment-user">
                <div className="comment-user__avatar" style={{ backgroundImage: 'url(/source/default-avatar.jpg)' }} />
                <div className="comment-user__detail">
                  <div className="comment-user__name">{comment.name}</div>
                  <div className="comment-user__score"> <Star value={comment.score} /> <span className="comment-user__value">{comment.score}</span></div>
                </div>
              </div>
              <CollapsibleText>{comment.content}</CollapsibleText>
              <div className="comment-item__detail">
                <div className="comment-item__time">{comment.time}</div>
                <div className={`comment-item__zan ${comment.isZan && 'comment-item__zan--active'}`}>
                  <i onClick={() => onClickZan(comment.id)} /> {comment.zan}
                </div>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  );
};

CommentList.propTypes = {
  data: PropTypes.array.isRequired,
  onClickZan: PropTypes.func.isRequired,
};

export default CommentList;
