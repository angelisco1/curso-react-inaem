import { useEffect, useRef, useState } from 'react'
import { useInputField } from '../../hooks/useInputField'

export const Formularios = () => {
  // FORMULARIO NO CONTROLADO
  const refUsernameInput = useRef(null)
  const refPasswordInput = useRef(null)

  // FORMULARIO CONTROLADO
  // const [email, setEmail] = useState('')
  // const [erroresEmail, setErroresEmail] = useState([])
  const [email, setEmail, erroresEmail] = useInputField('', { required: true, esEmail: true })
  const [password, setPassword, erroresPw] = useInputField('', { required: true, minLength: 8, tieneMayus: true })

  const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  // const [erroresPw, setErroresPw] = useState([])

  // useEffect(() => {
  //   const listaErrores = []
  //   if (!email) {
  //     listaErrores.push("El email no puede estar vacío")
  //   }

  //   if (!email.includes('@')) {
  //     listaErrores.push("El email no es valido, le falta el @")
  //   }

  //   setErroresEmail(listaErrores)
  // }, [email])

  // useEffect(() => {
  //   const listaErrores = []
  //   if (!password) {
  //     listaErrores.push("La contraseña no puede estar vacía")
  //   }

  //   if (password.length < 8) {
  //     listaErrores.push("La contraseña tiene que tener al menos 8 caracteres")
  //   }

  //   if (password.toLowerCase() === password) {
  //     listaErrores.push("La contraseña tiene que tener mayúsculas")
  //   }

  //   setErroresPw(listaErrores)
  // }, [password])


  const handleSubmit = (event) => {
    event.preventDefault()

    const username = refUsernameInput.current.value
    const password = refPasswordInput.current.value
    console.log('Haciendo login con los datos: ', { username, password })
  }

  const handleSubmit2 = (event) => {
    event.preventDefault()

    if (erroresPw.length > 0 || erroresEmail.length > 0) {
      alert('Hay errores en el formulario')
      return
    }

    console.log('Haciendo login con los datos: ', { username, password, email })
  }

  return (
    <div>
      <h2>Formularios</h2>

      <h3>NO CONTROLADO</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" ref={refUsernameInput} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" ref={refPasswordInput} />
        </div>

        <button type="submit">Login</button>
      </form>

      <h3>CONTROLADO</h3>
      <form onSubmit={handleSubmit2}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" value={email} onInput={(event) => setEmail(event.target.value)} />
          {erroresEmail.length > 0 && <ul>
              {erroresEmail.map((error, i)=> <li key={i}>{error}</li>)}
            </ul>}
        </div>
        <div>
          <label htmlFor="username2">Username</label>
          <input type="text" id="username2" name="username" value={username} onInput={(event) => setUsername(event.target.value)} />
        </div>
        <div>
          <label htmlFor="password2">Password</label>
          <input type="password" id="password2" name="password" value={password} onInput={(event) => setPassword(event.target.value)} />
          {erroresPw.length > 0 && <ul>
              {erroresPw.map((error, i)=> <li key={i}>{error}</li>)}
            </ul>}
        </div>

        <button type="submit" disabled={erroresPw.length > 0 || erroresEmail.length > 0}>Signup</button>
      </form>
    </div>
  )

}

export default Formularios