import React, { useState } from "react";
import FirstPage from ".";
import './Login.css';
// import '../App.css'

const UserLogin =()=>{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[allEntry,setAllEntry]=useState([]);
    const[userData,setUserData]=useState({});
    
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    const submitForm =(e)=>{
        e.preventDefault()
        const newEntry ={email:email, password:password};
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);  
        setUserData(newEntry)    
        // setIsLoggedIn(true);
        allEntry.length ? setIsLoggedIn(true) : setIsLoggedIn(false)
        // navigate("/")
    };

    const logOutButton = () =>{
        console.log("Signout")
    };
    

    return(
        isLoggedIn ?  
        <div><FirstPage allEntry={userData} setIsLoggedIn={setIsLoggedIn}/></div> :
        
            <div className="App-header">
            <div className="formStyle">
            <div className="form-box">
            <h1>Sign In</h1>
        <form action="" onSubmit={submitForm}>
           <div className="input-group">
           {/* <div> 
               <input className="inputfield" id="nameField" type= "text" placeholder="Name"/>
           </div> */}
           <div> 
                {/* <label className="htmlFor" htmlFor="email">Email</label> */}
                <input className="inputfield" type="email" name="email"  placeholder="Email" id="email" autoComplete="off" value={email} required
                 onChange={(e)=>setEmail(e.target.value)}/>
           </div>
           <div> 
                {/* <label className="htmlFor" htmlFor="password">Password</label> */}
                <input className="inputfield" name="password" id="password" type="password" placeholder="Password" autoComplete="off" value={password} required
                 onChange={(e)=>setPassword(e.target.value)}/>
           </div>
            <div class="btn-field">
            <button classname="button" type="submit"  class="disable" id="signinbtn" >Sign In</button>
                <button type="submit"  class="disable" id="signupbtn">Sign Up</button>
            {/* <button className="button" onClick={logOutButton}>SingUp</button> */}
            </div>
            <p class="forget-password"><a href="#"><u>Forgotten Password?</u></a></p>

            </div>
        </form>
        </div>
    </div>
 
  
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

    );
};
export default UserLogin;