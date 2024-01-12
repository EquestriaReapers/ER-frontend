import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";

export const ThirdSectionStyles = {
    width: "100%",
    height: "33%",
    backgroundColor: "white",
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
  
export const InsideThirdSectionTypographytStyles = {
    fontWeight: "600",
    fontSize: "2rem",
    marginBottom: "40px",
};
  
export const ThirdSectionTextStyles = {
    width: "80%",
    margin: "auto",
};
  
export const ThirdSectionTypographyStyles = {
    textAlign: "center",
};
  
export const useThirdSectionFiguresSectionStyles = () => {
    const isMediumScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("md")
    );
  
    const ThirdSectionFiguresSectionStyles = {
      height: "70%",
      width: "100%",
      display: isMediumScreen ? "grid" : "flex",
    };
  
    return ThirdSectionFiguresSectionStyles;
};
  
export const useThirdSectionFirstFiguresSectionStyles = () => {
    const isSmallScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("sm")
    );
    const isMediumScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("md")
    );
  
    const ThirdSectionFirstFiguresSectionStyles = {
      width: "50%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: isMediumScreen ? "auto" : 0,
      marginTop: isSmallScreen ? "-10px" : "auto",
    };
  
    return ThirdSectionFirstFiguresSectionStyles;
};
  
export const useThirdSectionFirstFigureStyles = () => {
    const isExtraExtraSmallScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down(400)
    );
  
    const ThirdSectionFirstFigureStyles = {
      width: isExtraExtraSmallScreen ? "200px" : "250px",
      height: isExtraExtraSmallScreen ? "200px" : "250px",
      backgroundColor: "#FFE298",
      transform: "skew(-2.8deg) rotate(90.5deg)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "40px",
    };
  
    return ThirdSectionFirstFigureStyles;
};
  
export const ThirdSectionInsideFirstFigureStyles = {
    backgroundColor: "white",
    height: "96%",
    width: "95%",
    transform: "rotate(-3.5deg)",
};
  
export const useThirdSectionFirstFigureTypographyStyles = () => {
    const isMinimunWidthScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down(300)
    );
  
    const ThirdSectionFirstFigureTypographyStyles = {
      fontWeight: "600",
      fontSize: "2rem",
      marginBottom: isMinimunWidthScreen ? "20px" : "40px",
    };
  
    return ThirdSectionFirstFigureTypographyStyles;
};

export const ThirdSectionFirstFigureTextStyles = {
    fontWeight: "500",
    fontSize: "0.9rem",
    textAlign: "center",
};
  
export const useThirdSectionSecondFiguresSectionStyles = () => {
    const isSmallScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("sm")
    );
    const isMediumScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("md")
    );
  
    const ThirdSectionSecondFiguresSectionStyles = {
      width: "50%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: isSmallScreen
        ? "10px auto auto auto"
        : isMediumScreen
        ? "40px auto auto auto"
        : 0,
    };
  
    return ThirdSectionSecondFiguresSectionStyles;
};
  
export const useThirdSectionSecondFigureStyles = () => {
    const isExtraExtraSmallScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down(400)
    );
  
    const ThirdSectionSecondFigureStyles = {
      width: isExtraExtraSmallScreen ? "210px" : "300px",
      height: isExtraExtraSmallScreen ? "200px" : "250px",
      backgroundColor: "#A6D6A8",
      transform: "skew(-4deg)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "40px",
    };
  
    return ThirdSectionSecondFigureStyles;
};
  
export const ThirdSectionInsideSecondFigureStyles = {
    backgroundColor: "white",
    height: "98%",
    width: "92%",
    transform: "skew(6deg)",
};
  
export const useThirdSectionSecondFigureTypographyStyles = () => {
    const isMinimunWidthScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down(300)
    );
  
    const ThirdSectionSecondFigureTypographyStyles = {
      fontWeight: "600",
      fontSize: "2rem",
      marginBottom: isMinimunWidthScreen ? "20px" : "40px",
    };
  
    return ThirdSectionSecondFigureTypographyStyles;
};
  
export const ThirdSectionSecondFigureTextStyles = {
    fontWeight: "500",
    fontSize: "0.9rem",
    textAlign: "center",
};
  