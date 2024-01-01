import { EducationContentProvider } from './education-modal-context'
import { Education } from 'core/profiles/types'
import ExperiencesModal from './education-modal'
import useProfileContext from '../../../profile-context/use-profile-context'

const EducationModalWrapper = () => {
  const { profile } = useProfileContext()

  return (
    <>
      <EducationContentProvider educations={profile.education}>
        <ExperiencesModal />
      </EducationContentProvider>
    </>
  )
}

export interface Props {
  educations: Education[]
}

export default EducationModalWrapper
