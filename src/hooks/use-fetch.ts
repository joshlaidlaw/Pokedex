import { useState, useEffect } from 'react'

type PokemonDetail = {
  order: number
  name: string
  types: { type: { name: string; url: string } }[]
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  stats: {
    stat: {
      name: string
    }
    base_stat: number
  }[]
  abilities: { ability: { name: string; url: string } }[]
}

type PokemonResults = {
  name?: string
  count: number
  results: { name: string }[]
}

type TypeDetail = {
  name?: string
  pokemon: {
    pokemon: {
      name: string
    }
  }[]
}

type Results = (PokemonDetail & TypeDetail & PokemonResults) | null

interface UseFetchResult<T> {
  data: T | Results
  loading: boolean
  error: string | null | unknown
}

const useFetch = <T extends Results>(url: string): UseFetchResult<T> => {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<Results>(null)
  const [error, setError] = useState<null | Error | unknown>(null)

  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        let data = null
        if (!response.ok) {
          setError(Error(`Error ${response.status}: ${response.statusText}`))
        }

        if (response.status !== 404) {
          data = await response.json()
        }

        setData(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => controller.abort()
  }, [url])

  return { loading, data, error }
}

export default useFetch
