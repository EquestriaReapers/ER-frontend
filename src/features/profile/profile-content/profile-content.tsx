import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useAuthState } from 'hooks/use-auth-state'

import EditProfileModal from '../edit-profile/modal'
import { Profile } from 'core/profiles/types'
import ProfileSkills from './profile-skills'
import ProfileExperiences from './profile-experience'
import { bannerStyles, nameSectionStyles } from '../styles/styles'

const ProfileContent = ({ profile }: ProfileContentProps) => {
  const loggedUser = useAuthState().user
  const isEditable = !!(loggedUser && loggedUser.id == profile.userId)
  const theme = useTheme()
  const primaryGreen = theme.palette.primary.main

  return (
    <>
      {loggedUser ? (
        <Box>
          <Box sx={bannerStyles}></Box>
          <Box>
            <Box sx={nameSectionStyles}>
              <Box>
                <Typography variant='h4'>
                  {profile.user.name} {profile.user.lastname}
                </Typography>
                <Typography> {profile.mainTitle} Comunicador Social</Typography>
              </Box>
              <Box>
                <Button>Boton descargar</Button>
              </Box>
            </Box>
            <Box>
              <Box>
                <Typography>sobremi</Typography>
                <Typography>descripcion</Typography>
              </Box>
              <Box>
                <Typography>ubicacion</Typography>
                <Typography>website</Typography>
              </Box>
            </Box>

            <Box>
              <Box>
                <Box>
                  <Box>
                    <Box sx={{ display: 'flow' }}>
                      <Typography
                        variant='h4'
                        sx={{ fontWeight: '700', marginRight: 1 }}
                      >
                        {profile.user.name} {profile.user.lastname}
                      </Typography>
                      {isEditable && <EditProfileModal />}
                    </Box>
                    <Typography
                      variant='h6'
                      sx={{ fontWeight: '700', color: `${primaryGreen}` }}
                    >
                      {profile.mainTitle}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        gap: '10px'
                      }}
                    >
                      <Typography variant='h6' sx={{ fontWeight: '700' }}>
                        Sobre Mi
                      </Typography>
                      <Typography variant='h6'>
                        {profile.description}
                      </Typography>
                    </Box>
                  </Box>
                  <Box>hola</Box>
                </Box>
              </Box>
              <ProfileSkills
                isEditable={isEditable}
                currentProfileSkills={profile.skills}
              />

              <ProfileExperiences
                isEditable={isEditable}
                currentProfileExperience={profile.experience}
              />
            </Box>
          </Box>
        </Box>
      ) : (
        <Typography>No se encontro el perfil!</Typography>
      )}
    </>
  )
}

export interface ProfileContentProps {
  profile: Profile
}
export default ProfileContent
