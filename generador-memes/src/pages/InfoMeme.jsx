import React, { useEffect, useState } from 'react'
import Meme from '../components/Meme'
import { useParams } from 'react-router-dom'
import MemesService from '../services/memes.service'


const InfoMeme = () => {
  const { id } = useParams()
  const [meme, setMeme] = useState(null)

  useEffect(() => {
    MemesService.getMeme(id)
      .then(data => {
        console.log(data)
        setMeme(data)
      })
  }, [])

  return (
    <div>
      {meme && (
        <>
          <h2>Meme {id}</h2>
          <Meme meme={meme} />
          <p>El autor es: {meme.user.nombre}</p>
        </>
      )}
      {!meme && <p>Cargando datos...</p>}
    </div>
  )
}

export default InfoMeme