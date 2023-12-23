import { Experience } from "core/profiles/types";
import Typography from "@mui/material/Typography";

const ExperienceCard = ({ item }: { item: Experience }) => {
  return (
    <div>
      <Typography variant="h5">{item.name}</Typography>
      <Typography variant="h6">{item.role}</Typography>
      <Typography variant="h6">
        {item.startDate.toLocaleString().slice(0, 10)}
      </Typography>
      {item.endDate && (
        <Typography variant="h6">
          {item.endDate.toLocaleString().slice(0, 10)}
        </Typography>
      )}
    </div>
  );
};

export default ExperienceCard;
