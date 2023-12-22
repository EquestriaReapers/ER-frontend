import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { modalStyle } from "../show-experiences/styles";
import useDeleteExperience from "./use-delete-experience";
import { ExperienceContent } from "../../experiencies-modal-context/types";
import { useContext } from "react";
import ExperiencesModalContext from "../../experiencies-modal-context";
import useProfileContext from "features/profile/profile-context/use-profile-context";

const DeleteExperienceModalContent = ({ experienceId, className }: Props) => {
  const { setContent } = useContext(ExperiencesModalContext);
  const {fetchProfile} = useProfileContext();
  const deleteExperience = useDeleteExperience({
    setContent,
    experienceId,
    fetchProfile,
  });
  return (
    <Box className={className} sx={modalStyle}>
      <form>
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
          <Button onClick={deleteExperience} variant="contained" className={"right-button"}>
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
