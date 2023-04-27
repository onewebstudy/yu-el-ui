/*
 * @Author: yubb
 * @Date: 2023-04-26 15:20:33
 * @LastEditTime: 2023-04-26 15:30:06
 * @LastEditors: yubb
 * @Description:
 * @FilePath: \yubb-el-ui\src\service\index.ts
 */
import YBRequest from './request'

export default new YBRequest({
  baseURL: '/api',
  timeout: 10000,
})
