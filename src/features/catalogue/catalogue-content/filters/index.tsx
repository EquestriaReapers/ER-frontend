import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import { SyntheticEvent, useState } from 'react'
import Chip from '@mui/material/Chip'
import DateRangePicker from '../components/DateRangePicker'
import ClearIcon from '@mui/icons-material/Clear'

const Filters = () => {
  const [selectedCareers, setSelectedCareers] = useState([])

  const onCareersChange = (event: SyntheticEvent) => {
    const value = event.target.value
    setSelectedCareers((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((carrera) => carrera !== value)
      } else {
        return [...prevSelected, value]
      }
    })
  }

  const handleCheckboxClick = (value) => {
    setSelectedCareers((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((carrera) => carrera !== value)
      } else {
        return [...prevSelected, value]
      }
    })
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
            //onChange={handleCarreraChange}
            variant='standard'
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
            <MenuItem
              value='Carrera 1'
              onClick={() => handleCheckboxClick('Carrera 1')}
            >
              <Checkbox checked={selectedCareers.includes('Carrera 1')} />
              Carrera 1
            </MenuItem>
            <MenuItem
              value='Carrera 2'
              onClick={() => handleCheckboxClick('Carrera 2')}
            >
              <Checkbox checked={selectedCareers.includes('Carrera 2')} />
              Carrera 2
            </MenuItem>
          </Select>
          <Box>
            {selectedCareers.map((career) => (
              <Chip
                key={career}
                label={career}
                onDelete={() => handleCheckboxClick(career)}
                deleteIcon={<ClearIcon style={{ color: '#545454' }} />}
                color='primary'
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
            Habilidades
          </Typography>

          <Select
            label='Carrera'
            value={selectedCareers}
            //onChange={handleCarreraChange}
            variant='standard'
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
            <MenuItem
              value='Carrera 1'
              onClick={() => handleCheckboxClick('Carrera 1')}
            >
              <Checkbox checked={selectedCareers.includes('Carrera 1')} />
              Carrera 1
            </MenuItem>
            <MenuItem
              value='Carrera 2'
              onClick={() => handleCheckboxClick('Carrera 2')}
            >
              <Checkbox checked={selectedCareers.includes('Carrera 2')} />
              Carrera 2
            </MenuItem>
          </Select>
          <Box>
            {selectedCareers.map((career) => (
              <Chip
                key={career}
                label={career}
                onDelete={() => handleCheckboxClick(career)}
                color='primary'
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
            Ubicación
          </Typography>
          <Select
            label='Carrera'
            value={selectedCareers}
            //onChange={handleCarreraChange}
            variant='standard'
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
            <MenuItem
              value='Carrera 1'
              onClick={() => handleCheckboxClick('Carrera 1')}
            >
              <Checkbox checked={selectedCareers.includes('Carrera 1')} />
              Carrera 1
            </MenuItem>
            <MenuItem
              value='Carrera 2'
              onClick={() => handleCheckboxClick('Carrera 2')}
            >
              <Checkbox checked={selectedCareers.includes('Carrera 2')} />
              Carrera 2
            </MenuItem>
          </Select>
          <Box>
            {selectedCareers.map((career) => (
              <Chip
                key={career}
                label={career}
                onDelete={() => handleCheckboxClick(career)}
                color='primary'
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
