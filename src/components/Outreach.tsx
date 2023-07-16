import { OpenInBrowserOutlined } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";

const Outreach: React.FC = () => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Button
        variant="contained"
        sx={{ borderRadius: 16, textTransform: "none", padding: "8px 24px" }}
        startIcon={<OpenInBrowserOutlined />}
        disableElevation
      >
        Generate Outreach Mail
      </Button>
    </Stack>
  );
};

export default Outreach;
