import React, { Component } from 'react';

import { Switch, Route ,Redirect}  from  'react-router-dom';
import './index.scss';

// 可复用引入组件
import NavBar from '../../components/NavBar';
// 二级组件
import HomeFilms from './HomeFilms';
import Homecineams from './Homecineams';
import HomeShoppingCart from './HomeShoppingCart';
import Homecenter from './Homecenter';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bars:[
        {key:'films', href:'/films', icom:'icon-dianyingyuan', name:'电影'},
        {key:'cineams', href:'/cineams', icom:'icon-yingyuana', name:'影院'},
        {key:'ShoppingCart', href:'/ShoppingCart', icom:'icon-gouwuche', name:'购物车'},
        {key:'center', href:'/center', icom:'icon-wode', name:'个人中心'}
      ]
    }
  }


  render() {
    return (
      <div className="home">

        {/* 这里是可变的 */}
        <Switch>
          <Route path='/films'  component={HomeFilms} ></Route>
          <Route path='/cineams'  component={Homecineams} ></Route>
          <Route path='/ShoppingCart'  component={HomeShoppingCart} ></Route>
          <Route path='/center'  component={Homecenter} ></Route>
          <Redirect  from='/'  to='/films'></Redirect>
        </Switch>

        {/* 下面是固定的 */}
        <NavBar bars = {this.state.bars}></NavBar>
      </div>
    );
  }
}

export default Home;
