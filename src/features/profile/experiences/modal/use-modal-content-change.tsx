import { useState } from "react";
import ShowExperienceModalContent from "./show-experiences-in-modal/modal-content";
import { Experience } from "core/profiles/types";
import AddExperienceModalContent from "./add-experiences/modal-content";
import EditExperienceModalContent from "./edit-experiences/modal-content";
import DeleteExperienceModalContent from "./delete-experiences/modal-content";

export default function useModalContentChange() {
  const [content, setContent] = useState(0);
  const [anExperience, setAnExperience] = useState<Experience | null>(null);

  const renderContent = (experience: Experience[]) => {
    switch (content) {
      case 0:
        return (
          <ShowExperienceModalContent
            experience={experience}
            setContent={setContent}
            setAnExperience={setAnExperience}
          />
        );
      case 1:
        return <AddExperienceModalContent setContent={setContent} />;
      case 2:
        return (
          <EditExperienceModalContent
            setContent={setContent}
            anExperience={anExperience!}
          />
        );
      case 3:
        return (
          <DeleteExperienceModalContent
            setContent={setContent}
            anExperience={anExperience!}
          />
        );
      default:
        return null;
    }
  };

  return { setContent, renderContent };
}
