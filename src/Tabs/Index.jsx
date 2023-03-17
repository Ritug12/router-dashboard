import React from "react";
import { Paper, Tab, Tabs } from "@mui/material";
import Search from "../TopGrid/Search";
import {Box} from "@mui/material";
import {Typography} from "@mui/material";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Tab One"  />
          <Tab label="Tab Two"  />
          <Tab label="Tab Three"  />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Tab1 />
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Tab2 />
      </TabPanel>
      <TabPanel value={value} index={2}>
       <Tab3 />
      </TabPanel>
    </Box>
  );
}

export default BasicTabs;

