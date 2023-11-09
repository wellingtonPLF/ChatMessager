import api from './_axiosConfig'

class MessageService {
  constructor () {
    this.path = '/messages'
  }

  async listar () {
    const { data } = await api.get(`${this.path}.json`)
    return data
  }

  async inserir (message) {
    const { data } = await api.post(this.path, message)
    return data
  }

  async remover (id) {
    const { data } = await api.delete(`${this.path}/${id}.json`)
    return data
  }

  async pesquisarPorId (id) {
    const { data } = await api.get(`${this.path}/${id}.json`)
    return data
  }

  async atualizar (message) {
    const { data } = await api.put(`${this.path}/`, message)
    return data
  }
}

export default new MessageService()
