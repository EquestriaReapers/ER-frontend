import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { Portfolio } from "core/profiles/types";
import { useState } from "react";

function PortfolioCard({ aPortfolio }: Props) {
  const [hover, setHover] = useState(false);
  const showPortfolioText = () => setHover(true);
  const hidePortfolioText = () => setHover(false);

  return (
    <Card
      sx={{
        maxWidth: "300px",
        width: "300px",
        maxHeight: "1000",
        height: "300px",
        textDecoration: "none",
      }}
      onMouseEnter={showPortfolioText}
      onMouseLeave={hidePortfolioText}
    >
      <CardMedia
        sx={{ height: "300px", position: "relative" }}
        image={aPortfolio.imagePrincipal}
        title={aPortfolio.title}
      >
        <Box sx={{ width: "300px" }}></Box>
        {hover && (
          <CardContent
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.58)  ",
              py: "32px",
              px: "32px",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              display: "flex",
              flexDirection: "column",
              gap: "22px",
            }}
          >
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "inter",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                textTransform: "capitalize",
              }}
            >
              {aPortfolio.title}
            </Typography>
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "inter",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                textTransform: "capitalize",
              }}
            >
              {aPortfolio.description}
            </Typography>
          </CardContent>
        )}
      </CardMedia>
    </Card>
  );
}

interface Props {
  aPortfolio: Portfolio;
}
export default PortfolioCard;
