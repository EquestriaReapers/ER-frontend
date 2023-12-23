import Typography from "@mui/material/Typography";
import { Skill } from "core/profiles/types";
import AddSkillsModal from "features/profile/skills/add-skills/modal";
import ShowSkills from "features/profile/skills/show-skills/show-skills";
import { boxStyles } from "features/profile/skills/show-skills/styles/styles";

const ProfileSkills = ({ isEditable, currentProfileSkills }: Props) => {
  return (
    <div>
      <Typography sx={boxStyles} variant="h4">
        Habilidades
        {isEditable && <AddSkillsModal />}
      </Typography>
      <ShowSkills skills={currentProfileSkills} isEditable={isEditable} />
    </div>
  );
};

export interface Props {
  isEditable: boolean;
  currentProfileSkills: Skill[];
}

export default ProfileSkills;
