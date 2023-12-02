import { Experience } from "core/profiles/types";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import {
  boxStyles,
  divStyles,
  projectNameStyles,
  projectDescriptionStyles,
  projectURLStyles,
  projectChargeStyles,
} from "../styles/styles";

const ExperienceCard = ({ item }: { item: Experience }) => {
  return (
    <Box sx={divStyles}>
      <Box sx={boxStyles}>
        <Typography sx={projectNameStyles}  variant="h5">{item.name}</Typography>
        <Typography sx={projectChargeStyles} variant="h6">{item.role}</Typography>
        <Typography sx={projectURLStyles} variant="h6">{item.location}</Typography>
        <Typography variant="h6">{item.role}</Typography>
        <Typography sx={projectURLStyles} variant="h6">
          {item.startDate.toLocaleString().slice(0, 10)}
        </Typography>
        {item.endDate && (
          <Typography sx={projectURLStyles}  variant="h6">
            {item.endDate.toLocaleString().slice(0, 10)}
          </Typography>
        )}
        <Typography sx={projectDescriptionStyles} variant="h6">{item.description}</Typography>
      </Box>
    </Box>
  );
};

export default ExperienceCard;
