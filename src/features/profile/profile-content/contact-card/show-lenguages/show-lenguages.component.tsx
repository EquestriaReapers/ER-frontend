import { Language } from "core/profiles/types";
import { Box, Typography } from "@mui/material";
import { boxStyles, lenguageTagStyles } from "./styles";

const showLenguages = ({ lenguages }: Props) => {
  return (
    <Box sx={boxStyles}>
      {lenguages.map((item) => (
        <Box sx={lenguageTagStyles}>
          <Typography>{item.name}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export interface Props {
  lenguages: Language[];
}

export default showLenguages;
