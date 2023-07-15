import { SettingsOutlined } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";

const Topbar: React.FC = () => {
  return (
    <Stack
      paddingY={2}
      paddingX={2}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        boxShadow: "0 0 1px 1px rgba(0, 0, 0, 0.07)",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
      }}
    >
      <Typography color="primary" fontWeight="medium" fontSize="24px">
        TouchBase
      </Typography>
      <Button sx={{ textTransform: "none" }} endIcon={<SettingsOutlined />}>
        Free Credits
      </Button>
    </Stack>
  );
};

export default Topbar;
