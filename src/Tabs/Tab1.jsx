import React, {useState} from "react";
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';


function Tab1({setValue}){

    const [rowData] = useState([
        {make: "Toyota", model: "Celica",id: "Mondeo", price: 35000},
        {make: "Ford", model: "Mondeo",id: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster",id: "Mondeo", price: 72000},
        {make: "Toyota", model: "Celica",id: "Mondeo", price: 35000},
        {make: "Ford", model: "Mondeo",id: "Mondeo", price: 32000},
        {make: "Toyota", model: "Celica",id: "Mondeo", price: 35000},
        {make: "Ford", model: "Mondeo",id: "Mondeo", price: 32000},
        {make: "Ford", model: "Mondeo",id: "Mondeo", price: 32000}
    ]);
    
    const columnDefs =[
        { field: 'make' },
        { field: 'model' },
        { field: 'id' },
        { field: 'price' }
    ]
    const onNavigateClick = ()=>{
        setValue(1)
    }

    return(
        <div>
        <div className="ag-theme-alpine" style={{height: 400, width: "100%"}}>
           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}>
           </AgGridReact>
       </div>
        <div style={{alignItems:"right", justifyContent:"right", display:"flex", margin:"10px"}}><button onClick={onNavigateClick}>Go to Tab2</button>
        </div></div>
    )
}

export default Tab1;