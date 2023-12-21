import { Profile } from 'core/profiles/types'
import { Box, Pagination, Stack } from '@mui/material'
import ShowProfiles from './profiles/show-profiles'
import {
  filtersContainer,
  filtersContainerBackground,
  navBarStyles,
  pageContainer,
  catalogueContainer,
  searchBarContainer
} from './styles/styles'
import Filters from './filters'
import CatalogueSearchBar from './components/SearchBar'
import { useEffect, useState } from 'react'
import useGetPaginatedProfiles from './profiles/use-get-paginated-profiles'

const CatalogueContent = ({ profileList }: Props) => {
  const [profileLists, setProfileLists] = useState<Profile[]>([])
  const [pagination, setPagination] = useState<Pagination>({
    itemCount: 0,
    totalItems: 0,
    itemsPerPage: 0,
    totalPages: 0,
    currentPage: 0,
    randomSeed: 0
  })

  const { getProfileList } = useGetPaginatedProfiles({
    setProfileList: setProfileLists,
    setPagination
  })

  const handlePageChange = async () => {
    try {
      await getProfileList()
    } catch (error) {
      console.error('Error fetching paginated profiles:', error)
    }
  }

  useEffect(() => {
    getProfileList()
  }, [getProfileList])
  return (
    <>
      <Box sx={navBarStyles}>fakenavbar por ahora</Box>

      <Box sx={pageContainer}>
        <Box sx={catalogueContainer}>
          <Box sx={filtersContainerBackground}>
            <Box sx={filtersContainer}>
              <Filters />
            </Box>
          </Box>

          <Box sx={{ width: '100%', height: '90%' }}>
            <Box sx={searchBarContainer}>
              <CatalogueSearchBar />
            </Box>
            <ShowProfiles profileList={profileList} />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                my: '46px'
              }}
            >
              <Stack spacing={2}>
                <Pagination
                  count={pagination.totalPages}
                  page={pagination.currentPage}
                  shape='rounded'
                  color='primary'
                  size='large'
                  onChange={handlePageChange}
                />
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

interface Props {
  profileList: Profile[]
}
export default CatalogueContent
