import { Typography, Box, Button } from '@mui/material/'
import {
  SecondSectionStyles,
  useInsideSecondSectionStyles,
  SecondSectionFigureBoxStyles,
  useSecondSectionFigureStyles,
  SecondSectionFigureBackgroundStyles,
  useSecondSectionDownloadCVSectionStyles,
  useSecondSectionDownloadCVTypographyStyles,
  useSecondSectionDownloadCVTextStyles,
  useButtonStyles
} from './styles'
import CardImage from './images/cards.png'

const SecondSection = () => {
  const InsideSecondSectionStyles = useInsideSecondSectionStyles()
  const SecondSectionFigureStyles = useSecondSectionFigureStyles()
  const SecondSectionDownloadCVSectionStyles =
    useSecondSectionDownloadCVSectionStyles()
  const SecondSectionDownloadCVTypographyStyles =
    useSecondSectionDownloadCVTypographyStyles()
  const SecondSectionDownloadCVTextStyles =
    useSecondSectionDownloadCVTextStyles()
  const buttonStyles = useButtonStyles()

  return (
    <Box sx={SecondSectionStyles}>
      <Box sx={InsideSecondSectionStyles}>
        <Box sx={SecondSectionDownloadCVSectionStyles}>
          <Typography sx={SecondSectionDownloadCVTypographyStyles}>
            ¡Explora los <span>portafolios</span> de los egresados!
          </Typography>
          <Typography sx={SecondSectionDownloadCVTextStyles}>
            Encuentra perfiles por medio de portafolios especificos u observa el
            portafolio que tiene cada egresado de la plataforma para lucir!
          </Typography>
          <Box>
            <Button sx={buttonStyles}>Explorar portafolios!</Button>
          </Box>
        </Box>
        <Box sx={SecondSectionFigureBoxStyles}>
          <Box sx={SecondSectionFigureStyles}>
            <Box
              component='img'
              sx={SecondSectionFigureBackgroundStyles}
              alt='portfolio-cards'
              src={CardImage}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SecondSection
