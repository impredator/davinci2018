import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeSeat } from '../actions';
import './SeatSelected.css';

const SeatSelected = ({ data, onRemove }) => {
  if (!data.length) {
    return null;
  }
  return (
    <div className="seat-selected">
      <ul className="seat-selected__list">
        {
          data.map(seat => (
            <li key={seat.id} className="seat-selected__item movie-ticket">
              <div className="movie-ticket__detail">
                <div className="movie-ticket__pos">{seat.rowIndex}排{seat.colIndex}座</div>
                <div className="movie-ticket__price"> <i className="movie-ticket__tag">卡</i>33元</div>
              </div>
              <div className="movie-ticket__close" onClick={() => onRemove(seat.id)}  />
            </li>
          ))
        }
      </ul>
      <div className="seat-selected__buy">{33 * data.length}元 确认选座</div>
    </div>
  );
};

SeatSelected.propTypes = {
  data: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    data: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => {
      dispatch(removeSeat(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatSelected);
