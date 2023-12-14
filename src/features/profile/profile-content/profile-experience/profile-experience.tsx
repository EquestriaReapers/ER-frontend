import ShowExperiences from "../../experiences/show-experiences/show-experiences";
import Typography from "@mui/material/Typography";
import EditProfileModal from "../../edit-profile/modal";
import { Experience } from "core/profiles/types";
import { boxStyles } from "../styles/styles";

const ProfileExperience = ({ isEditable, currentProfileExperience }: Props) => {
  return (
    <div>
      <Typography variant="h4" sx={boxStyles}>
        Experiencia{isEditable && <EditProfileModal />}
      </Typography>
      <ShowExperiences experience={currentProfileExperience} />
    </div>
  );
};

export interface Props {
  isEditable: boolean;
  currentProfileExperience: Experience[];
}

export default ProfileExperience;
