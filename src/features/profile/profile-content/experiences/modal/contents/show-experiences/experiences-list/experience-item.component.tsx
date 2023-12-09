import { Experience } from "core/profiles/types";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ExperiencesModalContext from "../../../experiencies-modal-context/index";
import { useContext } from "react";
import { ExperienceContent } from "../../../experiencies-modal-context/types";
import { nameInputStyles, ubicationDateInputStyles } from "./styles";
import { descriptionStyles, inlineStyles } from "../../../styles";

const ExperienceItem = ({ item }: Props) => {
  const { setContent, setAnExperience } = useContext(ExperiencesModalContext);

  return (
    <>
      <div>
        <Box>
          <Typography sx={nameInputStyles}>{item.businessName}</Typography>
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
      <IconButton
        onClick={() => {
          setContent(ExperienceContent.Edit);
          setAnExperience(item);
        }}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        onClick={() => {
          setContent(ExperienceContent.Delete);
          setAnExperience(item);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </>
  );
};

interface Props {
  item: Experience;
}

export default ExperienceItem;
