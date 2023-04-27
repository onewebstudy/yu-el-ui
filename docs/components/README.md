# Vue 3 + TypeScript + Vite + Eslint + prettier

## 安装pnpm ,node版本16.18.1

```
npm i -g pnpm 
```
## 用vite创建vue3+ts项目
```
pnpm create vite
```
## 安装@types/node
```
pnpm add @types/node -D
```
>vite.config.ts设置别名

 ```
resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      components: resolve(__dirname, 'src/components'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', 'mjs'],
  },
```
>tsconfig.json设置别名，不然vscode识别不了

```
"compilerOptions": {
  "baseUrl": "./",
   "paths": {
      "@/*": ["./src/*"],
      "components/*": ["./src/components/*"]
      }
   }
```

## 安装vue-router
```
pnpm add vue-roter
```
>在src目录创建router文件夹,新建index.ts文件
```
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '@/views/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'Home页面',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
```

>在main.ts文件引入

```
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// 注册路由
app.use(router)
app.mount('#app')
```

## 安装element-plus
```
pnpm add element-plus @element-plus/icons-vue
```
> 在main.ts文件引入
> >1.全局引用
```
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

app.use(ElementPlus, {
  locale,
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 注册路由
app.use(router)
app.mount('#app')
```
> 修改主题,创建样式并修改main.ts的引入
```
/* 只需要重写你需要的即可 */
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      'base': green,
    ),
  ),
);

// 如果只是按需导入，则可以忽略以下内容。
// 如果你想导入所有样式:
 @use "element-plus/theme-chalk/src/index.scss" as *;
```
## 安装sass
```
pnpm add sass sass-loader -D
```

## 安装js-cookies
```
pnpm add @types/js-cookie js-cookie -D
```

## 安装axios并封装
```
pnpm add axios
```
>新建service文件夹，创建request.ts
```
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { Result } from './types'
import Cookies from 'js-cookie'

class YBRequest {
  private instance: AxiosInstance
  private options: AxiosRequestConfig
  constructor(options: AxiosRequestConfig) {
    this.options = options
    this.instance = axios.create(this.options)

    this.instance.interceptors.request.use(
      (config: any) => {
        const token = Cookies.get('token')
        if (token) {
          config.headers.Authorization = token
        }
        return config
      },
      (err) => {
        return err
      },
    )

    this.instance.interceptors.response.use(
      (res) => {
        // 拦截响应的数据
        if (res.data.code === 401) {
          Cookies.set('token', '')
          return res.data
        }
        return res.data
      },
      (err) => {
        return err
      },
    )
  }

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, AxiosResponse<Result<T>>>(config)
        .then((res) => {
          resolve(res as unknown as Promise<T>)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  patch<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }

  delete<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
}

export default YBRequest

```
>创建types.d.ts
```
export interface Result<T = any> {
  code: number
  data: T
}
```
>创建index.ts
```
import YBRequest from './request'

export default new YBRequest({
  baseURL: '/api',
  timeout: 10000,
})

```
>在service建立对应模块的api文件夹进行分类
>>main/login/index.ts
```
import ybRequest from '@/service'
import { GetDepartmentListParams } from './types'

enum DepartmentAPI {
  DepartmentList = '/department/list',
}

export function getDepartmentList(params: GetDepartmentListParams) {
  return ybRequest.post({
    url: DepartmentAPI.DepartmentList,
    data: params,
  })
}

```
>>main/login/types.d.ts
```
export interface GetDepartmentListParams {
  offset: number
  size: number
}
//可继承
// export interface GetDepartmentListParams extends ParamsPagination {}

```

## 安装eslint

```
pnpm add eslint -D
```
>初始化eslint
>> 执行npx eslint --init命令初始化eslint
```
You can also run this command directly using 'npm init @eslint/config'.
 
? How would you like to use ESLint? ...
To check syntax and find problems
 
? What type of modules does your project use? ...
JavaScript modules (import/export)
 
? Which framework does your project use? ...
Vue.js
 
? Does your project use TypeScript? » No / Yes
Yes
 
? Where does your code run? ... (用空格选中两个，回车确定)
√ Browser
√ Node
 
? What format do you want your config file to be in? ...
JavaScript
 
The config that you've selected requires the following dependencies:
eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
? Would you like to install them now?
No
```
>>最后一个提示我们选择No，然后手动npm安装提示的依赖
```
pnpm add eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest -D
```

>>在packeage.json添加命令
```
"scripts": {
 	// 执行该命令eslint会检测当前项目下所有的.vue,.js,.ts,.jsx,.tsx文件是否符合eslint的代码规范，并尝试自动修复
    "lint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix"
  },
```
>建立.eslintignore文件
```
*.sh
node_modules
*.md
*.woff
*.ttf
.vscode
.idea
dist
/public
/docs
.husky
.local
/bin
.eslintrc.js
prettier.config.js
/src/mock/*
```

