'use client'

import Tabs from '@mui/material/Tabs'
import { useState } from 'react'
import Link from 'next/link'

export default function SideBar () {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <aside className='relative'>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width: '12rem' }}
        className='sticky top-0 left-0 '
      >
        <header className='py-6 '>
          <h1 className='text-center text-gray-600 sm:text-3xl text-2xl'>EventoLand</h1>
        </header>

        <Link href='/' className='text-lg text-center font-semibold text-gray-600 py-2 hover:bg-slate-600 transition-colors'>
        Menú Principal
        </Link>
        <Link href='/' className='text-lg text-center font-semibold text-gray-600 py-2'>
          Calendario
        </Link>
        <Link href='/' className='text-lg text-center font-semibold text-gray-600 py-2'>
          Notificaciones
        </Link>
        <Link href='/' className='text-lg text-center font-semibold text-gray-600 py-2'>
          Suscripciones
        </Link>
        <Link href='/' className='text-lg text-center font-semibold text-gray-600 py-2'>
          Informes
        </Link>
      </Tabs>
    </aside>

  )
}
