import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    slave: {},
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'list', // 唯一 id
          entry: '//localhost:7001', // html entry
        },
      ],
    },
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
