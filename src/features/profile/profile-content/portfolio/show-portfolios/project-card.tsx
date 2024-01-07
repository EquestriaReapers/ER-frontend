import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Modal
} from '@mui/material'
import { Portfolio } from 'core/profiles/types'
import { useState } from 'react'
import ProjectInfoModal from './project-info-modal'

function ProjectCard({ project }: Props) {
  const [hover, setHover] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const showPortfolioText = () => setHover(true)
  const hidePortfolioText = () => setHover(false)

  const limitWords = (text: string, limit: number) => {
    const words = text.split(' ')
    return words.length > limit ? `${words.slice(0, limit).join(' ')}...` : text
  }

  return (
    <div>
      <Card
        sx={{
          maxWidth: '300px',
          width: '300px',
          maxHeight: '1000',
          height: '300px',
          textDecoration: 'none',
          cursor: 'pointer'
        }}
        onMouseEnter={showPortfolioText}
        onMouseLeave={hidePortfolioText}
        onClick={() => setIsOpen(true)}
      >
        <CardMedia
          sx={{
            display: 'flex',
            height: '300px'
          }}
          image={project.imagePrincipal!}
          title={project.title}
        >
          <Box sx={{ width: '300px' }}></Box>
          {hover && (
            <CardContent
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.58)  ',
                py: '32px',
                px: '32px',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '22px'
              }}
            >
              <Typography
                sx={{
                  color: '#FFF',
                  fontFamily: 'inter',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: 'normal',
                  textTransform: 'capitalize'
                }}
              >
                {project.title}
              </Typography>
              <Typography
                sx={{
                  color: '#FFF',
                  fontFamily: 'inter',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textTransform: 'capitalize'
                }}
              >
                {limitWords(project.description, 40)}
              </Typography>
            </CardContent>
          )}
        </CardMedia>
      </Card>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ProjectInfoModal project={project} setIsOpen={setIsOpen} />
      </Modal>
    </div>
  )
}

interface Props {
  project: Portfolio
}
export default ProjectCard
