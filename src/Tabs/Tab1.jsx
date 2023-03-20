import React from "react";
import Tab2 from "./Tab2";

function Tab1({setValue}){

   

    const onNavigateClick = ()=>{
        setValue(1)
    }

    return(
        <div>I'm Tab one

        <div><button onClick={onNavigateClick}>Go to Tab2</button>
        </div></div>
    )
}

export default Tab1;