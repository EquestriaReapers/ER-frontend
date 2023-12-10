import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { style } from "../styles/styles";
import { MessageResponse } from "features/profile/services/profile.service";
const DeleteSkillModalContent = ({
  onDeleteSkill,
  setIsOpen,
}: Props) => {
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

export interface Props {
  onDeleteSkill: () => Promise<MessageResponse | undefined>;
  setIsOpen: (isOpen: boolean) => void;
}

export default DeleteSkillModalContent;
