
import Typography from "@mui/material/Typography";

import { Experience } from "core/profiles/types";
import ShowExperiences from "features/profile/experiences/show-experiences/show-experiences";
import { boxStyles } from "../styles/styles";
import EditProfileModal from "features/profile/edit-profile/modal";


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
