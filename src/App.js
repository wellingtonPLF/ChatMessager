export default {
  name: 'app',
  data () {
    return {
      screenHeight: window.innerHeight,
      window_Width: screen.width
    }
  },
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
