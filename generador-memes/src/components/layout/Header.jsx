import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Link to="/">
        <h1>Generador de memes</h1>
      </Link>

      <div>
        <Link to="/crear-meme">Crear meme</Link>
        <button type="button">Login</button>
        <button type="button">Logout</button>
      </div>
    </div>
  )
}

export default Header