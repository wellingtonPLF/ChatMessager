export default {
  name: 'app',
  data () {
    return {
    }
  },
  channels: {
    ChatChannel: {
      connected () {
        console.log('I am connected.')
      },
      rejected () {},
      received (data) {
        console.log('Message received')
      },
      disconnected () {}
    }
  },
  mounted () {
    this.$cable.subscribe({
      channel: 'ChatChannel',
      room: 'public'
    })
  },
  created () {
  }
}
