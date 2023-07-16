import styled from "@emotion/styled";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

const CustomTab = styled(Tab)(({ theme }) => ({
  borderRadius: 48,
  "&.MuiTab-root": {
    backgroundColor: "#eeeeee",
    color: "#000",
    padding: "12px 32px",
    letterSpacing: "2px",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#cccccc",
    },
  },
  "&.Mui-selected": {
    backgroundColor: "#0000ff",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#0101db",
    },
  },
}));

const Switcher: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      sx={{ paddingY: 2 }}
      TabIndicatorProps={{
        sx: { display: "none" },
      }}
      centered
    >
      <CustomTab label="Outreach" />
      <CustomTab label="Engage" />
    </Tabs>
  );
};

export default Switcher;
