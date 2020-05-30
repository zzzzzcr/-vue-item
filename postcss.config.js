module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 75,//结果为：设计稿元素尺寸/5，比如元素宽375px,最终页面会换算成 10rem
      propList: ['*'] //结果为：设计稿元素尺寸/10，比如元素宽375px,最终页面会换算成 10rem
    }
  }
}