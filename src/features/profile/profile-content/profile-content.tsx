import Typography from '@mui/material/Typography'

import { useAuthState } from 'hooks/use-auth-state'
import EditProfileModal from '../edit-profile/modal'
import { Profile } from 'core/profiles/types'
import ProfileSkills from './profile-skills'
import ProfileExperiences from './profile-experience'

const ProfileContent = ({ profile }: Props) => {
  const loggedUser = useAuthState().user;
  const isEditable = !!(loggedUser && loggedUser.id == profile.userId);
  return (
    <div>
      {loggedUser ? (
        <div>
          <Typography variant='h3'>Perfil:</Typography>
          {isEditable && <EditProfileModal />}

          <Typography variant='h4'>Nombre:</Typography>
          <Typography variant='h6'>
            {profile.user.name} {profile.user.lastname}
          </Typography>
          <Typography variant='h6'>
            {profile.mainTitle} {profile.countryResidence}
          </Typography>
          <Typography variant='h4'>Email:</Typography>
          <Typography variant='h6'>{profile.user.email}</Typography>

          <Typography variant='h6'>{profile.description}</Typography>

          <ProfileSkills
            isEditable={isEditable}
            currentProfileSkills={profile.skills}
          />

          <ProfileExperiences
            isEditable={isEditable}
            currentProfileExperience={profile.experience}
          />
        </div>
      ) : (
        <Typography>No se encontro el perfil!</Typography>
      )}
    </div>
  )
}

export interface Props {
  profile: Profile;
}
export default ProfileContent
