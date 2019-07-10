import React from 'react';
import styles from './index.css';
import tp from '../assets/xiazai.png';
import tp2 from '../assets/xiazai1.png';

class Abc extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      list:[
        {
          "sponsor":"发起者一号",
          "name":"第一个",
          "quantity":135,
          "state":"已截单",
          "url":"http://image.winewishing.com/FicHc7CY68pabLHIT4TPG0_jkvyt?imageView/0/w/800",
          "color":1,
          "time":"2019-07-29 00:00:00"
        },
        {
          "sponsor":"发起者二号",
          "name":"第二个",
          "quantity":235,
          "state":"未截单",
          "url":"http://image.winewishing.com/Fk-i0EBzVK52o1m_eTxkvKPOqaAl?imageView/0/w/800",
          "color":2,
          "time":"2019-07-26 05:00:00"
        },
        {
          "sponsor":"发起者三号",
          "name":"第三个",
          "quantity":335,
          "state":"已截单",
          "url":"http://image.winewishing.com/FnYP3GJYTsV84zL5MJGDBR9Iat2u?imageView/0/w/800",
          "color":1,
          "time":"2019-07-27 01:00:00"
        },        {
          "sponsor":"发起者四号",
          "name":"第四个",
          "quantity":435,
          "state":"未截单",
          "url":"http://image.winewishing.com/Fvbmq1EMGrnqRSdWkV1G8QTXNX3D?imageView/0/w/800",
          "color":3,
          "time":"2019-07-28 02:00:00"
        },        {
          "sponsor":"发起者五号",
          "name":"第五个",
          "quantity":535,
          "state":"已截单",
          "url":"http://image.winewishing.com/FgZ9upgJyCdLLfI0eCNYW72yBwOT?imageView/0/w/800",
          "color":2,
          "time":"2019-07-30 03:00:00"
        },
      ]
    }
  }

  render() {
    const {list} = this.state;
    return (
      <div>
        {list.map(item=>{
          return(
            <div className={styles.li}>
              <div className={styles.top}>
                <div className={styles.cp}><img src={item.url}/></div>
                <Color color={item.color} ></Color>
                <div className={styles.dun}>
                  <img src={tp} title={"该订单为担保订单，贷款将由微醺平台担保，当您确定收货之后，贷款再转给发起者"}/>
                </div>
              </div>
              <div className={styles.bott}>
                <h4>{item.sponsor}～<img src={tp2}/></h4>
                <p className={styles.title}>
                  {item.name}
                </p>
                <div className={styles.order1}>
                  <span className={styles.left}>数量：</span>
                  <span className={styles.right}>
                  <b>{item.quantity}</b>/瓶
                </span>
                  <span className={styles.right}>2/12</span>
                </div>
                <div className={styles.order}>
                  <span className={styles.left}>{item.state}</span>
                  <Time time={item.time} /><span className={styles.right1}>截止时间:</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

}

class Time extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      time:props,
      date: Timer(props)
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick() {
    this.setState({
      date: Timer(this.state.time)
    });
  }

  render() {
    return (
      <div>
        <span className={styles.right1}>{this.state.date}.</span>
      </div>
    );
  }
}

function Timer(props) {
  let ts = (new Date(props.time)) - (new Date());//计算剩余的毫秒数
  let dd = parseInt((ts / 1000 / 60 / 60 / 24), 10);//计算剩余的天数
  let hh = parseInt(ts / 1000 / 60 / 60 % 24, 10);//计算剩余的小时数
  let mm = parseInt(ts / 1000 / 60 % 60, 10);//计算剩余的分钟数
  let ss = parseInt(ts / 1000 % 60, 10);//计算剩余的秒数

  return(<div>{dd}天{hh}:{mm}:{ss}秒</div>)
}

function Color(props) {
  const color=props.color;
  if (color==1){
    return(
      <span className={styles.white}>white</span>
    )
  }
  else{
    if (color==2){
      return (
        <span className={styles.red}>red</span>
      )
    }
    else {
      if (color==3){
        return (
          <span className={styles.other}>other</span>
        )
      }
    }
  }
}

export default class extends React.Component {


  render() {

    return (
      <div className={styles.normal}>
        <div className={styles.welcome}/>

        <div className={styles.content}>

          <Abc/>

        </div>

      </div>
    );
  }
}

