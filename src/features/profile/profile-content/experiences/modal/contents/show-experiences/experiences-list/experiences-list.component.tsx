import { Box } from "@mui/material";
import { Experience } from "core/profiles/types";
import ExperiencesModalContext from "../../../experiences-modal-context";
import { useContext } from "react";
import ExperienceItem from "./experience-item/experience-item.styled";

const ExperiencesList = ({ className }: Props) => {
  const { experiences } = useContext(ExperiencesModalContext);

  return (
    <Box className={className}>
      {experiences.map((item: Experience) => {
        return (
          <Box key={item.id}>
            <ExperienceItem item={item} />
          </Box>
        );
      })}
    </Box>
  );
};

interface Props {
  className?: string;
}

export default ExperiencesList;
