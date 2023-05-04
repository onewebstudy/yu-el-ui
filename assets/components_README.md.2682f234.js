import{_ as s,c as n,o as a,O as l}from"./chunks/framework.e2f2cdb7.js";const D=JSON.parse('{"title":"Vue 3 + TypeScript + Vite + Eslint + prettier","description":"","frontmatter":{},"headers":[],"relativePath":"components/README.md","lastUpdated":1682651602000}'),p={name:"components/README.md"},e=l(`<h1 id="vue-3-typescript-vite-eslint-prettier" tabindex="-1">Vue 3 + TypeScript + Vite + Eslint + prettier <a class="header-anchor" href="#vue-3-typescript-vite-eslint-prettier" aria-label="Permalink to &quot;Vue 3 + TypeScript + Vite + Eslint + prettier&quot;">​</a></h1><h2 id="安装pnpm-node版本16-18-1" tabindex="-1">安装pnpm ,node版本16.18.1 <a class="header-anchor" href="#安装pnpm-node版本16-18-1" aria-label="Permalink to &quot;安装pnpm ,node版本16.18.1&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i -g pnpm</span></span></code></pre></div><h2 id="用vite创建vue3-ts项目" tabindex="-1">用vite创建vue3+ts项目 <a class="header-anchor" href="#用vite创建vue3-ts项目" aria-label="Permalink to &quot;用vite创建vue3+ts项目&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm create vite</span></span></code></pre></div><h2 id="安装-types-node" tabindex="-1">安装@types/node <a class="header-anchor" href="#安装-types-node" aria-label="Permalink to &quot;安装@types/node&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm add @types/node -D</span></span></code></pre></div><blockquote><p>vite.config.ts设置别名</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">resolve: {</span></span>
<span class="line"><span style="color:#A6ACCD;">   alias: {</span></span>
<span class="line"><span style="color:#A6ACCD;">     &#39;@&#39;: resolve(__dirname, &#39;src&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">     components: resolve(__dirname, &#39;src/components&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">   },</span></span>
<span class="line"><span style="color:#A6ACCD;">   extensions: [&#39;.js&#39;, &#39;.ts&#39;, &#39;.jsx&#39;, &#39;.tsx&#39;, &#39;.json&#39;, &#39;.vue&#39;, &#39;mjs&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;"> },</span></span></code></pre></div><blockquote><p>tsconfig.json设置别名，不然vscode识别不了</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;baseUrl&quot;: &quot;./&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">   &quot;paths&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;@/*&quot;: [&quot;./src/*&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;components/*&quot;: [&quot;./src/components/*&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span></code></pre></div><h2 id="安装vue-router" tabindex="-1">安装vue-router <a class="header-anchor" href="#安装vue-router" aria-label="Permalink to &quot;安装vue-router&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm add vue-roter</span></span></code></pre></div><blockquote><p>在src目录创建router文件夹,新建index.ts文件</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { createRouter, createWebHistory, RouteRecordRaw } from &#39;vue-router&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import Home from &#39;@/views/index.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const routes: Array&lt;RouteRecordRaw&gt; = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;Home页面&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    component: Home,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const router = createRouter({</span></span>
<span class="line"><span style="color:#A6ACCD;">  history: createWebHistory(),</span></span>
<span class="line"><span style="color:#A6ACCD;">  routes,</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default router</span></span></code></pre></div><blockquote><p>在main.ts文件引入</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &#39;./style.css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import router from &#39;./router&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp(App)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 注册路由</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(router)</span></span>
<span class="line"><span style="color:#A6ACCD;">app.mount(&#39;#app&#39;)</span></span></code></pre></div><h2 id="安装element-plus" tabindex="-1">安装element-plus <a class="header-anchor" href="#安装element-plus" aria-label="Permalink to &quot;安装element-plus&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm add element-plus @element-plus/icons-vue</span></span></code></pre></div><blockquote><p>在main.ts文件引入</p><blockquote><p>1.全局引用</p></blockquote></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &#39;./style.css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import router from &#39;./router&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ElementPlus from &#39;element-plus&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &#39;element-plus/dist/index.css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import locale from &#39;element-plus/lib/locale/lang/zh-cn&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import * as ElementPlusIconsVue from &#39;@element-plus/icons-vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp(App)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(ElementPlus, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  locale,</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for (const [key, component] of Object.entries(ElementPlusIconsVue)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  app.component(key, component)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 注册路由</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(router)</span></span>
<span class="line"><span style="color:#A6ACCD;">app.mount(&#39;#app&#39;)</span></span></code></pre></div><blockquote><p>修改主题,创建样式并修改main.ts的引入</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* 只需要重写你需要的即可 */</span></span>
<span class="line"><span style="color:#A6ACCD;">@forward &#39;element-plus/theme-chalk/src/common/var.scss&#39; with (</span></span>
<span class="line"><span style="color:#A6ACCD;">  $colors: (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;primary&#39;: (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;base&#39;: green,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ),</span></span>
<span class="line"><span style="color:#A6ACCD;">  ),</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 如果只是按需导入，则可以忽略以下内容。</span></span>
<span class="line"><span style="color:#A6ACCD;">// 如果你想导入所有样式:</span></span>
<span class="line"><span style="color:#A6ACCD;"> @use &quot;element-plus/theme-chalk/src/index.scss&quot; as *;</span></span></code></pre></div><h2 id="安装sass" tabindex="-1">安装sass <a class="header-anchor" href="#安装sass" aria-label="Permalink to &quot;安装sass&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm add sass sass-loader -D</span></span></code></pre></div><h2 id="安装js-cookies" tabindex="-1">安装js-cookies <a class="header-anchor" href="#安装js-cookies" aria-label="Permalink to &quot;安装js-cookies&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm add @types/js-cookie js-cookie -D</span></span></code></pre></div><h2 id="安装axios并封装" tabindex="-1">安装axios并封装 <a class="header-anchor" href="#安装axios并封装" aria-label="Permalink to &quot;安装axios并封装&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm add axios</span></span></code></pre></div><blockquote><p>新建service文件夹，创建request.ts</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from &#39;axios&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Result } from &#39;./types&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Cookies from &#39;js-cookie&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class YBRequest {</span></span>
<span class="line"><span style="color:#A6ACCD;">  private instance: AxiosInstance</span></span>
<span class="line"><span style="color:#A6ACCD;">  private options: AxiosRequestConfig</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(options: AxiosRequestConfig) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.options = options</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.instance = axios.create(this.options)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    this.instance.interceptors.request.use(</span></span>
<span class="line"><span style="color:#A6ACCD;">      (config: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const token = Cookies.get(&#39;token&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (token) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          config.headers.Authorization = token</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return config</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      (err) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return err</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    this.instance.interceptors.response.use(</span></span>
<span class="line"><span style="color:#A6ACCD;">      (res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 拦截响应的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (res.data.code === 401) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          Cookies.set(&#39;token&#39;, &#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">          return res.data</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return res.data</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      (err) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return err</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  request&lt;T = any&gt;(config: AxiosRequestConfig): Promise&lt;T&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.instance</span></span>
<span class="line"><span style="color:#A6ACCD;">        .request&lt;any, AxiosResponse&lt;Result&lt;T&gt;&gt;&gt;(config)</span></span>
<span class="line"><span style="color:#A6ACCD;">        .then((res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolve(res as unknown as Promise&lt;T&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">        .catch((err) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject(err)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  get&lt;T = any&gt;(config: AxiosRequestConfig): Promise&lt;T&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.request({ ...config, method: &#39;GET&#39; })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  post&lt;T = any&gt;(config: AxiosRequestConfig): Promise&lt;T&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.request({ ...config, method: &#39;POST&#39; })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  patch&lt;T = any&gt;(config: AxiosRequestConfig): Promise&lt;T&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.request({ ...config, method: &#39;PATCH&#39; })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  delete&lt;T = any&gt;(config: AxiosRequestConfig): Promise&lt;T&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.request({ ...config, method: &#39;DELETE&#39; })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default YBRequest</span></span></code></pre></div><blockquote><p>创建types.d.ts</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export interface Result&lt;T = any&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  code: number</span></span>
<span class="line"><span style="color:#A6ACCD;">  data: T</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><blockquote><p>创建index.ts</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import YBRequest from &#39;./request&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default new YBRequest({</span></span>
<span class="line"><span style="color:#A6ACCD;">  baseURL: &#39;/api&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  timeout: 10000,</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><blockquote><p>在service建立对应模块的api文件夹进行分类</p><blockquote><p>main/login/index.ts</p></blockquote></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import ybRequest from &#39;@/service&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { GetDepartmentListParams } from &#39;./types&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">enum DepartmentAPI {</span></span>
<span class="line"><span style="color:#A6ACCD;">  DepartmentList = &#39;/department/list&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function getDepartmentList(params: GetDepartmentListParams) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return ybRequest.post({</span></span>
<span class="line"><span style="color:#A6ACCD;">    url: DepartmentAPI.DepartmentList,</span></span>
<span class="line"><span style="color:#A6ACCD;">    data: params,</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><blockquote><blockquote><p>main/login/types.d.ts</p></blockquote></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export interface GetDepartmentListParams {</span></span>
<span class="line"><span style="color:#A6ACCD;">  offset: number</span></span>
<span class="line"><span style="color:#A6ACCD;">  size: number</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//可继承</span></span>
<span class="line"><span style="color:#A6ACCD;">// export interface GetDepartmentListParams extends ParamsPagination {}</span></span></code></pre></div><h2 id="安装eslint" tabindex="-1">安装eslint <a class="header-anchor" href="#安装eslint" aria-label="Permalink to &quot;安装eslint&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm add eslint -D</span></span></code></pre></div><blockquote><p>初始化eslint</p><blockquote><p>执行npx eslint --init命令初始化eslint</p></blockquote></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">You can also run this command directly using &#39;npm init @eslint/config&#39;.</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">? How would you like to use ESLint? ...</span></span>
<span class="line"><span style="color:#A6ACCD;">To check syntax and find problems</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">? What type of modules does your project use? ...</span></span>
<span class="line"><span style="color:#A6ACCD;">JavaScript modules (import/export)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">? Which framework does your project use? ...</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">? Does your project use TypeScript? » No / Yes</span></span>
<span class="line"><span style="color:#A6ACCD;">Yes</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">? Where does your code run? ... (用空格选中两个，回车确定)</span></span>
<span class="line"><span style="color:#A6ACCD;">√ Browser</span></span>
<span class="line"><span style="color:#A6ACCD;">√ Node</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">? What format do you want your config file to be in? ...</span></span>
<span class="line"><span style="color:#A6ACCD;">JavaScript</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">The config that you&#39;ve selected requires the following dependencies:</span></span>
<span class="line"><span style="color:#A6ACCD;">eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest</span></span>
<span class="line"><span style="color:#A6ACCD;">? Would you like to install them now?</span></span>
<span class="line"><span style="color:#A6ACCD;">No</span></span></code></pre></div><blockquote><blockquote><p>最后一个提示我们选择No，然后手动npm安装提示的依赖</p></blockquote></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm add eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest -D</span></span></code></pre></div><blockquote><blockquote><p>在packeage.json添加命令</p></blockquote></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;"> 	// 执行该命令eslint会检测当前项目下所有的.vue,.js,.ts,.jsx,.tsx文件是否符合eslint的代码规范，并尝试自动修复</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;lint&quot;: &quot;eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span></code></pre></div><blockquote><p>建立.eslintignore文件</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">*.sh</span></span>
<span class="line"><span style="color:#A6ACCD;">node_modules</span></span>
<span class="line"><span style="color:#A6ACCD;">*.md</span></span>
<span class="line"><span style="color:#A6ACCD;">*.woff</span></span>
<span class="line"><span style="color:#A6ACCD;">*.ttf</span></span>
<span class="line"><span style="color:#A6ACCD;">.vscode</span></span>
<span class="line"><span style="color:#A6ACCD;">.idea</span></span>
<span class="line"><span style="color:#A6ACCD;">dist</span></span>
<span class="line"><span style="color:#A6ACCD;">/public</span></span>
<span class="line"><span style="color:#A6ACCD;">/docs</span></span>
<span class="line"><span style="color:#A6ACCD;">.husky</span></span>
<span class="line"><span style="color:#A6ACCD;">.local</span></span>
<span class="line"><span style="color:#A6ACCD;">/bin</span></span>
<span class="line"><span style="color:#A6ACCD;">.eslintrc.js</span></span>
<span class="line"><span style="color:#A6ACCD;">prettier.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">/src/mock/*</span></span></code></pre></div><h2 id="安装prettier" tabindex="-1">安装prettier <a class="header-anchor" href="#安装prettier" aria-label="Permalink to &quot;安装prettier&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm add prettier -D</span></span></code></pre></div><blockquote><p>配置.prettier.cjs</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/*</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @Author: yubb</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @Date: 2023-04-26 15:37:48</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @LastEditTime: 2023-04-26 15:52:49</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @LastEditors: yubb</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @Description: </span></span>
<span class="line"><span style="color:#A6ACCD;"> * @FilePath: \\yubb-el-ui\\.prettierrc.cjs</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 一行最多 100 字符</span></span>
<span class="line"><span style="color:#A6ACCD;">  printWidth: 100,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 使用 2 个空格缩进</span></span>
<span class="line"><span style="color:#A6ACCD;">  tabWidth: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 不使用缩进符，而使用空格</span></span>
<span class="line"><span style="color:#A6ACCD;">  useTabs: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 行尾不需要有分号</span></span>
<span class="line"><span style="color:#A6ACCD;">  semi: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 使用单引号</span></span>
<span class="line"><span style="color:#A6ACCD;">  singleQuote: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 对象的 key 仅在必要时用引号</span></span>
<span class="line"><span style="color:#A6ACCD;">  quoteProps: &#39;as-needed&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // jsx 不使用单引号，而使用双引号</span></span>
<span class="line"><span style="color:#A6ACCD;">  jsxSingleQuote: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 尾随逗号</span></span>
<span class="line"><span style="color:#A6ACCD;">  trailingComma: &#39;all&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 大括号内的首尾需要空格</span></span>
<span class="line"><span style="color:#A6ACCD;">  bracketSpacing: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // jsx 标签的反尖括号需要换行</span></span>
<span class="line"><span style="color:#A6ACCD;">  jsxBracketSameLine: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 箭头函数，只有一个参数的时候，也需要括号</span></span>
<span class="line"><span style="color:#A6ACCD;">  arrowParens: &#39;always&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 每个文件格式化的范围是文件的全部内容</span></span>
<span class="line"><span style="color:#A6ACCD;">  rangeStart: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">  rangeEnd: Infinity,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 不需要写文件开头的 @prettier</span></span>
<span class="line"><span style="color:#A6ACCD;">  requirePragma: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 不需要自动在文件开头插入 @prettier</span></span>
<span class="line"><span style="color:#A6ACCD;">  insertPragma: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 使用默认的折行标准</span></span>
<span class="line"><span style="color:#A6ACCD;">  proseWrap: &#39;preserve&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 根据显示样式决定 html 要不要折行</span></span>
<span class="line"><span style="color:#A6ACCD;">  htmlWhitespaceSensitivity: &#39;css&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 换行符使用 lf</span></span>
<span class="line"><span style="color:#A6ACCD;">  endOfLine: &#39;lf&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><blockquote><p>建立.prettierignore</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/dist/*</span></span>
<span class="line"><span style="color:#A6ACCD;">.local</span></span>
<span class="line"><span style="color:#A6ACCD;">.output.js</span></span>
<span class="line"><span style="color:#A6ACCD;">/node_modules/**</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">**/*.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">**/*.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/public/*</span></span></code></pre></div><h2 id="vscode安装eslint-prettier插件" tabindex="-1">vscode安装eslint,prettier插件 <a class="header-anchor" href="#vscode安装eslint-prettier插件" aria-label="Permalink to &quot;vscode安装eslint,prettier插件&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  // vscode默认启用了根据文件类型自动设置tabsize的选项</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;editor.detectIndentation&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 重新设定tabsize</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;editor.tabSize&quot;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 每次保存的时候自动格式化</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;editor.formatOnSave&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;editor.codeActionsOnSave&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 使用eslint来fix，包括格式化会自动fix和代码质量检查会给出错误提示</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;source.fixAll.eslint&quot;: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 把prettier设置为vscode默认的代码格式化工具</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // vue文件的默认格式化工具选择prettier</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;[vue]&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="eslint与prettier会有冲突-和vue的一些语法冲突" tabindex="-1">ESLint与Prettier会有冲突,和vue的一些语法冲突 <a class="header-anchor" href="#eslint与prettier会有冲突-和vue的一些语法冲突" aria-label="Permalink to &quot;ESLint与Prettier会有冲突,和vue的一些语法冲突&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm add eslint-config-prettier eslint-plugin-prettier vue-eslint-parser -D</span></span></code></pre></div><blockquote><p>eslint-config-prettier 会关闭ESLint中有关代码格式化的配置 eslint-plugin-prettier 把Prettier配置成ESLint的一个插件，让其当做一个linter规则来运行 去掉驼峰写法，index 修改.eslint.cjs</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">extends: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;eslint:recommended&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;plugin:vue/vue3-essential&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;plugin:@typescript-eslint/recommended&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;plugin:prettier/recommended&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  overrides: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">  parser: &#39;vue-eslint-parser&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  parserOptions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ecmaVersion: &#39;latest&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    sourceType: &#39;module&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    parser: &#39;@typescript-eslint/parser&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  rules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;@typescript-eslint/ban-types&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;error&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        extendDefaults: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        types: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;{}&#39;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;vue/multi-word-component-names&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;error&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ignores: [&#39;index&#39;], //需要忽略的组件名</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span></code></pre></div><h2 id="在运行时-检测" tabindex="-1">在运行时，检测 <a class="header-anchor" href="#在运行时-检测" aria-label="Permalink to &quot;在运行时，检测&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm add vite-plugin-eslint -D</span></span></code></pre></div><blockquote><p>修改vite.config.ts配置</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import eslintPlugin from &#39;vite-plugin-eslint&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import vueSetupExtend from &#39;vite-plugin-vue-setup-extend&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { resolve } from &#39;path&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default defineConfig({</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    vue(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    vueSetupExtend(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    eslintPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">      include: [&#39;src/**/*.ts&#39;, &#39;src/**/*.js&#39;, &#39;src/**/*.vue&#39;, &#39;src/*.ts&#39;, &#39;src/*.js&#39;, &#39;src/*.vue&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h2 id="加些插件" tabindex="-1">加些插件 <a class="header-anchor" href="#加些插件" aria-label="Permalink to &quot;加些插件&quot;">​</a></h2><h3 id="vite-plugin-vue-setup-extend" tabindex="-1">vite-plugin-vue-setup-extend <a class="header-anchor" href="#vite-plugin-vue-setup-extend" aria-label="Permalink to &quot;vite-plugin-vue-setup-extend&quot;">​</a></h3><blockquote><p>此插件解决了：使用setup语法糖的时候没办法直接为组件定义name（页面缓存需要name属性）</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm add vite-plugin-vue-setup-extend -D</span></span></code></pre></div><blockquote><p>在vite.config.ts配置</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import vueSetupExtend from &#39;vite-plugin-vue-setup-extend&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    vueSetupExtend ()</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span></code></pre></div><blockquote><p>在页面中使用</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;script lang=&quot;ts&quot; setup name=&quot;自定义name&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div><h3 id="unplugin-auto-import" tabindex="-1">unplugin-auto-import <a class="header-anchor" href="#unplugin-auto-import" aria-label="Permalink to &quot;unplugin-auto-import&quot;">​</a></h3><blockquote><p>自动引入vue等的api</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm add unplugin-auto-import -D</span></span></code></pre></div><blockquote><p>在vite.config.ts配置</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import AutoImport from &#39;unplugin-auto-import/vite&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    AutoImport({</span></span>
<span class="line"><span style="color:#A6ACCD;">      imports: [&#39;vue&#39;, &#39;vue-router&#39;, &#39;pinia&#39;], // 自动导入vue、vue-router、pinia相关API</span></span>
<span class="line"><span style="color:#A6ACCD;">      dts: &#39;src/auto-import.d.ts&#39;, // 生成 \`auto-import.d.ts\` 全局声明</span></span>
<span class="line"><span style="color:#A6ACCD;">      eslintrc: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        enabled: true, // Default \`false\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span></code></pre></div><blockquote><p>在eslintrc.cjs配置&#39;./.eslintrc-auto-import.json&#39;,重启</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">extends: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;eslint:recommended&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;plugin:vue/vue3-essential&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;plugin:@typescript-eslint/recommended&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;plugin:prettier/recommended&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;./.eslintrc-auto-import.json&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span></code></pre></div><h3 id="vite-plugin-compression" tabindex="-1">vite-plugin-compression <a class="header-anchor" href="#vite-plugin-compression" aria-label="Permalink to &quot;vite-plugin-compression&quot;">​</a></h3><blockquote><p>静态文件压缩</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm install vite-plugin-compression -D</span></span></code></pre></div><blockquote><p>配置</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import viteCompression from &#39;vite-plugin-compression&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">     viteCompression({</span></span>
<span class="line"><span style="color:#A6ACCD;">      verbose: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      disable: false, // 不禁用压缩</span></span>
<span class="line"><span style="color:#A6ACCD;">      deleteOriginFile: false, // 压缩后是否删除原文件</span></span>
<span class="line"><span style="color:#A6ACCD;">      threshold: 10240, // 压缩前最小文件大小</span></span>
<span class="line"><span style="color:#A6ACCD;">      algorithm: &#39;gzip&#39;, // 压缩算法</span></span>
<span class="line"><span style="color:#A6ACCD;">      ext: &#39;.gz&#39; // 文件类型</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">   ]</span></span></code></pre></div><h3 id="rollup-plugin-visualizer" tabindex="-1">rollup-plugin-visualizer <a class="header-anchor" href="#rollup-plugin-visualizer" aria-label="Permalink to &quot;rollup-plugin-visualizer&quot;">​</a></h3><blockquote><p>打包后的视图文件——生成一个stats.html文件</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm install rollup-plugin-visualizer -D</span></span></code></pre></div><blockquote><p>配置</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import {visualizer} from &#39;rollup-plugin-visualizer&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    visualizer({</span></span>
<span class="line"><span style="color:#A6ACCD;">      open:true,  //注意这里要设置为true，否则无效</span></span>
<span class="line"><span style="color:#A6ACCD;">      gzipSize:true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      brotliSize:true</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">   ]</span></span></code></pre></div><h2 id="安装pinia" tabindex="-1">安装pinia <a class="header-anchor" href="#安装pinia" aria-label="Permalink to &quot;安装pinia&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm add pinia</span></span></code></pre></div><blockquote><p>在src目录新建store文件夹，新建index.ts文件，代码如下：</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 因为用了“unplugin-auto-import”插件 可以不需要再import Pinia的API</span></span>
<span class="line"><span style="color:#A6ACCD;">// import { createPinia } from &#39;pinia&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 创建pinia状态管理对象</span></span>
<span class="line"><span style="color:#A6ACCD;">const pinia = createPinia()</span></span>
<span class="line"><span style="color:#A6ACCD;">export default pinia</span></span></code></pre></div><blockquote><p>在main.ts文件中引入，代码如下：</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import pinia from &#39;./store&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(pinia)</span></span></code></pre></div><blockquote><p>在store文件夹中新建modules文件夹（当然也可以不建，我这是为了区分管理），新建user.ts文件，代码如下：</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const useUserStore = defineStore(&#39;user&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      token: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      avatar: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      nickName: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      userId: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      dept: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">      permissions: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">      permBtn: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">      permCode: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  getters: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default useUserStore</span></span></code></pre></div><blockquote><blockquote><p>使用 defineStore() 定义一个 Store ；defineStore() 第一个参数是 storeId （必须要），第二个参数是一个选项对象：中有state（是一个函数返回一个对象）、getters、actions store 是一个用 reactive 包裹的对象，如果直接解构会失去响应性。我们可以使用 storeToRefs() 对其进行解构：</p></blockquote></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import useUserStore from &#39;@/store/modules/user&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const userStore= useUserStore()</span></span>
<span class="line"><span style="color:#A6ACCD;">const { hello: myHello } = storeToRefs(userStore)</span></span></code></pre></div><h2 id="集成qiankun-微前端-父级项目" tabindex="-1">集成qiankun（微前端）父级项目 <a class="header-anchor" href="#集成qiankun-微前端-父级项目" aria-label="Permalink to &quot;集成qiankun（微前端）父级项目&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm install qiankun</span></span></code></pre></div><blockquote><p>修改main.ts</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { registerMicroApps, start } from &#39;qiankun&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">registerMicroApps(</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &#39;subApp&#39;, // 必须与微应用注册名字相同</span></span>
<span class="line"><span style="color:#A6ACCD;">      entry: &#39;http://192.168.8.50:3301&#39;, // 入口路径，开发时为微应用所启本地服务，上线时为微应用线上路径</span></span>
<span class="line"><span style="color:#A6ACCD;">      container: &#39;#sub-app-container&#39;, // app.vue 配置的挂载容器 id</span></span>
<span class="line"><span style="color:#A6ACCD;">      activeRule: &#39;/subapp&#39;, // 当访问路由为 home 时加载微应用</span></span>
<span class="line"><span style="color:#A6ACCD;">      props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 主应用向微应用传递参数</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //生命周期钩子函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    beforeLoad: async (app) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;beforeLoad&#39;, app)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    beforeMount: async (app) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;beforeMount &#39;, app)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    afterMount: async (app) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;afterMount&#39;, app)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    beforeUnmount: async (app) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;beforeUnmount &#39;, app)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    afterUnmount: async (app) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;afterUnmount&#39;, app)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 启动 qiankun</span></span>
<span class="line"><span style="color:#A6ACCD;">start()</span></span></code></pre></div><h2 id="集成qiankun-微前端-子级项目" tabindex="-1">集成qiankun（微前端）子级项目 <a class="header-anchor" href="#集成qiankun-微前端-子级项目" aria-label="Permalink to &quot;集成qiankun（微前端）子级项目&quot;">​</a></h2><blockquote><p>安装vite-plugin-qiankun</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm add vite-plugin-qiankun</span></span></code></pre></div><blockquote><p>修改vite.config.ts</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import qiankun from &#39;vite-plugin-qiankun&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">qiankun(&#39;subApp&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 微应用名字，与主应用注册的微应用名字保持一致</span></span>
<span class="line"><span style="color:#A6ACCD;">    useDevMode: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  }),</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">server: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  headers: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;Access-Control-Allow-Origin&#39;: &#39;*&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  host: &#39;0.0.0.0&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  port: 3301,</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span></code></pre></div><blockquote><p>修改router.ts</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { qiankunWindow } from &#39;vite-plugin-qiankun/dist/helper&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const router = createRouter({</span></span>
<span class="line"><span style="color:#A6ACCD;">  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? &#39;/subApp/&#39; : &#39;/&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  routes: routes,</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><blockquote><p>修改main.ts</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &#39;./style.css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import pinia from &#39;./store&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import router from &#39;./router&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ElementPlus from &#39;element-plus&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &#39;./style/element/index.scss&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Cookies from &#39;js-cookie&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import locale from &#39;element-plus/lib/locale/lang/zh-cn&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import * as ElementPlusIconsVue from &#39;@element-plus/icons-vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { renderWithQiankun, qiankunWindow } from &#39;vite-plugin-qiankun/dist/helper&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let instance: any = null</span></span>
<span class="line"><span style="color:#A6ACCD;">function render(props: any = {}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { container } = props</span></span>
<span class="line"><span style="color:#A6ACCD;">  instance = createApp(App)</span></span>
<span class="line"><span style="color:#A6ACCD;">  instance.use(router)</span></span>
<span class="line"><span style="color:#A6ACCD;">  instance.use(pinia)</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 注册全局api方法</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 注册所有图标</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    instance.component(key, component)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 注册ElementPlus</span></span>
<span class="line"><span style="color:#A6ACCD;">  instance.use(ElementPlus, {</span></span>
<span class="line"><span style="color:#A6ACCD;">    locale, // 语言设置</span></span>
<span class="line"><span style="color:#A6ACCD;">    // size: Cookies.get(&#39;size&#39;) || &#39;medium&#39; // 尺寸设置</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">  instance?.mount(container ? container.querySelector(&#39;#app&#39;) : &#39;#app&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;开始加载相关内容&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">renderWithQiankun({</span></span>
<span class="line"><span style="color:#A6ACCD;">  mount(props: any) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    render(props)</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  bootstrap() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;%c&#39;, &#39;color:green;&#39;, &#39; ChildOne bootstrap&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  update() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;%c&#39;, &#39;color:green;&#39;, &#39; ChildOne update&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  unmount(props: any) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;unmount&#39;, props)</span></span>
<span class="line"><span style="color:#A6ACCD;">    instance.unmount()</span></span>
<span class="line"><span style="color:#A6ACCD;">    instance._container.innerHTML = &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    instance = null</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">if (!qiankunWindow.__POWERED_BY_QIANKUN__) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;并不是qiankun渲染&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  render()</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="封装自己的组件" tabindex="-1">封装自己的组件 <a class="header-anchor" href="#封装自己的组件" aria-label="Permalink to &quot;封装自己的组件&quot;">​</a></h2><blockquote><p>给各自的组件都加上install</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import YuButton from &#39;./src/index.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">YuButton.install = (App) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  App.component(YuButton.name, YuButton)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default YuButton</span></span></code></pre></div><blockquote><p>统一暴露给外部</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import YuButton from &#39;./button&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//按需引入</span></span>
<span class="line"><span style="color:#A6ACCD;">export { YuButton }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const components = [YuButton]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const YuUI = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  install(App) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    components.forEach((item) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      App.component(item.name, item)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default YuUI</span></span></code></pre></div><h2 id="安装vitepress" tabindex="-1">安装vitepress <a class="header-anchor" href="#安装vitepress" aria-label="Permalink to &quot;安装vitepress&quot;">​</a></h2><blockquote><p>一个md和vue都可以使用的文档</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm add vitepress vitepress-theme-demoblock -D</span></span></code></pre></div><blockquote><p>新建doces文件夹，创建首页</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;">layout: home</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">title: Yu-el-ui</span></span>
<span class="line"><span style="color:#A6ACCD;"># titleTemplate: 选项卡描述</span></span>
<span class="line"><span style="color:#A6ACCD;">editLink: true</span></span>
<span class="line"><span style="color:#A6ACCD;">lastUpdated: true</span></span>
<span class="line"><span style="color:#A6ACCD;">hero:</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: Yu-el-ui</span></span>
<span class="line"><span style="color:#A6ACCD;">  text: vue3基础组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  tagline: Vue3 中基于Element-plus二次封装基础组件文档</span></span>
<span class="line"><span style="color:#A6ACCD;">  image:</span></span>
<span class="line"><span style="color:#A6ACCD;">    src: /img/wocwin.jpg</span></span>
<span class="line"><span style="color:#A6ACCD;">    alt: Yu-el-ui</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions:</span></span>
<span class="line"><span style="color:#A6ACCD;">    - theme: brand</span></span>
<span class="line"><span style="color:#A6ACCD;">      text: 安装指南</span></span>
<span class="line"><span style="color:#A6ACCD;">      link: /components/</span></span>
<span class="line"><span style="color:#A6ACCD;">    - theme: brand</span></span>
<span class="line"><span style="color:#A6ACCD;">      text: 组件预览</span></span>
<span class="line"><span style="color:#A6ACCD;">      link: /components/TSelect/base.md</span></span>
<span class="line"><span style="color:#A6ACCD;">features:</span></span>
<span class="line"><span style="color:#A6ACCD;">  - icon: 🔨</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: 实际项目</span></span>
<span class="line"><span style="color:#A6ACCD;">    details: 实际项目中碰到的疑点、难点，致力于更优的自我。。</span></span>
<span class="line"><span style="color:#A6ACCD;">  - icon: 🧩</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: 基础组件</span></span>
<span class="line"><span style="color:#A6ACCD;">    details: 基于Element-plus二次封装；使用组件 Demo 快速体验交互细节。。</span></span>
<span class="line"><span style="color:#A6ACCD;">  - icon: ✈️</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: Vue驱动。</span></span>
<span class="line"><span style="color:#A6ACCD;">    details: 享受 Vue3 + vite3 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- &lt;p style=&quot;display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">    justify-content: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">    align-items: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-top: 10px;&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;a href=&quot;https://github.com/vuejs/vue&quot; target=&quot;_blank&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;img src=&quot;https://img.shields.io/badge/vue-3.2.36-brightgreen.svg&quot; alt=&quot;vue3&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;a href=&quot;https://gitee.com/wocwin/t-ui-plus/stargazers&quot; target=&quot;_blank&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;img src=&quot;https://gitee.com/wocwin/t-ui-plus/badge/star.svg?theme=dark&quot; alt=&quot;t-ui-plus&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   &lt;a href=&quot;https://github.com/wocwin/t-ui-plus/stargazers&quot; target=&quot;_blank&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;img src=&quot;https://img.shields.io/github/stars/wocwin/t-ui-plus.svg&quot; alt=&quot;t-ui-plus&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   &lt;a href=&quot;https://www.npmjs.com/package/@wocwin/t-ui-plus&quot; target=&quot;_blank&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;img alt=&quot;npm&quot; src=&quot;https://img.shields.io/npm/v/@wocwin/t-ui-plus.svg&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/p&gt; --&gt;</span></span></code></pre></div><blockquote><p>新建components，放对应的组件说明和示例 新建.vitepress文件夹config.ts</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { defineConfig } from &#39;vitepress&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { demoBlockPlugin } from &#39;vitepress-theme-demoblock&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default defineConfig({</span></span>
<span class="line"><span style="color:#A6ACCD;">  title: &#39;yuui基础组件文档&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  description: &#39;基于Element-plus基础组件封装使用&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  lang: &#39;cn-ZH&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  base: &#39;/yuui/&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  lastUpdated: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  themeConfig: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    logo: &#39;/favicon.ico&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    siteTitle: &#39;yuui基础组件文档&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    outline: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">    nav:[</span></span>
<span class="line"><span style="color:#A6ACCD;">      { text: &#39;基础组件&#39;, link: &#39;/components/Yubutton/base.md&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    sidebar:{</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;/components&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        // {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //   text: &#39;常用组件&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        //   items: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        //     { text: &#39;下拉选择组件&#39;, link: &#39;/components/TSelect/base.md&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">        //     { text: &#39;下拉选择表格组件&#39;, link: &#39;/components/TSelectTable/base.md&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">        //   ]</span></span>
<span class="line"><span style="color:#A6ACCD;">        // },</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  markdown: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    config(md) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      md.use(demoBlockPlugin, {</span></span>
<span class="line"><span style="color:#A6ACCD;">        customClass: &#39;demoblock-custom&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><blockquote><p>新增命令</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&quot;docs:dev&quot;: &quot;pnpm run register:components &amp;&amp; vitepress dev docs&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;docs:build&quot;: &quot;pnpm run register:components &amp;&amp; vitepress build docs&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;register:components&quot;: &quot;vitepress-rc&quot;</span></span></code></pre></div><h2 id="通过github预览页面" tabindex="-1">通过github预览页面 <a class="header-anchor" href="#通过github预览页面" aria-label="Permalink to &quot;通过github预览页面&quot;">​</a></h2><blockquote><p>修改config.ts里面的base</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">base: &#39;/yu-el-ui/&#39;,</span></span></code></pre></div><blockquote><p>添加命令,deploy.sh</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span style="color:#A6ACCD;">set -e</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 生成静态文件</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm run docs:build</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 进入生成的文件夹</span></span>
<span class="line"><span style="color:#A6ACCD;">cd ./docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git init</span></span>
<span class="line"><span style="color:#A6ACCD;">git add -A</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m &#39;deploy&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">git push -f https://github.com/onewebstudy/yu-el-ui.git master:gh-pages</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">cd -</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&quot;deploy&quot;: &quot;deploy.sh&quot;</span></span></code></pre></div>`,133),o=[e];function t(c,i,r,C,A,u){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{D as __pageData,d as default};
