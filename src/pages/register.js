import axios from "axios"
import React from "react"
import { useState, useEffect } from "react"


function Register() {


    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [telefone, setTelefone] = useState('')
    const URL = process.env.REACT_APP_API_URL + process.env.REACT_APP_PORT + '/createUser'

    const createUser = () => {

       fetch(URL, {

            method: 'POST',
            headers: {

                'Content-Type': 'application/json'

            },
            body: JSON.stringify({username, name, password, age, telefone, email})
       }).then((response) => response.json()).then((response) => {

            console.log(response)

       })
       
       
       
      


    }


    return (


        <div className="logindiv">

            <h1>Register: </h1>
            
            
            <div className="inputlogindiv">

                <input className="inputlogin" type="text" placeholder="Username..." onChange={(e) => {

                     setUsername(e.target.value)

                }}></input>

                <input className="inputlogin" type="text" placeholder="Password..." onChange={(e) => {

                setPassword(e.target.value)

                }}></input>


                <input className="inputlogin" type="text" placeholder="Name..." onChange={(e) => {

                    setName(e.target.value)
                    
                }}></input>

                    

                <input className="inputlogin" type="number" placeholder="Age..." onChange={(e) => {

                    setAge(e.target.value)

                }}></input>

                <input className="inputlogin" type="text" placeholder="Telefone..." onChange={(e) => {

                    setTelefone(e.target.value)


                }}></input>

                <input className="inputlogin" type="text" placeholder="E-mail..." onChange={(e) => {

                    setEmail(e.target.value)

                }}></input>

            </div>

                

            <div className="logindivbuttons">

            <h1></h1>
                <a href="/"><button className="buttonregisterlogin" onClick={() => createUser()}>Register</button></a>

            </div>

                
                    
        </div>



    )




}

export default Register;