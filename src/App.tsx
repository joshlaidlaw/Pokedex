import { useState, useEffect } from 'react'
import { Search } from 'lucide-react';
import Card from './components/Card'
import './App.css'
import useFetch from './hooks/use-fetch';

export default function App() {
  const { loading, data, error } = useFetch("https://pokeapi.co/api/v2/pokemon?limit=10");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  
  return (
    <main className='grid grid-cols-[minmax(12px,_1fr)_4fr_minmax(12px,_1fr)]'>
      <section className='col-start-2 col-end-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
        {/* <div className='col-span-4 my-6'>
          <div className='flex flex-row gap-1 border-1 border-slate-300 bg-slate-50 rounded-sm p-1'>
            <Search className="w-3 h-3" color="lime" size={12} />
            <input type='text' placeholder='Search'/>
          </div>
        </div> */}
        {loading && <div>Loading</div>}
        {data?.results && data?.results.map((pokemon: {name: string}) => 
          <Card key={pokemon.name} name={pokemon.name} imgURL={''} /> 
        )}
      </section>
    </main>
  )
}