import { Button, Box, Typography } from "@mui/material";
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
import { useSkillsModalContext } from "../skills-modal-context/use-skills-modal-context";
import { SkillType } from "core/skills/types";
import { Props, useCloseModal } from "./modal-content.component";

export const ModalContent = ({ setIsOpen }: Props) => {
  const { loading, skillType } = useSkillsModalContext();
  const { profile } = useProfileContext();
  const closeModal = useCloseModal(setIsOpen);

  return (
    <Box>
      {loading && <SpinnerAbsolute />}
      <Typography sx={titleStyles}>
        {skillType === SkillType.Hard
          ? `Gestionar habilidades duras`
          : `Gestionar habilidades blandas`}
      </Typography>
      <Typography sx={descriptionStyles}>
        {skillType === SkillType.Hard
          ? `En esta sección podrás modificar las habilidades duras que muestres al publico en tu perfil y cv.`
          : `En esta sección podrás modificar las habilidades blandas que muestres al publico en tu perfil y cv.`}
      </Typography>
      <Typography sx={skillTitleStyle}>Nueva habilidad</Typography>
      <AddSkillField />
      <Typography sx={skillTitleStyle}>Habilidades</Typography>
      <Box
        sx={{
          bordeRadius: "5px",
          border: "1px solid #777",
          background: "rgba(217, 217, 217, 0.00)",
          padding: "20px",
          my: "10px",
        }}
      >
        <Box
          sx={{
            bordeRadius: "5px",
            border: "1px solid #777",
            background: "rgba(217, 217, 217, 0.00)",
            padding: "10px",
          }}
        >
          <Typography>Mostradas en CV</Typography>
        </Box>
        Mostradas tanto en perfil como en CV <Typography />
      </Box>
      <ShowSkills
        skills={profile.skills.filter((item) => item.type === skillType)}
      />
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
