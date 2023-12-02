import Typography from "@mui/material/Typography";
import ShowSkills from "../skills/show-skills/show-skills";
import AddSkillsModal from "../skills/add-skills/modal";
import { Skill } from "core/profiles/types";

const ProfileSkills = ({
  isEditable,
  currentProfileSkills,
}: ProfileSkillProps) => {
  return (
    <div>
      <Typography variant="h4">Habilidades:</Typography>
      {isEditable && <AddSkillsModal />}
      <ShowSkills skills={currentProfileSkills} isEditable={isEditable} />
    </div>
  );
};

export interface ProfileSkillProps {
  isEditable: boolean;
  currentProfileSkills: Skill[];
}

export default ProfileSkills;
