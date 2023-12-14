import bannerImage from "../images/bannerImage.png";

export const bannerStyles = {
  width: {
    xs: "100%",
    sm: "100%",
    md: "100%",
    lg: "100%",
  },
  height: {
    xs: "90px",
    md: "110px",
  },
  backgroundImage: `url(${bannerImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const nameSectionStyles = {
  width: {
    md: "60%",
    lg: "95%",
  },
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: "30px",
};

export const buttonStyles = {
  color: "#FCFEFE",
  borderRadius: "2px",
  textTransform: "capitalize",
  textAlign: "center",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  fontFamily: "inter",
};

export const mainTitleStyles = {
  color: "#007934",
  fontWeight: "600",
  fontFamily: "inter",
};

export const nameStyles = {
  paddingBottom: "12px",
  display: "flex",
  fontWeight: "700",
  fontFamily: "inter",
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
};

export const descriptionStyles = {
  width: "90%",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  fontFamily: "inter",
};

export const contactSectionStyles = {
  display: "flex",
  width: { xs: "90%", sm: "40%" },
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
  pr: {
    lg: "160px",
    xs: "20px",
  },
};
