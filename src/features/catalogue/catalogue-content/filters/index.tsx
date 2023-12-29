import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import { ChangeEvent, useState } from 'react'
import Chip from '@mui/material/Chip'
import DateRangePicker from '../components/DateRangePicker'
import ClearIcon from '@mui/icons-material/Clear'

const Filters = () => {
  const [selectedCareers, setSelectedCareers] = useState<string[]>([])
  const [checked, setChecked] = useState(false)

  const onCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  const onSelectedCareersChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedCareers(event.target.value as string[])
  }

  return (
    <Box
      sx={{ mx: '35px', my: '50px', display: 'flex', flexDirection: 'column' }}
    >
      <Typography
        sx={{
          fontFamily: 'Inter',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '16px',
          marginBottom: '70px'
        }}
      >
        Filtrar resultados
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '55px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '16px'
            }}
          >
            Carrera
          </Typography>

          <Select
            label='Carrera'
            value={selectedCareers}
            variant='standard'
            multiple
            onChange={onSelectedCareersChange}
            renderValue={() => null}
            sx={{
              display: 'flex',
              width: '100%',
              backgroundColor: 'white',
              borderRadius: '5px',
              height: '35px',
              '&:hover': {
                height: '35px'
              }
            }}
          >
            <MenuItem value='' disabled>
              Todas las carreras
            </MenuItem>
            {['Opción 1', 'Opción', 'Opción.'].map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox
                  checked={selectedCareers.indexOf(name) > -1}
                  onChange={onCheckChange}
                />
                {name}
              </MenuItem>
            ))}
          </Select>
          <Box>
            {selectedCareers.map((career) => (
              <Chip
                deleteIcon={<ClearIcon style={{ color: '#545454' }} />}
                color='primary'
                key={career}
                label={career}
                onDelete={() => onCheckChange}
                sx={{
                  borderRadius: '5px',
                  backgroundColor: '#D9D9D9',
                  color: '#303030',
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  my: '4px',
                  mx: '4px'
                }}
              />
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
            width: '100%'
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '16px'
            }}
          >
            Fecha de Egreso
          </Typography>
          <DateRangePicker />
        </Box>
      </Box>
    </Box>
  )
}

export default Filters
