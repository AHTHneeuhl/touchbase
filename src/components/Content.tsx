import { Box } from "@mui/material";
import Switcher from "./Switcher";

const Content: React.FC = () => {
  return (
    <Box height="100%" sx={{ boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.07)" }}>
      <Switcher />
    </Box>
  );
};

export default Content;
