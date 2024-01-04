import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";
import background from "./images/background.jpeg";

export const useHomePageContainerStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const HomePageStyles = {
    height: isMediumScreen ? "370vh" : "270vh",
    minHeight: isSmallScreen ? "4000px" : isMediumScreen ? "4390px" : "2200px",
    minWidth: isSmallScreen ? "280px" : isMediumScreen ? "600px" : "900px",
    width: "100%",
  };

  return HomePageStyles;
};

export const useMainContainerStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const MainContainerStyles = {
    width: "100%",
    height: isMediumScreen ? "370vh" : "270vh",
    minHeight: isSmallScreen ? "4000px" : isMediumScreen ? "4390px" : "2200px",
  };

  return MainContainerStyles;
};

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

export const SecondSectionStyles = {
  width: "100%",
  height: "22%",
  position: "relative",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(3.3px)",
    zIndex: -1,
    display: "flex",
  },
};

export const useInsideSecondSectionStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const InsideSecondSectionStyles = {
    width: isMediumScreen ? "90%" : "80%",
    height: "90%",
    display: isSmallScreen ? "grid" : "flex",
    margin: "auto",
    position: "relative",
    zIndex: 1,
    maxWidth: "2000px",
  };

  return InsideSecondSectionStyles;
};

export const SecondSectionFigureBoxStyles = {
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  margin: "auto",
};

export const useSecondSectionFigureStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const SecondSectionFigureStyles = {
    height: isSmallScreen ? "310px" : "300px",
    width: isSmallScreen ? "270px" : "250px",
    backgroundColor: "#72C4E8",
    transform: "rotate(8deg)",
    display: "flex",
    alignItems: "center",
    margin: isSmallScreen ? "auto auto 0 auto" : "auto",
  };
  return SecondSectionFigureStyles;
};

export const SecondSectionFigureBackgroundStyles = {
  height: "110%",
  width: "98%",
  backgroundColor: "white",
  transform: "rotate(-9deg)",
  marginBottom: "40px",
};

export const useSecondSectionDownloadCVSectionStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const SecondSectionDownloadCVSectionStyles = {
    width: isSmallScreen ? "100%" : "50%",
    height: "40%",
    margin: isSmallScreen ? "auto" : "auto 0 60px 0",
  };

  return SecondSectionDownloadCVSectionStyles;
};

export const useSecondSectionDownloadCVTypographyStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const SecondSectionDownloadCVTypographyStyles = {
    fontWeight: "600",
    fontSize: "2rem",
    marginBottom: "40px",
    color: "#FFFFFF",
    textAlign: isSmallScreen ? "center" : "left",
  };

  return SecondSectionDownloadCVTypographyStyles;
};

export const useSecondSectionDownloadCVTextStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const SecondSectionDownloadCVTextStyles = {
    marginBottom: "40px",
    fontWeight: "500",
    fontSize: "0.9rem",
    color: "#FFFFFF",
    textAlign: isSmallScreen ? "center" : "left",
  };

  return SecondSectionDownloadCVTextStyles;
};

export const useSecondSectionDownloadCVBoxStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const SecondSectionDownloadCVBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: isSmallScreen ? "center" : "left",
  };

  return SecondSectionDownloadCVBoxStyles;
};

export const DownloadIconStyles = {
  fontSize: "1.5rem",
  marginTop: "auto",
  marginBottom: "auto",
  marginRight: "2px",
  color: "#FFFFFF",
};

export const DownlodCVTypography = {
  marginBottom: "40px",
  fontSize: "0.8rem",
  fontWeight: "500",
  color: "#FFFFFF",
  margin: "auto 0 0 0",
};

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