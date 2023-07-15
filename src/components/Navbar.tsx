import { AddCircleOutlineRounded } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <Stack
      paddingY={2}
      paddingX={2}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        boxShadow: "0 0 1px 1px rgba(0, 0, 0, 0.07)",
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
      }}
    >
      <Typography color="primary" fontWeight="medium" fontSize="14px">
        You've 24 more credits left
      </Typography>
      <Button
        variant="contained"
        sx={{ textTransform: "none", borderRadius: 16 }}
        startIcon={<AddCircleOutlineRounded />}
        disableElevation
      >
        Add Credits
      </Button>
    </Stack>
  );
};

export default Navbar;
