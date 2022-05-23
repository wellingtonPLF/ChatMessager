import { Usuario } from '@/shared/model/Usuario'
import UsuarioService from '@/shared/service/UsuarioService.js'

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
  computed: {

  },
  mounted () {

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
              this.$Usuario.id = user.id
              this.$Usuario.name = user.name
              this.$router.push('/chatroom')
            } else {
              this.invalido = 'usuario invalido!'
            }
          }
        ).catch(
          (e) => {
            console.error("BackEnd isn't Up...")
            this.invalido = 'server offline...'
          }
        )
      } else {
        if (this.usuario.name !== undefined && this.usuario.password !== undefined) {
          UsuarioService.inserir(this.usuario).then(
            it => {
              this.$router.push('/signIn').then(r => console.log('Usuario Inserido!'))
            }
          )
        } else {
          this.invalido = 'Campo invalido!'
        }
      }
    }
  }
}
