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
    my: { xs: '20px', sm: '40px', lg: '40px', },
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
        fontSize: isSmallScreen ? "22px" : isLargeScreen ? "28px" : "32px",
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
      justifyContent:isLargeScreen? "inherit":'space-evenly', 
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
    my: { xs: 2, sm: 5, lg: 5, },
    fontSize: { xs:'16px' , sm:'18px', lg: '18px', },
    "&&:hover" : {
      backgroundColor: "#edad00", 
    }
}