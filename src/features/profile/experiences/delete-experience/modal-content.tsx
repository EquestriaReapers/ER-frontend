import Button from '@mui/material/Button'
import { Box, Typography } from '@mui/material'
import { modalStyle } from '../modal/styles/styles'
const DeleteExperienceModalContent = ({
  setIsOpen
}: DeleteSkillModalContentProps) => {
  return (
    <Box sx={modalStyle}>
      <Typography>
        ¿Estás seguro de que quieres borrar la experiencia?
      </Typography>
      <Button onClick={() => setIsOpen(false)}>Regresar</Button>
      <Button variant='contained'>Confirmar</Button>
    </Box>
  )
}

export interface DeleteSkillModalContentProps {
  setIsOpen: (arg0: boolean) => void
}

export default DeleteExperienceModalContent
