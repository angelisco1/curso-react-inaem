import React, { useEffect, useState } from 'react'
import MemesService from '../services/memes.service'
import Meme from '../components/Meme'

const Home = () => {
  const [memes, setMemes] = useState([])

  useEffect(() => {
    MemesService.getMemes()
      .then(memes => setMemes(memes))
  }, [])

  const listaMemes = memes.map(meme => (<Meme key={meme.id} meme={meme} />))

  return (
    <div>
      <h2>Home</h2>

      {listaMemes}

    </div>
  )
}

export default Home