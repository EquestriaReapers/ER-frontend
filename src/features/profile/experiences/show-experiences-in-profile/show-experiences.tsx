import { Box } from '@mui/material'
import { Experience } from 'core/profiles/types'
import ExperienceCard from './experience-card'
import DeleteExperienceModal from '../delete-experience/modal'

const ShowExperiencesInProfile = ({ experience }: ShowExperiencesProps) => {
  return (
    <Box>
      {experience.map((item: Experience) => {
        return (
          <Box key={item.id}>
            <ExperienceCard item={item} />
            {<DeleteExperienceModal skillId={item.id} />}
          </Box>
        )
      })}
    </Box>
  )
}

interface ShowExperiencesProps {
  experience: Experience[]
}

export default ShowExperiencesInProfile
