import { Link } from 'react-router'
import useFetch from '../hooks/use-fetch'

type PokemonCard = {
  name: string
}

function Card({ name }: PokemonCard) {
  const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const imageIURL = (data && 'sprites' in data && data.sprites.other['official-artwork'].front_default) || ''

  return (
    <div className="relative p-3 flex flex-col border border-slate-300 rounded-sm bg-slate-50 hover:border-blue-800 hover:drop-shadow-md">
      <img src={imageIURL} alt={`Photo of ${name}`} className="mb-2 aspect-square bg-zinc-300 " />
      <Link to={`/pokemon/${name}`}>
        <h2 className="mb-2 text-lg font-bold capitalize">
          <span className="absolute inset-0 z-10"></span>
          {name}
        </h2>
      </Link>
    </div>
  )
}

export default Card
