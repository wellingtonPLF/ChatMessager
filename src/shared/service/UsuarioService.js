import { Usuario } from '../model/Usuario'
import api from './_axiosConfig'

class UsuarioService {
  constructor () {
    this.path = '/usuarios'
  }

  async listar () {
    const { data } = await api.get(`${this.path}.json`)
    return data
  }

  async inserir (usuario) {
    const { data } = await api.post(this.path, Usuario.refract(usuario))
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

  async atualizar (usuario) {
    const { data } = await api.put(`${this.path}/`, JSON.stringify(usuario))
    return data
  }
}

export default new UsuarioService()
