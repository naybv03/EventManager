'use client'
import TextField from '@mui/material/TextField/TextField'
import Skeleton from '@mui/material/Skeleton'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import TableEvents from './ui/components/TableEvents'
import { Suspense } from 'react'

export default function Home () {
  const path = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const query = searchParams.get('q') || ''

  const handleChange = useDebouncedCallback((searchedEl) => {
    const params = new URLSearchParams(searchParams)

    if (searchedEl) {
      params.set('q', searchedEl)
    } else {
      params.delete('q')
    }

    replace(`${path}?${params.toString()}`)
  }, 300)

  return (
    <main className="min-h-screen py-10 px-12 flex flex-col gap-10 flex-1 bg-zinc-200">
      <header>
        <h1 className="sm:text-3xl text-2xl">Eventos</h1>
      </header>

      <search>
        <TextField id="outlined-basic" label="Buscar evento" variant="outlined" className='w-full bg-white' onChange={(e) => handleChange(e.target.value)} defaultValue={query} />
      </search>

      <Suspense fallback={
        <Skeleton
          sx={{ bgcolor: 'grey.400' }}
          width='100%'
          height={500}
        />
      } key={query}>
        <TableEvents query={query} />
      </Suspense>
    </main>
  )
}
