import react from "react"

export default function header() {


    let auth = localStorage.getItem("auth")
    
    const logout = () => {

        localStorage.removeItem("token")
        localStorage.removeItem("auth")
        localStorage.removeItem("sessionusername")
        localStorage.removeItem("sessionname")


    }

return (
    

    
      
    <header className="header">

            <h1 className="titleheader">Tree.io</h1>

           
         
               

            
             
            <div className="buttonsheader">
                        
                        
                            
                            
                            <a href="/"> <button className="buttonheader">Login</button></a>
                                     


                            


                            <div className="dropdown">

                                <button className="buttonheader">Minhas mudas</button>

                                <div className='dropdowncontent'>

        
                                     <a href="/minhasmudasarvores"><button>Árvores</button></a>
                                     <button>Plantas</button>

                                </div>

                            </div>
                        
                        

                        <div className="dropdown">

                            <button className="buttonheader">Mudas</button>

                            <div className='dropdowncontent'>

                                    
                                    <a href="/arvoreslist"><button>Árvores</button></a>
                                    <button>Plantas</button>

                                </div>

                        </div>

                       

                        <div className="dropdown">

                            <button className="buttonheader">Cadastro</button>

                            <div className='dropdowncontent'>

                                    
                                    <a href="/cadarvores"><button>Árvores</button></a>
                                    <a href="/cadplantas"><button>Plantas</button></a>

                                </div>

                        </div>


                        <a href="/userlist"><button className="buttonheader">Users</button></a>

                        <a href="/"><button className="buttonheader" onClick={() => logout()}>Logout</button></a>
                      
                        
            </div>

                  
                 
                  
                  

                

                  </header>


)









}