import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Userlist from "./pages/userlist"
import Login from "./pages/login"
import Register from "./pages/register"
import Header from "./components/header"
import CadArvores from "./pages/cadarvores"
import MinhasMudasArvores from "./pages/minhasmudasarvores"

function App() {
 
  const auth = localStorage.getItem("auth")
  let header = auth ? <Header/>: null

  return(

    <div> 
            
                    {header}

                  <Router>

                        <Routes>

                            <Route path="/userlist" element={<Userlist />}/>
                            <Route path="/" element={<Login />}/>
                            <Route path="/register" element={<Register />}/>
                            <Route path="/cadarvores" element={<CadArvores />}/>
                            <Route path="/minhasmudasarvores" element={<MinhasMudasArvores/>}/>

                        </Routes>

  
            </Router>

            </div>   

  )


   
}


export default App;
