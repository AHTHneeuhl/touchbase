import styled from "@emotion/styled";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { TabPanel } from "./core";
import Outreach from "./Outreach";

const CustomTab = styled(Tab)(({ theme }) => ({
  borderRadius: 48,
  "&.MuiTab-root": {
    backgroundColor: "#eeeeee",
    color: "#000",
    padding: "8px 32px",
    letterSpacing: "2px",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#eeeeee",
    },
  },
  "&.Mui-selected": {
    backgroundColor: "#1565C0",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1565C0",
    },
  },
}));

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Switcher: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{ paddingY: 1 }}
        TabIndicatorProps={{
          sx: { display: "none" },
        }}
        centered
      >
        <CustomTab label="Outreach" {...a11yProps(0)} />
        <CustomTab label="Engage" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Outreach />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography color="#5f5f5f" fontSize="14px" textAlign="center" py={4}>
          Engage
        </Typography>
      </TabPanel>
    </Box>
  );
};

export default Switcher;
