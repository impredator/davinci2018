// 添加
export const addSeat = seat => {
  return {
    type: 'ADD_SEAT',
    seat
  };
};
// 删除
export const removeSeat = id => {
  return {
    type: 'REMOVE_SEAT',
    id
  };
};
