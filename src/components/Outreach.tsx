import { OpenInBrowserOutlined } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import DraftCard from "./DraftCard";

const Outreach: React.FC = () => {
  return (
    <Box>
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
      <DraftCard />
    </Box>
  );
};

export default Outreach;
