import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { 
    FourthSectionStyles,
    useInsideFourthSectionStyles,
    InsideFourthSectionTextStyles,
    FourthSectionTextStyles,
} from "./styles";

const FourthSection = () => {

    const InsideFourthSectionStyles = useInsideFourthSectionStyles();

    return (
        <Box sx={FourthSectionStyles}>
            <Box sx={InsideFourthSectionStyles}>
                <Box sx={InsideFourthSectionTextStyles}>
                    <Typography sx={FourthSectionTextStyles}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                        mollitia, molestiae quas vel sint commodi repudiandae
                        consequuntur
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default FourthSection;