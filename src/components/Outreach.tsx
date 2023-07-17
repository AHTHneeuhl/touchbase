import { OpenInBrowserOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/store/hooks";
import DraftList from "./DraftList";
import User from "./User";
import { setOutreachDrafts } from "redux/slices/outreach";

const Outreach: React.FC = () => {
  const dispatch = useAppDispatch();
  const outreachDrafts = useAppSelector(
    (state) => state.outreach.outreachDrafts
  );

  const handleGenerateOutreach = () => {
    dispatch(setOutreachDrafts(true));
  };

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
          onClick={handleGenerateOutreach}
        >
          Generate Outreach Mail
        </Button>
      </Stack>
      {outreachDrafts ? (
        <DraftList />
      ) : (
        <Typography color="#5f5f5f" fontSize="14px" textAlign="center" py={4}>
          Please Generate Outreach Mail
        </Typography>
      )}
    </Box>
  );
};

export default Outreach;
