import React, { useEffect, useState } from 'react'
import MemesService from '../services/memes.service'
import MemeItem from '../components/MemeItem'

const Home = () => {
  const [memes, setMemes] = useState([])

  useEffect(() => {
    MemesService.getMemes()
      .then(memes => setMemes(memes))
  }, [])

  const likeMeme = async (memeId, currentLikes) => {
    const updatedMeme = await MemesService.updateLikesMeme(memeId, currentLikes)
    console.log(updatedMeme)
    const updatedMemes = memes.map(meme => {
      if (meme.id === memeId) {
        return updatedMeme
      }
      return meme
    })
    setMemes(updatedMemes)
  }

  const listaMemes = memes.map(meme => (<MemeItem key={meme.id} meme={meme} handleLikes={likeMeme} />))

  return (
    <div>
      <h2>Home</h2>

      {listaMemes}

    </div>
  )
}

export default Home