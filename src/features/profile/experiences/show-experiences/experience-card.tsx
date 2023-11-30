import { Experience } from "core/profiles/types";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import {
  boxStyles,
  divStyles,
  projectNameStyles,
  projectDescriptionStyles,
  projectURLStyles,
  projectChargeStyles,
} from "../styles/styles";

const ExperienceCard = ({ item }: { item: Experience }) => {
  return (
    <Box sx={divStyles}>
      <Box sx={boxStyles}>
        <Typography sx={projectNameStyles} variant="h5">
          nombreProyecto
        </Typography>
        <Typography sx={projectChargeStyles} variant="h6">
          Frontend
        </Typography>
        <Typography sx={projectURLStyles} variant="h6">
          urlProyecto
        </Typography>
        <Typography sx={projectDescriptionStyles} variant="h6">
          Descripcion
        </Typography>
      </Box>
      <Box sx={boxStyles}>
        <Typography sx={projectNameStyles} variant="h5">
          Proyecto ABC
        </Typography>
        <Typography sx={projectChargeStyles} variant="h6">
          cargo
        </Typography>
        <Typography sx={projectURLStyles} variant="h6">
          https://www.ejemplo.com/proyecto-abc
        </Typography>
        <Typography sx={projectDescriptionStyles} variant="h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
          tincidunt velit. Nullam at commodo turpis.
        </Typography>
      </Box>
      <Box sx={boxStyles}>
        <Typography sx={projectNameStyles} variant="h5">
          Project X
        </Typography>
        <Typography sx={projectChargeStyles} variant="h6">
          Software Engineer
        </Typography>
        <Typography sx={projectURLStyles} variant="h6">
          https://www.example.com/project-x
        </Typography>
        <Typography sx={projectDescriptionStyles} variant="h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et
          aliquam sapien, vitae aliquet massa. Duis placerat nibh ut facilisis
          eleifend. Sed vulputate lectus convallis massa commodo suscipit. Nunc
          a justo nec turpis ullamcorper euismod at id nibh.
        </Typography>
      </Box>
    </Box>
  );
};

export default ExperienceCard;
