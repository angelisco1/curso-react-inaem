class MemesService {

  static async getMemes() {
    const resp = await fetch('http://localhost:3000/memes')
    const data = await resp.json()
    return data
  }

  static async getMeme(memeId) {
    const resp = await fetch(`http://localhost:3000/memes/${memeId}?_expand=user`)
    const data = await resp.json()
    return data
  }

  static async createMeme(meme) {
    console.log(meme)
    const token = localStorage.getItem('authToken')
    const resp = await fetch('http://localhost:3000/memes', {
      method: 'POST',
      // body: JSON.stringify(meme),
      body: JSON.stringify(meme),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
    if (!resp.ok) {
      throw new Error('Algo ha ido mal')
    }
    const data = await resp.json()
    return data
  }

  static async updateLikesMeme(memeId, currentLikes) {
    const resp = await fetch(`http://localhost:3000/memes/${memeId}`, {
      method: 'PATCH',
      body: JSON.stringify({likes: currentLikes + 1}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await resp.json()
    return data
  }

}

export default MemesService