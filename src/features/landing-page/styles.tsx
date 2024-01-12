import useMediaQuery from '@mui/material/useMediaQuery'
import { Theme } from '@mui/material'

export const useLandingPageContainerStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  )
  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  )

  const LandingPageStyles = {
    height: isMediumScreen ? '3800px' : '2200px',
    minWidth: isSmallScreen ? '280px' : isMediumScreen ? '600px' : '900px',
    width: '100%'
  }

  return LandingPageStyles
}

export const useMainContainerStyles = () => {
  /*const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );*/
  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  )

  const MainContainerStyles = {
    width: '100%',
    height: isMediumScreen ? '3600px' : '2200px'
  }

  return MainContainerStyles
}
