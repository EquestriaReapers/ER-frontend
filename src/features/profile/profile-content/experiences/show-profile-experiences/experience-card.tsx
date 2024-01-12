import { Experience } from "core/profiles/types";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { nameStyles, descriptionStyles, subtitleStyles } from "./styles";

const ExperienceCard = ({ item }: Props) => {
  const getYear = (date: string | number | Date) =>
    new Date(date).getFullYear();

  const startYear = getYear(item.startDate);
  const endYear = item.endDate ? getYear(item.endDate) : "Presente";
  const endDate = endYear === getYear(item.startDate) ? "Presente" : endYear;

  const dateItem = `(${startYear} - ${endDate})`;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "auto",
        backgroundColor: "#F4F4F4",
        p: "18px",
        gap: "10px",
        borderRadius: "6px",
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
          <Typography
            sx={{ ...subtitleStyles, marginRight: "10px" }}
            variant="h6"
          >
            <span>{item.location}, </span>
          </Typography>
          <Typography sx={subtitleStyles} variant="h6">
            <span>{dateItem}</span>
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
