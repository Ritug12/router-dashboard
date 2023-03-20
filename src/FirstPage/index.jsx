
import '../App.css';
import { Box,Grid } from '@mui/material';
import Sidebar from '../Sidebar';
import Search from '../TopGrid/Search';
import BasicTabs from '../Tabs/Index';


function FirstPage({allEntry, setIsLoggedIn}) {

    const onLogoutClick=()=>{
        setIsLoggedIn(false)
    }
  return (
    <>
     
    <Grid container spacing={2} style={{marginTop:"1px",  border:"1px solid transparent", background:"white"}}>
      <Grid item sx={10}>
        <Search />
          </Grid>
          <Grid item sx={2}>
          <span>Welcome {allEntry?.email} </span>
          </Grid>
      </Grid>
      <Grid container spacing={2} style={{marginTop:"5px", background:"transparent"}}>
        <Grid sx={2} style={{ background:"white", marginRight:"10px"}} >
      <Sidebar />
     
        </Grid>
        <Grid sx={10} className="sidebarcss" > <BasicTabs /></Grid>
       
      </Grid>
      <Grid container spacing={2} style={{marginTop:"5px", background:"transparent", alignItems:"right", justifyContent:"right"}}>
        <Grid item sx>
                <button  onClick={onLogoutClick} className="logoutbutton">Logout</button></Grid>       
      </Grid>
      </>
    
  );
}

export default FirstPage;