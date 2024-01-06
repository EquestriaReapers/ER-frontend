import { Typography, Box } from '@mui/material'
import ShowProfileExperiencies from './show-profile-experiences'
import ExperienceModalWrapper from './modal/experience-modal-wrapper'
import useProfileContext from '../../profile-context/use-profile-context'
import { experienceTitleStyles, boxTitleStyles } from './styles'

const Experiences = () => {
  const { isEditable, profile } = useProfileContext()

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: '18px', sm: '45px' },
          width: { xs: '100%', sm: '100%', md: '70%', lg: '60%' }
        }}
      >
        <Box sx={boxTitleStyles}>
          <Typography variant='h4' sx={experienceTitleStyles}>
            Experiencia
          </Typography>
          {isEditable && <ExperienceModalWrapper />}
        </Box>
        <ShowProfileExperiencies experiences={profile.experience} />
      </Box>
    </>
  )
}

export default Experiences
