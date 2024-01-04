import { Box, Card, CardMedia, Typography } from "@mui/material";
import { modalStyle } from "./styles";
import { Portfolio } from "core/profiles/types";

const ProjectInfoModal = ({ project }: Props) => {
  const getYear = (date: string | number | Date) =>
    new Date(date).getFullYear();

  return (
    <Box sx={modalStyle}>
      <Box
        sx={{
          width: "100%",
          height: "120px",
          backgroundColor: "#D9D9D9",
          borderRadius: "6px 6px 0px 0px",
        }}
      ></Box>
      <Box
        sx={{
          mx: "48px",
          my: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#000",
              fontFamily: "Inter",
              fontSize: "35px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              textTransform: "capitalize",
            }}
          >
            {project.title}
          </Typography>

          <Typography
            sx={{
              color: "#000",
              fontFamily: "inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            {getYear(project.dateEnd)} | {project.location}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            overflowY: "auto",
            height: "200px",
            padding: "10px",
          }}
        >
          <Typography
            sx={{
              color: "#000",
              fontFamily: "inter",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            {project.description}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {project.image &&
            project.image.map((image) => (
              <Card sx={{ maxWidth: "200px", width: "200px" }}>
                <CardMedia
                  sx={{
                    display: "flex",
                    height: "200px",
                    width: "200px",
                    position: "relative",
                  }}
                  image={image}
                  title={project.title}
                ></CardMedia>
              </Card>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

interface Props {
  project: Portfolio;
}
export default ProjectInfoModal;
