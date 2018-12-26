module.exports = {
  devServer: {
    disableHostCheck: true,
    watchOptions: {
      poll: true,
      proxy: 'http://localhost:8080',
      public: '192.168.1.3:8080',
    },
    clientLogLevel: 'info',
  },
};
