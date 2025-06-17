const required = (value) => {
  if (value) {
    return null
  }
  return `Este campo es obligatorio`
}

const minLength = (value, min = 5) => {
  if (value.length >= min) {
    return null
  }

  return `Este campo necesita al menos ${min} caracteres, te faltan ${min - value.length}`
}

const esEmail = (value) => {
  if (value.includes('@')) {
    return null
  }

  return 'El email no es valido, le falta el @'
}

const tieneMayus = (value) => {
  if (value.toLowerCase() !== value) {
    return null
  }

  return "Este campo tiene que tener mayúsculas"
}

export default {
  required,
  minLength,
  esEmail,
  tieneMayus,
}