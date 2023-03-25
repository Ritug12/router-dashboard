import "../App.css";
import { Box, Grid } from "@mui/material";
import Sidebar from "../Sidebar";
import Search from "../TopGrid/Search";
import BasicTabs from "../Tabs/Index";

function FirstPage({ allEntry, setIsLoggedIn }) {
 
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{
          marginTop: "1px",
          border: "1px solid transparent",
          background: "white",
        }}
      >
        
        <Grid item sx={2} >
          <span style={{ display: 'flex', justifyContent: 'flex-end' }}>Welcome {allEntry?.email}</span>
        </Grid>
        <Grid item sx={10}>
          <Search setIsLoggedIn={setIsLoggedIn}/>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={4}
        style={{ marginTop: "5px", background: "transparent" }}>
        <Grid item sx={2} style={{ background: "white", marginRight: "10px" }}>
          <Sidebar />
        </Grid>
        <Grid item sx={12} className="sidebarcss">
          <BasicTabs />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        style={{
          marginTop: "5px",
          background: "transparent",
          alignItems: "right",
          justifyContent: "right",
        }}
      >
        <Grid item sx>
         
        </Grid>
      </Grid>
    </>
  );
}

export default FirstPage;
