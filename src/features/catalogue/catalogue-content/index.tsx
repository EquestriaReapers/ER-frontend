import { Box, Pagination, Stack, Typography } from '@mui/material'
import ShowProfiles from './profiles/show-profiles'
import {
  filtersContainer,
  filtersContainerBackground,
  navBarStyles,
  pageContainer,
  catalogueContainer,
  searchBarContainer
} from './styles'
import Filters from './filters'
import CatalogueSearchBar from './components/SearchBar'
import useCatalogueProfiles from './profiles/use-catalogue'
import { ChangeEvent } from 'react'
import useSeed from './hooks/use-seed'

const Catalogue = () => {
  const seed = useSeed()
  const {
    profileList,
    pagination,
    setCurrentPage,
    setProfileList,
    setPagination,
    text,
    currentPage
  } = useCatalogueProfiles(seed)

  return (
    <>
      {!seed ? (
        <Typography>PAPA PAPA </Typography>
      ) : (
        <>
          <Box sx={navBarStyles}>fakenavbar por ahora</Box>
          <Box sx={pageContainer}>
            <Box sx={catalogueContainer}>
              <Box sx={filtersContainer}>
                <Filters />
              </Box>

              <Box
                sx={{
                  width: '100%',
                  maxWidth: '500px',
                  height: '90%',
                  mx: { xs: '30px', sm: '50px' }
                }}
              >
                <Box sx={searchBarContainer}>
                  <CatalogueSearchBar
                    setProfileList={setProfileList}
                    setPagination={setPagination}
                    currentPage={currentPage}
                    seed={seed}
                    text={text}
                  />
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
                      onChange={(_: ChangeEvent<unknown>, value: number) => {
                        setCurrentPage(value)
                      }}
                    />
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  )
}

export default Catalogue
