import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { style } from "../styles/styles";
import { Profile } from "core/profiles/types";
const DeleteSkillModalContent = ({ onDeleteSkill, setIsOpen }: Props) => {
  const closeModal = () => setIsOpen(false);
  return (
    <Box sx={style}>
      <Typography>¿Estás seguro de que quieres borrar la habilidad?</Typography>
      <Button onClick={closeModal}>Regresar</Button>
      <Button variant="contained" onClick={onDeleteSkill}>
        Confirmar
      </Button>
    </Box>
  );
};

export interface Props {
  onDeleteSkill: () => Promise<Profile | undefined>;
  setIsOpen: (isOpen: boolean) => void;
}

export default DeleteSkillModalContent;
