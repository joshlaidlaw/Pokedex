import { useState, useEffect } from 'react'
import './App.css'

export default function App() {

  const [loading, isLoading] = useState(true)
  const [pokemon, setPokemon] = useState([])
  const [total, setTotalRecords] = useState(0)

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://pokeapi.co/api/v2/pokemon/`, {
      signal: controller.signal,
    })
    .then((res) => res.json())
    .then((data) => {
      const {count, results, next, prev} = data
      isLoading(false)
      setTotalRecords(count)
      setPokemon(results)
    })
    
    return () => {
      controller.abort();
    }
  }, [])
  


  return (
    <main>
      {loading && <div>Loading</div>}
      {pokemon && pokemon.map((pokemon: {name: string}) => (
          <div key={pokemon.name}>
            {pokemon.name}
          </div>
        ))}
    </main>
  )
}