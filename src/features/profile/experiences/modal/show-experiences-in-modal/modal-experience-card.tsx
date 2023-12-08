import { Experience } from "core/profiles/types";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const ModalExperienceCard = ({ item }: { item: Experience }) => {
  return (
    <div>
      <Box>
        <Typography variant="h5">{item.businessName}</Typography>
        <Box>
          <Typography variant="h6">{item.role}</Typography>
          <Box>
            <Typography variant="h6">{item.location}</Typography>
            <Typography variant="h6">
              {item.startDate.toLocaleString().slice(0, 10)}
            </Typography>
            {item.endDate && (
              <Typography variant="h6">
                {item.endDate.toLocaleString().slice(0, 10)}
              </Typography>
            )}
          </Box>
        </Box>
        <Typography variant="h6">{item.description}</Typography>
      </Box>
    </div>
  );
};

export default ModalExperienceCard;