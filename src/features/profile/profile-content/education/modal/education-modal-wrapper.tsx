import { EducationContentProvider } from './education-modal-context'
import { Education } from 'core/profiles/types'
import useProfileContext from '../../../profile-context/use-profile-context'
import EducationModal from './education-modal'

const EducationModalWrapper = () => {
  const { profile } = useProfileContext()

  return (
    <>
      <EducationContentProvider educations={profile.education}>
        <EducationModal />
      </EducationContentProvider>
    </>
  )
}

export interface Props {
  educations: Education[]
}

export default EducationModalWrapper
