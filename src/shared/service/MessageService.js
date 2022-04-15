import axios from 'axios'

class MessageService {
  constructor () {
    this.api = axios.create({ baseURL: 'http://localhost:3000' })
    this.type = '/messages'
  }

  async listar () {
    const { data } = await this.api.get(this.type + '.json')
    return data
  }

  async inserir (message) {
    const { data } = await this.api.post(this.type, message)
    return data
  }

  async remover (id) {
    const { data } = await this.api.delete(this.type + `/${id}.json`)
    return data
  }

  async pesquisarPorId (id) {
    const { data } = await this.api.get(this.type + `/${id}.json`)
    return data
  }

  async atualizar (message) {
    const { data } = await this.api.put(this.type + '/', message)
    return data
  }
}

export default new MessageService()
