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
  fontSize: "20px",
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
