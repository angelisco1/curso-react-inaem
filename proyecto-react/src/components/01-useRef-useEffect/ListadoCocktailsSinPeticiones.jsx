import { useEffect, useMemo, useState } from 'react'

export const ListadoCocktailsSinPeticiones = () => {
  const [filtro, setFiltro] = useState('')
  const [initialCocktails, setInitialCocktails] = useState([])
  // const [cocktails, setCocktails] = useState([])

  console.log('FILTRO INI', window.localStorage.getItem('filtro'))
  console.log(window.localStorage.length)

  // Con [filtro] se ejecuta cada vez que el filtro cambia
  useEffect(() => {
    const filtroInicial = window.localStorage.getItem('filtro') || ''
    console.log('FILTRO INICIAL', filtroInicial)
    setFiltro(filtroInicial)
  }, [])

  useEffect(() => {

      const fetchCocktails = async () => {
        const initialCocktailsStr = window.localStorage.getItem('cocktails')
        if (initialCocktailsStr) {
          const initialCocktails = JSON.parse(initialCocktailsStr)
          setInitialCocktails(initialCocktails)
        } else {
          const resp = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m`)
          const data = await resp.json()
          console.log(data)
          if (!Array.isArray(data.drinks)) {
            setInitialCocktails([])
            window.localStorage.setItem('cocktails', '[]')
          } else {
            setInitialCocktails(data.drinks)
            window.localStorage.setItem('cocktails', JSON.stringify(data.drinks))
          }
        }

      }

      fetchCocktails()

  }, [])

  useEffect(() => {
    window.localStorage.setItem('filtro', filtro)
  }, [filtro])

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