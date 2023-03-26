import React from "react";
import { useEffect, useState } from "react"

function Table3(){
    const [users, setUsers] = useState([])

 

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/comments/?_limit=3")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
    }, [])
  
    return(
        <div>
             <table border={2} width={970}><tr>
        <th>ID</th>
        <th>Name</th>
        <th>EMAIL</th>
        <th>PostId</th>
        </tr>
        {users.length > 0 &&  users.map((user) => {
             return(
            <tr  className="tdr">
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.postId}</td>

            </tr>
            
            //<li key={user.id}>{user.id} {user.name}</li>
      )}
        
      )}
            </table>
        </div>
    )


}
export default Table3;