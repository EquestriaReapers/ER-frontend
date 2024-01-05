import { Box, Button, Typography } from '@mui/material'
import { modalStyle, titleStyles, buttonStyle } from './styles.ts'
import { EducationContent } from '../../education-modal-context/types.ts'
import { useContext } from 'react'
import EducationList from './experiencies-list/education-list.styled.tsx'
import { inlineStyles } from '../../styles.ts'
import EducationModalContext from '../../education-modal-context/index.tsx'

const ShowExperiences = ({ className }: Props) => {
  const { setContent } = useContext(EducationModalContext)

  return (
    <Box sx={modalStyle} className={className}>
      <Box>
        <Box className={'edu-header-container'}>
          <Typography sx={titleStyles}>Gestión de educación</Typography>
          <Box sx={inlineStyles}>
            <Typography className={'edu-show-description'}>
              En esta sección podrás gestionar las educaciones profesionales que
              has tenido
            </Typography>
            <Button
              sx={buttonStyle}
              className={'edu-show-button'}
              onClick={() => setContent(EducationContent.Add)}
            >
              Agregar educación
            </Button>
          </Box>
        </Box>
        <EducationList />
      </Box>
    </Box>
  )
}

interface Props {
  className?: string
}

export default ShowExperiences
