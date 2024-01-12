import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { 
    ThirdSectionStyles,
    useInsideThirdSectionStyles,
    InsideThirdSectionTextStyles,
    InsideThirdSectionBoxTextStyles,
    InsideThirdSectionTypographytStyles,
    ThirdSectionTextStyles,
    ThirdSectionTypographyStyles,
    useThirdSectionFiguresSectionStyles,
    useThirdSectionFirstFiguresSectionStyles,
    useThirdSectionFirstFigureStyles,
    ThirdSectionInsideFirstFigureStyles,
    useThirdSectionFirstFigureTypographyStyles,
    ThirdSectionFirstFigureTextStyles,
    useThirdSectionSecondFiguresSectionStyles,
    useThirdSectionSecondFigureStyles,
    ThirdSectionInsideSecondFigureStyles,
    useThirdSectionSecondFigureTypographyStyles,
    ThirdSectionSecondFigureTextStyles,
} from "./styles";

const ThirdSection = () => {

    const InsideThirdSectionStyles = useInsideThirdSectionStyles();
    const ThirdSectionFiguresSectionStyles = useThirdSectionFiguresSectionStyles();
    const ThirdSectionFirstFiguresSectionStyles = useThirdSectionFirstFiguresSectionStyles();
    const ThirdSectionFirstFigureStyles = useThirdSectionFirstFigureStyles();
    const ThirdSectionFirstFigureTypographyStyles = useThirdSectionFirstFigureTypographyStyles();
    const ThirdSectionSecondFiguresSectionStyles = useThirdSectionSecondFiguresSectionStyles();
    const ThirdSectionSecondFigureStyles = useThirdSectionSecondFigureStyles();
    const ThirdSectionSecondFigureTypographyStyles = useThirdSectionSecondFigureTypographyStyles();

    return(
        <Box sx={ThirdSectionStyles}>
            <Box sx={InsideThirdSectionStyles}>
                <Box sx={InsideThirdSectionTextStyles}>
                    <Box>
                        <Box sx={InsideThirdSectionBoxTextStyles}>
                            <Typography sx={InsideThirdSectionTypographytStyles}>
                                Lorem
                            </Typography>
                        </Box>
                        <Box sx={ThirdSectionTextStyles}>
                            <Typography sx={ThirdSectionTypographyStyles}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Maxime mollitia, molestiae quas vel sint commodi
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={ThirdSectionFiguresSectionStyles}>
                    <Box sx={ThirdSectionFirstFiguresSectionStyles}>
                        <Box sx={ThirdSectionFirstFigureStyles}>
                            <Box sx={ThirdSectionInsideFirstFigureStyles}></Box>
                        </Box>
                        <Typography sx={ThirdSectionFirstFigureTypographyStyles}>
                            Lorem
                        </Typography>
                        <Typography sx={ThirdSectionFirstFigureTextStyles}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Maxime mollitia, molestiae quas vel sint commodi
                        </Typography>
                    </Box>
                    <Box sx={ThirdSectionSecondFiguresSectionStyles}>
                        <Box sx={ThirdSectionSecondFigureStyles}>
                            <Box sx={ThirdSectionInsideSecondFigureStyles}></Box>
                        </Box>

                        <Typography sx={ThirdSectionSecondFigureTypographyStyles}>
                            Lorem
                        </Typography>
                        <Typography sx={ThirdSectionSecondFigureTextStyles}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Maxime mollitia, molestiae quas vel sint commodi
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );

}

export default ThirdSection;