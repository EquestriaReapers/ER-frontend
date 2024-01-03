import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { Portfolio } from "core/profiles/types";
import { useContext, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PortfolioModalContext from "../../../../modal-context";
import { PortfolioContent } from "../../../../modal-context/types";

function ProjectItem({ item }: Props) {
  const [hover, setHover] = useState(false);
  const showPortfolioText = () => setHover(true);
  const hidePortfolioText = () => setHover(false);
  const { setContent, setAPortfolio } = useContext(PortfolioModalContext);

  return (
    <Box>
      <Card
        sx={{
          maxWidth: "300px",
          width: "200px",
          maxHeight: "1000",
          height: "200px",
          textDecoration: "none",
        }}
        onMouseEnter={showPortfolioText}
        onMouseLeave={hidePortfolioText}
      >
        <CardMedia
          sx={{ height: "300px", position: "relative" }}
          image={item.imagePrincipal}
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
                {item.title}
              </Typography>
            </CardContent>
          )}
        </CardMedia>
      </Card>
      <Box sx={{ marginLeft: 8, mt: "6px" }}>
        <IconButton
          onClick={() => {
            setContent(PortfolioContent.Edit);
            setAPortfolio(item);
          }}
        >
          <EditIcon sx={{ color: "#007935" }} />
        </IconButton>
        <IconButton
          onClick={() => {
            setContent(PortfolioContent.Delete);
            setAPortfolio(item);
          }}
        >
          <DeleteIcon sx={{ color: "#007935" }} />
        </IconButton>
      </Box>
    </Box>
  );
}

interface Props {
  item: Portfolio;
}
export default ProjectItem;
