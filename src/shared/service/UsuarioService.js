import axios from 'axios'

class UsuarioService {
  constructor () {
    this.api = axios.create({ baseURL: 'http://localhost:3000' })
  }

  async listar () {
    const { data } = await this.api.get('/usuarios.json')
    return data
  }

  async inserir (usuario) {
    const { data } = await this.api.post('/usuarios', usuario)
    return data
  }

  async remover (id) {
    const { data } = await this.api.delete(`/usuarios/${id}.json`)
    return data
  }

  async pesquisarPorId (id) {
    const { data } = await this.api.get(`/usuarios/${id}.json`)
    return data
  }

  async atualizar (usuario) {
    const { data } = await this.api.put('/usuarios/', JSON.stringify(usuario))
    return data
  }
}

export default new UsuarioService()
