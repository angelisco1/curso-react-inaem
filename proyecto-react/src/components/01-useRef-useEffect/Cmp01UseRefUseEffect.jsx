import { useEffect, useMemo, useRef, useState } from 'react'
import Video from '../../../public/video.mp4'
import ListadoCocktails from './ListadoCocktails'
import ListadoCocktailsSinPeticiones from './ListadoCocktailsSinPeticiones'

export const Cmp01UseRefUseEffect = () => {
  const videoRef = useRef(null)
  const [volumen, setVolumen] = useState(0)

  const [nombre, setNombre] = useState("Charly")
  const [apellido, setApellido] = useState("Falco")

  // Memoization
  const nombreCompleto = useMemo(() => {
    const nombreCompleto = nombre + " " + apellido
    console.log('Nombre completo: ' + nombreCompleto)
    return nombreCompleto
  }, [nombre, apellido])

  const handlePlay = () => {
    console.log(videoRef)
    videoRef?.current.play()
  }

  const handlePause = () => {
    videoRef?.current.pause()
  }

  const handleVolumen = (event) => {
    console.log(event.target.value)
    const nuevoVolumen = event.target.value
    setVolumen(nuevoVolumen)
  }

  useEffect(() => {
    videoRef.current.volume = volumen / 100
  }, [volumen])

  return (
    <div>

      <h1>Bienvenido {nombreCompleto}</h1>

      <ListadoCocktailsSinPeticiones />

      <input type="text" value={nombre} onInput={(event) => setNombre(event.target.value)} />

      <ListadoCocktails />

      <hr />

      <video src={Video} width="200" ref={videoRef}></video>
      <button type="button" onClick={() => handlePlay()}>Play</button>
      <button type="button" onClick={() => handlePause()}>Pause</button>
      <input type="range" value={volumen} min="0" max="100" onInput={handleVolumen} />
    </div>
  )

}

export default Cmp01UseRefUseEffect