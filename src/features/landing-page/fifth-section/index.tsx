import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {
  ThirdSectionStyles,
  useInsideThirdSectionStyles,
  useThirdSectionFiguresSectionStyles,
  useThirdSectionFirstFiguresSectionStyles,
  useThirdSectionFirstFigureTypographyStyles,
  ThirdSectionFirstFigureTextStyles,
  useThirdSectionSecondFiguresSectionStyles,
  useThirdSectionSecondFigureTypographyStyles,
  useButtonStyles,
  useButtonSecondStyles,
  useSecondTitleStyle
} from './styles'
import { Button } from '@mui/material'

const ThirdSection = () => {
  const InsideThirdSectionStyles = useInsideThirdSectionStyles()
  const ThirdSectionFiguresSectionStyles = useThirdSectionFiguresSectionStyles()
  const ThirdSectionFirstFiguresSectionStyles =
    useThirdSectionFirstFiguresSectionStyles()
  const ThirdSectionFirstFigureTypographyStyles =
    useThirdSectionFirstFigureTypographyStyles()
  const ThirdSectionSecondFiguresSectionStyles =
    useThirdSectionSecondFiguresSectionStyles()
  useThirdSectionSecondFigureTypographyStyles()
  const buttonSecondStyles = useButtonStyles()
  const buttonfirstStyles = useButtonSecondStyles()
  const secondTitleStyle = useSecondTitleStyle()

  return (
    <Box sx={ThirdSectionStyles}>
      <Box sx={InsideThirdSectionStyles}>
        <Box sx={ThirdSectionFiguresSectionStyles}>
          <Box sx={ThirdSectionFirstFiguresSectionStyles}>
            <Typography sx={ThirdSectionFirstFigureTypographyStyles}>
              ¿Eres un <span>egresado profesional</span> ?
            </Typography>
            <Typography sx={ThirdSectionFirstFigureTextStyles}>
              Estamos comprometidos con brindar visibilidad e igualdad de
              oportunidades a los profesionales de la UCAB
            </Typography>
            <Box>
              <Button sx={buttonSecondStyles}>
                Quiero aumentar mi visibilidad!
              </Button>
            </Box>
          </Box>

          <Box sx={ThirdSectionSecondFiguresSectionStyles}>
            <Typography sx={secondTitleStyle}>
              ¿Eres un <span>reclutador</span> o <span>empresa</span>?
            </Typography>
            <Typography sx={ThirdSectionFirstFigureTextStyles}>
              ¡Contamos con una red completa de egresados profesionales que
              cuenten con el sello de calidad ucabista!
            </Typography>
            <Box>
              <Button sx={buttonfirstStyles}>
                Empieza a buscar profesionales!
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ThirdSection
