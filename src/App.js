
import './App.css';
import { Box,Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Login from './RouterComponent/component/Login';
import Home from './RouterComponent/component/Home';
import Search from './TopGrid/Search';
import Tabss from './Tabs/Index';
import BasicTabs from './Tabs/Index';


function App() {
  return (
    <>
    <Grid container spacing={2} style={{marginTop:"1px", justifyContent:"center", alignItems:"center", border:"1px solid transparent", background:"white"}}>
      <Grid item sx>
        <Search />
          </Grid>
      </Grid>
      <Grid container spacing={2} style={{marginTop:"5px", background:"transparent"}}>
        <Grid sx={2} style={{ background:"white", marginRight:"10px"}} >
      <Sidebar />
     
        </Grid>
        <Grid sx={10} className="sidebarcss" > <BasicTabs /></Grid>
       
      </Grid>
      </>
    
  );
}

export default App;