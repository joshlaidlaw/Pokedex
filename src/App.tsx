import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import Card from './components/Card'
import './App.css'
import useFetch from './hooks/use-fetch';
import SearchInput from './components/SearchInput';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export default function App() {
  const navigate = useNavigate();
  const [offset, updateOffset] = useState(0)
  const [term, setTerm] = useState('')
  const [baseURL, updateURL] = useState(`${BASE_URL}?limit=12&offset=${offset}`)
  const { loading, data } = useFetch(baseURL);
  const [currentPage, setCurrentPage] = useState(1)
  const paginationLength = Array.from({length: 5}, (_, i) => i + 1)
  const total = data?.count || 0
  const pages = Math.ceil(total / 12);

  useEffect(() => {
    if(term.trim() !== "") {
      updateURL(`${BASE_URL}/${term}`)
    } else {
      updateURL(`${BASE_URL}?limit=12&offset=${offset}`)
    }
  }, [term, offset])
  

  const handlePagination = (increment: number) => {
    if(!!increment) {
      updateOffset(offset - 12)
      setCurrentPage(currentPage - increment)
    }
    updateOffset((12 * (increment - 1)))
    setCurrentPage(increment)
  }

  const handleSearch = (term: string) => setTerm(term)

  if (loading) return <p>Loading...</p>;

  if(term !== '' && typeof data === 'object' && data !== null && data.name) {
    navigate(`pokemon/${data.name}`);
  } 

  return (
    <main className='grid grid-cols-[minmax(12px,_1fr)_4fr_minmax(12px,_1fr)]'>
      <SearchInput onSearch={handleSearch} />
      <section className='col-start-2 col-end-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
        {loading && <div>Loading</div>}
        {data?.results && data?.results.map((pokemon: { name: string }) => 
          <Card key={pokemon.name} name={pokemon.name} /> 
        )}
      </section>
      {data && data?.results?.length > 0 && (
        <div className='col-start-2 col-end-3 col-span-4 my-6 mx-auto flex flex-row justify-center bg-zinc-100  border-1 border-zinc-400 rounded-sm'>
          <button className="flex content-center justify-center w-8 h-8 disabled:text-zinc-400 border-r-1 border-zinc-400"  disabled={currentPage === 1} onClick={() => handlePagination(currentPage-1)}>
            <ChevronsLeft className='m-auto' />
          </button>
          <div>
          {paginationLength.map((_, index) => {
            const pageNumer = currentPage + index
            return <button key={pageNumer} className={`w-8 h-8 border-r-1 border-zinc-400 ${currentPage === pageNumer && 'bg-blue-600 text-blue-50'}`} onClick={() => handlePagination(pageNumer)}>{pageNumer}</button>
          })}
          </div>
          <button className="flex content-center justify-center w-8 h-8" disabled={currentPage === pages} onClick={() => handlePagination(currentPage + 1)}>
            <ChevronsRight className='m-auto' />
          </button>
        </div>
      )}
    </main>
  )
}