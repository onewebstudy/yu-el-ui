/*
 * @Author: yubb
 * @Date: 2023-04-26 15:08:06
 * @LastEditTime: 2023-04-26 15:53:55
 * @LastEditors: yubb
 * @Description:
 * @FilePath: \yubb-el-ui\src\service\request.ts
 */
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
