import "../App.css";
import { Box, Grid } from "@mui/material";
import Sidebar from "../Sidebar";
import Search from "../TopGrid/Search";
import BasicTabs from "../Tabs/Index";

function FirstPage({ allEntry, setIsLoggedIn }) {
  const onLogoutClick = (e) => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <Grid
        container
        spacing={1}
        style={{
          marginTop: "1px", width:"100%",
          border: "1px solid transparent",
          background: "white", marginLeft:"1px"
        }}
      >
        
        <Grid item sx={8} style={{marginRight:"10px"}}>
          <span>Welcome {allEntry?.email}</span>
        </Grid>
        <Grid item sx={2}>
          <Search />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        style={{ marginTop: "5px", background: "transparent" }}>
        <Grid item sx={2} style={{ background: "white", marginRight: "9px", marginLeft:"9px" }}>
          <Sidebar />
        </Grid>
        <Grid item sx={10} className="sidebarcss">
          <BasicTabs />
        </Grid>
      </Grid>
      
    </>
  );
}

export default FirstPage;
