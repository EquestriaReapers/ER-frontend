import { ExperiencesContentProvider } from "./experiencies-modal-context";
import { Experience } from "core/profiles/types";
import ExperiencesModal from "./experiences-modal";

const ExperienceModalWrapper = ({ experiences }: Props) => {
  return (
    <>
      <ExperiencesContentProvider experiences={experiences}>
        <ExperiencesModal />
      </ExperiencesContentProvider>
    </>
  );
};

export interface Props {
  experiences: Experience[];
}

export default ExperienceModalWrapper;
