import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Modal,
} from "@mui/material";
import { Portfolio } from "core/profiles/types";
import { useState } from "react";
import ProjectInfoModal from "./project-info-modal";

function ProjectCard({ project }: Props) {
  const [hover, setHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const showPortfolioText = () => setHover(true);
  const hidePortfolioText = () => setHover(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Card
      sx={{
        maxWidth: "300px",
        width: "300px",
        maxHeight: "1000",
        height: "300px",
        textDecoration: "none",
        cursor: "pointer",
      }}
      onMouseEnter={showPortfolioText}
      onMouseLeave={hidePortfolioText}
      onClick={openModal}
    >
      <CardMedia
        sx={{ height: "300px", position: "relative" }}
        image={project.imagePrincipal}
        title={project.title}
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
              {project.title}
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
              {project.description}
            </Typography>
          </CardContent>
        )}
      </CardMedia>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ProjectInfoModal />
      </Modal>
    </Card>
  );
}

interface Props {
  project: Portfolio;
}
export default ProjectCard;
