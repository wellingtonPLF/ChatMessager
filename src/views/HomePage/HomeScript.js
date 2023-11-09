/* eslint-disable */

import localStorage from "@/shared/utils/localStorage"

export default {
  name: 'HomeView',
  data() {
    return {
      value: 'sign in'
    }
  },
  mounted() {
    if (localStorage.getToken('usuario')){
      this.value = "enter"
    }
  }
}
