import { Experience } from "core/profiles/types";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import {
  boxStyles,
  nameStyles,
  descriptionStyles,
  roleStyles,
  inlineStyles,
  ubicationDateStyles,
} from "../styles/styles";

const ExperienceCard = ({ item }: Props) => {
  return (
    <div>
      <Box sx={boxStyles}>
        <Typography sx={nameStyles} variant="h5">
          {item.businessName}
        </Typography>
        <Box sx={inlineStyles}>
          <Typography sx={roleStyles} variant="h6">
            {item.role}
          </Typography>
          <Box sx={ubicationDateStyles}>
            <Typography sx={roleStyles} variant="h6">
              {item.location}
            </Typography>
            <Typography sx={roleStyles} variant="h6">
              {item.startDate.toLocaleString().slice(0, 10)}
            </Typography>
            {item.endDate && (
              <Typography sx={roleStyles} variant="h6">
                {item.endDate.toLocaleString().slice(0, 10)}
              </Typography>
            )}
          </Box>
        </Box>
        <Typography sx={descriptionStyles} variant="h6">
          {item.description}
        </Typography>
      </Box>
    </div>
  );
};

interface Props {
  item: Experience;
}

export default ExperienceCard;
