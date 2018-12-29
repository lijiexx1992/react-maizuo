

const path = require('path');
const resolve = (url) => {
  return path.resolve(__dirname, './', url);
}
const { injectBabelPlugin } = require('react-app-rewired');


module.exports = function override(config, env) {

  config.resolve.alias = {
    ...config.resolve.alias,
    '@': resolve('src'), // 设置 别名
  }

  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
  return config;
};
