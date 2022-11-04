import { useState, useEffect } from "react"


export default function Cadarvores() {


    const [especie, setEspecie] = useState('')
    const [idade, setIdade] = useState(0)
    const [desc, setDesc] = useState('')
    const usernamedono = localStorage.getItem("sessionusername")
    const nomedono = localStorage.getItem("sessionname")
    const auth = localStorage.getItem("auth")

    function cadastrar() {

        fetch('http://localhost:3001/cadarvores', {

            method: 'POST',
            headers: {

                'Content-Type': 'application/json'
                


            },

            body: JSON.stringify({especie, nomedono, idade, desc, usernamedono, nomedono})


        }).then((response) => response.json()).then((response) => {

            console.log(response)


        })




    }

    if(auth) {

    return (


            <div className="divcad">

                <h1>Cadastro de árvores: </h1>

                <h2>Espécie:   </h2>
                <input className="inputcad" type="text" placeholder="Espécie..." onChange={(e) => {

                    setEspecie(e.target.value)


                }}></input>

                <h2>Idade: </h2>
                <input className="inputcad" type="text" placeholder="Idade..." onChange={(e) => {

                    setIdade(e.target.value)

                }}></input>

                <h2>Descrição: </h2>
              
                <input className="inputcad" type="text" placeholder="Descrição..." onChange={(e) => {

                    setDesc(e.target.value)

                }}></input>

                <button onClick={() => cadastrar()}>Cadastrar</button>
               

            </div>





    )
            }

            else {

                return (

                    <div>

                        <h1 className="logmsg">Você precisa estar logado!</h1>


                    </div>



                )



            }


}