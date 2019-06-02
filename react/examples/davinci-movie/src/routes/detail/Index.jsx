import React, {Component} from 'react';
// import request from '../../helpers/request';
import BaseInfo from './components/BaseInfo';
import ScoreSummary from './components/ScoreSummary';
import CollapsibleText from '../../components/CollapsibleText';
import Artist from './components/Artist';
import Comment from './container/Comment';
import LineLink from '../../components/LineLink';
import { Link } from 'react-router-dom';
import './Index.css';

class Detail extends Component {
  state = {
    artist: []
  }

  componentDidMount() {
    this.getArtist();
  }

  getArtist = async () => {
    // const data = await request('/artist');
    const data = [{
    	"name": "彼得·法雷里",
    	"job": "导演",
    	"image": "/source/artist/0.webp"
    }, {
    	"name": "维果·莫腾森",
    	"job": "饰 托尼·利普",
    	"image": "/source/artist/1.jpg"
    }, {
    	"name": "马赫沙拉·阿里",
    	"job": "饰 唐·雪利",
    	"image": "/source/artist/2.jpg"
    }, {
    	"name": "琳达·卡德里尼",
    	"job": "饰 德洛瑞丝",
    	"image": "/source/artist/3.jpg"
    }, {
    	"name": "塞巴斯蒂安·马尼斯科",
    	"job": "饰 约翰尼",
    	"image": "/source/artist/4.jpg"
    }, {
    	"name": "迪米特·D·马里诺夫",
    	"job": "饰 奥列格",
    	"image": "/source/artist/5.jpg"
    }, {
    	"name": "迈克·哈顿",
    	"job": "饰 乔治",
    	"image": "/source/artist/6.jpg"
    }];

    if (data && data.length) {
      this.setState({
        artist: data
      });
    }
  }

  render() {
    const { artist } = this.state;
    return (
      <div className="detail">
        <div className="detail__top">
          <div className="operator">
            <div className="operator__icon operator__icon--back" onClick={() => { window.history.back(); }} />
            <div className="operator__icon operator__icon--share" />
          </div>
          <BaseInfo />
        </div>
        <div className="detail__content">
          <div className="detail__module">
            <ScoreSummary />
          </div>
          <div className="detail__module">
            <CollapsibleText height={84}>
              <div className="detail__overview">
                托尼（维果·莫腾森 Viggo Mortensen 饰）是一个吊儿郎当游手好闲的混混，在一家夜总会做侍者。这间夜总会因故要停业几个月，可托尼所要支付的房租和生活费不会因此取消，所以他的当务之急是去寻找另一份工作来填补这几个月的空缺。在这个节骨眼上，一位名叫唐雪莉（马赫沙拉·阿里 Mahershala Ali 饰）的黑人钢琴家提出雇佣托尼。
　　唐雪莉即将开始为期八个星期的南下巡回演出，可是，那个时候南方对黑人的歧视非常的严重，于是托尼便成为了唐雪莉的司机兼保镖。一路上，两人迥异的性格使得他们之间产生了很多的矛盾，与此同时，唐雪莉在南方所遭受的种种不公平的对待也让托尼对种族歧视感到深恶痛绝。
              </div>
            </CollapsibleText>
          </div>
          <div className="detail__module">
            <h3 className="detail__moduleTitle">演职人员</h3>
            <Artist data={artist} />
          </div>
          <div className="detail__module">
            <h3 className="detail__moduleTitle">热门评论</h3>
            <Comment />
          </div>
          <div className="detail__module">
            <h3 className="detail__moduleTitle">影片资料</h3>
            <div>
              <LineLink href="xx" title="幕后花絮" />
              <LineLink href="xx" title="台词精选" />
              <LineLink href="xx" title="出品发行" />
            </div>
          </div>
        </div>
        <Link to="/seat" className="detail__buyBtn">选座购票</Link>
      </div>
    );
  }
}

// Detail.propTypes = {};
export default Detail;
