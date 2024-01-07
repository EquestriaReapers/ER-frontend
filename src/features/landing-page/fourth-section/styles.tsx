import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";

export const FourthSectionStyles = {
    width: "100%",
    height: "12%",
    backgroundColor: "#A6D6A8",
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
  
export const InsideFourthSectionTextStyles = {
    margin: "auto",
    width: "100%",
    textAlign: "center",
};
  
export const FourthSectionTextStyles = {
    fontWeight: "500",
    fontSize: "1rem",
};