import { Link, useParams } from 'react-router'
import useFetch from '../hooks/use-fetch'
import BreadCrumbs from './BreadCrumbs'

function PokemonDetails() {
  const { name } = useParams()
  const { loading, data, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

  const formatStat = (s: string) => {
    const edgeCases = new Set(['hp'])
    if (edgeCases.has(s)) return s.toLocaleUpperCase()
    return s.replace('-', ' ')
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>An Error has occured</p>

  return (
    <section className="grid grid-cols-[minmax(12px,_1fr)_4fr_minmax(12px,_1fr)]">
      <BreadCrumbs />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 col-start-2 col-end-3 ">
        <div>
          <img
            src={data ? data.sprites.other['official-artwork'].front_default : undefined}
            alt={`Image of ${name}`}
            className="bg-zinc-300 rounded-b-sm w-full"
          />
        </div>
        <div>
          <div className="">
            <p className="text-zinc-400 text-sm">#{data && 'order' in data ? data.order : ''}</p>
            <h2 className="text-zinc-950 text-3xl capitalize font-bold">{data && data.name}</h2>
            <div className="flex flex-row gap-2 border-b-1 border-b-zinc-400 my-5 pb-5">
              {data &&
                data.types.map((type) => {
                  return (
                    <Link
                      to={`/type/${type.type.name}`}
                      key={type.type.url}
                      className="px-3 py-1 rounded-full bg-blue-100 text-blue-400 capitalize"
                    >
                      {type.type.name}
                    </Link>
                  )
                })}
            </div>
            <div className="stats mb-5 grid grid-cols-2 bg-zinc-300 rounded-sm p-6 gap-6">
              {data &&
                data.stats.map((s) => {
                  return (
                    <div key={s.stat.name}>
                      <strong className="capitalize pr-4">{formatStat(s.stat.name)}:</strong> {s.base_stat}
                    </div>
                  )
                })}
            </div>
            <div className="stats mt-5 pt-5 border-t-1 border-t-zinc-400">
              <h3 className="text-xl font-bold mb-6">Abilities:</h3>
              <ul className="list-disc ml-13.5 capitalize">
                {data &&
                  data.abilities.map((a) => {
                    return <li key={a.ability.url}>{formatStat(a.ability.name)}</li>
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PokemonDetails
