import { Box, Typography } from "@mui/material";
import ShowPortfolios from "./show-portfolios";

const Portfolio = () => {
  const portfolios = [
    {
      title: "Portfolio 1",
      description: "Description 1",
      image1: "https://picsum.photos/220/300",
      image2: "https://picsum.photos/240/300",
      image3: "https://picsum.photos/260/300",
      image4: "https://picsum.photos/280/300",
      url: "https://youtube.com/",
    },
    {
      title: "Portfolio 2",
      description: "Description 2",
      image1: "https://picsum.photos/400/300",
      image2: "https://picsum.photos/420/300",
      image3: "https://picsum.photos/440/300",
      image4: "https://picsum.photos/460/300",
      url: "https://youtube.com/",
    },
    {
      title: "Portfolio 3",
      description: "Description 3",
      image1: "https://picsum.photos/500/300",
      image2: "https://picsum.photos/520/300",
      image3: "https://picsum.photos/540/300",
      image4: "https://picsum.photos/560/300",
      url: "https://youtube.com/",
    },
    {
      title: "Portfolio 4",
      description: "Description 4",
      image1: "https://picsum.photos/600/300",
      image2: "https://picsum.photos/620/300",
      image3: "https://picsum.photos/640/300",
      image4: "https://picsum.photos/660/300",
      url: "https://youtube.com/",
    },
  ];
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          color: "#000000",
          fontFamily: "inter",
          fontSize: "35px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
          textTransform: "capitalize",
        }}
      >
        Portafolio
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ShowPortfolios portfolios={portfolios} />
      </Box>
    </>
  );
};

export default Portfolio;
