import { Typography, Box } from "@mui/material";
import { Skill } from "core/profiles/types";
import { skillTitleStyles } from "./styles";
import ClearIcon from "@mui/icons-material/Clear";
import useDeleteSkill from "../../use-delete-skill";
import useProfileContext from "features/profile/profile-context/use-profile-context";

const SkillCard = ({ item }: Props) => {
  const { fetchProfile } = useProfileContext();
  const deleteSkill = useDeleteSkill({ skillId: item.id, fetchProfile });
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
