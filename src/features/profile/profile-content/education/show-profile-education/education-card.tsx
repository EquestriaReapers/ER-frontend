import { Education } from "core/profiles/types";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { nameStyles, EducationCardStyle, titleStyles } from "./styles";

const EducationCard = ({ item }: Props) => {
  const getYear = (date: string | number | Date) =>
    new Date(date).getFullYear();
  const endYear = item.endDate ? getYear(item.endDate) : "No especificado";

  const dateItem = `(${endYear})`;
  return (
    <Box sx={EducationCardStyle}>
      <Typography sx={nameStyles} variant="h5">
        {item.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", sm: "nowrap" },
          flexDirection: { xs: "column", sm: "column" },
          justifyContent: "space-between",
          gap: { xs: "5px", sm: "5px" },
          height: "100%",
        }}
      >
        <Typography sx={titleStyles} variant="h6">
          {item.entity} {dateItem}
        </Typography>
      </Box>
    </Box>
  );
};

interface Props {
  item: Education;
}

export default EducationCard;
