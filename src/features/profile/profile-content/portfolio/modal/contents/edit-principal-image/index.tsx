import { Box, Button, IconButton, Typography } from '@mui/material'
import { Portfolio } from 'core/profiles/types'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import { useContext, useState } from 'react'
import PortfolioModalContext from '../../modal-context'
import { PortfolioContent } from '../../modal-context/types'
import useEditPrincipalImageModalContent from './use-edit-principal-image-form-state'
import {
  boxButtonStyles,
  buttonStyle,
  headerStyles,
  modalStyle,
  titleStyles
} from './styles'
import useForm from './use-form'

const EditPrincipalImageModalContent = ({ project }: Props) => {
  const { setContent } = useContext(PortfolioModalContext)
  const { imagePrincipal, onImagePrincipalChange } =
    useEditPrincipalImageModalContent()

  const projectState = { imagePrincipal }

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

    if (droppedFiles.length > 0) {
      onImagePrincipalChange({
        target: { files: [droppedFiles[0]] }
      })
    }
    setFiles((prevFiles) => [
      ...prevFiles,
      ...(Array.from(droppedFiles) as File[])
    ])
  }

  return (
    <Box sx={modalStyle}>
      <Box sx={headerStyles}>
        <Box>
          <IconButton onClick={() => setContent(PortfolioContent.Show)}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Typography sx={titleStyles}>Cambiar Portada de Proyecto</Typography>

        <Typography>
          Aquí podrás seleccionar la imagen principal de tu proyecto
        </Typography>
      </Box>
      <Box>
        <form onSubmit={onSubmitForm}>
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
              onDragOver={onDragOver}
              onDrop={onDrop}
              onChange={onImagePrincipalChange}
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
                onChange={onImagePrincipalChange}
              />
            </Button>

            {files!.length > 0 && (
              <Typography variant='body2' color='textSecondary' mt={2}>
                Archivos seleccionados:
                {files!.map((file) => file.name).join(', ')}
              </Typography>
            )}
          </Box>
          <Box sx={boxButtonStyles}>
            <Button type='submit' sx={buttonStyle}>
              Guardar Cambios
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default EditPrincipalImageModalContent

interface Props {
  project: Portfolio
}
