import BeatLoader from "react-spinners/BeatLoader";
import { Box } from "@mui/material";
const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <BeatLoader color={"#007935"} loading={true} size={30} />
    </Box>
  );
};

export default Loader;
