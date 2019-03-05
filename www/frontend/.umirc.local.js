
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'frontend',
      dll: false,
      routes: {
        exclude: [
        
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
        
          /components\//,
        ],
      },
    }],
  ],
  targets: {
    ie: 9,
    ie: 10,
    ie: 11,
  },
  // routes: [
  //   { path: '/', component: './TestLogin',
  //     routes: [
  //       { path: '/TestLogin/index', component: './TestLogin/index' },
  //     ]
  //   },
  // ],
}
