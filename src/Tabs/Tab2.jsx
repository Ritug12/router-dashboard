import React from "react";
import Table1 from "./Tables/Table1";
import Table2 from "./Tables/Table1";
import Table3 from "./Tables/Table3";
import Table4 from "./Tables/Table4";

function Tab2(){

    const handleP = (e)=>{
        e.target.style.background = 'Green';
        }
        const handlePOut = (e)=>{
            e.target.style.background = '';
            }

    return(
        <div>
          <p onMouseOver={handleP} onMouseOut={handlePOut}>TABLE 1</p>  <Table1 />
        <hr />
        <p onMouseOver={handleP} onMouseOut={handlePOut}>TABLE 2</p>
        <Table2 />
        <hr />
        <p onMouseOver={handleP} onMouseOut={handlePOut}>TABLE 3</p>
        <Table3 />
        <hr />
        <p onMouseOver={handleP} onMouseOut={handlePOut}>TABLE 4</p>
        <Table4 />
        </div>
    )
}

export default Tab2;