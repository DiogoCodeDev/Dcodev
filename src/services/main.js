import axios from 'axios'

class Main {
  async request(method, url, payload = {}, tk = '') {
    const config = {
      method,
      url,
      headers: {},
    }

    if (tk) {
      config.headers['Authorization'] = `Bearer ${tk}`
    }

    const hasPayload = Object.keys(payload).length > 0

    if (method !== 'get' && method !== 'delete') {
      config.data = payload
    } else if (method === 'delete' && hasPayload) {
      config.data = payload
    } else if (method === 'get' && hasPayload) {
      config.params = payload
    }

    try {
      const resp = await axios(config)
      if (resp.data?.header?.codigo === 1) {
        return resp.data
      } else if (resp.data?.header?.codigo === 0) {
        return Promise.reject(resp.data?.header?.msg || 'Ocorreu um erro na operação')
      } else {
        return resp.data
      }
    } catch (err) {
      return Promise.reject(err?.response?.data || err.message || err)
    }
  }

  get(url, params = {}, tk = '') {
    return this.request('get', url, params, tk)
  }

  post(url, payload = {}, tk = '') {
    return this.request('post', url, payload, tk)
  }

  put(url, payload = {}, tk = '') {
    return this.request('put', url, payload, tk)
  }

  delete(url, payload = {}, tk = '') {
    return this.request('delete', url, payload, tk)
  }
}

export const mainService = new Main()
