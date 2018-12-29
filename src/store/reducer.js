// reducer处理state的变化是个纯函数
// 数据都是在这里操作的

// 定义一个常量来控制派生的type类型这样可以防止错误，因为type类型为字符串是不会报错
import {SETCITY} from  './actionsType';

// 1.先定义初始数据
let  defultState = {
  curCity: '深圳',
}

// 暴露纯函数
/**
 *
 * @param {Object} prevState  这次动作之前的数据（state）
 * @param {Object} action 这次的动作描述对象
 * 默认个一个状态赋值就直接在prevState上等于一个定义好的参数
 */
export  default  function(prevState = defultState , action){
  // 做了一系列事情之后返回我们的state
  // console.log(prevState, action);

  // 获取当前的prevState，根据action的不同来操作prevState，最后返回一个新的state
  // 不能直接改变原来的数据读数据进行深拷贝以后再赋值
  let state = JSON.parse(JSON.stringify(prevState));

  if(action.type === SETCITY){
    // 给当前城市重新赋值
    state.curCity = action.data;
  }
  console.log(state.curCity ,action.data)

  return state
}
