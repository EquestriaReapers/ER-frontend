import { Experience } from "core/profiles/types";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ExperiencesModalContext from "../../../../experiencies-modal-context/index";
import { useContext } from "react";
import { ExperienceContent } from "../../../../experiencies-modal-context/types";
import { nameInputStyles } from "../styles";
import { descriptionStyles } from "../../../../styles";

const ExperienceItem = ({ item, className }: Props) => {
  const { setContent, setAnExperience } = useContext(ExperiencesModalContext);
  const getYear = (date: string | number | Date) => new Date(date).getFullYear();
  const startYear = getYear(item.startDate);
  const endYear = item.endDate ? getYear(item.endDate) : "Presente";
  const endDate = endYear === startYear ? "Presente" : endYear;
  const dateItem = `(${startYear} - ${endDate})`;

  return (
    <div className={className}>
      <div>
        <Box>
          <Box className="titleIconStyles">
            <Typography sx={nameInputStyles}>{item.businessName}</Typography>
            <Box>
              <IconButton
                onClick={() => {
                  setContent(ExperienceContent.Edit);
                  setAnExperience(item);
                }}
              >
                <EditIcon sx={{ color: "#007935" }} />
              </IconButton>
              <IconButton
                onClick={() => {
                  setContent(ExperienceContent.Delete);
                  setAnExperience(item);
                }}
              >
                <DeleteIcon sx={{ color: "#007935" }} />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
          >
            <Typography variant="h6">{item.role},</Typography>
            <Typography variant="h6">{item.location},</Typography>
            <Typography variant="h6">{dateItem}</Typography>
          </Box>
          <div className={"exp-description-container"}>
            <Typography sx={descriptionStyles}>{item.description}</Typography>
          </div>
        </Box>
      </div>
    </div>
  );
};

interface Props {
  item: Experience;
  className?: string;
}

export default ExperienceItem;
