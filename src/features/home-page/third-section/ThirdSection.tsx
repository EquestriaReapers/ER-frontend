import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { 
    useThirdSectionStyles,
    useInsideThirdSectionStyles,
    InsideThirdSectionTextStyles,
    InsideThirdSectionBoxTextStyles,
    useInsideThirdSectionTypographytStyles,
    PortfoliosColor,
    usePortfoliosSectionStyles,
    ThirdSectionButtonStyles,
} from "./ThirdSectionStyles";
import PortfolioBox from "./portfolio-box/PortfolioBox";

const ThirdSection = () => {

    const ThirdSectionStyles = useThirdSectionStyles();
    const InsideThirdSectionStyles = useInsideThirdSectionStyles();
    const InsideThirdSectionTypographytStyles = useInsideThirdSectionTypographytStyles();
    const PortfoliosSectionStyles = usePortfoliosSectionStyles();

    return (
        <Box sx={ThirdSectionStyles}>
            <Box sx={InsideThirdSectionStyles}>
            <Box sx={InsideThirdSectionTextStyles}>
                <Box>
                <Box sx={InsideThirdSectionBoxTextStyles}>
                    <Typography sx={InsideThirdSectionTypographytStyles}>
                    Explora nuestros <span style={PortfoliosColor}>portafolios</span>
                    </Typography>
                </Box>
                </Box>
            </Box>
            <Box sx={PortfoliosSectionStyles}>
                <PortfolioBox/>

                <PortfolioBox/>
                <PortfolioBox/>
                <PortfolioBox/>

            </Box>
            <Button 
            variant="contained"
            color="primary"
            sx={ThirdSectionButtonStyles}>Ver mas egresados</Button>
            </Box>
        </Box>
    );
}

export default ThirdSection;