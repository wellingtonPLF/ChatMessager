import { Usuario } from '@/shared/model/Usuario'
import UsuarioService from '@/shared/service/UsuarioService.js'
import LocalStorageService from '@/shared/utils/localStorage.js'

export default {
  name: 'authentication-component',
  components: {},
  props: {
    type: String
  },
  data () {
    return {
      usuario: new Usuario(),
      invalido: ''
    }
  },
  methods: {
    authentication () {
      if (this.type === 'signIn') {
        UsuarioService.listar().then(
          it => {
            const user = it.filter(u => {
              if (u.name === this.usuario.name && u.password === this.usuario.password) {
                return u
              }
              return undefined
            })[0]
            if (user !== undefined) {
              LocalStorageService.setToken(user.id)
              this.$router.push('/chatroom')
            } else {
              this.invalido = 'usuario invalido!'
            }
          }
        ).catch(
          (_) => {
            console.error("BackEnd isn't Up...")
            this.invalido = 'server offline...'
          }
        )
      } else {
        if (this.usuario.name !== undefined && this.usuario.password !== undefined && this.usuario.email !== undefined) {
          UsuarioService.inserir(this.usuario).then(
            _ => {
              this.$router.push('/signIn').then(__ => console.log('Usuario Inserido!'))
            }
          )
        } else {
          this.invalido = 'Campo invalido!'
        }
      }
    }
  }
}
