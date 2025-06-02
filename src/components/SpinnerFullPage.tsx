import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function SpinnerFullPage() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}

export default SpinnerFullPage;
