const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 以后以/api打头的请求都走代理
    proxy: {
      '/api': {
        target: 'http://localhost:8082/api',
        changeOrigin: true,
        ws: false
      }
    }
  }
})
