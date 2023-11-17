import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Experience } from "core/profiles/types";

const ShowExperiences = ({ experience }: ShowExperiencesProps) => {
  return (
    <Box>
      {experience.map((item: Experience) => {
        return (
          <Box>
            <Typography
              key={item.id}
              variant="h5"
              sx={{ background: "white", fontWeight: "bold" }}
            >
              {item.nombreProyecto}
            </Typography>
            <Typography
              key={item.id + 1}
              variant="h6"
              sx={{ background: "white" }}
            >
              {item.urlProyecto}
            </Typography>
            <Typography
              key={item.id + 2}
              variant="h6"
              sx={{ background: "white" }}
            >
              {item.cargo}
            </Typography>
            <Typography
              key={item.id + 3}
              variant="h6"
              sx={{ background: "white" }}
            >
              {item.descripcion}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

interface ShowExperiencesProps {
  experience: Experience[];
}

export default ShowExperiences;
