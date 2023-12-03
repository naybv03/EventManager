import TextField from '@mui/material/TextField/TextField'

export default function Search ({ query, handleSearchChange }) {
  return (
        <search role='search'>
            <TextField id="outlined-basic" label="Buscar evento" variant="outlined" className='w-full bg-white' onChange={(e) => handleSearchChange(e.target.value)} defaultValue={query} />
        </search>
  )
}
