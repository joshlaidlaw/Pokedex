import { Link } from "react-router"

type PokemonCard = {
  name: string;
  imgURL: string;
}

function Card( {name, imgURL}: PokemonCard) {
  return (
    <div className="p-3 flex flex-col border border-slate-300 rounded-sm bg-slate-50">
      <img src={imgURL} alt={`Photo of ${name}`} className="h-53 w-auto mb-2" />
       <Link to={`/pokemon/${name}`}>
        <h2 className="mb-2 text-lg font-bold capitalize">{name}</h2>
      </Link>
    </div>
  )
}

export default Card