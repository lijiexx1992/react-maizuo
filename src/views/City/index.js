import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './index.scss';

//  1.组件中要使用仓库的数据就得先做引入
//  2.在构造函数中调用store.getState() 方法，这个方法能返回仓库的数据
//  3.将拿到的数据设置到自生的定义的数据上
import store from '../../store'
// 定义一个常量来控制派生的type类型这样可以防止错误，因为type类型为字符串是不会报错
import {SETCITY} from '../../store/actionsType'

class City extends Component {

  constructor(props) {
    super(props);

    // 这个地方只是从仓库中拿去数据，而仓库发生变化，这个代码不会重复执行
    this.state = {
      curCity : store.getState().curCity
    }

    // 当仓库的数据发生变化需要对数据进行一个监听
    store.subscribe(() => {
      console.log('仓库发生了变化变成了：',store.getState().curCity);
      this.setState({
        curCity:store.getState().curCity
      })
    })
  }
  changeCiyt (cityName) {
    // 需要修改仓库的数据，调用store.dispatch('action',payload) 派发一个动作
    // 第一个参数传入动作的名字，第二参数是数据
    store.dispatch({
      type: SETCITY,
      data:cityName
    })
    console.log(store.getState().curCity);
  }

  render() {
    return (
      <div>
          <p>
           当天城市
            <Link to='/city'>
                {this.state.curCity}
            </Link>
          </p>

          <button onClick= {this.changeCiyt.bind(this,'北京')}>修改城市</button>
      </div>
    );
  }
}

export default City;
