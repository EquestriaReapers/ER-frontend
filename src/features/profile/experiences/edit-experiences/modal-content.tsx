import { Box, Button, TextField, Typography } from '@mui/material'
import { modalStyle } from './styles/styles'
import useEditExperienceFormState from './use-edit-experience-form-state'
import ModalShowExperiences from './show-experiences'
import { Experience } from 'core/profiles/types'


const EditExperienceModalContent = ({ setIsOpen, experience } : EditProfileModalContentProps) => {
  useEditExperienceFormState()
  console.log(experience)

  return (
    <Box sx={modalStyle}>
      <Typography>Editar experiencia</Typography>
      <Typography>Escriba acerca de la experiencia profesional que quieres editar</Typography>
      
      <form>
        <ModalShowExperiences experience={experience} />
        <Button variant='outlined' type='submit'>
          Confirmar
        </Button>
      </form>
    </Box>
  )
}

export interface EditProfileModalContentProps {
  setIsOpen: (arg0: boolean) => void
  experience: Experience[]
}

export default EditExperienceModalContent
