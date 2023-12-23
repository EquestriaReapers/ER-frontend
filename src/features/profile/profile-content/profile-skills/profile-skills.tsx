import Typography from "@mui/material/Typography";
import ShowSkills from "../../skills/show-skills/show-skills";
import AddSkillsModal from "../../skills/add-skills/modal";
import { Skill } from "core/profiles/types";

const ProfileSkills = ({
  isEditable,
  currentProfileSkills,
}: Props) => {
  return (
    <>
      <Typography variant="h4">Habilidades:</Typography>
      {isEditable && <AddSkillsModal />}
      <ShowSkills skills={currentProfileSkills} isEditable={isEditable}/>
    </>
  );
};

export interface Props {
  isEditable: boolean;
  currentProfileSkills: Skill[];
}

export default ProfileSkills;
