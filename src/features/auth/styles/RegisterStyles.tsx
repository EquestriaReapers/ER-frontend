import Background from "../images/background-with-blur.png";

const mediaQueryStyles = {
  "@media (minWidth: 600px)": {
    minHeight: "500px",
  },
  "@media (minWidth: 900px)": {
    minHeight: "600px",
  },
};

export const registerProfileStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "715px",
  minWidth: "350px",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  ...mediaQueryStyles,
};
