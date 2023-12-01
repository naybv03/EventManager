import SideBar from './ui/components/SideBar'
import './globals.css'

export const metadata = {
  title: 'Manejador de eventos',
  description: 'Despues cambio esto xD'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className='flex gap-4'>
        <SideBar />
        {children}
      </body>
    </html>
  )
}
