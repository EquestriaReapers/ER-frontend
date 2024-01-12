import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Modal,
  Box,
} from "@mui/material";
import { useState } from "react";
import ProjectInfoModal from "./project-info-modal";
import NoPhotographyIcon from "@mui/icons-material/NoPhotography";

import {
  hoveredCardDescriptionStyles,
  hoveredCardStyles,
  hoveredCardTitleStyles,
  profileNameStyles,
  projectCardContainer,
  projectCardStyles,
  projectTitleStyles,
} from "./styles";
import { Project } from "../explore-portfolio-context/context";

function ProjectCard({ project }: Props) {
  const [hover, setHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const showPortfolioText = () => setHover(true);
  const hidePortfolioText = () => setHover(false);

  const limitWords = (text: string, limit: number) => {
    const words = text.split(" ");
    return words.length > limit
      ? `${words.slice(0, limit).join(" ")}...`
      : text;
  };

  return (
    <>
      <Box sx={projectCardContainer}>
        <Card
          sx={projectCardStyles}
          onMouseEnter={showPortfolioText}
          onMouseLeave={hidePortfolioText}
          onClick={() => setIsOpen(true)}
        >
          <CardMedia
            sx={{
              display: "flex",
              width: "100%",
              height: "300px",
            }}
            image={project.imagePrincipal!}
            title={project.title}
          >
            {hover && (
              <CardContent sx={hoveredCardStyles}>
                <Typography sx={hoveredCardTitleStyles}>
                  {project.title}
                </Typography>
                <Typography sx={hoveredCardDescriptionStyles}>
                  {limitWords(project.description, 40)}
                </Typography>
              </CardContent>
            )}
            {!project.imagePrincipal && !hover && (
              <Box
                sx={{
                  display: "flex",
                  height: "100%",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <NoPhotographyIcon sx={{ fontSize: "40px", color: "gray" }} />
              </Box>
            )}
          </CardMedia>
        </Card>
        <Box sx={{ marginTop: "2px" }}>
          <Typography sx={projectTitleStyles}>{project.title}</Typography>
          <Typography sx={profileNameStyles}>
            {project.profile.name} {project.profile.lastname}
          </Typography>
        </Box>
      </Box>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box>
          <ProjectInfoModal project={project} setIsOpen={setIsOpen} />
        </Box>
      </Modal>
    </>
  );
}

interface Props {
  project: Project;
}
export default ProjectCard;
