class LocalStorageService {
  getToken () {
    return localStorage.getItem('usuario')
  }

  setToken (token) {
    localStorage.setItem('usuario', token)
    console.log('Token Add')
  }

  removeToken (keyName) {
    localStorage.removeItem(keyName)
    localStorage.clear()
    console.log('Token Removido')
  }
}

export default new LocalStorageService()
