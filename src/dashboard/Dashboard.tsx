import { Link } from 'react-router-dom'
import Box  from '@mui/material/Box'

const Dashboard = () => {
  return (
    <Box>
        Dashboard
        <Link to='/'>Home</Link>
        <Link to='/profile/1'>Perfil</Link>
    </Box>
  )
}

export default Dashboard