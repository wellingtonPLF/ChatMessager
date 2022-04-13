import UsuarioService from '@/shared/service/UsuarioService.js'

export default {
  name: 'authentication-component',
  components: {},
  props: {
    type: String
  },
  created () {
    return {
      usuarioService: UsuarioService
    }
  },
  data () {
    return {
      username: '',
      password: ''
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
            console.log(it)
          }
        )
        this.$router.push('/chatroom').then(r => console.log('After Route Do This'))
      } else {
        this.$router.push('/signIn').then(r => console.log('After Route Do This'))
      }
    }
  }
}
