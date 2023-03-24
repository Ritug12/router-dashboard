import React, {useState} from 'react';


const Search = () => {

 const [searchInput, setSearchInput] = useState("");
 const handlelogout = (e)=>{
   alert("Working");
//  setIsLoggedIn(false);
 };
 
return <div>

<input
   type="search"
   placeholder="Search here" />
   <button onClick={handlelogout}>Logout</button>
</div>

 
};

export default Search;