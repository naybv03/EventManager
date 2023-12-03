import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export default function useSearch () {
  const path = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const query = searchParams.get('q') || ''

  const handleSearchChange = useDebouncedCallback((searchedEl) => {
    const params = new URLSearchParams(searchParams)

    if (searchedEl) {
      params.set('q', searchedEl)
    } else {
      params.delete('q')
    }

    replace(`${path}?${params.toString()}`)
  }, 300)

  return { handleSearchChange, query }
}
