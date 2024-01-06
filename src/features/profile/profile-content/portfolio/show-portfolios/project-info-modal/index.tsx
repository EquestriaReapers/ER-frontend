import { Box, Card, CardMedia, Typography } from '@mui/material'
import { modalStyle } from './styles'
import { Portfolio } from 'core/profiles/types'

const ProjectInfoModal = ({ project }: Props) => {
  const getYear = (date: string | number | Date) => new Date(date).getFullYear()

  return (
    <Box sx={modalStyle}>
      <Box
        sx={{
          width: '100%',
          height: '120px',
          backgroundColor: '#D9D9D9',
          borderRadius: '6px 6px 0px 0px'
        }}
      ></Box>
      <Box
        sx={{
          mx: '24px',
          my: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}
      >
        <Box>
          <Typography
            sx={{
              color: '#000',
              fontFamily: 'Inter',
              fontSize: '24px',
              fontWeight: '700',
              textTransform: 'capitalize'
            }}
          >
            {project.title}
          </Typography>

          <Typography
            sx={{
              color: '#000',
              fontFamily: 'inter',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: 'normal'
            }}
          >
            {getYear(project.dateEnd)} | {project.location}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            maxHeight: '500px',
            padding: '10px'
          }}
        >
          <Typography
            sx={{
              color: '#000',
              fontFamily: 'inter',
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: 'normal'
            }}
          >
            {project.description}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {project.image &&
            project.image.map((image) => (
              <Card
                sx={{ maxWidth: '150px', width: '100%', marginBottom: '12px' }}
              >
                <CardMedia
                  sx={{
                    display: 'flex',
                    height: '150px',
                    width: '100%',
                    position: 'relative'
                  }}
                  image={image}
                  title={project.title}
                ></CardMedia>
              </Card>
            ))}
        </Box>
      </Box>
    </Box>
  )
}

interface Props {
  project: Portfolio
}
export default ProjectInfoModal
