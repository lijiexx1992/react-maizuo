import React, { Component } from 'react';

import Banner from '../../../components/Banner';

import { Switch, Route ,Redirect}  from  'react-router-dom';


import './index.scss';

class HomeFilms extends Component {
  render() {
    return (
      <div className="films-list">
        <div className="m-top">
            <span>深圳</span>
            <i className="iconfont icon-jiantou"></i>
        </div>
        <Banner></Banner>
        <div className="m-nav">
            <ul className="tab-bar">
                <li>
                    <span>正在热映</span>
                </li>
                <li>
                    <span>即将上映</span>
                </li>
            </ul>
        </div>
      </div>
    );
  }
}

export default HomeFilms;
