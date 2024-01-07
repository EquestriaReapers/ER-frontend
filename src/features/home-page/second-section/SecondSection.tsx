import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { 

    useSecondSectionStyles,
    useInsideSecondSectionStyles,
    useSecondSectionExploreSectionStyles,
    useSecondSectionExploreTypographyStyles,
    EgresatesColor,
    useCardSectionStyles,
    SecondSectionButtonStyles,
} from "./SeconSectionStyles";
import Card from "./card/Card";

const SecondSection = () => {

    const SecondSectionStyles = useSecondSectionStyles();
    const InsideSecondSectionStyles = useInsideSecondSectionStyles();
    const SecondSectionExploreSectionStyles = useSecondSectionExploreSectionStyles();
    const SecondSectionExploreTypographyStyles = useSecondSectionExploreTypographyStyles();
    const CardSectionStyles = useCardSectionStyles();


    return(
        <Box sx={SecondSectionStyles}>
            <Box sx={InsideSecondSectionStyles}>
                <Box sx={SecondSectionExploreSectionStyles}>
                    <Typography sx={SecondSectionExploreTypographyStyles}>
                        Explora nuestros <span style={EgresatesColor}>egresados</span>
                    </Typography>
                    <Box sx={CardSectionStyles}>
                        <Card/>
                        <Card/>
                        <Card/>
                    </Box>
                    <Box sx={CardSectionStyles}>
                        <Card/>
                        <Card/>
                        <Card/>
                    </Box>
                    <Button  
                        variant="contained"
                        color="primary"
                        sx={SecondSectionButtonStyles}
                    >
                        Ver mas egresados
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default SecondSection;

