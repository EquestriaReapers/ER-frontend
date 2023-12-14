import Typography from "@mui/material/Typography";
import ShowSkills from "../../skills/show-skills/show-skills";
import AddSkillsModal from "../../skills/add-skills/modal";
import { Skill } from "core/profiles/types";
import { boxStyles } from "./styles/styles";

const ProfileSkills = ({ isEditable, currentProfileSkills }: Props) => {
  return (
    <div>
      <Typography sx={boxStyles} variant="h4">
        Habilidades
        {isEditable && <AddSkillsModal />}
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
