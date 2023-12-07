import { Box, Button, Typography } from '@mui/material'
import { modalStyle } from './styles/styles'
import useEditExperienceFormState from './use-edit-experience-form-state'
import ModalShowExperiences from './modal-experiences/show-experiences'
import { Experience } from 'core/profiles/types'

const EditExperienceModalContent = ({ setIsOpen, experience } : EditProfileModalContentProps) => {
  useEditExperienceFormState()
  console.log(experience)

  return (
    <Box sx={modalStyle}>
      <Typography>Gestión de experiencias</Typography>
      <Typography>En esta seccion podras gestionar las experiencias profesionales que has tenido</Typography>
      <form>
        <ModalShowExperiences experience={experience} />
      </form>
    </Box>
  )
}

export interface EditProfileModalContentProps {
  setIsOpen: (arg0: boolean) => void
  experience: Experience[]
}

export default EditExperienceModalContent
