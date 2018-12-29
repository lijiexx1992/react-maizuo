import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

import PropTypes from 'prop-types';

import './index.scss';

class NavBar extends Component {


  render() {
    let bars = this.props.bars
    return (
      <div className="m-foot">
          <ul>
             {
               bars.map(item => {
                 return (
                  <li
                  key = {item.key}
                  >
                    <NavLink to={item.href}>
                      <i className={`iconfont ${item.icom}`}></i>
                      <span>{ item.name }</span>
                    </NavLink>
                  </li>
                 )
               })
             }
          </ul>
      </div>
    );
  }
}
// 定义传递过来的参数的类型
NavBar.propTypes = {
  bars: PropTypes.array
}

export default NavBar;
