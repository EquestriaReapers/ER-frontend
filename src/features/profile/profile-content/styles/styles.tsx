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
    md: "150px",
  },
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
  boxShadow: "none",
  borderRadius: "6px",
  width: {
    xs: "100%",
    sm: "100%",
  },
  height: { md: "45%" },
  color: "#FCFEFE",
  textTransform: "capitalize",
  textAlign: "center",
  fontSize: { xs: "16px", sm: "16px", md: "18px" },
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  fontFamily: "inter",
};

export const mainTitleStyles = {
  color: "#007934",
  fontWeight: "600",
  fontFamily: "inter",
  fontSize: { xs: "22px", sm: "30px" },
};

export const nameStyles = {
  paddingBottom: "12px",
  display: "flex",
  fontWeight: "700",
  fontFamily: "inter",
  fontSize: { xs: "30px", sm: "42px" },
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
  gap: { xs: "22px", sm: "0" },
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
  fontSize: '16px',
};

export const contactSectionStyles = {
  display: "flex",
  width: { xs: "100%", sm: "25%" },
  height: "30%",
  backgroundColor: "#F4F4F4",
  justifyContent: "space-between",
  flexDirection: "column",
  py: { xs: "11px", sm: "15px", md: "25px" },
  px: { xs: "8px", sm: "15px", md: "25px" },
  gap: "10px",
  borderRadius: "6px",
};

export const locationBoxStyles = {
  display: "flex",
};

export const contactTitlesStyles = {
  fontFamily: "inter",
  fontWeight: "600",
  fontSize: { xs: "16px", sm: "18px" },
};

export const websiteBoxStyles = {
  display: "flex",
  flexDirection: "column",
};

export const websiteTitleContainerStyles = {
  display: "flex",
  flexWrap: "wrap",  
  pr: {
    lg: "150px",
    xs: "20px",
  },
  alignItems: "center",
};

export const topSectionStyles = {
  width: "100%",
  mt: "30px",
  display: "flex",
  flexDirection: "column",
  gap: { xs: "16px", sm: "31px" },
};

export const pageContainerStyles = {
  mx: { xs: "24px", md: "120px" },
  display: "flex",
  flexDirection: "column",
  gap: { xs: "16px", sm: "37px" },
};

export const descriptionBoxStyles = {
  gap: "17px",
  display: "flex",
  flexDirection: "column",
  width: { xs: "100%", sm: "70%" },
};

export const aboutMeTypographyStyles = {
  fontWeight: "700",
  fontFamily: "inter",
  fontSize: { xs: "22px", sm: "30px" },
  py:2,
};

export const skillsAndExperiencesBoxStyles = {
  display: "flex",
  flexDirection: "column",
  gap: { xs: "29px", sm: "37px" },
};

export const locationAndEditButtonStyles = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
};
