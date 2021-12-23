export default {
  esm: 'babel',
  cjs: 'babel',
  // umd: {
  //   name: 'foo',
  //   globals: {
  //     react: 'React',
  //   },
  // },
  // lessInBabelMode: true,
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
};
