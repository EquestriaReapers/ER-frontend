import bannerImage from "./images/bannerImage.png";
import { styled } from "@mui/system";

export const bannerStyles = {
  width: {
    xs: "100%",
    sm: "100%",
    md: "100%",
    lg: "100%",
  },
  minHeight: {
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
  height: { xs: "40px", sm: "50 px" },
  maxHeight: "50px",
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
    xs: "wrap",
    sm: "wrap",
    md: "nowrap",
    lg: "nowrap",
  },
  width: "100%",
  justifyContent: "space-between",
  gap: { xs: "22px", sm: "0" },
};

export const descriptionStyles = {
  width: {
    xs: "100%",
  },
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  fontFamily: "inter",
  fontSize: "16px",
};

export const contactSectionStyles = {
  display: "flex",
  height: "30%",
  backgroundColor: "#F4F4F4",
  justifyContent: "space-between",
  flexDirection: "column",
  py: { xs: "11px", sm: "15px", md: "25px" },
  px: { xs: "8px", sm: "15px", md: "25px" },
  gap: "10px",
  borderRadius: "6px",
  width: { xs: "100%", sm: "100%", md: "20%", lg: "25%" },
  maxWidth: {
    xs: "100%",
    sm: "100%",
    md: "500px",
  },
  mt: {
    xs: 5,
    md: 0,
  },
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

export const lenguageTitleContainerStyles = {
  display: "flex",
  flexWrap: "wrap",
  pr: {
    lg: "150px",
    xs: "20px",
  },
  alignItems: "center",
  width: "100%",
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
  my: { xs: "24px", md: "34px" },
  display: "flex",
  flexDirection: "column",
  gap: { xs: "16px", sm: "37px" },
};

export const descriptionBoxStyles = {
  gap: "17px",
  display: "flex",
  flexDirection: "column",
  width: { xs: "100%", sm: "100%", md: "70%", lg: "60%" },
};

export const aboutMeTypographyStyles = {
  fontWeight: "700",
  fontFamily: "inter",
  fontSize: { xs: "22px", sm: "30px" },
  py: 2,
};

export const skillsTitleTypographyStyles = {
  fontWeight: "700",
  fontFamily: "inter",
  fontSize: { xs: "22px", sm: "30px" },
  py: 2,
};

export const skillsAndExperiencesBoxStyles = {
  display: "flex",
  flexDirection: "column",
  gap: { xs: "29px", sm: "37px" },
};

export const EducationBoxStyles = {
  display: "flex",
  flexDirection: "column",
  with: "100%",
  gap: { xs: "29px", sm: "34px" },
  mt: 2,
};

export const locationAndEditButtonStyles = {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  justifyContent: "space-between",
};

export const BothSkillsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  py: 1,
  width: "100%",
  flexWrap: "wrap",
  [theme.breakpoints.up("sm")]: {
    flexWrap: "nowrap",
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "70%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "60%",
  },
}));
