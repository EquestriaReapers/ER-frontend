import { Portfolio, Profile } from "core/profiles/types";
import ProjectCard from "./project-card";
import { Box } from "@mui/material";

const ShowPortfolios = ({ profile, portfolio }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        width: "100%",
        justifyContent: {
          xs: "flex-start",
          sm: "flex-start",
          md: "space-around",
          lg: "flex-start",
          xl: "flex-start",
        },
      }}
    >
      {portfolio.map((project) => (
        <ProjectCard key={project.id} profile={profile} project={project} />
      ))}
    </Box>
  );
};
interface Props {
  profile: Profile;
  portfolio: Portfolio[];
}

export default ShowPortfolios;
