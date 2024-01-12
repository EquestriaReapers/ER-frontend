import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import {
  FooterStyles,
  FooterLineStyles,
  InsideFooterStyles,
  useFooterFirstLineStyles,
  FooterTextStyles,
  FooterSecondLine,
  FooterIconStyles,
} from "./styles";

const Footer = () => {
  const FooterFirstLineStyles = useFooterFirstLineStyles();

  return (
    <Box sx={FooterStyles}>
      <Box sx={FooterLineStyles}></Box>
      <Box sx={InsideFooterStyles}>
        <Box sx={FooterFirstLineStyles}>
          <Link href="/home" sx={FooterTextStyles}>
            Home
          </Link>
          <Link href="/catalogue" sx={FooterTextStyles}>
            Catálogo
          </Link>
          <Link href="https://www.ucab.edu.ve/" sx={FooterTextStyles}>
            Página UCAB
          </Link>
          <Link href="https://egresados.ucab.edu.ve/" sx={FooterTextStyles}>
            Página egresados
          </Link>
        </Box>
        <Box sx={FooterSecondLine}>
          <Link href="https://www.instagram.com/enlaucab">
            <InstagramIcon sx={FooterIconStyles} />
          </Link>
          <Link href="https://www.facebook.com/enlaUCAB/">
            <FacebookRoundedIcon sx={FooterIconStyles} />
          </Link>
          <Link href="https://twitter.com/enlaucab">
            <TwitterIcon sx={FooterIconStyles} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
