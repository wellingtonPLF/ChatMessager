/* eslint-disable */

export class Usuario {
  
  constructor (id, name, email, password) {
    this._id = id
    this._name = name
    this._email = email
    this._password = password
  }

  static refract(usuario) {
    const result = { 
      id: usuario.id,
      name: usuario.name,
      email: usuario.email,
      password: usuario.password  
    }
    return result;
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

  get email () {
    return this._email
  }

  set email (email) {
    this._email = email
  }

  get password () {
    return this._password
  }

  set password (password) {
    this._password = password
  }
}
