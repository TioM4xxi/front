import React from "react"
import { useState, useEffect } from "react"



export default function Minhasmudas() {

const [listOfMudas, setListOfMudas] = useState([])
const username = localStorage.getItem("sessionusername")


useEffect(() => {

    fetch('http://localhost:3001/minhasmudasarvores', {

    method: 'GET',
    headers: {

        'x-acess-token': localStorage.getItem("token"),
        'headerusername': localStorage.getItem("sessionusername")

    }
    

}).then((response) => response.json()).then((response) => {

    console.log(response)
    setListOfMudas(response)
  


})




}, [])




return(

    <div className="listmudas">

        <h1>Sua lista de mudas: </h1>

        {listOfMudas.map((data) => {

            return(

                <div className="divlist">

                    <h2>Espécie: {data.especie}</h2>
                    <h2>Idade: {data.idade}</h2>
                    <h2>Descrição: {data.desc}</h2>
                    <h2></h2>



                </div>



            )




        })

        }

    </div>





)







}