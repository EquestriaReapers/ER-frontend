import { Button, Box, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import {
  buttonStyle,
  titleStyles,
  skillTitleStyle,
  descriptionStyles,
} from "../../../../styles";
import ShowSkills from "./show-skills/show-skills.component";
import useProfileContext from "../../../../profile-context/use-profile-context";
import AddSkillField from "./add-skill-field";
import SpinnerAbsolute from "components/spinner-absolute";

const ModalContent = ({ setIsOpen }: Props) => {
  const [loading, setLoading] = useState(false);
  const { profile } = useProfileContext();
  const closeModal = useCloseModal(setIsOpen);

  return (
    <Box>
      {loading && <SpinnerAbsolute />}
      <Typography sx={titleStyles}>Gestionar Habilidades</Typography>
      <Typography sx={descriptionStyles}>
        En esta sección podrás modificar las habilidades tanto blandas como
        duras que muestres al público
      </Typography>
      <Typography sx={skillTitleStyle}>Nueva habilidad</Typography>
      <AddSkillField loading={loading} setLoading={setLoading} />
      <Typography sx={skillTitleStyle}>Habilidades</Typography>
      <ShowSkills setLoading={setLoading} skills={profile.skills} />
      <Button
        sx={buttonStyle}
        className="exp-show-button"
        type="submit"
        onClick={closeModal}
      >
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
