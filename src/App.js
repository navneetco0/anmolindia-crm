import {Center } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Background } from "./components/Background";
import { AddClient } from "./Pages/AddClient";
import { Home } from "./Pages/Home";
import { ManageContact } from "./Pages/ManageContact";
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { setAllContacts } from "./Redux/action";
const socket = io.connect('http://localhost:3001');

function App() {
  const dispatch=useDispatch();
  useEffect(() => {
    socket.on('all_contacts', (data) => {
      dispatch(setAllContacts(data))
    })
  }, [socket])
  
  return (
    <Center position={"relative"} w={"100%"} h="100vh" >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/manage-contact" element={<ManageContact/>} />
        <Route path="/add-client/:id" element={<AddClient/>}/>
      </Routes>
      <Background />
    </Center>
  );
}

export default App;