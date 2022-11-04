import React from "react"
import { useState, useEffect } from "react"



function deleteUser(userid) {

    fetch('http://localhost:3001/deleteUser', {

        method: 'POST',
        headers: {

            'Content-Type': 'application/json',
          

        },
        body: JSON.stringify({userid})



    }).then((response) => response.json()).then((response) => {
        console.log(response)
    })



}



function Userlist() {
   

    const [listOfUsers, setListOfUsers] = useState([])
    const [carro, setCarro] = useState('')
    const [cont, setCont] = useState(0)
    

  
    
  
    
    

  
    
        useEffect(() => {

            fetch('http://localhost:3001/userlist', {

            method: 'GET',
            headers: {
                'x-acess-token': localStorage.getItem("token")
                
                
            }
            
    
            }).then((response) => response.json())
            .then((response) => {

                setListOfUsers(response)

            })



        }, [])
            
        
   

    
    return (
        
       <div className="divlistusers">

            <h1>Userlist: </h1>

            {listOfUsers.map((data) => {

                return (
                <div className="divlist">

                    <h2>ID: {data._id}</h2>
                    <h2>Username: {data.username}</h2>
                    <h2>Name: {data.name}</h2>
                    <h2>Age: {data.age}</h2>
                    <h2>Password: {data.password}</h2>
                    <h2>E-mail: {data.email}</h2>
                    <button onClick={() => deleteUser(data._id)}>Delete</button>
                    
                </div>

                )

            

            })}

        
       

       </div> 
       
           

    )


}

export default Userlist;