import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

export default function TableHeader ({ headers }) {
  return (
        <TableHead>
          <TableRow>
              {
                headers.map((header, index) => (
                  <TableCell key={index} className='text-lg font-semibold'>{header}</TableCell>
                ))
              }
            </TableRow>
        </TableHead>
  )
}
