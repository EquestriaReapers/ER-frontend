import { Box } from "@mui/material";
import { Skill } from "core/profiles/types";
import { skillTitleStyles } from "./styles";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const InvisibleSpace = ({ item }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <>
      <Box
        style={style}
        sx={{
          flex: 1,
          flexDirection: "row",
          display: "flex",
          width: "30px",
          height: "40px",
          flexWrap: "wrap",
          background: "yellow",
          "&hover": {
            background: "red",
          },
          "&:active": {
            background: "green",
          },
        }}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
      >
        No hay elementos! agrega el primero
      </Box>
    </>
  );
};

interface Props {
  item: Skill;
}

export default InvisibleSpace;
