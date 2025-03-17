import { ChevronRight } from "lucide-react"
import { Link, useParams } from "react-router"

function BreadCrumbs() {
  const {name} = useParams()

  return (
    <div className='col-start-2 col-end-3 flex flex-row gap-3 mt-16 mb-6'>
      <Link to='/' className="text-zinc-400">Pokémon</Link>
      <ChevronRight className="text-zinc-400" />
      <Link to={`pokemon/${name}`} className="font-bold capitalize text-zinc-600">{name}</Link>
    </div>
  )
}

export default BreadCrumbs