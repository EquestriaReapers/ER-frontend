import { Typography, Box, IconButton } from "@mui/material";
import { Skill } from "core/profiles/types";
import { skillBoxStyles, skillTitleStyles } from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useDeleteSkill from "../../use-delete-skill";
import useUpdateSkill from "./use-update-skill";

const SkillCard = ({ item }: Props) => {
  const deleteSkill = useDeleteSkill(item.id);
  const onUpdateSkill = useUpdateSkill();
  return (
    <Box sx={skillBoxStyles}>
      <Typography variant="h6" sx={skillTitleStyles}>
        {item.name}
      </Typography>
      <Box>
        {item.isVisible === true ? (
          <IconButton
            onClick={() => onUpdateSkill(item, false)}
            sx={{ height: "30px", width: "30px" }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => onUpdateSkill(item, true)}
            sx={{ height: "30px", width: "30px" }}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        )}

        <IconButton sx={{ height: "30px", width: "30px" }}>
          <CloseIcon sx={{ color: "#545454" }} onClick={deleteSkill} />
        </IconButton>
      </Box>
    </Box>
  );
};

interface Props {
  item: Skill;
}

export default SkillCard;
