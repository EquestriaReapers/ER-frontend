import { Typography, Box, IconButton } from "@mui/material";
import { Skill } from "core/profiles/types";
import { skillTitleStyles } from "./styles";
import ClearIcon from "@mui/icons-material/Clear";
import useDeleteSkill from "../../use-delete-skill";

const SkillCard = ({ item }: Props) => {
  const deleteSkill = useDeleteSkill(item.id);

  return (
    <Box>
      <Typography sx={skillTitleStyles} variant="h6">
        {item.name}
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
