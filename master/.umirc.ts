import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    master: {
      // prefetch: 'all',
      // 注册子应用信息
      apps: [
        {
          name: 'list', // 唯一 id
          entry: '//localhost:7001', // html entry
          // activeRule: "/home/list"
        },
        // {
        //   name: 'detail', // 唯一 id
        //   entry: '//localhost:7002', // html entry
        // },
      ],
    },
  },
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
});
