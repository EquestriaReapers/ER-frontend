import { Experience } from "core/profiles/types";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { nameStyles, descriptionStyles, subtitleStyles } from "./styles";

const ExperienceCard = ({ item }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: { xs: "100%", sm: "70%" },
      }}
    >
      <Typography sx={nameStyles} variant="h5">
        {item.businessName}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", sm: "nowrap" },
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
        }}
      >
        <Typography sx={subtitleStyles} variant="h6">
          {item.role}
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
        >
          <Typography sx={subtitleStyles} variant="h6">
            {item.location},
          </Typography>
          <Typography sx={subtitleStyles} variant="h6">
            {"("}
            {new Date(item.startDate).getFullYear()} {" - "}
            {item.endDate
              ? new Date(item.endDate).getFullYear() ===
                new Date().getFullYear()
                ? "Presente"
                : new Date(item.endDate).toLocaleString().slice(0, 10)
              : "Presente"}
            {")"}
          </Typography>
        </Box>
      </Box>
      <Typography sx={descriptionStyles} variant="h6">
        {item.description}
      </Typography>
    </Box>
  );
};

interface Props {
  item: Experience;
}

export default ExperienceCard;
