export default {
  name: 'app',
  channels: {
    ChatChannel: {
      connected () {
        console.log('I am connected.')
      },
      rejected () {},
      received () {
        console.log('Message received')
      },
      disconnected () {}
    }
  },
  mounted () {
    this.$cable.subscribe({
      channel: 'ChatChannel'
    })
  }
}
