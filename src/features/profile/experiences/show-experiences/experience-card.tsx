import { Experience } from 'core/profiles/types'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import {
  boxStyles,
  nameStyles,
  descriptionStyles,
  roleStyles,
  inlineStyles,
  ubicationDateStyles
} from '../styles/styles'

const ExperienceCard = ({ item }: { item: Experience }) => {
  return (
    <div>
      <Box sx={boxStyles}>
        <Typography sx={nameStyles} variant='h5'>
          {item.businessName}
        </Typography>
        <Box sx={inlineStyles}>
          <Typography sx={roleStyles} variant='h6'>
            {item.role}
          </Typography>
          <Box sx={ubicationDateStyles}>
            <Typography sx={{ ...roleStyles, marginRight: 1 }} variant='h6'>
              {item.location},
            </Typography>
            <Typography sx={roleStyles} variant='h6'>
              {'('}
              {new Date(item.startDate).getFullYear()} {' - '}
              {item.endDate
                ? new Date(item.endDate).getFullYear() ===
                  new Date().getFullYear()
                  ? 'Presente'
                  : new Date(item.endDate).toLocaleString().slice(0, 10)
                : 'Presente'}
              {')'}
            </Typography>
          </Box>
        </Box>
        <Typography sx={descriptionStyles} variant='h6'>
          {item.description}
        </Typography>
      </Box>
    </div>
  )
}

export default ExperienceCard
