import { Box, Card, CardMedia, IconButton } from "@mui/material";
import { PreviousImage } from "./use-project-form-state";
import ClearIcon from "@mui/icons-material/Clear";

const ImageCard = ({ image, deleteFile }: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Card>
        <CardMedia
          sx={{
            maxWidth: "150px",
            width: "125px",
            maxHeight: "150px",
            height: "125px",
            borderRadius: "5px",
          }}
          image={image.previewUrl}
        />
      </Card>
      <IconButton
        onClick={() => {
          deleteFile(image);
        }}
        sx={{
          display: "flex",
          alignSelf: "flex-start",
        }}
      >
        <ClearIcon />
      </IconButton>
    </Box>
  );
};

interface Props {
  image: PreviousImage;
  deleteFile: (file: PreviousImage) => void;
}
export default ImageCard;
