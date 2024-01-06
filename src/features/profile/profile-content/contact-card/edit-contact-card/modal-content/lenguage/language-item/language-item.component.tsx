import { Typography, Box, IconButton } from "@mui/material";
import { skillTitleStyles } from "./styles";
import ClearIcon from "@mui/icons-material/Clear";
import { LocalLanguague } from "../../../contact-card-context/contact-card-context";
import useContactCardContext from "../../../contact-card-context/use-contact-card-context";

const LanguageItem = ({ onDelete, item }: Props) => {
  const { lenguagueOptions } = useContactCardContext();
  const _currentLenguague = lenguagueOptions.find(
    (option) => +option.value === item.languagueId
  );
  const currentLenguagueLabel = _currentLenguague?.label || "No encontrado";

  return (
    <Box>
      <Typography sx={skillTitleStyles} variant="h6">
        {currentLenguagueLabel}
        {_currentLenguague && (
          <IconButton>
            <ClearIcon
              sx={{ color: "#545454" }}
              onClick={() => {
                onDelete(item);
              }}
            />
          </IconButton>
        )}
      </Typography>
    </Box>
  );
};

interface Props {
  item: LocalLanguague;
  onDelete: (lenguague: LocalLanguague) => void;
}

export default LanguageItem;
