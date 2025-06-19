const Meme = ({meme}) => {
  const { texto1, texto2, url, color } = meme

  return (
    <div style={{position: 'relative', width: '450px', margin: '20px auto'}}>
      <p style={{color: color, position: 'absolute', top: '0px', width: '100%', textAlign: 'center'}}>{texto1}</p>
      <img src={url} alt="Meme" style={{width: '100%'}} />
      <p style={{color: color, position: 'absolute', bottom: '0px', width: '100%', textAlign: 'center'}}>{texto2}</p>
    </div>
  )
}

export default Meme