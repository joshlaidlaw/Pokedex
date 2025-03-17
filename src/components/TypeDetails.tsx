import { useParams } from "react-router";
import useFetch, { PokemonDetail } from "../hooks/use-fetch"
import BreadCrumbs from "./BreadCrumbs";
import Card from "./Card";

function TypeDetails() {
  const  { name } = useParams()
  const {loading, data, error} = useFetch(`https://pokeapi.co/api/v2/type/${name}`);

  const formatStat = (s: string) => { 
    const edgeCases = new Set(['hp'])
    if(edgeCases.has(s)) return s.toLocaleUpperCase()
    return s.replace('-', ' ')
  }
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>An Error has occured</p>;

  return (
    <section className="grid grid-cols-[minmax(12px,_1fr)_4fr_minmax(12px,_1fr)]">
      <BreadCrumbs base="Type" base_url="type" />
      <section className='col-start-2 col-end-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
        {data?.pokemon && data?.pokemon.map((pokemon) => <Card key={pokemon.pokemon.name} name={pokemon.pokemon.name} /> )}
      </section>
    </section>
    
  )
}

export default TypeDetails