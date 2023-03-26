import React, {useState} from 'react';


const Search = ({setIsLoggedIn}) => {

 const [searchInput, setSearchInput] = useState("");
 const handlelogout = (e)=>{
   // alert("Working");
setIsLoggedIn(false);
 };
 
return <div>

<input
   type="search"
   placeholder="Search here" align="right" marginRight="50px" />
   <button onClick={handlelogout} style={{ marginRight: "auto" }}>Logout</button>
</div>

 
};

export default Search;