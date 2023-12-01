import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import jsonData from '../../lib/data.json'

export default async function TableEvents ({ query }) {
  const { events } = jsonData

  //   const delay = (ms) => {
  //     return new Promise((resolve) => setTimeout(resolve, ms))
  //   }

  const filteredEvents = events.slice(0, 5).filter((event) => {
    return event.event.toLowerCase().includes(query.toLowerCase())
  })

  return (
        <>
            {
                filteredEvents.length > 0
                  ? (
                    < TableContainer component={Paper} >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className='text-lg font-semibold'>Evento</TableCell>
                                      <TableCell align="left" className='text-lg font-semibold'>Fecha</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                  {filteredEvents.map((row) => (
                                      <TableRow
                                          key={row.event}
                                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                      >
                                          <TableCell component="th" scope="row">
                                              {row.event}
                                          </TableCell>
                                          <TableCell align="left">{row.date}</TableCell>
                                          <TableCell align="center">
                                              <button
                                                  type="button"
                                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                                              >
                                                  Ver Más
                                              </button>
                                          </TableCell>
                                      </TableRow>
                                  ))
                                  }
                            </TableBody>
                        </Table>
                    </TableContainer >
                    )
                  : (
                    <h2 className='text-center text-3xl text-semibold'>No hay eventos disponibles</h2>
                    )
              }
        </>
  )
}
