import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import { Portfolio } from 'core/profiles/types'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import useForm from './use-form'
import { useCallback, useContext, useEffect, useState } from 'react'
import {
  boxButtonStyles,
  headerStyles,
  textFieldStyles,
  modalStyle,
  titleStyles,
  buttonStyle
} from './styles'
import PortfolioModalContext from '../../modal-context'
import { PortfolioContent } from '../../modal-context/types'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import useProjectFormState from './use-project-form-state'
import dayjs, { Dayjs } from 'dayjs'

const EditProjectModalContent = ({ project, className }: Props) => {
  const { setContent } = useContext(PortfolioModalContext)
  const {
    onTitleChange,
    onDescriptionChange,
    onLocationChange,
    onDateEndChange,
    onImageChange,
    setTitle,
    setDescription,
    setLocation,
    setDateEnd,
    setImage,
    title,
    description,
    location,
    dateEnd,
    image
  } = useProjectFormState()
  const getProjectInfo = useCallback(() => {
    setTitle(project.title)
    setDescription(project.description)
    setLocation(project.location)
    setDateEnd(toDateOrNull(project.dateEnd))
    setImage(project.image)
  }, [
    project.title,
    project.description,
    project.location,
    project.dateEnd,
    project.image,
    setTitle,
    setDescription,
    setLocation,
    setDateEnd,
    setImage
  ])

  useEffect(() => {
    getProjectInfo()
  }, [getProjectInfo])

  const projectState = { title, description, location, dateEnd, image }

  const projectId = project.id

  const onSubmitForm = useForm({
    project: projectState,
    projectId
  })

  const [files, setFiles] = useState<File[]>([])

  const onDragOver = (event: { preventDefault: () => void }) => {
    event.preventDefault()
  }

  const onDrop = (event: {
    preventDefault: () => void
    dataTransfer: { files: FileList }
  }) => {
    event.preventDefault()

    const droppedFiles = event.dataTransfer.files

    setFiles((prevFiles) => [
      ...prevFiles,
      ...(Array.from(droppedFiles) as File[])
    ])
  }

  return (
    <Box sx={modalStyle} className={className}>
      <Box sx={headerStyles}>
        <Box>
          <IconButton onClick={() => setContent(PortfolioContent.Show)}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Typography sx={titleStyles}>Editar Proyecto</Typography>

        <Typography className='exp-show-description'>
          Aquí podrás editar los datos de tu proyecto
        </Typography>
      </Box>
      <Box>
        <form onSubmit={onSubmitForm}>
          <Box>
            <Box>
              <Box className='inputContainer' sx={{ mb: 2 }}>
                <TextField
                  sx={textFieldStyles}
                  id='title'
                  label='Título'
                  onChange={onTitleChange}
                  value={title}
                />
              </Box>
              <Box className='inputStyles'>
                <Box className='inputStyles'>
                  <Box className='' sx={{ display: 'flex', mb: 2 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        sx={{ textFieldStyles }}
                        label='Fecha Final'
                        onChange={onDateEndChange}
                        value={dateEnd}
                      />
                    </LocalizationProvider>
                    <Box className='inputContainer pl-5px' sx={{ ml: 3 }}>
                      <TextField
                        sx={textFieldStyles}
                        id='location'
                        label='Ubicación'
                        onChange={onLocationChange}
                        value={location}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box className='inputContainer' sx={{ mb: 2 }}>
                <TextField
                  sx={textFieldStyles}
                  id='description'
                  multiline
                  rows={4}
                  label='Descripción'
                  onChange={onDescriptionChange}
                  value={description}
                />
              </Box>
            </Box>
            <Box
              border='2px dashed #ccc'
              borderRadius='8px'
              p={2}
              textAlign='center'
              display='flex'
              flexDirection='column'
              alignItems='center'
              onDragOver={onDragOver}
              onDrop={onDrop}
              sx={{ mb: 2 }}
            >
              <input
                type='file'
                multiple
                style={{ display: 'none' }}
                onChange={onImageChange}
              />
              <CloudUploadIcon fontSize='large' color='primary' />
              <Typography variant='subtitle1' color='textSecondary'>
                Arrastra y sube tus archivos
              </Typography>
              <Button color='primary' component='label'>
                Subir Archivo
                <input
                  type='file'
                  multiple
                  style={{ display: 'none' }}
                  onChange={onImageChange}
                />
              </Button>

              {files!.length > 0 && (
                <Typography variant='body2' color='textSecondary' mt={2}>
                  Archivos seleccionados:
                  {files!.map((file) => file.name).join(', ')}
                </Typography>
              )}
            </Box>
          </Box>
          <Box sx={boxButtonStyles}>
            <Button type='submit' sx={buttonStyle} className='exp-show-button'>
              Guardar
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default EditProjectModalContent

interface Props {
  project: Portfolio
  className?: string
}

function toDateOrNull(date: string | Date | null): Dayjs | null {
  if (date) return dayjs(date)
  return null
}
