import { Button, Box, Typography } from "@mui/material";
import { useCallback } from "react";
import { useDrop, useDrag } from "react-dnd";
import {
  buttonStyle,
  titleStyles,
  skillTitleStyle,
  descriptionStyles,
  skillSubtitleStyle,
} from "../../../../styles";
import ShowSkills from "./show-skills/show-skills.component";
import useProfileContext from "../../../../profile-context/use-profile-context";
import AddSkillField from "./add-skill-field";
import SpinnerAbsolute from "components/spinner-absolute";
import { useSkillsModalContext } from "../skills-modal-context/use-skills-modal-context";
import { SkillType } from "core/skills/types";
import UseUpdateSkillsCV from "../use-update-skills-cv";
import DraggableSkill from "./drag-and-drop";
import update from "immutability-helper";

const ModalContent = ({ setIsOpen }: Props) => {
  const { loading, skillType } = useSkillsModalContext();
  const { profile } = useProfileContext();
  const closeModal = useCloseModal(setIsOpen);

  const moveSkill = (dragIndex, hoverIndex) => {
    const dragSkill = skills[dragIndex];
    setSkills(
      update(skills, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragSkill],
        ],
      })
    );
  };

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
          <Typography sx={skillSubtitleStyle}>
            Mostradas en CV{" "}
            <ShowSkills
              skills={profile.skills.filter((item) => item.type === skillType)}
            />
          </Typography>
        </Box>
        <Typography sx={{ skillSubtitleStyle, padding: 1 }}>
          Mostradas tanto en perfil como en CV
          <ShowSkills
            skills={profile.skills.filter((item) => item.type === skillType)}
          />
        </Typography>
        {profile.skills
          .filter((item) => item.type === skillType)
          .map((skill, index) => (
            <DraggableSkill
              key={skill.id}
              index={index}
              skill={skill}
              moveSkill={moveSkill}
            />
          ))}
      </Box>

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
