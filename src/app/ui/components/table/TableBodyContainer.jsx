import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

export default function TableBodyContainer ({ filteredEvents }) {
  return (
        <TableBody>

            {filteredEvents.map((event) => (
                <TableRow
                    key={event.event}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {event.event}
                    </TableCell>
                    <TableCell align="left">{event.date}</TableCell>
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
  )
}
