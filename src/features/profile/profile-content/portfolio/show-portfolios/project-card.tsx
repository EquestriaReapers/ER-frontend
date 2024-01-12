import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Modal,
  Box,
} from "@mui/material";
import { Portfolio, Profile } from "core/profiles/types";
import NoPhotographyIcon from "@mui/icons-material/NoPhotography";
import { useState } from "react";
import ProjectInfoModal from "./project-info-modal";

function ProjectCard({ profile, project }: Props) {
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
      <Card
        sx={{
          width: "100%",
          maxWidth: {
            xs: "250px",
            sm: "250px",
            md: "300px",
            lg: "300px",
            xl: "300px",
          },
          height: { xs: "250px", md: "300px" },
          textDecoration: "none",
          cursor: "pointer",
        }}
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
            <CardContent
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.58)  ",
                py: "32px",
                px: "32px",
                height: "100%",
                position: "relative",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                display: "flex",
                flexDirection: "column",
                gap: "22px",
                width: "100%",
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
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box>
          <ProjectInfoModal
            profile={profile}
            project={project}
            setIsOpen={setIsOpen}
          />
        </Box>
      </Modal>
    </>
  );
}

interface Props {
  profile: Profile;
  project: Portfolio;
}
export default ProjectCard;
