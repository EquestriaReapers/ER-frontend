import { Education } from "core/profiles/types";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { EducationContent } from "../../../../education-modal-context/types";
import EducationModalContext from "../../../../education-modal-context/index";
import useUpdateEducationCV from "./use-update-CV-education";

const EducationItem = ({ item, className }: Props) => {
  const { setContent, setAnEducation } = useContext(EducationModalContext);
  const getYear = (date: string | number | Date) =>
    new Date(date).getFullYear();
  const endYear = item.endDate ? getYear(item.endDate) : "No especificado";
  const dateItem = `(${endYear})`;
  const updateEducationCV = useUpdateEducationCV(!item.isVisible, item);

  return (
    <div className={className}>
      <Box>
        <Box className="titleIconStyles">
          <Box className={"typographyBoxStyles"}>
            <Typography className={"nameStyles"}>{item.title}</Typography>
          </Box>
          <Box className={"itemIconBox"}>
            <IconButton onClick={updateEducationCV}>
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
        <Box className={"inlineStyles"}>
          <Typography className={"subtitleStyles"} variant="h6">
            {item.entity} {dateItem}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

interface Props {
  item: Education;
  className?: string;
}

export default EducationItem;
