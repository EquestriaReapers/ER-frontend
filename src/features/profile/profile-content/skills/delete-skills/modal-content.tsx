import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

const DeleteSkillModalContent = ({ onDeleteSkill, setIsOpen }: Props) => {
  const closeModal = () => setIsOpen(false);
  return (
    <Box>
      <Typography>¿Estás seguro de que quieres borrar la habilidad?</Typography>
      <Button onClick={closeModal}>Regresar</Button>
      <Button variant="contained" onClick={onDeleteSkill}>
        Confirmar
      </Button>
    </Box>
  );
};

export interface Props {
  onDeleteSkill: () => Promise<void>;
  setIsOpen: (isOpen: boolean) => void;
}

export default DeleteSkillModalContent;
