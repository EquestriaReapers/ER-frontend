import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Typography from '@mui/material/Typography'
import { typographyStyles } from './styles/styles'

const Filters = () => {
  return (
    <>
      <Typography
        sx={{ fontWeight: '700', fontSize: '1.25rem', fontFamily: 'inter' }}
      >
        Filtrar resultados
      </Typography>

      <Typography
        sx={{
          fontWeight: '700',
          paddingTop: 2,
          fontFamily: 'inter'
        }}
      >
        Carrera
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label='Carrera 1'
        />
        <FormControlLabel control={<Checkbox />} label='Carrera 2' />
        <FormControlLabel control={<Checkbox />} label='Carrera 3' />
        <FormControlLabel control={<Checkbox />} label='Carrera 4' />
      </FormGroup>

      <Typography sx={typographyStyles}>select de carrera</Typography>
      <Typography sx={typographyStyles}>Habilidades</Typography>
    </>
  )
}

export default Filters
