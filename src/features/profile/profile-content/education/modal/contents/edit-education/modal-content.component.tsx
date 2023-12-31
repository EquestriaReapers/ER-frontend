import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import { Education } from 'core/profiles/types'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import useForm from './use-form'
import { useCallback, useContext, useEffect } from 'react'
import {
  boxButtonStyles,
  headerStyles,
  textFieldStyles,
  modalStyle,
  titleStyles,
  buttonStyle
} from './styles'
import { EducationContent } from '../../education-modal-context/types'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import dayjs, { Dayjs } from 'dayjs'
import ExperiencesModalContext from '../../education-modal-context'
import useEducationFormState from '../use-education-form-state'

const EditEducationModalContent = ({ anEducation, className }: Props) => {
  const { setContent } = useContext(ExperiencesModalContext)
  const {
    onChangeTitle,
    onChangeEntity,
    onChangeEndDate,
    title,
    entity,
    endDate,
    setTitle,
    setEntity,
    setEndDate
  } = useEducationFormState()

  const getEducationInfo = useCallback(() => {
    setTitle(anEducation.title)
    setEntity(anEducation.entity)
    setEndDate(toDateOrNull(anEducation.endDate))
  }, [setTitle, setEntity, setEndDate, anEducation])

  useEffect(() => {
    getEducationInfo()
  }, [getEducationInfo])

  const anEducationState = {
    title,
    entity,
    endDate
  }

  const educationId = anEducation.id

  const onSubmitForm = useForm({
    anEducation: anEducationState,
    educationId
  })

  return (
    <Box sx={modalStyle} className={className}>
      <Box sx={headerStyles}>
        <Box>
          <IconButton onClick={() => setContent(EducationContent.Show)}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Typography sx={titleStyles}>Editar experiencia</Typography>

        <Typography className='exp-show-description'>
          Edita los datos de la experiencia profesional que quieres modificar
        </Typography>
      </Box>
      <Box>
        <form onSubmit={onSubmitForm}>
          <Box>
            <Box className='inputContainer pl-5px'>
              <TextField
                sx={textFieldStyles}
                id='role'
                label='Titulo'
                value={title}
                onChange={onChangeTitle}
              />
            </Box>
            <Box className='inputContainer '>
              <TextField
                sx={textFieldStyles}
                id='businessName'
                label='Entidad'
                value={entity}
                onChange={onChangeEntity}
              />
            </Box>
            <Box className='inputContainer '>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={textFieldStyles}
                  label='Fecha de Finalizacion'
                  value={endDate}
                  onChange={onChangeEndDate}
                />
              </LocalizationProvider>
            </Box>
          </Box>

          <Box sx={boxButtonStyles}>
            <Button sx={buttonStyle} type='submit'>
              Guardar
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default EditEducationModalContent

interface Props {
  anEducation: Education
  className?: string
}

function toDateOrNull(date: string | Date | null): Dayjs | null {
  if (date) return dayjs(date)
  return null
}
