import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { 
    useCardStyles,
    InsideCardStyles,
    CardFirstSection,
    CardFirstLine,
    useCardNameStyles,
    useCardOcupationStyles,
    CardSecondLine,
    useCardLocationLineStyles,
    useCardLocationIconStyles,
    CardSecondSection,
    useCardLocationChipStyles,
    CardSecondSectionSecondLine,
} from "./styles";


const Card = () => {

    const CardStyles = useCardStyles();
    const CardNameStyles = useCardNameStyles();
    const CardOcupationStyles = useCardOcupationStyles();
    const CardLocationLineStyles = useCardLocationLineStyles();
    const CardLocationIconStyles = useCardLocationIconStyles();
    const CardLocationChipStyles = useCardLocationChipStyles();

    return (
        <Box sx={CardStyles}>
            <Box sx={InsideCardStyles}>
            <Box sx={CardFirstSection}>
                <Box sx={CardFirstLine}>
                    <Typography sx={CardNameStyles}>Meredith Smith</Typography>
                    <Typography sx={CardOcupationStyles}>Ingeniero informático</Typography>
                </Box>

                <Box sx={CardSecondLine}>
                    <Typography sx={CardLocationLineStyles}>Venezuela, Bolívar</Typography>
                    <LocationOnIcon sx={CardLocationIconStyles}/>
                </Box>
            </Box>
            <Box sx={CardSecondSection}>
                <Box>
                    <Chip label="Habilidad" sx={CardLocationChipStyles} />
                    <Chip label="Habilidad" sx={CardLocationChipStyles} />
                    <Chip label="Habilidad" sx={CardLocationChipStyles} />
                </Box>
                <Box sx={CardSecondSectionSecondLine }>
                    <Chip label="Habilidad" sx={CardLocationChipStyles} />
                    <Chip label="Habilidad" sx={CardLocationChipStyles} />
                </Box>
            </Box>

            </Box>
        </Box>
    );
}

export default Card;