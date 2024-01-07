import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";

export const FirstSectionStyles = {
    width: "100%",
    height: "33%",
    backgroundColor: "white",
    maxWidth: "2000px",
    margin: "auto",
  };
  
  export const useInsideFirstSectionStyles = () => {
    const isMediumScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("md")
    );
  
    const InsideFirstSectionStyles = {
      width: isMediumScreen ? "90%" : "80%",
      margin: "auto",
      height: "90%",
    };
  
    return InsideFirstSectionStyles;
  };
  
  export const SearchBarSectionStyles = {
    width: "100%",
    height: "50%",
    display: "flex",
    alignItems: "center",
  };

  export const TextFieldSearchBarStyles = {
    backgroundColor: "#F4F4F4",
    marginRight: "10px",
    border: "none",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    "& fieldset": { border: "none" },
    "& .MuiInputBase-root.MuiOutlinedInput-root ::placeholder": {
      color: "#000000",
    },
  };
  
  export const SearchIconStyles = {
    color: "#3C3C43",
    opacity: "0.6",
  };
  
  export const TextFieldSearchBarPropStyles = {
    height: "50px",
    color: "black",
  };
  
  export const useInsideSearchBarSectionStyles = () => {
    const isMediumScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("md")
    );
  
    const InsideSearchBarSectionStyles = {
      margin: isMediumScreen ? "auto" : "auto auto 0 auto",
    };
  
    return InsideSearchBarSectionStyles;
  };
  
  export const useSearchEgresatesSectionStyles = () => {
    const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down(550)
    );
  
    const SearchEgresatesSectionStyles = {
      width: isExtraSmallScreen ? "90%" : "max-content",
      margin: "auto",
      marginBottom: "40px",
    };
    return SearchEgresatesSectionStyles;
  };
  
  export const useSearchEgresatesTypographyStyles = () => {
    const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down(550)
    );
    const isSmallScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("sm")
    );
  
    const SearchEgresatesTypographyStyles = {
      fontWeight: "600",
      fontSize: isExtraSmallScreen ? "2rem" : isSmallScreen ? "2.5rem" : "3rem",
      textAlign: "center",
    };
    return SearchEgresatesTypographyStyles;
  };
  
  export const useSearchBoxStyles = () => {
    const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down(550)
    );
    const isSmallScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("sm")
    );
  
    const SearchBoxStyles = {
      display: "flex",
      alignItems: "center",
      width: isExtraSmallScreen ? "80%" : isSmallScreen ? "400px" : "500px",
      margin: "auto",
      marginBottom: "40px",
    };
  
    return SearchBoxStyles;
  };
  
  export const SearchButtomStyles = {
    backgroundColor: "#007934",
    height: "50px",
    fontWeight: "300",
    fontSize: "0.8rem",
  };
  
  export const InsideSearchBarTextSectionStyles = {
    width: "90%",
    margin: "auto",
  };
  
  export const InsideSearchBarSectionTypographyStyles = {
    fontWeight: "500",
    fontSize: "1rem",
    textAlign: "center",
  };
  
  export const useGetCVSectionStyles = () => {
    const isMediumScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("md")
    );
  
    const GetCVSectionStyles = {
      width: "100%",
      height: "50%",
      display: isMediumScreen ? "grid" : "flex",
      alignItems: "center",
    };
  
    return GetCVSectionStyles;
  };
  
  export const useInsideGetCVSectionStyles = () => {
    const isMediumScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("md")
    );
  
    const InsideGetCVSectionStyles = {
      width: isMediumScreen ? "100%" : "45%",
      height: "50%",
      margin: isMediumScreen ? "auto" : 0,
    };
  
    return InsideGetCVSectionStyles;
  };
  
  export const useInsideGetCVTypographytyles = () => {
    const isMediumScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("md")
    );
  
    const InsideGetCVTypographyStyles = {
      fontWeight: "600",
      fontSize: "2rem",
      marginBottom: "40px",
      textAlign: isMediumScreen ? "center" : "left",
    };
  
    return InsideGetCVTypographyStyles;
  };
  
  export const useInsideGetCVSectionTextStyles = () => {
    const isMediumScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("md")
    );
  
    const InsideGetCVSectionTextStyles = {
      width: isMediumScreen ? "100%" : "80%",
      fontWeight: "500",
      fontSize: "0.9rem",
      textAlign: isMediumScreen ? "center" : "left",
    };
  
    return InsideGetCVSectionTextStyles;
  };
  
  export const useGetCVBoxtStyles = () => {
    const isMediumScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("md")
    );
  
    const GetCVBoxStyles = {
      width: "55%",
      height: "50%",
      transform: "rotate(3deg)",
      display: "flex",
      justifyContent: "center",
      margin: isMediumScreen ? "auto" : 0,
    };
  
    return GetCVBoxStyles;
  };
  
  export const useGetCVImagetStyles = () => {
    const isExtraExtraSmallScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down(400)
    );
    const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down(550)
    );
    const isSmallScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("sm")
    );
    const isMediumScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("md")
    );
  
    const GetCVImageStyles = {
      minHeight: isExtraSmallScreen
        ? "450px"
        : isSmallScreen
        ? "470px"
        : isMediumScreen
        ? "640px"
        : "480px",
      height: isExtraExtraSmallScreen ? "80vh" : isMediumScreen ? "80vh" : "50vh",
      maxHeight: isExtraExtraSmallScreen
        ? "450px"
        : isExtraSmallScreen
        ? "480px"
        : isSmallScreen
        ? "520px"
        : isMediumScreen
        ? "680px"
        : "670px",
      width: isExtraExtraSmallScreen ? "85vw" : "auto",
      border: "1px solid black",
    };
  
    return GetCVImageStyles;
  };