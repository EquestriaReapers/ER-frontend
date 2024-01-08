import { Box, Typography } from "@mui/material";
import { FormTitleStyles } from "../../styles";
import LanguageIcon from "@mui/icons-material/Language";
import TextField from "@mui/material/TextField";
import useContactCardContext from "../../../contact-card-context/use-contact-card-context";

const WebsiteInput = ({ value, onChange }: Props) => {
  const { loading } = useContactCardContext();

  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "row", marginBottom: "10px" ,mt:2,}}>
        <LanguageIcon className={"iconStyle"} />
        <Typography sx={FormTitleStyles}>Website</Typography>
      </Box>

      <TextField
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={loading}
        className={"fieldsStyle"}
        sx={{ width: "100%" }}
        id="web-page"
        label=""
        variant="outlined"
      />
    </div>
  );
};

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default WebsiteInput;
