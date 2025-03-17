import { Link } from 'react-router'

export default function Header() {
  return (
    <header className="bg-zinc-100 px-8 py-4 border-b-1 border-slate-300">
      <Link to="/">
        <h1 className="text-3xl font-bold ">
          <img className="h-8" src="pokemon_logo.svg" alt="Pokémon Logo" />
        </h1>
      </Link>
    </header>
  )
}
