/*
 * @Author: yubb
 * @Date: 2023-04-26 13:57:24
 * @LastEditTime: 2023-04-26 15:56:51
 * @LastEditors: yubb
 * @Description:
 * @FilePath: \yubb-el-ui\src\main.ts
 */
import { registerMicroApps, start } from 'qiankun'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import pinia from './store'
import router from './router'
import ElementPlus from 'element-plus'
import './style/element/index.scss'
import Cookies from 'js-cookie'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import YuUI from '../packages/'

const app = createApp(App)

app.config.globalProperties.$cookies = Cookies

app.use(ElementPlus, {
  locale,
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
// 注册路由
app.use(router)
app.use(YuUI)
app.mount('#app')

registerMicroApps(
  [
    {
      name: 'subApp', // 必须与微应用注册名字相同
      entry: 'http://192.168.8.50:3301', // 入口路径，开发时为微应用所启本地服务，上线时为微应用线上路径
      container: '#sub-app-container', // app.vue 配置的挂载容器 id
      activeRule: '/subapp', // 当访问路由为 home 时加载微应用
      props: {
        // 主应用向微应用传递参数
      },
    },
  ],
  {
    //生命周期钩子函数
    beforeLoad: async (app) => {
      console.log('beforeLoad', app)
    },
    beforeMount: async (app) => {
      console.log('beforeMount ', app)
    },
    afterMount: async (app) => {
      console.log('afterMount', app)
    },
    beforeUnmount: async (app) => {
      console.log('beforeUnmount ', app)
    },
    afterUnmount: async (app) => {
      console.log('afterUnmount', app)
    },
  },
)

// 启动 qiankun
start()
