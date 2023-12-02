import { Box, Button, TextField } from '@mui/material'
import { modalStyle } from './styles/styles'
import useEditExperienceFormState from './use-edit-experience-form-state'
//import useForm from './use-form'

const EditExperienceModalContent = ({ setIsOpen }) => {
  useEditExperienceFormState()

  // const { onSubmitForm } = useForm({ setIsOpen, user })

  return (
    <Box sx={modalStyle}>
      <h2>Editar experiencia</h2>
      <p>Escriba acerca de la experiencia profesional que quieres editar</p>
      <form>
        <h4>Cargo / Puesto</h4>
        <TextField id='cargo' label='Cargo' />

        <h4>Empresa</h4>
        <TextField id='empresa' label='Empresa' />

        <h4>Ubicacion</h4>
        <TextField id='ubicacion' label='Ubicacion' />

        <h4>Fecha inicial</h4>
        <TextField id='fecha-inicial' type='date' />

        <h4>Fecha Final</h4>
        <TextField id='fecha-final' type='date' />

        <h4>Descripcion</h4>
        <TextField id='descripcion' label='Descripcion' />

        <Button variant='outlined' type='submit'>
          Confirmar
        </Button>
      </form>
    </Box>
  )
}

export interface EditProfileModalContentProps {
  setIsOpen: (arg0: boolean) => void
}

export default EditExperienceModalContent
