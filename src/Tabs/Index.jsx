import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
  
const Tabss = () => {
  const [value, setValue] = React.useState(2);
  
  return (
    <div
      style={{
        marginLeft: "10%",
      }}
    >
      <h2></h2>
      <Paper square>
        <Tabs
          value={value}
          textColor="primary"
          indicatorColor="primary"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Tab label=" TAB One" />
          <Tab label=" TAB Two" />
          <Tab label=" Tab Three" />
        </Tabs>
        <h3>TAB NO: {value} clicked!</h3>
      </Paper>
    </div>
  );
};
  
export default Tabss;