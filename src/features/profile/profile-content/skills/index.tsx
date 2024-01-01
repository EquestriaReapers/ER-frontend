import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import ShowSkills from "./show-profile-skills";
import useProfileContext from "../../profile-context/use-profile-context";
import { skillTitleStyles, boxWrapperStyles, boxStyles } from "./styles";
import EditSkills from "./edit-skills";
import { SkillType } from "core/skills/types";

const ProfileSkills = ({ skillType }: Props) => {
  const { profile, isEditable } = useProfileContext();
  return (
    <>
      <Box sx={boxWrapperStyles}>
        <Box sx={boxStyles}>
          <Typography sx={skillTitleStyles} variant="h4">
            {skillType === SkillType.Hard
              ? "Habilidades duras"
              : "Habilidades blandas"}
          </Typography>
          {isEditable && <EditSkills skillType={skillType} />}
        </Box>
        <ShowSkills
          skills={profile.skills.filter((skill) => skill.type === skillType)}
        />
      </Box>
    </>
  );
};

interface Props {
  skillType: SkillType;
}

export default ProfileSkills;
