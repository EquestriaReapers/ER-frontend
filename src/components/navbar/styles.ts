export const navbarStyles = {
  background: "white",
  display: "flex",
  boxShadow: { xs: "none", sm: "0px 2px 2px 0px rgba(0, 0, 0, 0.15)" },
};

export const titleStyles = {
  color: "black",
  ml: 2,
  fontFamily: "Inter",
  fontSize: "16px",
  textTransform: "Capitalize",
  "&:hover": {
    color: "#007935",
  },
};

export const mobileTitleStyles = {
  color: "black",
  fontFamily: "Inter",
  fontSize: "16px",
  textTransform: "Capitalize",
  "&:hover": {
    color: "#007935",
  },
  fontWeight: "400",
};

export const iconStyles = {
  color: "#5A5A5A",
  ml: 0,
  fontFamily: "Inter",
  fontSize: "16px",
  textTransform: "Capitalize",
  "&:hover": {
    color: "#007935",
  },
};

export const inlineStyles = {
  display: "flex",
  flexWrap: "wrap",
  p: "15px",
  flexDirection: "row",
};

export const inlineMobileStyles = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "200px",
  marginLeft: "10px",
};
