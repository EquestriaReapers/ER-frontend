import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import { Skill } from 'core/profiles/types'
import DeleteSkillModal from '../delete-skills/modal' // {isEditable && <DeleteSkillModal skillId={item.id} />}, debajo de skill card
import SkillCard from './skill-card'
import { boxStyles } from './styles/styles'

const ShowSkills = ({ skills, isEditable }: ShowSkillsProps) => {
  return (
    <Box sx={boxStyles}>
      {skills.map((item: skill) => {
        return (
          <Box key={item.id}>
            <SkillCard item={item} />
          </Box>
        )
      })}
    </Box>
  )
}

interface ShowSkillsProps {
  skills: Skill[]
  isEditable: boolean
}

export default ShowSkills
