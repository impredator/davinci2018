import SeatSelector from './SeatSelector';
import { connect } from 'react-redux';
import { addSeat, removeSeat } from "../actions";

const mapStateToProps = state => {
  return {
    selectSeat: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAdd: seat => {
      dispatch(addSeat(seat));
    },
    onRemove: id => {
      dispatch(removeSeat(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatSelector);
