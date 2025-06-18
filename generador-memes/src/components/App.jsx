import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import { Provider } from "./ui/provider"
import Home from '../pages/Home'
import CrearMeme from '../pages/CrearMeme'
import InfoMeme from '../pages/InfoMeme'
import Header from './layout/Header'

const App = () => {

  return (
    <div>
      {/* <Provider> */}

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crear-meme" element={<CrearMeme />} />
        <Route path="/meme" element={<InfoMeme />} />
      </Routes>

        {/* <Component {...pageProps} /> */}
      {/* <Footer /> */}
      {/* </Provider> */}
    </div>
  )
}

export default App
