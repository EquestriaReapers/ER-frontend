import { useState } from "react";
import { Experience } from "core/profiles/types";
import AddExperienceModalContent from "./contents/add-experiences/modal-content";
import ShowExperienceModalContent from "./contents/show-experiences-in-modal/modal-content";
import EditExperienceModalContent from "./contents/edit-experiences/modal-content";
import DeleteExperienceModalContent from "./contents/delete-experiences/modal-content";
import { ExperienceContent } from "./types";

export default function useModalContentChange() {
  const [content, setContent] = useState<ExperienceContent>(
    ExperienceContent.Show
  );
  const [anExperience, setAnExperience] = useState<Experience | null>(null);

  const renderContent = (experience: Experience[]) => {
    switch (content) {
      case ExperienceContent.Show:
        return (
          <ShowExperienceModalContent
            experience={experience}
            setContent={setContent}
            setAnExperience={setAnExperience}
          />
        );
      case ExperienceContent.Add:
        return <AddExperienceModalContent setContent={setContent} />;
      case ExperienceContent.Edit:
        return (
          <EditExperienceModalContent
            setContent={setContent}
            anExperience={anExperience!}
          />
        );
      case ExperienceContent.Delete:
        return (
          <DeleteExperienceModalContent
            setContent={setContent}
            experienceId={anExperience!.id}
          />
        );
      default:
        return null;
    }
  };

  return { setContent, renderContent };
}
