import {
  Box,
  Typography,
  Paper,
  InputBase,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CatalogueContent from "./catalogue-content";
import { useCallback, useEffect, useState } from "react";
import { fetchPaginatedProfiles } from "./services/get-paginated-profiles.service";
import { useAuthState } from "hooks/use-auth-state";
import { Profile } from "core/profiles/types";

const Catalogue = () => {
  const { token } = useAuthState();
  const [profileList, setProfileList] = useState<Profile[] | null>(null);

  const getProfileList = useCallback(async () => {
    try {
      if (!token) return;
      const response = await fetchPaginatedProfiles(token, 1, 4);
      setProfileList(response.profiles);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  useEffect(() => {
    getProfileList();
  }, [getProfileList]);

  console.log(profileList);
  return (
    <>
      {profileList ? (
        <>
          {" "}
          <Box
            sx={{
              boxShadow: "0px 0px 64px 0px rgba(0, 0, 0, 0.07)",
              width: "100%",
              height: "60px",
            }}
          >
            fakenavbar por ahora
          </Box>
          <Box sx={{ backgroundColor: "#EAEAEA", height: "100%" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                py: 8,
              }}
            >
              <Box
                sx={{
                  width: "80%",
                  height: "80%",
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Box
                  sx={{
                    width: "40%",
                    backgroundColor: "#FFFFFF",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: "0px 4px 4px 0px",
                      boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
                      height: "100%",
                      paddingTop: "40px",
                      paddingLeft: "50px",
                    }}
                  >
                    <Typography sx={{ fontWeight: "700", fontSize: "1.25rem" }}>
                      Filtros
                    </Typography>

                    <Typography
                      sx={{
                        fontWeight: "700",
                        fontSize: "1rem",
                        paddingTop: 2,
                      }}
                    >
                      Carrera
                    </Typography>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Carrera 1"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Carrera 2"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Carrera 3"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Carrera 4"
                      />
                    </FormGroup>

                    <Typography
                      sx={{
                        fontWeight: "700",
                        fontSize: "1rem",
                        paddingTop: 2,
                      }}
                    >
                      select de carrera
                    </Typography>

                    <Typography
                      sx={{
                        fontWeight: "700",
                        fontSize: "1rem",
                        paddingTop: 2,
                      }}
                    >
                      Habilidades
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ width: "100%", height: "90%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      marginLeft: "50px",
                      marginTop: "50px",
                      marginBottom: "20px",
                    }}
                  >
                    <Paper
                      component="form"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: 375,
                        paddingLeft: "4px",
                        backgroundColor: "white",
                        border: "1px solid #000",
                        borderRadius: "2px",
                      }}
                    >
                      <SearchIcon sx={{ color: "gray" }} />
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Buscador"
                        inputProps={{ "aria-label": "search google maps" }}
                      />
                    </Paper>
                    <Button
                      variant="text"
                      sx={{
                        color: "#000",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                        textTransform: "capitalize",
                      }}
                    >
                      Buscar
                    </Button>
                  </Box>

                  <CatalogueContent profileList={profileList} />
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <Typography>PAPA PAPA </Typography>
      )}
    </>
  );
};

export default Catalogue;
