import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import request from '../../../helpers/request';
import ScoreDistribute from '../components/ScoreDistribute';
import TagList from '../components/TagList';
import CommentList from '../components/CommentList';


// 详情页 -> 热门评论
class Comment extends Component {
  state = {
    tags: [],
    comments: [],
    current: '' // 当前选中的标签
  }
  // 获取数据
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    // const { tags, list } = await request('/comment');
    const { tags, list } = {
      "tags": [{
        "text": "热门",
        "count": 398
      }, {
        "text": "最新",
        "count": 21
      }, {
        "text": "好评",
        "count": 98
      }, {
        "text": "差评",
        "count": 67
      }, {
        "text": "购票",
        "count": 132
      }, {
        "text": "同城",
        "count": 12
      }],
      "list": [{
        "score": 5.7,
        "name": "程秀兰",
        "content": "使老己北须两才万员备油事养价米。思置府周规其因维连度每角。",
        "time": "04-04 02:21",
        "zan": 1019,
        "id": "420000199803263381",
        "isZan": false,
        "tag": "热门"
      }, {
        "score": 8.5,
        "name": "锺刚",
        "content": "的维状究较社张小可至别多之于。为约无决力等置料精又包历五单。温据物便外周土酸离能联传最更专话民。市何消每安红自政她务群斗存产权农过。于育节好状般内去些素表条统片照办。热着石由事解第学条第素水。形格复整口论况经音具法除先导厂。越见高是价照难查议化料斯自查十标那。",
        "time": "09-15 10:57",
        "zan": 8205,
        "id": "630000197307010473",
        "isZan": false,
        "tag": "最新"
      }, {
        "score": 6.8,
        "name": "唐强",
        "content": "气式情消家己识眼人办身主。始际长加区地收族断器义家。东京素口容西然江两民基单当之很林后。并红义者近国山把适立养劳规。过往算比点省之极况道就率低整。可直料产联我与或记率研度料。了根律他候具式层等上里种改市。越五记什且后角区又西商热越场。该处部准话出造越处则象低究京温构。两取争等认西据表具数家上流只形教。",
        "time": "12-14 05:50",
        "zan": 6643,
        "id": "120000199810175653",
        "isZan": true,
        "tag": "好评"
      }, {
        "score": 5.9,
        "name": "萧艳",
        "content": "外开铁满际厂厂立内历复线始位设。习风场清着四史不取本究指界史际。思府什立些派没的重料于理空构。完矿和属取号式支且素者政名单维接教高。则院满万南世数济条大张已部角状约圆。在面感员里南酸四论火构单空战个然争。两重用构如再分长根长导又府因些。",
        "time": "06-17 08:10",
        "zan": 1788,
        "id": "62000019720425852X",
        "isZan": false,
        "tag": "差评"
      }, {
        "score": 7.7,
        "name": "李艳",
        "content": "二组年总确进究矿选动备特县书办任。本更住道路支需则象院示律温院。花心命社科元化北性安状十复一然阶且。支商力七器便少心增非劳何。国群市性列情照精才厂期快再明还解共半。变象教查该量技等二周根确铁计除基在。须量正选进书代个如制除平次商。实单把路造风热比记法门直器感向。",
        "time": "03-17 07:51",
        "zan": 3523,
        "id": "610000199511041854",
        "isZan": true,
        "tag": "购票"
      }, {
        "score": 2.3,
        "name": "范娟",
        "content": "整近各以子会收然条文从难十作。过管思大后京大道传方三温部山整。",
        "time": "03-15 01:59",
        "zan": 7348,
        "id": "120000198605271449",
        "isZan": true,
        "tag": "同城"
      }, {
        "score": 5.4,
        "name": "郑强",
        "content": "么资信号便对九东直研求车土精。备空总对日方心色命是空放出矿治。",
        "time": "10-20 11:37",
        "zan": 2818,
        "id": "35000019720914848X",
        "isZan": true,
        "tag": "热门"
      }, {
        "score": 7.6,
        "name": "杜秀兰",
        "content": "车从层天见管合目严团叫两据风土影四。看出分安或气面习过在满国率况。除易向就己存音选维老离动线调效。北值复易业化量又铁又集立教改清选有。难眼走国快明火这没节器素干现统。但火没内题设着出那见住市多志。",
        "time": "05-27 07:16",
        "zan": 668,
        "id": "640000201710308334",
        "isZan": true,
        "tag": "最新"
      }, {
        "score": 7.8,
        "name": "康杰",
        "content": "集高全每面志包新部龙形况备学要。力太几满已候领南所级眼局界。带西场决指县军强务素五队名期回。保知常对前上情海小太知点西内平照以。新工期却元当点果元命任育教管。土直可品标儿战学其大眼出风。总适律片各年自指正矿规或约。听空们思光看所酸采农角价。府认重行时说六农不持节深调容。",
        "time": "02-02 10:12",
        "zan": 9123,
        "id": "510000197603168868",
        "isZan": false,
        "tag": "好评"
      }, {
        "score": 10.5,
        "name": "罗秀英",
        "content": "带式难且时速标低率又一中同前个。老者活农志因物都面开局根质究是些军。非半队查办技应己问日你价气办道化果技。阶阶还人口产空只局第或划而。员而二细线多过带对般去三志展。便眼公图干交前者件几确易面。快料极识治按变都走地里多。",
        "time": "06-07 05:46",
        "zan": 1401,
        "id": "230000199105316970",
        "isZan": true,
        "tag": "差评"
      }, {
        "score": 3.4,
        "name": "郝磊",
        "content": "格间离气声反共他五工山史满。级明情件之法风元至石天如都总除开。音原完林较车拉备次石影二心科都。速那采属习情转安管美劳任规严。",
        "time": "09-13 01:04",
        "zan": 3788,
        "id": "820000200110177325",
        "isZan": true,
        "tag": "购票"
      }, {
        "score": 9.9,
        "name": "崔静",
        "content": "手开切就果成将马国对始务期阶联层。际三平亲给斯火济把立市规。",
        "time": "11-15 11:33",
        "zan": 4230,
        "id": "820000200007055522",
        "isZan": true,
        "tag": "同城"
      }, {
        "score": 4.5,
        "name": "孔艳",
        "content": "表斗究广消问美上压动火除县应基观。华列也克自约元气状业研消元你。进白第这铁候易思放千国作立。包广位在地务争时许确问角还。龙不当术能验增教圆级有把大号。开又节己县府问今少许状自取。近那土当完都领达具起始平式且改报。",
        "time": "06-13 08:29",
        "zan": 2489,
        "id": "150000200712243318",
        "isZan": false,
        "tag": "热门"
      }, {
        "score": 6.7,
        "name": "黄超",
        "content": "据争斯大始价斗每速须示知委品使。拉传日压头京新传收响机这程报党上许。响白小极眼民过调思分商千和常往角的具。内制属九般元条眼布志问已历文。提度场始或平政则离素专业。之织音可林二且社养况反方决交市工。改共代决革个水系由电整即向平或。个场构报更形积法经连达路划率国。",
        "time": "08-30 01:50",
        "zan": 4905,
        "id": "140000199511108331",
        "isZan": true,
        "tag": "最新"
      }, {
        "score": 4.8,
        "name": "龙敏",
        "content": "解动王四光场法好保历此五题型百话速。后解叫机一五处科龙水决何表联性建作。内较求被一商省织节世二无要业有大理西。研级精场门外关后很眼研难较南才进。面速他小导角委解市界红传往深住。方铁根热层族何率北采全员况西。反作低你力身明存史要全由立把将心参。我实满自器温整商管位体美被。活消今它起气消第光半须水铁京指列。",
        "time": "03-29 00:14",
        "zan": 8690,
        "id": "630000201506192256",
        "isZan": false,
        "tag": "好评"
      }, {
        "score": 4.7,
        "name": "曾伟",
        "content": "精期史根声东式支身员十包重部化。度发例日系月们第都亲算老它委干安。",
        "time": "02-11 01:30",
        "zan": 6773,
        "id": "320000197404056761",
        "isZan": true,
        "tag": "差评"
      }, {
        "score": 6.2,
        "name": "董伟",
        "content": "只给社面也想两九消却且油究。全道受劳地收省术战代性期也省级团学。提立组公指划候越非管当什取当形等。家文给地一布生平接林般型。流我议看要单七无光般只水有于。省观单确部报众个几气深花运话。圆书是需理每拉新须油热铁府品火劳产持。",
        "time": "03-25 07:12",
        "zan": 2261,
        "id": "340000200704133157",
        "isZan": false,
        "tag": "购票"
      }, {
        "score": 8.6,
        "name": "马军",
        "content": "它构飞历叫去利须满温山联龙过等新织。本极候究号发往火矿了文之儿。月阶与文教除清九身式指何点。和百看手真如划决使去世术度太说两。劳党次车使使公才求原北我去二活满。道断片本据什识它很加龙采识并流量什。期到工农制又面局活样保群。",
        "time": "01-22 09:56",
        "zan": 1418,
        "id": "220000199502053818",
        "isZan": true,
        "tag": "同城"
      }, {
        "score": 5.6,
        "name": "康桂英",
        "content": "法组斯根群度调头火新山万况。国级年处制准社了制千始按走类口验二而。事组回教重路率利必月家或问十。活自美会即会这法照社族育光准务。满二影几好音所增十节白回速和深厂市。其文出须及加毛必等复县直经。金必场表建老场圆清说以状。段二办约目她原近五图维较根科层表。军别率较事入张率离观你主带构。认前已志与证原使包原全叫事。",
        "time": "07-26 08:15",
        "zan": 3506,
        "id": "500000200106018757",
        "isZan": false,
        "tag": "热门"
      }, {
        "score": 7.4,
        "name": "孙军",
        "content": "圆造正术但海感信交装确近张。名水酸以化维议科较去能统。老革克线查变但究织识南四积国易这。",
        "time": "08-25 10:24",
        "zan": 964,
        "id": "120000201705303975",
        "isZan": false,
        "tag": "最新"
      }]
    };
    this.setState({
      tags,
      comments: list,
      current: tags[0] ? tags[0].text : ''
    });
  }

  changeTag = value => {
    this.setState({
      current: value
    });
  }
  // 修改"赞数"
  toggleZan = id => {
    this.setState((prevState) => ({
      comments: prevState.comments.map(comment => {
        if (comment.id === id) {
          return {
            ...comment,
            isZan: !comment.isZan,
            zan: comment.isZan ? --comment.zan : ++comment.zan
          };
        }
        return {...comment};
      })
    }));
  }

  render() {
    const { tags, comments, current } = this.state;
    // 过滤：comments中每条评论都有tag属性
    const filterComments = comments.filter(comment => comment.tag === current);
    return (
      <div className="mComment">
        <ScoreDistribute />
        <div style={{ marginTop: 16 }}>
          <TagList data={tags} current={current} onClick={this.changeTag} />
        </div>
        <div style={{ marginTop: 16 }}>
          <CommentList data={filterComments} onClickZan={this.toggleZan} />
        </div>
      </div>
    );
  }
}

export default Comment;
