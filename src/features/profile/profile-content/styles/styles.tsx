import bannerImage from "../images/bannerImage.png";

export const boxStyles = {
  fontWeight: "bold",
  fontFamily: "Inter",
  display: "flex",
  flexWrap: "wrap",
  py: 3,
};

export const bannerStyles = {
  width: {
    xs: "100%",
    sm: "100%",
    md: "100%",
    lg: "100%",
  },
  height: {
    xs: "90px",
    md: "150px",
  },
  boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
  backgroundImage: `url(${bannerImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const nameSectionStyles = {
  width: {
    lg: "100%",
  },
  display: "flex",
  flexWrap: "wrap",
  justifyContent: {
    sm: "space-between",
    lg: "space-between",
  },
  gap: "30px",
};

export const buttonStyles = {
  width: {
    xs: "100%",
    sm: "100%",
  },
  height: { xs: "100%", sm: "45%" },
  color: "#FCFEFE",
  borderRadius: "2px",
  textTransform: "capitalize",
  textAlign: "center",
  fontSize: { xs: "15px", sm: "20px" },
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  fontFamily: "inter",
};

export const mainTitleStyles = {
  color: "#007934",
  fontWeight: "600",
  fontFamily: "inter",
  fontSize: { xs: "22px", sm: "36px" },
};

export const nameStyles = {
  paddingBottom: "12px",
  display: "flex",
  fontWeight: "700",
  fontFamily: "inter",
  fontSize: { xs: "32px", sm: "48px" },
};

export const editIconStyles = {
  marginLeft: {
    xs: "0px",
    lg: "24px",
    md: "24px",
    sm: "24px",
  },
};

export const aboutMeSection = {
  display: "flex",
  flexWrap: {
    lg: "nowrap",
    md: "nowrap",
    sm: "nowrap",
    xs: "wrap",
  },
  width: "100%",
  justifyContent: "space-between",
};

export const descriptionStyles = {
  width: {
    xs: "100%",
    sm: "90%",
  },
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  fontFamily: "inter",
  fontSize: { xs: "15px", sm: "18px" },
};

export const contactSectionStyles = {
  display: "flex",
  width: { xs: "100%", sm: "27%" },
  height: "30%",
  backgroundColor: "#F4F4F4",
  justifyContent: "space-between",
  px: { xs: "6px", sm: "24px" },
  py: { xs: "8px", sm: "20px" },
  flexDirection: "column",
  gap: "12px",
};

export const locationBoxStyles = {
  display: "flex",
  pr: {
    lg: "160px",
    xs: "20px",
  },
};

export const contactTitlesStyles = {
  marginLeft: "4px",
  fontFamily: "inter",
  fontWeight: "600",
};

export const websiteBoxStyles = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
};

export const websiteTitleContainerStyles = {
  display: "flex",
  flexWrap: "wrap",
  pr: {
    lg: "160px",
    xs: "20px",
  },
};
