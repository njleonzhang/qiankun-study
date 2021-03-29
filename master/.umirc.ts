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
  routes: [
    {
      path: '/home',
      component: '@/pages/home/_layout.jsx',
      routes: [
        {
          path: '/home/detail',
          component: '@/pages/home/detail.jsx',
        },
        {
          path: '/home/list',
          microApp: 'list'
        },
        // 为啥无法渲染？
        // {
        //   path: '/home/list',
        //   component: '@/pages/home/list.jsx'
        // }
      ],
    }
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
});
