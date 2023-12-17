import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Profile } from "core/profiles/types";

const ProfileCard = ({ profile }: Props) => {
  console.log(profile);
  return (
    <div style={{width:'500px', margin:'auto'}}>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <div style={{width:'max-content'}}>
          <Typography sx={{color:'#007934', fontWeight:'700'}}>
            {profile.user.name} {profile.user.lastname}
          </Typography>
        </div>
        <div style={{width:'max-content'}}>
          <Typography sx={{fontWeight:'700'}}>{profile.mainTitle}</Typography>
        </div>
      </div>
      <Typography>{profile.description}</Typography>
      <div>
        {profile.skills.map((skill, index) => (
          <Chip 
            sx={{
              backgroundColor:'#A6D6A8', 
              borderRadius: 0,
              borderColor:'#A6D6A8',
              marginRight: 2, 
              marginBottom: 2, 

            }} 
            key={index} 
            label={skill.name} 
            variant="outlined" 
            color="primary"
            />
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
interface Props {
  profile: Profile;
}
