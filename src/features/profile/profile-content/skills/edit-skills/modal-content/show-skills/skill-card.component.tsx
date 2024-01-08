import { Typography, Box, IconButton } from "@mui/material";
import { Skill } from "core/profiles/types";
import { skillTitleStyles } from "./styles";
import ClearIcon from "@mui/icons-material/Clear";
import useDeleteSkill from "../../use-delete-skill";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SkillCard = ({ item }: Props) => {
  const deleteSkill = useDeleteSkill(item.id);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Box
      style={style}
      sx={skillTitleStyles}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      {item.name}
      <IconButton onClick={deleteSkill}>
        <ClearIcon sx={{ color: "#545454" }} />
      </IconButton>
    </Box>
  );
};

interface Props {
  item: Skill;
}

export default SkillCard;
