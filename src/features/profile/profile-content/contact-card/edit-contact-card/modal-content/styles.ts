const PRIMARY_DARKER = "#03652e";

export const FormTitleStyles = {
  color: "#000",
  fontFamily: "Inter",
  fontSize: {
    xs: "14px",
    sm: "16px",
  },
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",
};

export const textFieldBoxStyles = {
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "row",
    lg: "row",
  },
  justifyContent: "space-between",
}

export const iconTextStyles = {
  display: "flex",
  flexDirection: "row",
  marginBottom: "10px",
};

export const languageBoxStyles = {
  width: "100%",
}

export const emailBoxStyles = {
  width: "100%",
  mt: {
    xs: 1,
    sm: 0,
    lg: 0,
  },
  ml: {
    sm: 3,
    lg: 3,
  },
}

export const boxContentStyles = {
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "row",
    lg: "row",
  },
};

export const textfieldStyles = {
  width: "100%",
  flex: 1,
  mr: {
    sm: 2,
    lg: 2,
  },
};

export const descriptionStyles = {
  fontSize: "16px",
  fontWeight: "400",
  color: "#444444",
  fontFamily: "Inter",
  wordWrap: "break-word",
  py: 2,
  mb: 1,
};

export const buttonStyle = {
  height: "100%",
  fontFamily: "Inter",
  borderRadius: "6px",
  background: "#007935",
  fontWeight: "700",
  color: "white",
  textTransform: "capitalize",
  fontSize: "16px",
  px: 3,
  my: 1,
  "&:hover": {
    backgroundColor: PRIMARY_DARKER,
  },
};
