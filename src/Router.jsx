import { Navigate, Route, Routes } from "react-router-dom"
import { Client } from "./Pages/Clients"
import { Home } from "./Pages/Home";
import { ManageContact} from "./Pages/ManageContact";
import { AddClient } from "./Pages/AddClient"
import { Login } from "./Pages/Login";

const PrivateRoute = ({token}, children)=>{
    return token?children:<Navigate to= "/login"/>
}

export const Router = () =>{
    const token = localStorage.getItem('anmol_t');
    return (
        <Routes>
        <Route path="/" element={<PrivateRoute token={token}><Home /></PrivateRoute>}/>
        <Route path="/manage-contact" element={<ManageContact/>} />
        <Route path="/add-client/:id" element={<AddClient/>}/>
        <Route path="/clients" element={<Client/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes>
    )
}