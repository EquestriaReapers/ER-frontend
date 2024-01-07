import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";
import { BUTTON_WIDTH }from "../LandingPageStyles";


export const useFourthSectionStyles = () => {

    const isLargeScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("lg")
    );
  
    const FourthSectionStyles = {
      width: "100%",
      height: isLargeScreen ? "15%" : "20%",
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
      height: "90%",
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
      width: isLargeScreen ? "100%" :"100%",
      textAlign: "center",
    };
  
    return InsideFourthSectionTextStyles;
};
  
export const useFourthSectionTextStyles = () => {
  
    const isLargeScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("lg")
    );
  
    const FourthSectionTextStyles = {
      fontSize: isLargeScreen ? "0.9rem":"1.5rem", 
      marginBottom:"30px"
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
        fontSize: isSmallScreen ? "1.2rem" : isLargeScreen ? "1.5rem" : "2rem",
        textAlign: "center",
        marginBottom: "40px",
    };
    return InsideFourthSectionTypographyStyles;
};

export const EgresatesColor = { 
    color: '#37B4E3' 
}
  
export const InsideFourthSectionTextStyles = {
    fontWeight: "500",
    fontSize: "2rem",
    marginBottom:"30px"
};
  
export const FourthSectionButtonStyles = {
      color:"white", 
      backgroundColor:'#37B4E3', 
      width: BUTTON_WIDTH,
      minWidth:"230px",
      textTransform: "none",
      fontWeight:"500",
      "&&:hover" : {
        backgroundColor: "#37B4E3", 
      }
};