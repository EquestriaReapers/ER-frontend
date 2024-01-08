import { Education } from "core/profiles/types";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { EducationContent } from "../../../../education-modal-context/types";
import { cvButtonStyle } from "../styles";
import EducationModalContext from "../../../../education-modal-context/index";

const EducationItem = ({ item, className }: Props) => {
  const { setContent, setAnEducation } = useContext(EducationModalContext);
  const getYear = (date: string | number | Date) =>
    new Date(date).getFullYear();
  const endYear = item.endDate ? getYear(item.endDate) : "No especificado";

  const dateItem = `(${endYear})`;

  return (
    <div className={className}>
      <div>
        <Box>
          <Box className="titleIconStyles">
            <Typography sx={nameStyles}>{item.title}</Typography>
            <Box>
              <IconButton>
                <Typography sx={cvButtonStyle}>CV</Typography>
              </IconButton>
              <IconButton
                onClick={() => {
                  setContent(EducationContent.Edit);
                  setAnEducation(item);
                }}
              >
                <EditIcon sx={{ color: "#007935" }} />
              </IconButton>
              {item.isUCAB ? (
                <IconButton disabled>
                  <DeleteIcon sx={{ color: "gray" }} />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    setContent(EducationContent.Delete);
                    setAnEducation(item);
                  }}
                >
                  <DeleteIcon sx={{ color: "#007935" }} />
                </IconButton>
              )}
            </Box>
          </Box>
          <Box sx={inlineStyles}>
            <Typography sx={subtitleStyles} variant="h6">
              {item.entity} {dateItem}
            </Typography>
          </Box>
        </Box>
      </div>
    </div>
  );
};

interface Props {
  item: Education;
  className?: string;
}

export default EducationItem;
