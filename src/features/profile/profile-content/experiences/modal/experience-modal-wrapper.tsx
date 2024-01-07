import { ExperiencesContentProvider } from "./experiences-modal-context";
import { Experience } from "core/profiles/types";
import ExperiencesModal from "./experiences-modal";
import useProfileContext from "../../../profile-context/use-profile-context";

const ExperienceModalWrapper = () => {
  const { profile } = useProfileContext();

  return (
    <>
      <ExperiencesContentProvider experiences={profile.experience}>
        <ExperiencesModal />
      </ExperiencesContentProvider>
    </>
  );
};

export interface Props {
  experiences: Experience[];
}

export default ExperienceModalWrapper;
