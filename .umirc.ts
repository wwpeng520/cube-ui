import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'cube-ui',
  favicon: 'https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/gold.981a5510.svg',
  logo: 'https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/gold.981a5510.svg',
  outputPath: 'docs-dist',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: '@gayy/cube',
        camel2DashComponentName: false,
        customStyleName: (name) => {
          return `./style/index.less`; // 注意：这里 ./ 不可省略
        },
      },
      '@gayy/cube',
    ],
  ],
  // more config: https://d.umijs.org/config
});
