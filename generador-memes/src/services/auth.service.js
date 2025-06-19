class AuthService {

  static async login(email, password) {
    const resp = await fetch('http://localhost:3000/login', {
      method: 'POST',
      // body: JSON.stringify(meme),
      body: JSON.stringify({email, password}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!resp.ok) {
      throw new Error('Algo ha ido mal')
    }
    const data = await resp.json()
    console.log(data)
    return data
  }

}

export default AuthService