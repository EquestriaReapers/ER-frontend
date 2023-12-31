import { Box, CircularProgress } from "@mui/material";

const loadingContainerStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(255, 255, 255, 0.5)",
  zIndex: 999,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const SpinnerAbsolute = ({ style = {} }: Props) => {
  return (
    <Box
      sx={{
        ...loadingContainerStyles,
        ...style,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

interface Props {
  style?: Record<string, number | string>;
}

export default SpinnerAbsolute;
