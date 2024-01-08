import { Box } from "@mui/material";
import { Skill } from "core/profiles/types";
import { skillTitleStyles } from "./styles";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const InvisibleSpace = ({ item, children }: Props) => {
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
          minHeight: "120px",
          maxWidth: "100%",
          width: "100%",
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
        {children}
      </Box>
    </>
  );
};

interface Props {
  item: Skill;
  children: React.ReactNode;
}

export default InvisibleSpace;
