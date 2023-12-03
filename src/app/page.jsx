'use client'

import Skeleton from '@mui/material/Skeleton'
import TableEvents from './ui/components/table/TableEvents'
import { Suspense } from 'react'
import useSearch from './lib/hooks/useSearch'
import Search from './ui/components/search/Search'

export default function Home () {
  const { handleSearchChange, query } = useSearch()

  return (
    <main className="min-h-screen py-10 px-12 flex flex-col gap-10 flex-1 bg-zinc-200">
      <header>
        <h1 className="sm:text-3xl text-2xl">Eventos</h1>
      </header>

      <Search handleSearchChange={handleSearchChange} query={query} />

      <Suspense fallback={
        <Skeleton
          sx={{ bgcolor: 'grey.400' }}
          width='100%'
          height={500}
        />
      }
        key={query}>
        <TableEvents query={query} />
      </Suspense>
    </main>
  )
}
