import React from 'react';
import { useState } from 'react';
import {AgGridReact} from 'ag-grid-react';

function Table2(){
const [rowData] = useState([
    {make: "Toyota", model: "Celica",id: "Mondeo", price: 35000},
    {make: "Ford", model: "Mondeo",id: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxster",id: "Mondeo", price: 72000},
]);
const columnDefs =[
    { field: 'make' },
    { field: 'model' },
    { field: 'id' },
    { field: 'price' }
]
return(
    <div>
    <div className="ag-theme-alpine" style={{height: 180, width: "100%"}}>
       <AgGridReact
           rowData={rowData}
           columnDefs={columnDefs}>
       </AgGridReact>
   </div>
    </div>
)
}
export default Table2;