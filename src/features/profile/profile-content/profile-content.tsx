import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useAuthState } from 'hooks/use-auth-state'

import EditProfileModal from '../edit-profile/modal'
import { Profile } from 'core/profiles/types'
import ProfileSkills from './profile-skills'
import ProfileExperiences from './profile-experience'
import { bannerStyles, nameSectionStyles } from '../styles/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <Box sx={{width:'90%', margin:'auto',}}>
              <Box sx={nameSectionStyles}>
                <Box>
                  <Typography variant='h4' sx={{fontWeight:'700', fontSize:'2.5rem',}}>
                    {profile.user.name} {profile.user.lastname}
                  </Typography>
                  <Typography sx={{color:'#007934', fontSize:'2rem', fontWeight:'500'}}> {profile.mainTitle} Comunicador Social</Typography>
                </Box>
                <Box>
                  <Button 
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{backgroundColor:'#007935', color:'white'}}
                  >Descargar CV</Button>
                </Box>
              </Box>
              <Box sx={{display:'flex'}}>
                <Box>
                  <Typography sx={{fontWeight:'500', fontSize:'2.2rem',}}>Sobre Mi</Typography>
                  <Typography sx={{width:'55%'}}>Soy emprendedor y un apasionado por la tecnología e 
                    innovación, en 2019 co-fundé Nextscale, consultora de la que me desempeñe 
                    principalmente como product manager y íder técnico, encargandome de diseñar 
                    y desarrollar productos de software de calidad premiun, basados en el usuario 
                    de principio a fin
                  </Typography>
                </Box>
                <Box sx={{width: '40%', backgroundColor: '#F4F4F4'}}>
                  <Typography>ubicacion</Typography> <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                  <Typography>website</Typography>
                </Box>
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
