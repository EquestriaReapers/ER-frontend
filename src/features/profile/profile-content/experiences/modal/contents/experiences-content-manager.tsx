import { useContext } from "react";
import AddExperience from "./add-experiences/add-experience.styled";
import ShowExperience from "./show-experiences/show-experiences.styled";
import EditExperienceModalContent from "./edit-experiences/modal-content.styled";
import DeleteExperienceModalContent from "./delete-experiences/modal-content";
import { ExperienceContent } from "../experiencies-modal-context/types";
import ExperiencesModalContext from "../experiencies-modal-context";

export const ExperiencesContentManager = () => {
  const { content, anExperience } = useContext(ExperiencesModalContext);

  switch (content) {
    case ExperienceContent.Show:
      return <ShowExperience />;
    case ExperienceContent.Add:
      return <AddExperience />;
    case ExperienceContent.Edit:
      if (!anExperience) {
        debugError("anExperience is null");
        return null;
      }

      return <EditExperienceModalContent anExperience={anExperience} />;
    case ExperienceContent.Delete:
      if (!anExperience) {
        debugError("anExperience is null");
        return null;
      }

      return <DeleteExperienceModalContent experienceId={anExperience!.id} />;
    default:
      return null;
  }
};

function debugError(message: string) {
  console.error(message);
  alert(message);
}
