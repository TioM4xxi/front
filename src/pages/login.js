import React from "react"
import {Link} from "react-router-dom"
import { useState, useEffect } from "react";


export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [listOfUsers, setListOfUsers] = useState([])
    let auth = localStorage.getItem("auth")
    const URL = process.env.REACT_APP_API_URL + process.env.REACT_APP_PORT + '/login'


const handleSubmit = () => {

    fetch(URL, {

        method: 'POST',
        headers: {

            'Content-Type': 'application/json'

        },
        body: JSON.stringify({username, password})

    }).then((response) => response.json()).then((response) => {

        console.log('Auth: ' + response.auth)
        console.log('Token: ' + response.token)
        console.log('Username: ' + response.username)
        console.log("URL: " + URL)
        localStorage.setItem("token", response.token)
        localStorage.setItem("auth", response.auth)
        localStorage.setItem("sessionusername", response.username)
        localStorage.setItem("sessionname", response.name)
        

            if(response.auth) {

            }
          
          

    })


}



   

    

   
    return (

    
        <div className="logindiv">

            <h1>Login: </h1>
            
            <div className="inputlogindiv">

                
                <input className="inputlogin" type="text" placeholder="Username..." onChange={(e) => {

                    setUsername(e.target.value)

                }}></input>

                <input className="inputlogin" type="text" placeholder="Password..." onChange={(e) => {

                    setPassword(e.target.value)

                }}></input>

               
                
            </div>

                <br></br>
                <br></br>

            <div className="logindivbuttons">
            
                <button className="buttonregisterlogin" onClick={handleSubmit}>Login</button>
                <a href="/register"><button className="buttonregisterlogin">Register</button></a>
                
            </div>

                <br></br>
                    
        </div>



    )






}
