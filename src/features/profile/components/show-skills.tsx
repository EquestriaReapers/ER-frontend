import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Skill } from "core/profiles/types";

const ShowSkills = () => {
  const skills: Skill[] = [
    {
      id: 1,
      name: "Desarrollador Front-end",
    },
    {
      id: 2,
      name: "Desarrollador Back-end",
    },
    {
      id: 3,
      name: "React",
    },
    {
      id: 4,
      name: "TypeScript",
    },
  ];
  return (
    <Box>
      {skills.map((item: Skill) => (
        <Typography key={item.id} variant="h6">
          {item.name}
        </Typography>
      ))}
    </Box>
  );
};

export default ShowSkills;