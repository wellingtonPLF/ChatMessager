export class Usuario {
  constructor (id, name, password) {
    this._id = id
    this._name = name
    this._password = password
  }

  get id () {
    return this._id
  }

  set id (id) {
    this._id = id
  }

  get name () {
    return this._name
  }

  set name (name) {
    this._name = name
  }

  get password () {
    return this._password
  }

  set password (password) {
    this._password = password
  }
}
