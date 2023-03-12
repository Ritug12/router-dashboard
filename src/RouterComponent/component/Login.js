import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
// import "./Login.css";
// import '../App.css'

const Login =()=>{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[allEntry,setAllEntry]=useState([]);
    const[userData,setUserData]=useState({});
    
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    const submitForm =(e)=>{
        e.preventDefault()
        const newEntry ={email:email, password:password};
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);   
        setUserData(newEntry)    
        // setIsLoggedIn(true);
        allEntry.length>0? setIsLoggedIn(true) : setIsLoggedIn(false)
        // navigate("/")
    }

    const logOutButton = () =>{
        navigate("/about");
    }
    return(
        isLoggedIn ?  
        <div><Contact allEntry={userData} setIsLoggedIn={setIsLoggedIn}/></div> :
        <div className="App-header">
        <div className="formStyle">
        <form action="" onSubmit={submitForm}>
           <div> <label className="htmlFor" htmlFor="email">Email</label>
            <input className="inputfield" type="email" name="email" id="email" autoComplete="off" value={email}
            onChange={(e)=>setEmail(e.target.value)}
            /></div>
            <div> <label className="htmlFor" htmlFor="password">Password</label>
            <input className="inputfield" name="password" id="password" type="password" autoComplete="off" value={password}
            onChange={(e)=>setPassword(e.target.value)}
            /></div>

            <div><button className="button" type="submit">Login</button>
            <button className="button" onClick={logOutButton}>SingUp</button></div>
        </form></div>
       
{/* 
            {allEntry.map((currData)=>{
                return (
                    <div className="tableStyle"><table>
                <tr>{currData.email}</tr>
                <tr>{currData.password}</tr>
            </table></div>
                )
            })
            }
         */}
        </div>
    )
}
export default Login;