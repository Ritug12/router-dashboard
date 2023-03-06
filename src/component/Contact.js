import React from "react";
import { TableContainer,TableHead,TableBody,TableCell,TableRow, Paper,Table } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './Login.css'
import '../App.css'
// function Contact(){
const Contact =({allEntry, setIsLoggedIn})=>{
    const navigate = useNavigate();

    const logOutButton = () =>{
        setIsLoggedIn(false)
    }

// const getData = allEntry ? allEntry.map((currData)=>{
//     return (
//         <div className="tableStyle">
//             <TableRow>
//     <TableCell>{currData.email}</TableCell>
//     <TableCell>{currData.password}</TableCell>
//     </TableRow></div>
//     )
// })
//  :"";
    return(
        allEntry ? <div>
            <div className="Contact-header">
            <span className="logoutStyle">Welcome {allEntry?.email} </span>
                {/* {getData} */}
                <button onClick={logOutButton} className="logoutbutton">Logout</button>
                </div>
                </div>:<div>
            {/* <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>Password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {allEntry ? allEntry.map((currData)=>{
    return (
        
            <TableRow className="tableStyle">
    <TableCell>{currData.email}</TableCell>
    <TableCell>{currData.password}</TableCell>
    </TableRow>
    )
})
 :""}
        </TableBody>
      </Table>
    </TableContainer> */}
        {/* {allEntry.map((currData)=>{
                return (
                    <div className="tableStyle"><table>
                <tr>{currData.email}</tr>
                <tr>{currData.password}</tr>
            </table></div>
                )
            })
            } */}
     
        </div>
    )
}
export default Contact;