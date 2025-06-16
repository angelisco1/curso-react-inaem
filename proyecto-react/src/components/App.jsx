import React from 'react'
// import { Cmp01UseRefUseEffect } from './01-useRef-useEffect/Cmp01UseRefUseEffect'
import Cmp01UseRefUseEffect from './01-useRef-useEffect/Cmp01UseRefUseEffect'

const App = () => {
  const nombre = 'Charly'

  return (
    <div>
      <h1>Hola { nombre }!!!</h1>
      <Cmp01UseRefUseEffect />
    </div>
  )
}

export default App