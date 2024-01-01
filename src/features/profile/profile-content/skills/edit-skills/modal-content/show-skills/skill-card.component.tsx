import { Typography, Box, IconButton } from "@mui/material";
import { Skill } from "core/profiles/types";
import { skillTitleStyles } from "./styles";
import ClearIcon from "@mui/icons-material/Clear";
import useDeleteSkill from "../../use-delete-skill";

const SkillCard = ({ item, setLoading }: Props) => {
  const deleteSkill = useDeleteSkill(item.id, setLoading);
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
  setLoading: (loading: boolean) => void;
}

export default SkillCard;
