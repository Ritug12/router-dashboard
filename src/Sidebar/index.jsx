import React, {useState} from 'react';
import { ProSidebar} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {  Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import PeopleOutlined from "@mui/icons-material/PeopleOutlined";
import ContactsOutlined from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlined from "@mui/icons-material/ReceiptOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlined from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlined from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlined from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlined from "@mui/icons-material/TimelineOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import MapOutlined from "@mui/icons-material/MapOutlined";

function Sidebar() {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const handleMenuClick = (page) => {
    // Open the new page within the sidebar
    // You can load the content of the new page dynamically here
    console.log(`Loading page: ${page}`);
  };

const Item = ({title,to}) => {
  
  return (
    <MenuItem>
      <Typography>{title}</Typography>
      
    </MenuItem>
  );
};
  return (
    <Box
    sx={{
      "& .pro-sidebar-inner": {
        background: "white !important",
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important",
      },
      "& .pro-inner-item:hover": {
        color: "#868dfb !important",
      },
      "& .pro-menu-item.active": {
        color: "#6870fa !important",
      },
      "& .pro-sidebar  .pro-sidebar-inner  .pro-sidebar-layout ul": {
        listStyleType: "none",
        padding: "0",
        margin: "0",
        backgroundColor: "white !important",
    }
    }}
  >
    <ProSidebar collapsed={menuCollapse}>
      <Menu iconShape="square">
        <MenuItem onClick={() => handleMenuClick("Page 1")}>
          Page 1
        </MenuItem>
          <MenuItem onClick={() => handleMenuClick("Page 2")}>
            Page 2
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("Page 2")}>
            Page 3
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("Page 3")}>
            Page 4
          </MenuItem>
       
      </Menu>
    </ProSidebar>
  </Box>
);
};
export default Sidebar;