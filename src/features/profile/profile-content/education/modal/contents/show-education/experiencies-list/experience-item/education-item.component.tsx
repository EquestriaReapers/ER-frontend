import { Education } from 'core/profiles/types'
import Typography from '@mui/material/Typography'
import { Box, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useContext } from 'react'
import { EducationContent } from '../../../../education-modal-context/types'
import EducationModalContext from '../../../../education-modal-context/index'
import useUpdateEducationCV from './use-update-CV-education'

const EducationItem = ({ item, className }: Props) => {
  const { setContent, setAnEducation } = useContext(EducationModalContext)
  const getYear = (date: string | number | Date) => new Date(date).getFullYear()
  const endYear = item.endDate ? getYear(item.endDate) : 'No especificado'
  const dateItem = `(${endYear})`
  const updateEducationCV = useUpdateEducationCV(!item.isVisible, item)

  return (
    <Box className={className}>
      <Box>
        <Box className='titleIconStyles'>
          <Box
            className={'typographyBoxStyles'}
            sx={{ gap: 2, alignItems: 'center' }}
          >
            <Typography className={'nameStyles'}>{item.title}</Typography>
            {item.isUCAB && (
              <Typography
                className={
                  item.principal
                    ? 'principalButtonStyles'
                    : 'SecundariaButtonStyles'
                }
              >
                {item.principal ? 'Principal' : 'Secundaria'}
              </Typography>
            )}
          </Box>
          <Box className={'itemIconBox'}>
            <IconButton onClick={updateEducationCV} disabled={item.isUCAB}>
              <Typography
                className={
                  item.isUCAB
                    ? 'cvButtonStyleUCAB'
                    : item.isVisible
                    ? 'cvButtonStyleTrue'
                    : 'cvButtonStyleFalse'
                }
              >
                CV
              </Typography>
            </IconButton>

            {item.isUCAB ? (
              <>
                <IconButton
                  disabled={item.principal}
                  onClick={() => {
                    setContent(EducationContent.Edit)
                    setAnEducation(item)
                  }}
                >
                  <EditIcon
                    sx={{ color: item.principal ? 'gray' : '#007935' }}
                  />
                </IconButton>
                <IconButton disabled>
                  <DeleteIcon sx={{ color: 'gray' }} />
                </IconButton>
              </>
            ) : (
              <>
                <IconButton
                  onClick={() => {
                    setContent(EducationContent.Edit)
                    setAnEducation(item)
                  }}
                >
                  <EditIcon sx={{ color: '#007935' }} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    setContent(EducationContent.Delete)
                    setAnEducation(item)
                  }}
                >
                  <DeleteIcon sx={{ color: '#007935' }} />
                </IconButton>
              </>
            )}
          </Box>
        </Box>
      </Box>
      <Box className={'inlineStyles'}>
        <Typography className={'subtitleStyles'} variant='h6'>
          {item.entity} {dateItem}
        </Typography>
      </Box>
    </Box>
  )
}

interface Props {
  item: Education
  className?: string
}

export default EducationItem
