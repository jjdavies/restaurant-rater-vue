module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/restaurant-rater-vue/'
    : '/',
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
