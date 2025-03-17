import { useEffect, useState } from 'react'
import useDebounce from '../hooks/use-debounced'
import { Search } from 'lucide-react'

const SearchInput = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 500) // 500ms debounce delay

  // Call API when debouncedQuery updates
  useEffect(() => {
    if (debouncedQuery.trim()) {
      onSearch(debouncedQuery)
    }
  }, [debouncedQuery, onSearch])

  return (
    <div className="col-start-2 col-end-3 col-span-4 my-6">
      <div className="flex flex-row items-center gap-3 border-1 border-slate-300 bg-slate-50 rounded-sm p-3 focus-within:outline-1 focus-within:outline-blue-800">
        <Search className="w-4 h-4 text-zinc-400" />
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="grow mr-auto focus:outline-0"
        />
      </div>
    </div>
  )
}

export default SearchInput
