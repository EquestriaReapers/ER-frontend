import { Box, Button, IconButton, Typography } from '@mui/material'
import { Portfolio } from 'core/profiles/types'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'
import ClearIcon from '@mui/icons-material/Clear'

import { useContext } from "react";
import PortfolioModalContext from "../../modal-context";
import { PortfolioContent } from "../../modal-context/types";
import {
  boxButtonStyles,
  buttonStyle,
  descriptionStyles,
  fileListBoxStyles,
  fileNameStyles,
  inputBoxStyles,
  inputDescriptionStyles,
  inputLabelStyles,
  modalStyle,
  titleStyles,
  uploadBoxStyles,
  uploadButtonStyles,
} from "./styles";
import useForm from "./use-form";
import useEditPrincipalImageState from "./use-edit-principal-image-form-state";

const EditPrincipalImageModalContent = ({ project }: Props) => {
  const { setContent } = useContext(PortfolioModalContext);
  const {
    imagePrincipal,
    onImagePrincipalChange,
    files,
    onDragOver,
    onDrop,
    deleteFile,
  } = useEditPrincipalImageState();

  const projectState = { imagePrincipal }

  const projectId = project.id

  const onSubmitForm = useForm({
    project: projectState,
    projectId
  })

  return (
    <Box sx={modalStyle}>
      <Box>
        <IconButton onClick={() => setContent(PortfolioContent.Show)}>
          <ArrowBackIcon />
        </IconButton>

        <Typography sx={titleStyles}>Cambiar Portada de Proyecto</Typography>

        <Typography sx={descriptionStyles}>
          Aquí podrás seleccionar la imagen principal de tu proyecto
        </Typography>
      </Box>
      <Typography sx={inputLabelStyles}>Imagen</Typography>
      <Box sx={uploadBoxStyles} component='form' onSubmit={onSubmitForm}>
        <Box sx={inputBoxStyles} onDragOver={onDragOver} onDrop={onDrop}>
          <Button
            component='label'
            disabled={files.length > 0}
            sx={uploadButtonStyles}
          >
            <Typography sx={inputDescriptionStyles}>
              Arrastra y sube tus archivos acá
            </Typography>
            <AddPhotoAlternateOutlinedIcon />
            <input
              type='file'
              multiple
              accept='.jpg,.jpeg,.png'
              style={{ display: 'none' }}
              onDragOver={onDragOver}
              onDrop={onDrop}
              onChange={onImagePrincipalChange}
            />
          </Button>
        </Box>
        {files.length > 0 && (
          <>
            {files.map((file, index) => (
              <Box key={file.name} sx={fileListBoxStyles}>
                <InsertDriveFileOutlinedIcon />
                <Typography sx={fileNameStyles}>
                  {file.name.slice(0, 35) + ' ... ' + file.name.slice(-7)}
                </Typography>

                <IconButton onClick={() => deleteFile(index)}>
                  <ClearIcon />
                </IconButton>
              </Box>
            ))}
          </>
        )}

        <Box sx={boxButtonStyles}>
          <Button type='submit' sx={buttonStyle}>
            Guardar Cambios
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default EditPrincipalImageModalContent

interface Props {
  project: Portfolio
}
