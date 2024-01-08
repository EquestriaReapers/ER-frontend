import { Box } from "@mui/material";
import { Education } from "core/profiles/types";
import { useContext } from "react";
import EducationItem from "./experience-item/education-item.styled";
import EducationModalContext from "../../../education-modal-context";

const EducationList = ({ className }: Props) => {
  const { educations } = useContext(EducationModalContext);

  return (
    <Box className={className}>
      {educations.map((item: Education) => {
        return (
          <Box key={item.id}>
            <EducationItem item={item} />
          </Box>
        );
      })}
    </Box>
  );
};

interface Props {
  className?: string;
}

export default EducationList;