## 安装prettier
```
pnpm add prettier -D
```
> 配置.prettier.cjs
```
/*
 * @Author: yubb
 * @Date: 2023-04-26 15:37:48
 * @LastEditTime: 2023-04-26 15:52:49
 * @LastEditors: yubb
 * @Description: 
 * @FilePath: \yubb-el-ui\.prettierrc.cjs
 */
module.exports = {
  // 一行最多 100 字符
  printWidth: 100,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾不需要有分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 尾随逗号
  trailingComma: 'all',
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // 换行符使用 lf
  endOfLine: 'lf',
}
```
>建立.prettierignore
```
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

## vscode安装eslint,prettier插件
```
{
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // 每次保存的时候自动格式化
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    // 使用eslint来fix，包括格式化会自动fix和代码质量检查会给出错误提示
    "source.fixAll.eslint": true
  },
  // 把prettier设置为vscode默认的代码格式化工具
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // vue文件的默认格式化工具选择prettier
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## ESLint与Prettier会有冲突,和vue的一些语法冲突
```
pnpm add eslint-config-prettier eslint-plugin-prettier vue-eslint-parser -D
```

>eslint-config-prettier 会关闭ESLint中有关代码格式化的配置
>eslint-plugin-prettier 把Prettier配置成ESLint的一个插件，让其当做一个linter规则来运行
>去掉驼峰写法，index
>修改.eslint.cjs
```
extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },

  rules: {
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'], //需要忽略的组件名
      },
    ],
  },
```

## 在运行时，检测
```
pnpm add vite-plugin-eslint -D

```
> 修改vite.config.ts配置
```
import eslintPlugin from 'vite-plugin-eslint'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { resolve } from 'path'
export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.js', 'src/**/*.vue', 'src/*.ts', 'src/*.js', 'src/*.vue'],
    }),
  ],
})
```

## 加些插件
### vite-plugin-vue-setup-extend 
>此插件解决了：使用setup语法糖的时候没办法直接为组件定义name（页面缓存需要name属性）
```
pnpm add vite-plugin-vue-setup-extend -D
```
> 在vite.config.ts配置
```
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
plugins: [
    vueSetupExtend ()
    ]
```
> 在页面中使用
```
<script lang="ts" setup name="自定义name">

</script>
```

### unplugin-auto-import
>自动引入vue等的api
```
pnpm add unplugin-auto-import -D
```
>在vite.config.ts配置
```
import AutoImport from 'unplugin-auto-import/vite'
plugins: [
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'], // 自动导入vue、vue-router、pinia相关API
      dts: 'src/auto-import.d.ts', // 生成 `auto-import.d.ts` 全局声明
      eslintrc: {
        enabled: true, // Default `false`
      },
    }),
]
```
>在eslintrc.cjs配置'./.eslintrc-auto-import.json',重启

```
 extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json',
  ],
```

### vite-plugin-compression
> 静态文件压缩
```
pnpm install vite-plugin-compression -D
```
>配置
```
import viteCompression from 'vite-plugin-compression'
plugins: [
     viteCompression({
      verbose: true,
      disable: false, // 不禁用压缩
      deleteOriginFile: false, // 压缩后是否删除原文件
      threshold: 10240, // 压缩前最小文件大小
      algorithm: 'gzip', // 压缩算法
      ext: '.gz' // 文件类型
    })
   ]
```
### rollup-plugin-visualizer
>打包后的视图文件——生成一个stats.html文件
```
pnpm install rollup-plugin-visualizer -D
```
>配置
```
import {visualizer} from 'rollup-plugin-visualizer'
plugins: [
    visualizer({
      open:true,  //注意这里要设置为true，否则无效
      gzipSize:true,
      brotliSize:true
    }),
   ]
```

## 安装pinia
```
pnpm add pinia 
```
>在src目录新建store文件夹，新建index.ts文件，代码如下：
```
// 因为用了“unplugin-auto-import”插件 可以不需要再import Pinia的API
// import { createPinia } from 'pinia'
// 创建pinia状态管理对象
const pinia = createPinia()
export default pinia
```
>在main.ts文件中引入，代码如下：
```
import pinia from './store'
app.use(pinia)
```
>在store文件夹中新建modules文件夹（当然也可以不建，我这是为了区分管理），新建user.ts文件，代码如下：
```
const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: '',
      name: '',
      avatar: '',
      nickName: '',
      userId: null,
      dept: {},
      permissions: [],
      permBtn: [],
      permCode: [],
    }
  },
  getters: {},
  actions: {},
})

export default useUserStore

```
>>使用 defineStore() 定义一个 Store ；defineStore() 第一个参数是 storeId （必须要），第二个参数是一个选项对象：中有state（是一个函数返回一个对象）、getters、actions
>>store 是一个用 reactive 包裹的对象，如果直接解构会失去响应性。我们可以使用 storeToRefs() 对其进行解构：
```
import useUserStore from '@/store/modules/user'
const userStore= useUserStore()
const { hello: myHello } = storeToRefs(userStore)
```

