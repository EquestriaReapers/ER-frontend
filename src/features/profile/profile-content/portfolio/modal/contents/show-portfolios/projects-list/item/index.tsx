import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Icon,
  Typography,
} from "@mui/material";
import { Portfolio } from "core/profiles/types";
import { useContext, useState } from "react";
import PhotoIcon from "@mui/icons-material/Photo";
import PortfolioModalContext from "../../../../modal-context";
import { PortfolioContent } from "../../../../modal-context/types";

function ProjectItem({ item }: Props) {
  const [hover, setHover] = useState(false);
  const showPortfolioText = () => setHover(true);
  const hidePortfolioText = () => setHover(false);
  const { setContent, setAPortfolio } = useContext(PortfolioModalContext);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      <Typography sx={{ fontFamily: "inter" }}>{item.title}</Typography>
      <Card
        sx={{
          maxWidth: "300px",
          width: "200px",
          maxHeight: "1000",
          height: "200px",
          textDecoration: "none",
          cursor: "pointer",
        }}
        onMouseEnter={showPortfolioText}
        onMouseLeave={hidePortfolioText}
        onClick={() => {
          setContent(PortfolioContent.EditPrincipalImage);
          setAPortfolio(item);
        }}
      >
        <CardMedia
          sx={{ height: "200px", position: "relative" }}
          image={item.imagePrincipal!}
          title={item.title}
        >
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
                justifyContent: "center",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Icon sx={{ height: "32px", width: "32px" }}>
                <PhotoIcon sx={{ fontSize: "32px", color: "#fff" }} />
              </Icon>
              <Typography
                sx={{ color: "#FFF", textAlign: "center", fontFamily: "inter" }}
              >
                Cambiar Foto Principal
              </Typography>
            </CardContent>
          )}
        </CardMedia>
      </Card>
    </Box>
  );
}

interface Props {
  item: Portfolio;
}
export default ProjectItem;
