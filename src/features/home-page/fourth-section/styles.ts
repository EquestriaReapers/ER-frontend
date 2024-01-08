import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";
import { BUTTON_WIDTH } from "../styles";


export const useFourthSectionStyles = () => {

  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const FourthSectionStyles = {
    width: "100%",
    height: isLargeScreen ? "25%" : "15%",
    backgroundColor: "white",
  };

  return FourthSectionStyles;
};

export const useInsideFourthSectionStyles = () => {
  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const InsideFourthSectionStyles = {
    width: isMediumScreen ? "90%" : "80%",
    height: { xs: '100%', sm: '90%', lg: '90%', },
    margin: "auto",
    display: "flex",
    alignItems: "center",
    maxWidth: "2000px",
  };

  return InsideFourthSectionStyles;
};

export const useInsideFourthSectionTextStyles = () => {

  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const InsideFourthSectionTextStyles = {
    margin: "auto",
    width: isLargeScreen ? "100%" : "100%",
    textAlign: "center",
  };

  return InsideFourthSectionTextStyles;
};

export const useFourthSectionTextStyles = () => {

  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const FourthSectionTextStyles = {
    fontSize: isLargeScreen ? "16px" : "24px",
    marginBottom: "30px"
  };

  return FourthSectionTextStyles;
};

export const useInsideFourthSectionTypographyStyles = () => {

  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const InsideFourthSectionTypographyStyles = {
    fontWeight: "600",
    fontSize: isSmallScreen ? "18px" : isLargeScreen ? "24px" : "32px",
    textAlign: "center",
    marginBottom: "40px",
    
  };
  return InsideFourthSectionTypographyStyles;
};

export const GraduatesColor = {
  color: '#37B4E3'
}

export const InsideFourthSectionTextStyles = {
  fontWeight: "500",
  fontSize: "32px",
  marginBottom: "30px"
};

export const FourthSectionButtonStyles = {
  color: "white",
  backgroundColor: '#37B4E3',
  width: BUTTON_WIDTH,
  minWidth: "230px",
  textTransform: "none",
  fontWeight: "500",
  my: 5,
  fontSize: { xs: '16px', sm: '18px', lg: '18px', },
  "&&:hover": {
    backgroundColor: "#0b9bd1",
  }
};