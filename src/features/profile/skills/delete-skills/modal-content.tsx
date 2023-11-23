import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { style } from "../styles/styles";
import { Profile } from "core/profiles/types";
const DeleteSkillModalContent = ({
  onDeleteSkill,
  setIsOpen,
}: DeleteSkillModalContentProps) => {
  return (
    <Box sx={style}>
      <Typography>¿Estás seguro de que quieres borrar la habilidad?</Typography>
      <Button onClick={() => setIsOpen(false)}>Regresar</Button>
      <Button variant="contained" onClick={onDeleteSkill}>
        Confirmar
      </Button>
    </Box>
  );
};

export interface DeleteSkillModalContentProps {
  onDeleteSkill: () => Promise<Profile | undefined>;
  setIsOpen: (arg0: boolean) => void;
}

export default DeleteSkillModalContent;
