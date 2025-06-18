class MemesService {

  static async getMemes() {
    const resp = await fetch('http://localhost:3000/memes')
    const data = await resp.json()
    return data
  }

  static async createMeme(meme) {
    console.log(meme)
    const resp = await fetch('http://localhost:3000/memes', {
      method: 'POST',
      // body: JSON.stringify(meme),
      body: meme,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!resp.ok) {
      throw new Error('Algo ha ido mal')
    }
    const data = await resp.json()
    return data
  }

}

export default MemesService