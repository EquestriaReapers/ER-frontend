import { Experience } from 'core/profiles/types'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import {
  nameStyles,
  descriptionStyles,
  EducationCardStyle,
  titleStyles
} from './styles'

const EducationCard = ({ item }: Props) => {
  return (
    <Box sx={EducationCardStyle}>
      <Typography sx={nameStyles} variant='h5'>
        {item.businessName}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          flexDirection: { xs: 'column', sm: 'column' },
          justifyContent: 'space-between',
          gap: { xs: '5px', sm: '5px' }
        }}
      >
        <Typography sx={descriptionStyles} variant='h6'>
          {item.role}
        </Typography>
        <Typography sx={titleStyles} variant='h6'>
          UCAB Guayana (2018)
        </Typography>
      </Box>
    </Box>
  )
}

interface Props {
  item: Experience
}

export default EducationCard
