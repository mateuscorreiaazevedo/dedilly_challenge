import axios, { AxiosInstance, AxiosResponse } from 'axios'

type HttpRequest = {
  url: string
  body?: any
  headers?: any
  params?: any
  method?: 'get' | 'post' | 'put' | 'delete'
}

export type HttpResponse<T> = {
  code: number
  body?: T
}

export class Service {
  private api: AxiosInstance

  constructor (private readonly baseURL: string = '') {
    this.api = axios.create({
      baseURL: this.baseURL
    })
  }

  async request<T = any> (props: HttpRequest): Promise<HttpResponse<T>> {
    const { url, body, headers, method = 'get', params } = props
    let response: AxiosResponse

    try {
      response = await this.api.request({
        url,
        data: body,
        method,
        params,
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
      })
    } catch (error) {
      response = (error as any).response
    }

    return {
      code: response.status,
      body: response.data
    }
  }
}
