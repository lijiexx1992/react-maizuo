import React, { Component } from 'react';
// 1，首先引入 Swiper 以及样式
// 引入此路径，才不会打包失败
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import './index.scss';

class Banner extends Component {
  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={require('./images/download-1.jpg')} alt=""/>
          </div>
           <div className="swiper-slide">
            <img src={require('./images/download.jpg')} alt=""/>
          </div>
           <div className="swiper-slide">
            <img src={require('./images/pic-1.jpg')} alt=""/>
          </div>
           <div className="swiper-slide">
            <img src={require('./images/pic-2.jpg')} alt=""/>
          </div>
           <div className="swiper-slide">
            <img src={require('./images/pic-3.jpg')} alt=""/>
          </div>
          <div className="swiper-slide">
            <img src={require('./images/pic-4.jpg')} alt=""/>
          </div>
        </div>
      </div>
    );
  }
  // 2.在组件挂载完毕的时候生成 Swiper 对象
  componentDidMount(){
     // new 一个Swiper 传一个参数这个参数就是这个样式模板的容器
     new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }

}
export default Banner;
