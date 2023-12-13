import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { modalStyle } from "../show-experiences/styles";
import useDeleteExperienceForm from "./use-form";
import { ExperienceContent } from "../../experiencies-modal-context/types";
import { useContext } from "react";
import ExperiencesModalContext from "../../experiencies-modal-context";

const DeleteExperienceModalContent = ({ experienceId, className }: Props) => {
  const { setContent } = useContext(ExperiencesModalContext);
  const { onSubmitForm } = useDeleteExperienceForm({
    setContent,
    experienceId,
  });
  return (
    <Box className={className} sx={modalStyle}>
      <form onSubmit={onSubmitForm}>
        <Typography className={"message"}>
          ¿Estás seguro de que quieres borrar la experiencia?
        </Typography>
        <Box className={"button-box"}>
          <Button
            onClick={() => setContent(ExperienceContent.Show)}
            className={"left-button"}
          >
            Regresar
          </Button>
          <Button type="submit" variant="contained">
            Confirmar
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export interface Props {
  experienceId: number;
  className?: string;
}

export default DeleteExperienceModalContent;
