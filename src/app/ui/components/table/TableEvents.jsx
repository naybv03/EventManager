import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHeader from './TableHeader'
import TableBodyContainer from './TableBodyContainer'
import TableEmptyState from './TableEmptyState'
import Paper from '@mui/material/Paper'
import jsonData from '@/app/lib/data.json'
import { tableHeaders } from '@/app/lib/constants'
import { getFilteredevents } from '@/app/lib/services'

export default async function TableEvents ({ query }) {
  //   const delay = (ms) => {
  //     return new Promise((resolve) => setTimeout(resolve, ms))
  //   }

  const filteredEvents = getFilteredevents(jsonData, query, 5)

  return (
    <>
      {
        filteredEvents.length > 0
          ? (
            <TableContainer component={Paper} >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHeader headers={tableHeaders} />
                <TableBodyContainer filteredEvents={filteredEvents} />
              </Table>
            </TableContainer >
            )
          : (
            <TableEmptyState />
            )
      }
    </>
  )
}
