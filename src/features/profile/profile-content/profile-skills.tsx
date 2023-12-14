import Typography from "@mui/material/Typography";
import { Skill } from "core/profiles/types";
import { boxStyles } from "./styles/styles";
import AddSkillsModal from "./skills/add-skills/modal";
import ShowSkills from "./skills/show-profile-skills/show-skills";

const ProfileSkills = ({ isEditable, currentProfileSkills }: Props) => {
  return (
    <div>
      <Typography sx={boxStyles} variant="h4">
        Habilidades
        {isEditable && (
          <AddSkillsModal currentProfileSkills={currentProfileSkills} />
        )}
      </Typography>
      <ShowSkills skills={currentProfileSkills} />
    </div>
  );
};

export interface Props {
  isEditable: boolean;
  currentProfileSkills: Skill[];
}

export default ProfileSkills;
