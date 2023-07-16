import { OpenInBrowserOutlined } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import DraftCard from "./DraftCard";
import User from "./User";

const Outreach: React.FC = () => {
  return (
    <Box>
      <User
        firstName="Jennifer"
        lastName="Smith"
        profession="Founder"
        company="TouchBase"
      />
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
