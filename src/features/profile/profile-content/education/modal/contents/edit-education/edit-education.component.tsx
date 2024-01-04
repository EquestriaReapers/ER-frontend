import {
  Box,
  Button,
  Divider,
  IconButton,
  TextField,
  Typography
} from '@mui/material'
import { Education } from 'core/profiles/types'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import useForm from './use-form'
import {
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
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
import EducationModalContext from '../../education-modal-context'
import useEducationFormState from '../use-education-form-state'
import { StyledBox, StyledButton } from './edit-education.styled'

const EditEducationModalContent = ({ anEducation, className }: Props) => {
  const { setContent } = useContext(EducationModalContext)
  const {
    onChangePrincipal,
    onChangeTitle,
    onChangeEntity,
    onChangeEndDate,
    principal,
    title,
    entity,
    endDate,
    setPrincipal,
    setTitle,
    setEntity,
    setEndDate
  } = useEducationFormState()

  const getEducationInfo = useCallback(() => {
    setPrincipal(anEducation.principal)
    setTitle(anEducation.title)
    setEntity(anEducation.entity)
    setEndDate(toDateOrNull(anEducation.endDate))
  }, [setTitle, setEntity, setEndDate, setPrincipal, anEducation])

  useEffect(() => {
    getEducationInfo()
  }, [getEducationInfo])

  const anEducationState = {
    principal,
    title,
    entity,
    endDate
  }

  const educationId = anEducation.id

  const onSubmitForm = useForm({
    anEducation: anEducationState,
    educationId
  })

  const [selectedButton, setSelectedButton] = useState(
    anEducation.principal === true ? 'principal' : 'complementaria'
  )
  const handleButtonClick = (buttonType: SetStateAction<string>) => {
    setSelectedButton(buttonType)
    onChangePrincipal()
  }

  return (
    <Box sx={modalStyle} className={className}>
      <Box sx={headerStyles}>
        <Box>
          <IconButton onClick={() => setContent(EducationContent.Show)}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Typography sx={titleStyles}>Editar educacion</Typography>

        <Typography className='exp-show-description'>
          Edita los datos de la educacion profesional que quieres modificar
        </Typography>
      </Box>
      <Box>
        <form onSubmit={onSubmitForm}>
          <Box>
            <Box className='inputContainer mt-5px' sx={{ marginBottom: 2 }}>
              <TextField
                sx={textFieldStyles}
                id='role'
                label='Titulo'
                value={title}
                onChange={onChangeTitle}
                disabled={anEducation.isUCAB}
              />
            </Box>
            <Box className='inputContainer mt-5px' sx={{ marginTop: 2 }}>
              <TextField
                sx={textFieldStyles}
                id='businessName'
                label='Entidad'
                value={entity}
                onChange={onChangeEntity}
                disabled={anEducation.isUCAB}
              />
            </Box>
            <Box className='inputContainer mt-5px' sx={{ marginTop: 2 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={textFieldStyles}
                  label='Fecha de Finalizacion'
                  value={endDate}
                  onChange={onChangeEndDate}
                  disabled={anEducation.isUCAB}
                />
              </LocalizationProvider>
            </Box>
            {anEducation.isUCAB == true && (
              <Box className='inputContainer mt-5px'>
                <StyledBox>
                  <StyledButton
                    className={selectedButton === 'principal' ? 'selected' : ''}
                    onClick={() => handleButtonClick('principal')}
                  >
                    Principal
                  </StyledButton>
                  <Divider
                    orientation='vertical'
                    flexItem
                    style={{ backgroundColor: '#555' }}
                  />
                  <StyledButton
                    className={
                      selectedButton === 'complementaria' ? 'selected' : ''
                    }
                    onClick={() => handleButtonClick('complementaria')}
                  >
                    Complementaria
                  </StyledButton>
                </StyledBox>
              </Box>
            )}
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
