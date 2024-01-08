export const pageContainer = {
  width: "100%",
  height: "auto",
  backgroundColor: { xs: "#FFFFFF", sm: "#EAEAEA" },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
};

export const catalogueContainer = {
  display: "flex",
  width: { xs: "100%" },
  height: "auto",
  backgroundColor: "#FFFFFF",
  boxShadow: { xs: "none", sm: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" },
  borderRadius: "6px",
  my: { xs: 0, sm: 10 },
  mx: { xs: 0, sm: 5, md: 5, lg: 10 },
  maxWidth: "1440px",
};

export const filtersContainer = {
  display: { xs: "none", md: "flex" },
  backgroundColor: "#F4F4F4",
  boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
  borderRadius: "6px 0px 0px 6px",
  height: "auto",
  flex: {
    xs: 1,
    md: 0.5,
  },
  maxWidth: {
    xs: "100%",
    sm: "250px",
    md: "300px",
    lg: "390px",
  },
};

export const profileCardResultContainer = {
  flex: 1,
  mx: { xs: "20px", sm: "30px", md: "50px" },
};

export const searchBarContainer = {
  display: "flex",
  marginTop: "50px",
  marginBottom: "20px",
};
