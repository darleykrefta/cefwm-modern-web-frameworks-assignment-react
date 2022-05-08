import axios from 'axios'

const BASE_URL = 'http://localhost:8080'

type ClientTypes = {
  get<T>(path: string): Promise<T>
  post<T, R>(path: string, body: T): Promise<R>
  put<T, R>(path: string, body: T): Promise<R>
  delete<T>(path: string): Promise<T>
}

function httpClient(baseUrl: string = BASE_URL): ClientTypes {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {
      'Content-type': 'application/json',
      Authorization: ''
    }
  })

  instance.interceptors.response.use(response => response.data)

  return {
    get: path => instance.get(`${baseUrl}/${path}`),
    post: (path, body) => instance.post(`${baseUrl}/${path}`, body),
    put: (path, body) => instance.put(`${baseUrl}/${path}`, body),
    delete: path => instance.delete(`${baseUrl}/${path}`)
  }
}

export default httpClient
