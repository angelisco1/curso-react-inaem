import { useEffect, useState } from 'react'

export const ListadoCocktails = () => {
  const [filtro, setFiltro] = useState('')
  const [cocktails, setCocktails] = useState([])

  // Sin lista de dependencias se ejecuta cada vez que cambia algo del estado
  useEffect(() => {
    console.log('Acaba de cambiar algo...')
  })

  // Con [] se ejecuta una sola vez cuando se pinta el componente
  useEffect(() => {
    console.log('Se acaba de pintar el componente')
  }, [])

  // Con [filtro] se ejecuta cada vez que el filtro cambia
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      // async/await

      const resp = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filtro}`)
      const data = await resp.json()
      console.log(data)
      if (!Array.isArray(data.drinks)) {
        setCocktails([])
      } else {
        setCocktails(data.drinks)
      }

      // fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filtro}`)
      //   .then((resp) => {
      //     console.log(resp)
      //     return resp.json()
      //   })
      //   .then((data) => {
      //     console.log(data)
      //   })

    }, 2000)

    return () => {
      console.log('Se ejecuta la función de limpieza con el estado anterior: ', filtro)
      clearTimeout(timeoutId)
    }

  }, [filtro])


  return (
    <div>
      <input type="text" value={filtro} onInput={(event) => setFiltro(event.target.value)} />

      {
        cocktails.length > 0 &&
        <ul>
          {cocktails.map(cocktail => <li key={cocktail.idDrink}>{cocktail.strDrink}</li>)}
        </ul>
      }

      {cocktails.length === 0 && <p>No hemos encontrado el cocktail buscado...</p>}
    </div>
  )

}

export default ListadoCocktails