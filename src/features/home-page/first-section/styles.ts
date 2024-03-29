import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";

export const useFirstSectionStyles = () => {
  /*const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );*/

  const FirstSectionStyles = {
    width: "100%",
    backgroundColor: "white",
    margin: "auto",
    mt: {
      xs: 6,
      md: 12,
    },
  };

  return FirstSectionStyles;
};

export const useInsideFirstSectionStyles = () => {
  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const InsideFirstSectionStyles = {
    width: isMediumScreen ? "90%" : "100%",
    maxWidth: "1200px",
    margin: "auto",
    height: "90%",
    display: "flex",
    alignItems: "center",
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

export const TextFieldSearchBarStyles = {
  backgroundColor: "#F4F4F4",
  marginRight: "10px",
  border: "none",
  borderRadius: "6px",
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
  borderRadius: "6px",
};

export const useSearchGraduatesSectionStyles = () => {
  const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down(550)
  );

  const SearchGraduatesSectionStyles = {
    width: isExtraSmallScreen ? "90%" : "max-content",
    margin: "auto",
    marginBottom: "40px",
  };
  return SearchGraduatesSectionStyles;
};

export const useSearchGraduatesTypographyStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const SearchGraduatesTypographyStyles = {
    fontWeight: "600",
    fontSize: isSmallScreen ? "1.5rem" : isLargeScreen ? "1.5rem" : "2rem",
    textAlign: "center",
  };
  return SearchGraduatesTypographyStyles;
};

export const ProfessionalsColor = {
  color: "#37B4E3",
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
    width: isExtraSmallScreen ? "100%" : isSmallScreen ? "400px" : "500px",
    margin: "auto",
    marginBottom: "40px",
    flexWrap: {
      xs: "wrap",
      sm: "nowrap",
      md: "nowrap",
      lg: "nowrap",
    },
    justifyContent: {
      xs: "center",
      sm: "space-between",
      md: "space-between",
      lg: "space-between",
    },
  };

  return SearchBoxStyles;
};

export const SearchButtomStyles = {
  backgroundColor: "#37B4E3",
  height: "50px",
  fontWeight: "500",
  fontSize: "16px",
  textTransform: "none",
  "&&:hover": {
    backgroundColor: "#0b9bd1",
  },
  my: {
    xs: 2,
    sm: 0,
  },
};

export const InsideSearchBarTextSectionStyles = {
  width: "90%",
  margin: "auto",
};

export const useInsideSearchBarSectionTypographyStyles = () => {
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const InsideSearchBarSectionTypographyStyles = {
    fontWeight: "500",
    fontSize: isLargeScreen ? "14px" : "24px",
    textAlign: "center",
  };

  return InsideSearchBarSectionTypographyStyles;
};
