import React from "react";
import { useNavigate } from "react-router-dom";


const About =()=>{
    const navigate = useNavigate();

    const gotoLoginPage = () =>{
        navigate("/login");
    }

    const goBack = ()=>{
        navigate(-1)
    }

    return(
        <div>
          
        <section>
            About Page here
        </section>
        <button onClick={gotoLoginPage}>Go to LoginPage</button>
        <button onClick={goBack}>Previous Page</button>
        </div>
    )
}
export default About;