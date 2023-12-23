import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
import { useAuthState } from 'hooks/use-auth-state'
import EditProfileModal from '../edit-profile/modal'
import { Profile } from 'core/profiles/types'
import ProfileSkills from './profile-skills/profile-skills'
import ProfileExperiences from './profile-experience/profile-experience'

import LocationOnIcon from '@mui/icons-material/LocationOn'
import EditIcon from '@mui/icons-material/Edit'
import LanguageIcon from '@mui/icons-material/Language'
import {
  aboutMeSection,
  bannerStyles,
  buttonStyles,
  contactSectionStyles,
  contactTitlesStyles,
  descriptionStyles,
  editIconStyles,
  locationBoxStyles,
  mainTitleStyles,
  nameSectionStyles,
  nameStyles,
  websiteBoxStyles,
  websiteTitleContainerStyles
} from './styles/styles'
import useTransformCareerEnum from 'hooks/use-transform-career-enum'
const ProfileContent = ({ profile }: ProfileContentProps) => {
  const loggedUser = useAuthState().user
  const isEditable = !!(loggedUser && loggedUser.id == profile.userId)
  const transformedCareerName = useTransformCareerEnum(profile.mainTitle)
  return (
    <>
      <Box>
        <Box sx={bannerStyles}></Box>
        <Box
          sx={{
            mx: { xs: '24px', md: '120px' },
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '16px', sm: '0px' }
          }}
        >
          <Box
            sx={{
              width: '100%',
              mt: '30px'
            }}
          >
            <Box sx={nameSectionStyles}>
              <Box>
                <Typography variant='h4' sx={nameStyles}>
                  {profile.user.name} {profile.user.lastname}{' '}
                  <Box sx={editIconStyles}>
                    {isEditable && <EditProfileModal />}
                  </Box>
                </Typography>
                <Typography variant='h4' sx={mainTitleStyles}>
                  {transformedCareerName}
                </Typography>
              </Box>
              <Box sx={{ width: { xs: '100%', sm: '30%', md: '22%' } }}>
                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                  sx={buttonStyles}
                >
                  Descargar CV
                </Button>
              </Box>
            </Box>
            <Box sx={aboutMeSection}>
              <Box
                sx={{
                  paddingTop: '14px',
                  paddingBottom: '24px',
                  gap: '17px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Typography
                  variant='h5'
                  sx={{
                    fontWeight: '700',
                    fontFamily: 'inter',
                    fontSize: { xs: '20px', sm: '35px' }
                  }}
                >
                  Sobre Mí
                </Typography>
                {!profile.description ? (
                  <Typography>El perfil no tiene descripción.</Typography>
                ) : (
                  <Typography sx={descriptionStyles}>
                    {profile.description}
                  </Typography>
                )}
              </Box>
              <Box sx={contactSectionStyles}>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap'
                  }}
                >
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={locationBoxStyles}>
                      <LocationOnIcon />
                      <Typography sx={contactTitlesStyles}>
                        Ubicación
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <EditIcon />
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      marginLeft: '10px',
                      fontFamily: 'inter'
                    }}
                  >
                    Puerto Ordaz, Venezuela
                  </Typography>
                </Box>
                <Box sx={websiteBoxStyles}>
                  <Box sx={websiteTitleContainerStyles}>
                    <LanguageIcon />{' '}
                    <Typography sx={contactTitlesStyles}>Website</Typography>
                  </Box>

                  <Typography sx={{ marginLeft: '10px', fontFamily: 'inter' }}>
                    www.abcdefge.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: '29px', sm: '37px' }
            }}
          >
            <ProfileSkills
              isEditable={isEditable}
              currentProfileSkills={profile.skills}
            />

            <ProfileExperiences
              isEditable={isEditable}
              currentProfileExperience={profile.experience}
            />
          </Box>
          <Box sx={{ display: { sm: 'none' }, width: { xs: '100%' } }}>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              sx={buttonStyles}
            >
              Descargar CV
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export interface ProfileContentProps {
  profile: Profile
}
export default ProfileContent
