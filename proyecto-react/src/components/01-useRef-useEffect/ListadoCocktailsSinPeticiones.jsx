import { useEffect, useMemo, useState } from 'react'

export const ListadoCocktailsSinPeticiones = () => {
  const [filtro, setFiltro] = useState('')
  const [initialCocktails, setInitialCocktails] = useState([])
  // const [cocktails, setCocktails] = useState([])

  // Con [filtro] se ejecuta cada vez que el filtro cambia
  useEffect(() => {

      const fetchCocktails = async () => {
        const resp = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m`)
        const data = await resp.json()
        console.log(data)
        if (!Array.isArray(data.drinks)) {
          setInitialCocktails([])
        } else {
          setInitialCocktails(data.drinks)
        }
      }

      fetchCocktails()

  }, [])

  const cocktailsFiltrados = useMemo(() => {
    console.log('Buscando cocktails')
    return initialCocktails.filter(cocktail => cocktail.strDrink.includes(filtro))
  }, [filtro, initialCocktails])


  return (
    <div>
      <input type="text" value={filtro} onInput={(event) => setFiltro(event.target.value)} />

      {
        cocktailsFiltrados.length > 0 &&
        <ul>
          {cocktailsFiltrados.map(cocktail => <li key={cocktail.idDrink}>{cocktail.strDrink}</li>)}
        </ul>
      }

      {cocktailsFiltrados.length === 0 && <p>No hemos encontrado el cocktail buscado...</p>}
    </div>
  )

}

export default ListadoCocktailsSinPeticiones