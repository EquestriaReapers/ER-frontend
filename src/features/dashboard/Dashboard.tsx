import { Link } from 'react-router-dom'
import Box  from '@mui/material/Box'
import Typography  from '@mui/material/Typography'
import Button from '@mui/material/Button';

const Dashboard = () => {
  return (
    <Box>
        <Typography> DASHBOARD </Typography>
        <Link to='/'>  Home  </Link>
        <Link to='/profile/1'>  Perfil  </Link>
        <Button variant="contained">Logout</Button>
    </Box>
  )
}

export default Dashboard