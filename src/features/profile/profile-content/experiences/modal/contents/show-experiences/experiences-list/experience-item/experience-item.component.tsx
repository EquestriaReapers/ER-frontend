import { Experience } from "core/profiles/types";
import { Box, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ExperiencesModalContext from "features/profile/profile-content/experiences/modal/experiencies-modal-context";
import { useContext } from "react";
import { ExperienceContent } from "features/profile/profile-content/experiences/modal/experiencies-modal-context/types";
import {
  nameStyles,
  inlineStyles,
  subtitleStyles,
  descriptionStyles,
} from "../styles";
import useUpdateExperienceCV from "./use-update-CV-experience";

const ExperienceItem = ({ item, className }: Props) => {
  const { setContent, setAnExperience } = useContext(ExperiencesModalContext);
  const getYear = (date: string | number | Date) =>
    new Date(date).getFullYear();

  const startYear = getYear(item.startDate);
  const endYear = item.endDate ? getYear(item.endDate) : "Presente";
  const endDate = endYear === getYear(item.startDate) ? "Presente" : endYear;
  const dateItem = `(${startYear} - ${endDate})`;

  const updateExperienceCV = useUpdateExperienceCV(!item.isVisible, item);

  return (
    <div className={className}>
      <div>
        <Box>
          <Box className="titleIconStyles">
            <Typography sx={nameStyles}>{item.businessName}</Typography>
            <Box>
              <IconButton onClick={updateExperienceCV}>
                <Typography
                  className={
                    item.isVisible ? "cvButtonStyleTrue" : "cvButtonStyleFalse"
                  }
                >
                  CV
                </Typography>
              </IconButton>
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
          <Box sx={inlineStyles}>
            <Typography sx={subtitleStyles} variant="h6">
              {item.role},
            </Typography>
            <Typography sx={subtitleStyles} variant="h6">
              {item.location},
            </Typography>
            <Typography sx={subtitleStyles} variant="h6">
              {dateItem}
            </Typography>
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
