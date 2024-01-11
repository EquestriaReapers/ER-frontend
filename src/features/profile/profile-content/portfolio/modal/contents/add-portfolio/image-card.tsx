import { Box, Card, CardMedia, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const ImageCard = ({ image, deleteFile }: Props) => {
  const objectURL = URL.createObjectURL(image);
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
          image={objectURL}
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
  image: File;
  deleteFile: (file: File) => void;
}
export default ImageCard;
