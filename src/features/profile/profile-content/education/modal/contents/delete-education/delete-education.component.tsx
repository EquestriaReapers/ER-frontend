import Button from '@mui/material/Button'
import { Box, Typography } from '@mui/material'
import { modalStyle } from '../show-education/styles'
import useDeleteEducation from './use-delete-education'
import { EducationContent } from '../../education-modal-context/types'
import { useContext } from 'react'
import EducationModalContext from '../../education-modal-context'

const DeleteEducationModalContent = ({ educationId, className }: Props) => {
  const { setContent } = useContext(EducationModalContext)
  const deleteEducation = useDeleteEducation({ educationId })

  return (
    <Box className={className} sx={modalStyle}>
      <form>
        <Typography className={'message'}>
          ¿Estás seguro de que quieres eliminar esta experiencia?
        </Typography>
        <Box className={'button-box'}>
          <Button
            onClick={() => setContent(EducationContent.Show)}
            className={'left-button'}
          >
            Regresar
          </Button>
          <Button
            onClick={deleteEducation}
            variant='contained'
            className={'right-button'}
          >
            Confirmar
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export interface Props {
  educationId: number
  className?: string
}

export default DeleteEducationModalContent
