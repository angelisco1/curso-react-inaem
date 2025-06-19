import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Provider } from "./ui/provider"
import Home from '../pages/Home'
import CrearMeme from '../pages/CrearMeme'
import InfoMeme from '../pages/InfoMeme'
import Header from './layout/Header'
import Error404 from '../pages/Error404'
import Login from '../pages/Login'

const App = () => {
  const [userIsAuthenticated, setAuth] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (token) {
      setAuth(true)
    }
  }, [])

  return (
    <div>
      <Provider>

      <Header isAuthenticated={userIsAuthenticated} />

      <Routes>
        <Route path="/" element={<Home />} />
        {userIsAuthenticated && <Route path="/crear-meme" element={<CrearMeme />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/meme/:id" element={<InfoMeme />} />
        {/* <Route path="*" element={<Error404 />} /> */}
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>

        {/* <Component {...pageProps} /> */}
      {/* <Footer /> */}
      </Provider>
    </div>
  )
}

export default App
