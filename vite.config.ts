/*
 * @Author: yubb
 * @Date: 2023-04-26 13:57:24
 * @LastEditTime: 2023-04-26 14:51:57
 * @LastEditors: yubb
 * @Description:
 * @FilePath: \yubb-el-ui\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.js', 'src/**/*.vue', 'src/*.ts', 'src/*.js', 'src/*.vue'],
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'], // 自动导入vue、vue-router、pinia相关API
      dts: 'src/auto-import.d.ts', // 生成 `auto-import.d.ts` 全局声明
      eslintrc: {
        enabled: true, // Default `false`
      },
    }),
    viteCompression({
      verbose: true,
      disable: false, // 不禁用压缩
      deleteOriginFile: false, // 压缩后是否删除原文件
      threshold: 10240, // 压缩前最小文件大小
      algorithm: 'gzip', // 压缩算法
      ext: '.gz', // 文件类型
    }),
    visualizer({
      open: true, //注意这里要设置为true，否则无效
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      components: resolve(__dirname, 'src/components'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', 'mjs'],
  },
  server: {
    host: '0.0.0.0',
    port: 3300,
  },
  build: {
    outDir: 'lib',
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      entry: './packages/index.ts',
      name: 'yu-el-ui',
    },
  },
})
