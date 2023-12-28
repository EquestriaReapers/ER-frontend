import { Button, Box, Typography } from "@mui/material";
import { useCallback } from "react";
import { buttonStyle, titleStyles } from "../../../../styles";
import ShowSkills from "./show-skills/show-skills.component";
import useProfileContext from "../../../../profile-context/use-profile-context";
import AddSkillField from "./add-skill-field";

const ModalContent = ({ setIsOpen }: Props) => {
  const { profile } = useProfileContext();
  const closeModal = useCloseModal(setIsOpen);

  return (
    <Box>
      <Typography sx={titleStyles}>Gestionar Habilidades</Typography>
      <Typography>
        En esta sección podrás modificar las habilidades tanto blandas como
        duras que muestres al público
      </Typography>
      <Typography sx={{ fontWeight: "600", padding: "12px 0px 12px 0px" }}>
        Nueva habilidad
      </Typography>

      <AddSkillField />

      <Typography sx={{ fontWeight: "600" }}>Habilidades</Typography>
      <ShowSkills skills={profile.skills} />
      <Button sx={buttonStyle} type="submit" onClick={closeModal}>
        Listo
      </Button>
    </Box>
  );
};

function useCloseModal(setIsOpen: (open: boolean) => void) {
  return useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
}

export interface Props {
  setIsOpen: (open: boolean) => void;
}

export default ModalContent;
