import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";
import { BUTTON_WIDTH }from "../../LandingPageStyles";
  
export const useCardStyles = () => {
  
    const isLargeScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("lg")
    );
  
    const CardStyles = {
      width:isLargeScreen? "80%":'30%', 
      height:'150px', 
      backgroundColor:'#FFFFFF', 
      display: "grid", 
      boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.1)', 
      borderRadius:"3px", 
      margin:isLargeScreen ? "auto" : "inherit", 
      minWidth:"230px"
    };
  
    return CardStyles;
};
  
export const InsideCardStyles = {
    width: "calc(100% - 14px)", 
    height: "calc(100% - 14px)", 
    margin:"auto"
}
  
export const CardFirstSection = {
    height:"50%"
}
  
export const CardFirstLine = {
    display:"flex", 
    justifyContent:"space-between"
}
  
export const useCardNameStyles = () => {
  
    const isLargeScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("lg")
    );
  
    const CardNameStyles = {
      color:"#007934", 
      fontWeight:"700", 
      fontSize: isLargeScreen ? "0.7rem":"1rem"
    };
  
    return CardNameStyles;
};
   
export const useCardOcupationStyles = () => {
  
    const isLargeScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("lg")
    );
  
    const CardOcupationStyles = {
      color:"#000000", 
      fontWeight:"700", 
      fontSize: isLargeScreen ? "0.55rem": "0.75rem"
    }
  
    return CardOcupationStyles;
};
  
  
export const CardSecondLine = {
    display:"flex", 
    justifyContent:"left"
}
  
export const useCardLocationLineStyles = () => {
  
    const isLargeScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("lg")
    );
  
    const CardLocationLineStyles = {
      color:"#303030", 
      fontWeight: "700",
      fontSize: isLargeScreen ? "0.55rem":"0.75rem"
    }
  
    return CardLocationLineStyles;
};
  
export const useCardLocationIconStyles = () => {

    const isLargeScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("lg")
    );
  
    const CardLocationIconStyles = {
      color:"#303030", 
      height: isLargeScreen ? "13px":"18px"
    }
  
    return CardLocationIconStyles;
};
  
export const CardSecondSection = {
    height:"50%", 
    marginTop:"2px"
}
  
export const useCardLocationChipStyles = () => {
  
    const isLargeScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("lg")
    );
  
    const CardLocationChipStyles = { 
      borderRadius: '8px', 
      marginRight: 1, 
      marginTop:"auto", 
      marginBottom:"0px", 
      backgroundColor:"#A6D6A8",
      color:"#000000", 
      height:"28px", 
      fontSize: isLargeScreen ? "0.48rem":"0.8125rem"  
    }
  
    return CardLocationChipStyles;
};
  
export const CardSecondSectionSecondLine = { 
    marginTop:"9px"
}
  
export const SecondSectionButtonStyles = {
    color:'#FFFFFF', 
    backgroundColor:'#007934', 
    margin:'auto', 
    width: BUTTON_WIDTH,
    minWidth: "230px", 
    textTransform:"none",
    fontWeight:"500",
    
    "&&:hover" : {
    backgroundColor: "#007934", 
  }
}