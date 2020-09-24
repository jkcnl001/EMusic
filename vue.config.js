const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  runtimeCompiler: true,
  assetsDir: 'public',
  publicPath: isProd ? './' : '/',
  productionSourceMap: !isProd,
  // webpack的相关配置
  configureWebpack: {
    entry: './renderer/main.ts',
    devtool: 'source-map'
  },
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'src/main.ts'
    }
  }
}
