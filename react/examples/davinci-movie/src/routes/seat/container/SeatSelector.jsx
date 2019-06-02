import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { data } from '../mock/seat';

//座位宽高
const SEAT_WIDTH = 50;
const SEAT_HEIGHT = 50;
//Canvas画布宽/高 ->一维数组：colIndex*座位数即可;//不设置默认为300*150
const lastSeat = data[data.length - 1];
const CANVAS_WIDTH = lastSeat.colIndex * SEAT_WIDTH;
const CANVAS_HEIGHT = lastSeat.rowIndex * SEAT_HEIGHT;
// 设备像素比->解决失真的问题
const ratio = window.devicePixelRatio;
const DRAW_SEAT_WIDTH = SEAT_WIDTH * ratio;//图片
const DRAW_SEAT_HEIGHT = SEAT_HEIGHT * ratio;
const DRAW_CANVAS_WIDTH = CANVAS_WIDTH * ratio;//画布
const DRAW_CANVAS_HEIGHT = CANVAS_HEIGHT * ratio;
// 补充：获取canvas大小
// let col = 1;
// let row = 1;
// const CANVAS_WITH = data.forEach(seat => {
//   if (seat.rowIndex > row) {
//     row = seat.rowIndex;
//   }
//   if (seat.colIndex > col) {
//     col = seat.colIndex;
//   }
// })

class SeatSelector extends Component {
  componentDidMount() {
    this.ctx = this.refs.canvas.getContext('2d');
    this.ctx.font = `${10 * ratio}px Arial`;
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';

    // 加载图片资源
    const emptyImage = new Image();
    const selectImage = new Image();
    const soldImage = new Image();
    emptyImage.src = './source/seat-empty.png';
    selectImage.src = './source/seat-selected.png';
    soldImage.src = './source/seat-sold.png';
    let count = 0;
    const loadCallback = () => {
      count++;
      if (count === 3) {
        this.emptyImage = emptyImage;
        this.selectImage = selectImage;
        this.soldImage = soldImage;
        this.drawAllSeat();//初始化绘制座位
      }
    };
    emptyImage.onload = loadCallback;
    selectImage.onload = loadCallback;
    soldImage.onload = loadCallback;
  }
  // 初始化绘制座位
  drawAllSeat = () => {
    const seatData = data;//获取本地json座位信息 -> 一维数组
    for (let i= 0; i < seatData.length; i++) {
      const { isSold, xPos, yPos } = seatData[i];
      const offsetLeft = (xPos - 1) * DRAW_SEAT_WIDTH;//xPos位置
      const offsetTop = (yPos - 1) * DRAW_SEAT_HEIGHT;
      if (isSold) {
        // 绘制已售
        this.ctx.drawImage(this.soldImage, offsetLeft, offsetTop, DRAW_SEAT_WIDTH,DRAW_SEAT_HEIGHT);
      } else {
        // 绘制未售
        this.ctx.drawImage(this.emptyImage, offsetLeft, offsetTop, DRAW_SEAT_WIDTH,DRAW_SEAT_HEIGHT);
      }
    }
  }



  // 每次状态改变都重新绘制
  componentDidUpdate(prevProps, prevState) {
    this.ctx.clearRect(0, 0, DRAW_CANVAS_WIDTH, DRAW_CANVAS_HEIGHT);//清空画布
    this.drawAllSeat(); // 再次绘制初始座位
    this.drawSelectSeat(); // 绘制选择的座位
  }
  // 绘制选择的座位
  drawSelectSeat = () => {
    const { selectSeat } = this.props;
    for (let i = 0; i < selectSeat.length; i++) {
      const { xPos, yPos, rowIndex, colIndex } = selectSeat[i];
      const offsetLeft = (xPos - 1) * DRAW_SEAT_WIDTH;
      const offsetTop = (yPos - 1) * DRAW_SEAT_HEIGHT;
      this.ctx.drawImage(this.selectImage, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);
      this.ctx.fillText(`${rowIndex}排`, offsetLeft + DRAW_SEAT_WIDTH / 2, offsetTop + DRAW_SEAT_HEIGHT / 2.5);
      this.ctx.fillText(`${colIndex}座`, offsetLeft + DRAW_SEAT_WIDTH / 2, offsetTop + DRAW_SEAT_HEIGHT * 2 / 3);
    }
  }
  // 选择座位
  clickSeat = (e) => {
    const offset = this.refs.canvas.getBoundingClientRect();
    const clickX = e.pageX - offset.left;//相对视口的e.pageX/Y - canvas画布相对视口大小
    const clickY = e.pageY - offset.top;
    const xPox = Math.ceil(clickX / SEAT_WIDTH);
    const yPox = Math.ceil(clickY / SEAT_HEIGHT);
    // 查找座位
    const seat = data.find(seat => seat.xPos === xPox && seat.yPos === yPox);
    // 若没有找到或已售，则不响应
    if(!seat || seat.isSold) {
      return;
    }
    const seatIndex = this.props.selectSeat.findIndex(item => item.id === seat.id);
    // 若不等于-1 -> 若选择，则取消选择，反之选择座位
    if (seatIndex > -1) {
      this.props.onRemove(seat.id);
    } else {
      if (this.props.selectSeat.length >= 4) {
        // 若已选四个座位，则不能再选
        alert('不能超过四个座位');
      } else {
        this.props.onAdd(seat);
      }
    }
  }

  render() {
    return (
      <div style={{ width: CANVAS_WIDTH, margin: "0 auto" }}>
        <canvas onClick={this.clickSeat} style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }} ref="canvas" width={DRAW_CANVAS_WIDTH} height={DRAW_CANVAS_HEIGHT} />
      </div>
    );
  }
}

SeatSelector.propTypes = {
  selectSeat: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default SeatSelector;
