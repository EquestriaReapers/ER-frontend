import { Box, CircularProgress } from "@mui/material";

const loadingContainerStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

const SpinnerBlock = ({ style = {} }: Props) => {
  return (
    <Box sx={{ ...loadingContainerStyles, ...style }}>
      <CircularProgress />
    </Box>
  );
};

interface Props {
  style?: Record<string, number | string>;
}

export default SpinnerBlock;
