import { useContext } from "react";
import AddExperienceModalContent from "./add-experiences/modal-content";
import ShowExperienceModalContent from "./show-experiences-in-modal/modal-content";
import EditExperienceModalContent from "./edit-experiences/modal-content";
import DeleteExperienceModalContent from "./delete-experiences/modal-content";
import { ExperienceContent } from "../experiencies-modal-context/types";
import ExperiencesModalContext from "../experiencies-modal-context";

export const ExperiencesContentManager = () => {
  const { content, anExperience } = useContext(ExperiencesModalContext);

  switch (content) {
    case ExperienceContent.Show:
      return <ShowExperienceModalContent />;
    case ExperienceContent.Add:
      return <AddExperienceModalContent />;
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
