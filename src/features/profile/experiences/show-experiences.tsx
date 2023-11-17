import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Experience } from "core/profiles/types";

const ShowExperiences = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      url: "https://es.wikipedia.org/wiki/Wikipedia:Portada",
      position: "Scrum Master",
      entityName: "Wikipedia Org.",
      description:
        "Fui el Scrum Master de Wikipedia, una enciclopedia gratuita online.",
      projectName: "Wikipedia",
    },
    {
      id: 2,
      url: "https://www.youtube.com/watch?v=EsELAypw_Ds",
      position: "Desarrollador Front-End",
      description: "Fui desarrollador Front-End con JS, TS y MaMen.js",
      projectName: "YouPlasta",
    },
  ];
  return (
    <Box>
      {experiences.map((item : Experience) => {
        return (
          <Box>
            <Typography
              variant="h5"
              sx={{ background: "white", fontWeight: "bold" }}
            >
              {item.projectName}
            </Typography>
            <Typography variant="h6" sx={{ background: "white" }}>
              {item.url}
            </Typography>
            <Typography variant="h6" sx={{ background: "white" }}>
              {item.position}
            </Typography>
            <Typography variant="h6" sx={{ background: "white" }}>
              {item.entityName}
            </Typography>
            <Typography variant="h6" sx={{ background: "white" }}>
              {item.description}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default ShowExperiences;