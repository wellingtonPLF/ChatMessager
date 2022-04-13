
export default {
  name: 'chat-room',
  components: {},
  props: [],
  data () {
    return {
      usuarios: [{ name: 'wellington' }, { name: 'larissa' }, { name: 'bianca' }]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    homePage () {
      this.$router.push('/')
    }
  }
}
