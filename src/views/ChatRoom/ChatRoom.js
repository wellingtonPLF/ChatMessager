import UsuarioService from '@/shared/service/UsuarioService'
import MessageService from '@/shared/service/MessageService'
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
  channels: {
    ChatChannel: {
      received (data) {
        UsuarioService.pesquisarPorId(data.usuario).then(
          it => {
            this.messages.push({ description: data.description, id: data.usuario, name: it.name })
            this.$nextTick(function () {
              this.scrollDown()
            })
          }
        )
      }
    }
  },
  mounted () {
    UsuarioService.pesquisarPorId(this.$Usuario.id).then(
      it => {
        this.valor = it.name + ': type your message!'
        this.$Usuario.name = it.name
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
                this.$nextTick(function () {
                  this.scrollDown()
                })
              }
            }
          )
        })
      }
    )
  },
  methods: {
    logOut () {
      this.$router.push('/')
    },
    show_me () {
      console.log(this.messages)
    },
    scrollDown () {
      const container = this.$el.querySelector('#msg')
      container.scrollTop = container.scrollHeight - container.clientHeight
    },
    onEnter (e) {
      const mensagem = new Message(this.valueMessage, this.$Usuario.id)
      MessageService.inserir(mensagem).then(
        it => {
          this.valueMessage = ''
          console.log('Mensagem Inserida!')
        }
      )
    }
  }
}
