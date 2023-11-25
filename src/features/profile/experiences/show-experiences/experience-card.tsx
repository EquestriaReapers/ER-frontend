import { Experience } from "core/profiles/types";
import Typography from "@mui/material/Typography";

const ExperienceCard = ({ item }: { item: Experience }) => {
  return (
    <div>
      <Typography variant="h5">{item.nombreProyecto}</Typography>
      <Typography variant="h6">{item.urlProyecto}</Typography>
      <Typography variant="h6">{item.cargo}</Typography>
      <Typography variant="h6">{item.descripcion}</Typography>
    </div>
  );
};

export default ExperienceCard;
