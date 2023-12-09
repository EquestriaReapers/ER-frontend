import { Experience } from "core/profiles/types";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ExperiencesModalContext from "../../../experiencies-modal-context/index";
import {
  nameStyles,
  ubicationDateStyles,
  descriptionStyles,
  inlineStyles,
} from "../../styles/styles";
import { useContext } from "react";
import { ExperienceContent } from "../../../experiencies-modal-context/types";

const ExperienceItem = ({ item }: Props) => {
  const { setContent, setAnExperience } = useContext(ExperiencesModalContext);

  return (
    <>
      <div>
        <Box>
          <Typography variant="h5" sx={nameStyles}>
            {item.businessName}
          </Typography>
          <Box sx={inlineStyles}>
            <Typography variant="h6">{item.role}</Typography>
            <Box sx={ubicationDateStyles}>
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
          <Typography variant="h6" sx={descriptionStyles}>
            {item.description}
          </Typography>
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
