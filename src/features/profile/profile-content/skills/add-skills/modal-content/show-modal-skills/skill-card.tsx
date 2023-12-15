import { Typography, Box } from "@mui/material";
import { Skill } from "core/profiles/types";
import { skillTitleStyles } from "./styles";
import ClearIcon from "@mui/icons-material/Clear";
import useDeleteSkill from "../../../delete-skills/use-delete-skill";

const SkillCard = ({ item }: Props) => {
  const deleteSkill = useDeleteSkill({ skillId: item.id });
  return (
    <Box>
      <Typography sx={skillTitleStyles} variant="h6">
        {item.name}
        <ClearIcon onClick={deleteSkill} />
      </Typography>
    </Box>
  );
};

interface Props {
  item: Skill;
}

export default SkillCard;
