import React, {Component} from 'react';
import TabMenu from '../../components/TabMenu';
import TopBar from './components/TopBar';
import MovieList from './components/MovieList';
import CityLayer from './components/CityLayer';
import './Index.css';

// 首页
class Home extends Component {
  state = {
    city: '',
    poster: [],
    movie: [],
    cityLayerVisible: false
  }

  showCityLayer = () => {
    this.setState({
      cityLayerVisible: true
    });
  }

  hideCityLayer = () => {
    this.setState({
      cityLayerVisible: false
    });
  }

  onChangeCity = (city) => {
    this.setState({
      city,
    });
    this.hideCityLayer();
  }

  componentWillMount() {
    this.getData();
  }
  getData = async () => {
    // const data = await request('/index');
    const data = {
      "city": "西安",
      "movie": [{
        "poster": "/source/movie/asset.jpeg",
        "name": "绿皮书",
        "description": "片改编自真人真事，讲述了意裔美国人保镖托尼，他被聘用为世界上优秀的爵士钢琴家唐开车。钢琴家将从纽约开始举办巡回演奏，俩人之间一段跨越种族、阶级的友谊的故事",
        "score": 9.3,
        "director": "彼得·法拉利",
        "actor": "维果·莫特森 马赫沙拉·阿里",
        "tags": ["今日最佳", "口碑最好"],
        "price": 30
      }, {
        "poster": "/source/movie/asset.jpeg",
        "name": "绿皮书",
        "description": "片改编自真人真事，讲述了意裔美国人保镖托尼，他被聘用为世界上优秀的爵士钢琴家唐开车。钢琴家将从纽约开始举办巡回演奏，俩人之间一段跨越种族、阶级的友谊的故事",
        "score": 9.3,
        "director": "彼得·法拉利",
        "actor": "维果·莫特森 马赫沙拉·阿里",
        "tags": ["今日最佳", "口碑最好"],
        "price": 30
      }, {
        "poster": "/source/movie/asset.jpeg",
        "name": "绿皮书",
        "description": "片改编自真人真事，讲述了意裔美国人保镖托尼，他被聘用为世界上优秀的爵士钢琴家唐开车。钢琴家将从纽约开始举办巡回演奏，俩人之间一段跨越种族、阶级的友谊的故事",
        "score": 9.3,
        "director": "彼得·法拉利",
        "actor": "维果·莫特森 马赫沙拉·阿里",
        "tags": ["今日最佳", "口碑最好"],
        "price": 30
      }, {
        "poster": "/source/movie/asset.jpeg",
        "name": "绿皮书",
        "description": "片改编自真人真事，讲述了意裔美国人保镖托尼，他被聘用为世界上优秀的爵士钢琴家唐开车。钢琴家将从纽约开始举办巡回演奏，俩人之间一段跨越种族、阶级的友谊的故事",
        "score": 9.3,
        "director": "彼得·法拉利",
        "actor": "维果·莫特森 马赫沙拉·阿里",
        "tags": ["今日最佳", "口碑最好"],
        "price": 30
      }, {
        "poster": "/source/movie/asset.jpeg",
        "name": "绿皮书",
        "description": "片改编自真人真事，讲述了意裔美国人保镖托尼，他被聘用为世界上优秀的爵士钢琴家唐开车。钢琴家将从纽约开始举办巡回演奏，俩人之间一段跨越种族、阶级的友谊的故事",
        "score": 9.3,
        "director": "彼得·法拉利",
        "actor": "维果·莫特森 马赫沙拉·阿里",
        "tags": ["今日最佳", "口碑最好"],
        "price": 30
      }]
    };
    const { city, movie } = data;
    this.setState({
      city,
      movie
    });
  }

  render() {
    const { city, movie, cityLayerVisible } = this.state;
    return (
      <div className="home">
        <TopBar city={city} showCityLayer={this.showCityLayer} />
        <div className="home__slide"  style={{ backgroundImage: 'url(/source/slide/slide.png)'}} />
        <MovieList movie={movie} />
        <TabMenu current="movie" />
        { cityLayerVisible && <CityLayer onClose={this.hideCityLayer} onSelect={this.onChangeCity} /> }
      </div>
    );
  }
}

export default Home;
