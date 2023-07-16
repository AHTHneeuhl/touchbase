import { OpenInBrowserOutlined } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import User from "./User";
import DraftList from "./DraftList";

const Outreach: React.FC = () => {
  return (
    <Box>
      <User
        firstName="Jennifer"
        lastName="Smith"
        profession="Founder"
        company="TouchBase"
      />
      <Stack justifyContent="center" alignItems="center" py={1}>
        <Button
          variant="contained"
          sx={{ borderRadius: 16, textTransform: "none", padding: "8px 24px" }}
          startIcon={<OpenInBrowserOutlined />}
          disableElevation
        >
          Generate Outreach Mail
        </Button>
      </Stack>
      <DraftList />
    </Box>
  );
};

export default Outreach;
