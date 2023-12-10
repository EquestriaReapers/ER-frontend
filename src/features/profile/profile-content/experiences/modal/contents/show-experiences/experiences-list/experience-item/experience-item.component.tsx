import { Experience } from "core/profiles/types";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ExperiencesModalContext from "../../../../experiencies-modal-context/index";
import { useContext } from "react";
import { ExperienceContent } from "../../../../experiencies-modal-context/types";
import { nameInputStyles, ubicationDateInputStyles } from "../styles";
import {
  descriptionStyles,
  inlineStyles,
} from "../../../../styles";

const ExperienceItem = ({ item, className }: Props) => {
  const { setContent, setAnExperience } = useContext(ExperiencesModalContext);

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
          <Box sx={inlineStyles}>
            <Typography>{item.role}</Typography>
            <Box sx={ubicationDateInputStyles}>
              <Typography>{item.location}</Typography>
              <Typography>
                {item.startDate.toLocaleString().slice(0, 10)}
              </Typography>
              {item.endDate && (
                <Typography>
                  {item.endDate.toLocaleString().slice(0, 10)}
                </Typography>
              )}
            </Box>
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
