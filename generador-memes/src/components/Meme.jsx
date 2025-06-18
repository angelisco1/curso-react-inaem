const Meme = ({meme}) => {

  return (
    <div style={{position: 'relative', width: '450px', margin: '20px auto'}}>
      <p style={{color: meme.color, position: 'absolute', top: '0px', width: '100%', textAlign: 'center'}}>{meme.texto1}</p>
      <img src={meme.url} alt="Meme" style={{width: '100%'}} />
      <p style={{color: meme.color, position: 'absolute', bottom: '0px', width: '100%', textAlign: 'center'}}>{meme.texto2}</p>
    </div>
  )
}

export default Meme