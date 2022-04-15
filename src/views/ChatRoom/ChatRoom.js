import UsuarioService from '@/shared/service/UsuarioService'
import MessageService from '@/shared/service/MessageService'
import LocalStorage from '@/shared/utils/localStorage'
import { Message } from '@/shared/model/Message'
import { sortObjectArray } from '@/shared/utils/quickSort'

export default {
  name: 'chat-room',
  components: {},
  props: [],
  data () {
    return {
      valor: '',
      valueMessage: '',
      messages: []
    }
  },
  mounted () {
    const idUser = LocalStorage.getToken()
    UsuarioService.pesquisarPorId(idUser).then(
      it => {
        this.valor = it.name + ': type your message!'
      }
    )

    MessageService.listar().then(
      it => {
        let contador = 0
        it.forEach(element => {
          UsuarioService.pesquisarPorId(element.usuario_id).then(
            response => {
              contador++
              this.messages.push({ id: element.id, description: element.description, name: response.name })
              if (contador === it.length) {
                sortObjectArray(this.messages)
                const container = this.$el.querySelector('#msg')
                container.scrollTop = container.scrollHeight
              }
            }
          )
        })
      }
    )
  },
  methods: {
    homePage () {
      LocalStorage.removeToken('usuario')
      this.$router.push('/')
    },
    show_me () {
      console.log(this.messages)
    },
    onEnter (e) {
      const mensagem = new Message(this.valueMessage, LocalStorage.getToken())
      MessageService.inserir(mensagem).then(
        it => {
          this.valueMessage = ''
          console.log('Mensagem Inserida!')
        }
      )
    }
  }
}
