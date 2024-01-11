import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  SecondSectionStyles,
  useInsideSecondSectionStyles,
  SecondSectionFigureBoxStyles,
  useSecondSectionFigureStyles,
  SecondSectionFigureBackgroundStyles,
  useSecondSectionDownloadCVSectionStyles,
  useSecondSectionDownloadCVTypographyStyles,
  useSecondSectionDownloadCVTextStyles,
  useSecondSectionDownloadCVBoxStyles,
  DownloadIconStyles,
  DownlodCVTypography,
} from "./styles";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const SecondSection = () => {
  const InsideSecondSectionStyles = useInsideSecondSectionStyles();
  const SecondSectionFigureStyles = useSecondSectionFigureStyles();
  const SecondSectionDownloadCVSectionStyles =
    useSecondSectionDownloadCVSectionStyles();
  const SecondSectionDownloadCVTypographyStyles =
    useSecondSectionDownloadCVTypographyStyles();
  const SecondSectionDownloadCVTextStyles =
    useSecondSectionDownloadCVTextStyles();
  const SecondSectionDownloadCVBoxStyles =
    useSecondSectionDownloadCVBoxStyles();

  return (
    <Box sx={SecondSectionStyles}>
      <Box sx={InsideSecondSectionStyles}>
        <Box sx={SecondSectionFigureBoxStyles}>
          <Box sx={SecondSectionFigureStyles}>
            <Box
              component="img"
              sx={SecondSectionFigureBackgroundStyles}
              alt="catalog-in-pc"
              src="src\features\landing-page\second-section\images\pc2.png"
            />
          </Box>
        </Box>
        <Box sx={SecondSectionDownloadCVSectionStyles}>
          <Typography sx={SecondSectionDownloadCVTypographyStyles}>
            Lorem
          </Typography>
          <Typography sx={SecondSectionDownloadCVTextStyles}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam
          </Typography>
          <Box sx={SecondSectionDownloadCVBoxStyles}>
            <FileDownloadOutlinedIcon sx={DownloadIconStyles} />
            <Typography sx={DownlodCVTypography}>Descarga tus CV</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SecondSection;
