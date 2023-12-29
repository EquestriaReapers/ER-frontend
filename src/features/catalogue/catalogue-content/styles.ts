export const navBarStyles = {
  width: "100%",
  height: "60px",
  boxShadow: "0px 15px 15px 0px rgba(0, 0, 0, 0.07)",
};

export const pageContainer = {
  width: "100%",
  height: "auto",
  backgroundColor: { xs: "#FFFFFF", sm: "#EAEAEA" },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const catalogueContainer = {
  display: "flex",
  width: { xs: "100%", sm: "80%" },
  height: "auto",
  backgroundColor: "#FFFFFF",
  boxShadow: { xs: "none", sm: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" },
  borderRadius: "8px",
  my: { xs: 0, sm: 10 },
};

export const filtersContainer = {
  display: { xs: "none", md: "flex" },
  backgroundColor: "#F4F4F4",
  boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
  paddingTop: "40px",
  paddingLeft: "50px",
  borderRadius: "8px",
  flexDirection: "column",
  height: "auto",
  width: "100%",
};

export const filtersContainerBackground = {
  width: "40%",
  backgroundColor: "#FFFFFF",
  borderRadius: "8px 0px 0px 8px",
  display: { xs: "none", md: "flex" },
};

export const searchBarContainer = {
  display: "flex",
  marginTop: "50px",
  marginBottom: "20px",
};