## 集成qiankun（微前端）父级项目
```
pnpm install qiankun
```
> 修改main.ts
```
import { registerMicroApps, start } from 'qiankun'
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
```
## 集成qiankun（微前端）子级项目
> 安装vite-plugin-qiankun
```
pnpm add vite-plugin-qiankun
```
>修改vite.config.ts
```
import qiankun from 'vite-plugin-qiankun'
plugins: [
qiankun('subApp', {
    // 微应用名字，与主应用注册的微应用名字保持一致
    useDevMode: true,
  }),
  ],
server: {
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  host: '0.0.0.0',
  port: 3301,
},

```
> 修改router.ts
```
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/subApp/' : '/'),
  routes: routes,
})
```
> 修改main.ts
```
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

import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
let instance: any = null
function render(props: any = {}) {
  const { container } = props
  instance = createApp(App)
  instance.use(router)
  instance.use(pinia)
  // 注册全局api方法
  // 注册所有图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    instance.component(key, component)
  }
  // 注册ElementPlus
  instance.use(ElementPlus, {
    locale, // 语言设置
    // size: Cookies.get('size') || 'medium' // 尺寸设置
  })
  instance?.mount(container ? container.querySelector('#app') : '#app')
  console.log('开始加载相关内容')
}
renderWithQiankun({
  mount(props: any) {
    render(props)
  },
  bootstrap() {
    console.log('%c', 'color:green;', ' ChildOne bootstrap')
  },
  update() {
    console.log('%c', 'color:green;', ' ChildOne update')
  },
  unmount(props: any) {
    console.log('unmount', props)
    instance.unmount()
    instance._container.innerHTML = ''
    instance = null
  },
})
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  console.log('并不是qiankun渲染')
  render()
}

```


## 封装自己的组件
> 给各自的组件都加上install
```
import YuButton from './src/index.vue'

YuButton.install = (App) => {
  App.component(YuButton.name, YuButton)
}

export default YuButton
```
>统一暴露给外部
```
import YuButton from './button'

//按需引入
export { YuButton }

const components = [YuButton]

const YuUI = {
  install(App) {
    components.forEach((item) => {
      App.component(item.name, item)
    })
  },
}

export default YuUI

```
## 安装vitepress
> 一个md和vue都可以使用的文档
```
pnpm add vitepress vitepress-theme-demoblock -D
```
>新建doces文件夹，创建首页
```
---
layout: home

title: Yu-el-ui
# titleTemplate: 选项卡描述
editLink: true
lastUpdated: true
hero:
  name: Yu-el-ui
  text: vue3基础组件
  tagline: Vue3 中基于Element-plus二次封装基础组件文档
  image:
    src: /img/wocwin.jpg
    alt: Yu-el-ui
  actions:
    - theme: brand
      text: 安装指南
      link: /components/
    - theme: brand
      text: 组件预览
      link: /components/TSelect/base.md
features:
  - icon: 🔨
    title: 实际项目
    details: 实际项目中碰到的疑点、难点，致力于更优的自我。。
  - icon: 🧩
    title: 基础组件
    details: 基于Element-plus二次封装；使用组件 Demo 快速体验交互细节。。
  - icon: ✈️
    title: Vue驱动。
    details: 享受 Vue3 + vite3 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
---
<!-- <p style="display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;">
  <a href="https://github.com/vuejs/vue" target="_blank">
    <img src="https://img.shields.io/badge/vue-3.2.36-brightgreen.svg" alt="vue3">
  </a>
  <a href="https://gitee.com/wocwin/t-ui-plus/stargazers" target="_blank">
    <img src="https://gitee.com/wocwin/t-ui-plus/badge/star.svg?theme=dark" alt="t-ui-plus">
  </a>
   <a href="https://github.com/wocwin/t-ui-plus/stargazers" target="_blank">
    <img src="https://img.shields.io/github/stars/wocwin/t-ui-plus.svg" alt="t-ui-plus">
  </a>
   <a href="https://www.npmjs.com/package/@wocwin/t-ui-plus" target="_blank">
      <img alt="npm" src="https://img.shields.io/npm/v/@wocwin/t-ui-plus.svg" />
    </a>
</p> -->
```
>新建components，放对应的组件说明和示例
>新建.vitepress文件夹config.ts
```
import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
export default defineConfig({
  title: 'yuui基础组件文档',
  description: '基于Element-plus基础组件封装使用',
  lang: 'cn-ZH',
  base: '/yuui/',
  lastUpdated: true,
  themeConfig: {
    logo: '/favicon.ico',
    siteTitle: 'yuui基础组件文档',
    outline: 3,
    nav:[
      { text: '基础组件', link: '/components/Yubutton/base.md' },
    ],
    sidebar:{
      '/components': [
        // {
        //   text: '常用组件',
        //   items: [
        //     { text: '下拉选择组件', link: '/components/TSelect/base.md' },
        //     { text: '下拉选择表格组件', link: '/components/TSelectTable/base.md' },
        //   ]
        // },
      ]
    }
  },
  markdown: {
    config(md) {
      md.use(demoBlockPlugin, {
        customClass: 'demoblock-custom'
      })
    }
  }
})
```
>新增命令
```
  "docs:dev": "pnpm run register:components && vitepress dev docs",

  "docs:build": "pnpm run register:components && vitepress build docs",

  "register:components": "vitepress-rc"
```
