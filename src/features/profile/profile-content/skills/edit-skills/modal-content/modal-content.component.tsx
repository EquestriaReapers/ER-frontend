import { Button, Box, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
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
import { Skill } from "core/profiles/types";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import SkillCard from "./show-skills/skill-card.component";

const ModalContent = ({ setIsOpen }: Props) => {
  const { loading, skillType } = useSkillsModalContext();
  const { profile } = useProfileContext();
  const closeModal = useCloseModal(setIsOpen);
  const [visibleInCV, setVisibleInCV] = useState<Skill[]>([]);
  const [visibleInProfile, setVisibleInProfile] = useState<Skill[]>([]);

  const getSkillsInfo = useCallback(() => {
    profile.skills.forEach((skill: Skill) => {
      if (skill.isVisible === true) {
        setVisibleInCV((prevSkills: Skill[]) => [...prevSkills, skill]);
      }
      if (skill.isVisible === false) {
        setVisibleInProfile((prevSkills: Skill[]) => [...prevSkills, skill]);
      }
    });
  }, [profile.skills]);

  useEffect(() => {
    getSkillsInfo();
  }, [getSkillsInfo]);

  const onDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active) {
      setVisibleInCV((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }, []);
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
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext
            items={visibleInCV}
            strategy={verticalListSortingStrategy}
          >
            {visibleInCV.map((item: Skill) => {
              return <SkillCard item={item} />;
            })}
          </SortableContext>
        </DndContext>
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
