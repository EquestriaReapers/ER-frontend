import { Button, Box, Typography } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
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
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import SkillCard from "./show-skills/skill-card.component";
import defaultAnnouncements from "./defaultcosa";
import InvisibleSpace from "./show-skills/invisible-space";

function useCloseModal(setIsOpen: (open: boolean) => void) {
  return useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
}

export interface Props {
  setIsOpen: (open: boolean) => void;
}

const ModalContent = ({ setIsOpen }: Props) => {
  const { loading, skillType } = useSkillsModalContext();
  const { profile } = useProfileContext();
  const closeModal = useCloseModal(setIsOpen);

  const refMaldito = useRef<boolean>(false);

  const _visibleInCv = profile.skills
    .filter((skill) => skill.type === skillType)
    .filter((skill) => skill.isVisible === true);

  const _invisibleInCv = profile.skills
    .filter((skill) => skill.type === skillType)
    .filter((skill) => skill.isVisible === false);

  const [visibleInCv, setVisibleInCV] = useState<Skill[]>([]);
  const [invisibleInCv, setInvisibleInCV] = useState<Skill[]>([]);
  useEffect(() => {
    if (!refMaldito.current) {
      setVisibleInCV(_visibleInCv);
      setInvisibleInCV(_invisibleInCv);
      refMaldito.current = true;
    }
  }, [_visibleInCv, _invisibleInCv]);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over: _over } = event;

    console.log("!OVER", _over);
    const over = _over;
    console.log("==============================");
    console.log("COMIENZAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    console.log("ACTIVE - over", active.id, over?.id);

    if (active.id !== over?.id) {
      let updatedVisibleInCv = [
        {
          id: -1,
          name: "visible",
          isVisible: true,
          type: SkillType.Hard,
        },
        ...visibleInCv,
      ];
      let updatedInvisibleInCv = [
        {
          id: -2,
          name: "invisible",
          isVisible: false,
          type: SkillType.Hard,
        },
        ...invisibleInCv,
      ];
      const poolCompartido = [...visibleInCv, ...invisibleInCv];

      console.log("PREVIOUS", {
        updatedVisibleInCv: [...updatedVisibleInCv],
        updatedInvisibleInCv: [...updatedInvisibleInCv],
      });

      const activeSkill = poolCompartido.find(
        (skill) => skill.id === active.id
      );
      if (!activeSkill) {
        return;
      }
      let overSkill = poolCompartido.find((skill) => skill.id === over?.id);
      if (!overSkill) {
        overSkill = {
          id: activeSkill.isVisible ? -1 : -2,
          name: activeSkill.isVisible ? "visible" : "invisible",
          isVisible: activeSkill.isVisible ? false : true,
          type: SkillType.Hard,
        };
      }

      //const overSkill = profile.skills.find((skill) => skill.id === over.id);
      const activeSkillIndex: number = (
        activeSkill.isVisible ? updatedVisibleInCv : updatedInvisibleInCv
      ).findIndex((skill) => {
        return skill.id === active.id;
      });
      const overSkillIndex: number = (
        overSkill.isVisible ? updatedVisibleInCv : updatedInvisibleInCv
      ).findIndex((skill) => {
        return skill.id === over?.id;
      });

      console.log("ITEMS ", activeSkill, overSkill);
      console.log("IDES ", activeSkill.id, overSkill.id);
      console.log("INDEX", activeSkillIndex, overSkillIndex);

      if (activeSkill.isVisible === overSkill.isVisible) {
        console.log("ESTAN EN UN MISMO GRUPO");
        // No papa, estas intentando mover habilidades en un mismo grupo
        return;
      }

      let updatedInvisibleInCvFinal = [...updatedInvisibleInCv];
      let updatedVisibleInCvFinal = [...updatedVisibleInCv];

      if (activeSkill.isVisible === true) {
        // Agrega el activeSkill en el nuevo lugar
        updatedInvisibleInCvFinal.splice(overSkillIndex, 0, {
          ...activeSkill,
          isVisible: false,
        });
        // Elimina TODAS las incidencias del activeSkills en el viejo lugar
        updatedVisibleInCvFinal = updatedVisibleInCvFinal.filter(
          (skill) => skill.id !== activeSkill.id
        );
      } else {
        // Agrega el activeSkill en el nuevo lugar
        updatedVisibleInCvFinal.splice(overSkillIndex, 0, {
          ...activeSkill,
          isVisible: true,
        });
        // Elimina TODAS las incidencias del activeSkills en el viejo lugar
        updatedInvisibleInCvFinal = updatedInvisibleInCvFinal.filter(
          (skill) => skill.id !== activeSkill.id
        );
      }

      // Quitamos los visibles o invisibles
      updatedVisibleInCvFinal = updatedVisibleInCvFinal.filter(
        (skill) => skill.id !== -1
      );
      updatedInvisibleInCvFinal = updatedInvisibleInCvFinal.filter(
        (skill) => skill.id !== -2
      );

      console.log("POST", {
        updatedVisibleInCvFinal: [...updatedVisibleInCvFinal],
        updatedInvisibleInCv: [...updatedInvisibleInCvFinal],
      });

      setVisibleInCV(updatedVisibleInCvFinal);
      setInvisibleInCV(updatedInvisibleInCvFinal);
    }
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
      <Typography sx={{ background: "green" }}>
        {JSON.stringify(visibleInCv)}
      </Typography>
      <Typography sx={skillTitleStyle}>Habilidades</Typography>
      <Typography sx={{ background: "green" }}>
        {JSON.stringify(invisibleInCv)}
      </Typography>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={[...visibleInCv, ...invisibleInCv].map((item) => item.id)}
          strategy={horizontalListSortingStrategy}
        >
          <Box
            sx={{
              bordeRadius: "5px",
              border: "1px solid #777",
              background: "rgba(217, 217, 217, 0.00)",
              padding: "20px",
              my: "10px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  flex: 1,
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <InvisibleSpace
                  item={{
                    id: -1,
                    name: "visible",
                    isVisible: true,
                    type: SkillType.Hard,
                  }}
                >
                  {visibleInCv.map((item: Skill, index) => {
                    return (
                      <SkillCard
                        item={item}
                        key={`visible-${item.id}-${index}`}
                      />
                    );
                  })}
                </InvisibleSpace>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  flex: 1,
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <InvisibleSpace
                  item={{
                    id: -2,
                    name: "invisible",
                    isVisible: false,
                    type: SkillType.Hard,
                  }}
                >
                  {invisibleInCv.map((item: Skill, index) => {
                    return (
                      <SkillCard
                        item={item}
                        key={`invisible-${item.id}-${index}`}
                      />
                    );
                  })}
                </InvisibleSpace>
              </Box>
            </Box>
          </Box>
        </SortableContext>
      </DndContext>

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

export default ModalContent;
