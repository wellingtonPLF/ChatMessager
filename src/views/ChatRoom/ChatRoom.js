/* eslint-disable */

import UsuarioService from '@/shared/service/UsuarioService'
import MessageService from '@/shared/service/MessageService'
import { Message } from '@/shared/model/Message'
import { sortObjectArray } from '@/shared/utils/quickSort'
import LocalStorageService from '@/shared/utils/localStorage.js'

export default {
  name: 'chat-room',
  components: {},
  props: [],
  data () {
    return {
      valueMessage: '',
      usuarios: undefined,
      messages: [],
    }
  },
  channels: {
    ChatChannel: {
      received (data) {
        UsuarioService.pesquisarPorId(data.usuario).then(
          it => {
            this.messages.push({ description: data.description, id: data.usuario, dateTime: data.created_at, name: it.name })
            this.$nextTick(function () {
              this.scrollDown()
            })
          }
        )
      }
    }
  },
  mounted () {
    UsuarioService.pesquisarPorId(LocalStorageService.getToken('usuario')).then(
      it => {
        this.$Usuario.id = it.id
        this.$Usuario.name = it.name
      }
    )
    UsuarioService.listar().then(
      it => {
        this.usuarios = it
      }
    )
    MessageService.listar().then(
      it => {
        let contador = 0
        it.forEach(element => {
          UsuarioService.pesquisarPorId(element.usuario_id).then(
            response => {
              contador++
              this.messages.push({ id: element.id, description: element.description, dateTime: element.created_at, name: response.name })
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
      LocalStorageService.removeToken('usuario')
      this.$router.push('/')
    },
    scrollDown () {
      const container = this.$el.querySelector('#msgScroll')
      container.scrollTop = container.scrollHeight - container.clientHeight
    },
    checkDate(e, t) {
      const currentDate = new Date(e);

      if (t === "time") {
        const timeFormatter = new Intl.DateTimeFormat('pt-BR', {
          hour: 'numeric',
          minute: 'numeric',
          // second: 'numeric'
        });
        const result = timeFormatter.format(currentDate)
        return result
      }
      else {
        const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        });
        return (new Date().toISOString().substring(0, 10) == e.substring(0, 10))? "Today": dateFormatter.format(currentDate);
      }
    },
    onEnter (e) {
      const mensagem = new Message(this.valueMessage, this.$Usuario.id)
      MessageService.inserir(mensagem).then(
        it => {
          this.valueMessage = ''
          this.scrollDown()
          console.log('Mensagem Inserida!')
        }
      )
    }
  }
}
