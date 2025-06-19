const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const SECRET = 'shhhh no se lo digas a nadie'

const usuarioValido = {
  email: "cfalco@gmail.com",
  password: "1234",
  nombre: "Charly",
}

server.use(jsonServer.bodyParser)
server.use(middlewares)


server.post('/login', (req, res, next) => {
  const { email, password } = req.body

  if (email !== usuarioValido.email || password !== usuarioValido.password) {
    return res.status(401).json({msg: "Las credenciales no son validas"})
  }

  // generar un JWT
  const { nombre } = usuarioValido
  const token = jwt.sign({email, nombre}, SECRET)
  console.log({token})

  return res.json({token})
})

server.post('/memes', (req, res, next) => {
  const { authorization } = req.headers
  const [bearer, token] = authorization.split(" ")

  try {
    const payload = jwt.verify(token, SECRET)
    return next()
  } catch (err) {
    return res.status(401).json({msg: 'Tu token no es valido'})
  }
})


server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})