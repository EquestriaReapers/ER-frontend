import { Typography, Box, IconButton } from "@mui/material";
import { Skill } from "core/profiles/types";
import { skillTitleStyles } from "./styles";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useDeleteSkill from "../../use-delete-skill";
import useUpdateSkill from "./use-update-skill";

const SkillCard = ({ item }: Props) => {
  const deleteSkill = useDeleteSkill(item.id);
  const onUpdateSkill = useUpdateSkill();
  return (
    <Box>
      <Typography sx={skillTitleStyles} variant="h6">
        {item.name}

        {item.isVisible === true ? (
          <IconButton onClick={() => onUpdateSkill(item, false)}>
            <KeyboardArrowDownIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => onUpdateSkill(item, true)}>
            <KeyboardArrowUpIcon />
          </IconButton>
        )}

        <IconButton>
          <ClearIcon sx={{ color: "#545454" }} onClick={deleteSkill} />
        </IconButton>
      </Typography>
    </Box>
  );
};

interface Props {
  item: Skill;
}

export default SkillCard;
