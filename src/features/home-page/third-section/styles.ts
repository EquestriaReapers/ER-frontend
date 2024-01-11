import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";
import { BUTTON_WIDTH }from "../styles";

export const useThirdSectionStyles = () => {

    const isLargeScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("lg")
    );
  
    const ThirdSectionStyles = {
      width: "100%",
      height: isLargeScreen? "35%" :"25%",
      backgroundColor: "white",
    };
  
    return ThirdSectionStyles;
};
  
export const useInsideThirdSectionStyles = () => {
    const isMediumScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("md")
    );
  
    const InsideThirdSectionStyles = {
      width: isMediumScreen ? "90%" : "80%",
      height: "90%",
      margin: "auto",
      maxWidth: "2000px",
      display: "flex",
      flexDirection:"column",
    };
  
    return InsideThirdSectionStyles;
};
  
export const InsideThirdSectionTextStyles = {
    height: "30%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};
  
export const InsideThirdSectionBoxTextStyles = {
    width: "max-content",
    margin: "auto",
    marginBottom: "40px",
};

export const useInsideThirdSectionTypographytStyles = () => {
  
    const isSmallScreen = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down("sm")
    );
  
    const isLargeScreen = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down("lg")
    );
  
    const InsideThirdSectionTypographytStyles = {
        fontWeight: "600",
        fontSize: isSmallScreen ? "1.2rem" : isLargeScreen ? "1.5rem" : "2rem",
        textAlign: "center",
        marginBottom: "40px",
    };
    return InsideThirdSectionTypographytStyles;
};

  
export const PortfoliosColor = { 
    color: '#FCC430' 
}
  
export const usePortfoliosSectionStyles = () => {
  
    const isLargeScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("lg")
    );
  
    const PortfoliosSectionStyles = {
      display: isLargeScreen ? "grid" :'flex', 
      justifyContent:isLargeScreen? "inherit":'space-between', 
      marginBottom:"40px"
    };
  
    return PortfoliosSectionStyles;
};

  
export const ThirdSectionButtonStyles = {
    color:'#FFFFFF', 
    backgroundColor:'#FCC430', 
    margin:'auto', 
    width: BUTTON_WIDTH,
    minWidth:"230px",
    textTransform:"none",
    fontWeight:"500",
    "&&:hover" : {
      backgroundColor: "#FCC430", 
    }
}