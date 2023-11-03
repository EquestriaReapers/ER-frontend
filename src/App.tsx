import { Box } from "@mui/material"
import { Link } from 'react-router-dom'

function App() {

  return (
    <Box>
        Home
        <Link to='/dashboard'>Dashboard</Link>
    </Box>
  )
}

export default App
