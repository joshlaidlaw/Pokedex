import { ChevronRight } from "lucide-react"
import { Link, useParams } from "react-router"

type BreadCrumbsProps = {
  base?: string;
  base_url?: string;
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({base = 'Pokémon', base_url = 'pokemon' }) => {
  const { name } = useParams()


  return (
    <div className='col-start-2 col-end-3 flex flex-row gap-3 mt-16 mb-6'>
      <Link to='/' className="text-zinc-400">{base}</Link>
      <ChevronRight className="text-zinc-400" />
      <Link to={`${base_url}/${name}`} className="font-bold capitalize text-zinc-600">{name}</Link>
    </div>
  )
}

export default BreadCrumbs