import { Experience } from 'core/profiles/types'
import EducationCard from './education-card'

const ShowProfileEducation = ({ experiences }: Props) => {
  return (
    <>
      {experiences.map((item: Experience) => {
        return <EducationCard key={item.id} item={item} />
      })}
    </>
  )
}

interface Props {
  experiences: Experience[]
}

export default ShowProfileEducation
