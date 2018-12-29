// index.js用来创建仓库的js的文件，最后需要给仓库暴露出去
// 定义数据


// 1.引入redux 里面的 createStore的方法
import { createStore } from 'redux';

// 2.调用createStore 方法 返回一个仓库的实例对象
// 方法的第一个参数，需要传入reducer 那就还需要引入reducer.js文件
import reducers from './reducer';
const store = createStore(reducers);



// 3.暴露这个仓库的实例对象
export default store;
