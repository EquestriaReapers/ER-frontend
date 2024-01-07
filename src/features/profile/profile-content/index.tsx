import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import {
  BothSkillsContainer,
  EducationBoxStyles,
  aboutMeSection,
  aboutMeTypographyStyles,
  buttonStyles,
  contactSectionStyles,
  descriptionBoxStyles,
  descriptionStyles,
  editIconStyles,
  mainTitleStyles,
  nameSectionStyles,
  nameStyles,
  pageContainerStyles,
  skillsAndExperiencesBoxStyles,
  skillsTitleTypographyStyles,
  topSectionStyles,
} from "./styles";
import EditProfileModal from "./profile-data/modal";
import Skills from "./skills";
import Education from "./education";
import useTransformCareerEnum from "hooks/use-transform-career-enum";
import useProfileContext from "../profile-context/use-profile-context";
import useDownloadCurriculumPDF from "./use-download-curriculum-pdf";
import ContactCard from "./contact-card";
import { SkillType } from "core/skills/types";
import Portfolio from "./portfolio";
import Experiences from "./experiences/index";

const ProfileContent = () => {
  const { profile, isEditable } = useProfileContext();
  const transformedCareerName = useTransformCareerEnum(profile.mainTitle);
  const { downloadCurriculumPDF, loading: loadingCurriculum } =
    useDownloadCurriculumPDF(profile);

  return (
    <>
      <Box>
        <Box sx={pageContainerStyles}>
          <Box sx={topSectionStyles}>
            <Box sx={nameSectionStyles}>
              <Box>
                <Typography variant="h4" sx={nameStyles}>
                  {profile.user.name} {profile.user.lastname}{" "}
                  <Box sx={editIconStyles}>
                    {isEditable && <EditProfileModal />}
                  </Box>
                </Typography>
                <Typography variant="h4" sx={mainTitleStyles}>
                  {transformedCareerName}
                </Typography>
              </Box>
              <Box
                sx={{ width: { xs: "100%", sm: "30%", md: "30%", lg: "20%" } }}
              >
                <Button
                  disabled={loadingCurriculum}
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={buttonStyles}
                  onClick={downloadCurriculumPDF}
                >
                  Descargar CV
                </Button>
              </Box>
            </Box>
            <Box sx={aboutMeSection}>
              <Box sx={descriptionBoxStyles}>
                <Typography variant="h5" sx={aboutMeTypographyStyles}>
                  Sobre Mí
                </Typography>
                {!profile.description ? (
                  <Typography>El perfil no tiene descripción.</Typography>
                ) : (
                  <Typography sx={descriptionStyles}>
                    {profile.description}
                  </Typography>
                )}
              </Box>
              <Box sx={contactSectionStyles}>
                <ContactCard />
              </Box>
            </Box>
          </Box>
          <Box sx={skillsAndExperiencesBoxStyles}>
            <Box sx={{ width: "100%" }}>
              <Typography sx={skillsTitleTypographyStyles}>
                Habilidades
              </Typography>
              <BothSkillsContainer>
                <Skills skillType={SkillType.Hard} />
                <Skills skillType={SkillType.Soft} />
              </BothSkillsContainer>
            </Box>
            <Experiences />
          </Box>
          <Box sx={EducationBoxStyles}>
            <Education />
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              gap: "34px",
            }}
          >
            <Portfolio />
          </Box>
          <Box sx={{ display: { sm: "none" }, width: { xs: "100%" } }}>
            <Button
              disabled={loadingCurriculum}
              variant="contained"
              color="primary"
              type="submit"
              sx={buttonStyles}
              onClick={downloadCurriculumPDF}
            >
              Descargar CV
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfileContent;
