import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";
import { BUTTON_WIDTH }from "../../LandingPageStyles";

export const usePortfoliosBoxStyles = () => {
  
    const isLargeScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("lg")
    );
  
    const isSmallScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("sm")
    );
    const PortfoliosBoxStyles = {
      height: isLargeScreen ? "350px" :'220px', 
      width: isLargeScreen ? "50%":'210px', 
      backgroundColor:'white', 
      margin:isLargeScreen?"auto":"inherit", 
      minWidth: isSmallScreen ? "250px" : (isLargeScreen?"335px" : "210px")
    };
  
    return PortfoliosBoxStyles;
};
  
export const PortfolioBackground = {
    backgroundColor:'#D9D9D9', 
    width:'100%', 
    height:'80%'
}
  
export const usePortfoliosTitleStyles = () => {
  
    const isLargeScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("lg")
    );
  
    const PortfoliosTitleStyles = {
      fontWeight:"700", 
      fontSize: isLargeScreen ? "0.7rem":"0.85rem"
    };
  
    return PortfoliosTitleStyles;
};
  
export const PortfolioSecondLineStyles = {
    display:"flex", 
    justifyContent:"space-between",
}
  
export const PortfolioNameStyles = {
    color:"#353535",
    fontSize:"0.8rem"
}
  
export const PortfolioInsideSecondLine = {
    display:"flex", 
    alignItems:"center"
}
  
export const PortfolioViewsNumber = {
    marginRight:"5px", 
    color:"#353535", 
    fontSize:"0.8rem"
}
  
export const PortfolioViewsNumberIcon = {
    color:"#353535", 
    height:"20px"
}
  
  
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